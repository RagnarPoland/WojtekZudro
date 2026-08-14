(() => {
  const PAGE = "kontakt";
  const API_URL = "/czat/kontakt-api.php";
  const AUTH_API_URL = "/adm_log/login-api.php";

  const root = document.getElementById("czat-root");
  if (!root) return;

  let isAdmin = false;

  function formatDate(value) {
    const date = new Date(value.replace(" ", "T"));
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleString("pl-PL");
  }

  async function apiRequest(payload, method = "POST") {
    const options =
      method === "GET"
        ? { method: "GET" }
        : {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          };

    const url = method === "GET" ? `${API_URL}?page=${encodeURIComponent(PAGE)}` : API_URL;
    let response;
    try {
      response = await fetch(url, options);
    } catch (error) {
      throw new Error("Brak polaczenia z API (/czat/kontakt-api.php).");
    }

    let data;
    try {
      data = await response.json();
    } catch (error) {
      throw new Error(`API zwrocilo niepoprawny JSON (HTTP ${response.status}).`);
    }

    if (!response.ok || !data.ok) {
      throw new Error(data.error || "Wystąpił błąd.");
    }
    return data;
  }

  async function authRequest() {
    const response = await fetch(AUTH_API_URL, { method: "GET" });
    const data = await response.json();
    if (!response.ok || !data.ok) {
      throw new Error(data.error || "Nie udało się sprawdzić sesji admina.");
    }
    return data;
  }

  function buildComposer() {
    const box = document.createElement("section");
    box.className = "czat-composer";

    const title = document.createElement("h3");
    title.className = "czat-box-title";
    title.textContent = "Dołącz do dyskusji";

    const form = document.createElement("form");
    form.className = "czat-form";
    form.autocomplete = "off";

    const textarea = document.createElement("textarea");
    textarea.name = "content";
    textarea.placeholder = "Napisz komentarz jako GOŚĆ...";
    textarea.required = true;
    textarea.maxLength = 2000;

    const honeypot = document.createElement("input");
    honeypot.type = "text";
    honeypot.name = "website";
    honeypot.className = "czat-honeypot";
    honeypot.tabIndex = -1;
    honeypot.autocomplete = "off";

    const actions = document.createElement("div");
    actions.className = "czat-actions";

    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Opublikuj komentarz";

    const info = document.createElement("p");
    info.className = "czat-muted";
    info.textContent = "Autor komentarza: GOŚĆ";

    actions.append(button, info);
    form.append(textarea, honeypot, actions);
    box.append(title, form);

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const content = textarea.value.trim();
      if (content.length < 2) return;

      button.disabled = true;
      try {
        await apiRequest({
          action: "add_comment",
          page: PAGE,
          content,
          website: honeypot.value,
        });
        textarea.value = "";
        await render();
      } catch (err) {
        alert(err.message);
      } finally {
        button.disabled = false;
      }
    });

    return box;
  }

  function buildReplyBox(parentId, adminMode) {
    const box = document.createElement("form");
    box.className = "czat-reply-form";

    const textarea = document.createElement("textarea");
    textarea.placeholder = adminMode
      ? "Odpowiedź jako BOOSTILIA..."
      : "Odpowiedź jako GOŚĆ...";
    textarea.required = true;
    textarea.maxLength = 2000;

    const actions = document.createElement("div");
    actions.className = "czat-actions";

    const send = document.createElement("button");
    send.type = "submit";
    send.textContent = adminMode ? "Wyślij odpowiedź" : "Wyślij odpowiedź jako GOŚĆ";

    const cancel = document.createElement("button");
    cancel.type = "button";
    cancel.className = "czat-ghost-btn";
    cancel.textContent = "Anuluj";

    actions.append(send, cancel);
    box.append(textarea, actions);

    cancel.addEventListener("click", () => box.remove());

    box.addEventListener("submit", async (event) => {
      event.preventDefault();
      const content = textarea.value.trim();
      if (content.length < 2) return;

      send.disabled = true;
      try {
        await apiRequest({
          action: adminMode ? "add_reply" : "add_guest_reply",
          page: PAGE,
          parent_id: parentId,
          content,
          website: "",
        });
        await render();
      } catch (err) {
        alert(err.message);
      } finally {
        send.disabled = false;
      }
    });

    return box;
  }

  function commentCard(item) {
    const card = document.createElement("article");
    card.className = "czat-comment";

    const header = document.createElement("div");
    header.className = "czat-comment-head";

    const author = document.createElement("strong");
    author.className = `czat-author ${item.author === "BOOSTILIA" ? "is-admin" : "is-guest"}`;
    author.textContent = item.author;

    const side = document.createElement("div");
    side.className = "czat-comment-side";

    const meta = document.createElement("span");
    meta.className = "czat-date";
    meta.textContent = formatDate(item.created_at);
    side.append(meta);

    if (isAdmin) {
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "czat-delete-btn";
      remove.textContent = "Usuń";
      remove.addEventListener("click", async () => {
        const ok = window.confirm("Usunąć ten komentarz?");
        if (!ok) return;
        try {
          await apiRequest({
            action: "delete_comment",
            page: PAGE,
            comment_id: item.id,
          });
          await render();
        } catch (err) {
          alert(err.message);
        }
      });
      side.append(remove);
    }

    header.append(author, side);

    const body = document.createElement("p");
    body.className = "czat-content";
    body.textContent = item.content;

    card.append(header, body);
    return card;
  }

  function threadCard(item) {
    const wrapper = document.createElement("div");
    wrapper.className = "czat-thread";

    const top = commentCard(item);
    wrapper.append(top);

    const replyButton = document.createElement("button");
    replyButton.type = "button";
    replyButton.className = "czat-reply-btn";
    replyButton.textContent = isAdmin ? "Odpowiedz jako BOOSTILIA" : "Odpowiedz jako GOŚĆ";

    const replySlot = document.createElement("div");
    replySlot.className = "czat-reply-slot";

    replyButton.addEventListener("click", () => {
      if (replySlot.childElementCount > 0) {
        replySlot.innerHTML = "";
        return;
      }
      replySlot.append(buildReplyBox(item.id, isAdmin));
    });

    wrapper.append(replyButton, replySlot);

    if (Array.isArray(item.replies) && item.replies.length > 0) {
      const replies = document.createElement("div");
      replies.className = "czat-replies";
      item.replies.forEach((reply) => replies.append(commentCard(reply)));
      wrapper.append(replies);
    }

    return wrapper;
  }

  async function render() {
    const list = root.querySelector(".czat-list");
    if (!list) return;

    list.innerHTML = "";
    try {
      const data = await apiRequest({}, "GET");
      const comments = data.comments || [];

      if (comments.length === 0) {
        const empty = document.createElement("p");
        empty.className = "czat-muted";
        empty.textContent = "Brak komentarzy. Napisz pierwszy.";
        list.append(empty);
        return;
      }

      comments.forEach((item) => list.append(threadCard(item)));
    } catch (err) {
      const fail = document.createElement("p");
      fail.className = "czat-muted";
      fail.textContent = `Nie udało się załadować komentarzy: ${err.message}`;
      list.append(fail);
    }
  }

  async function init() {
    root.classList.add("czat-section");

    const heading = document.createElement("h2");
    heading.className = "czat-title";
    heading.textContent = "Dyskusja";

    const list = document.createElement("div");
    list.className = "czat-list";

    root.append(heading, buildComposer(), list);
    try {
      const auth = await authRequest();
      isAdmin = Boolean(auth.isAdmin);
    } catch (error) {
      isAdmin = false;
    }
    render();
  }

  init();
})();

