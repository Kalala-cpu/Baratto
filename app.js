(function () {
  "use strict";

  /* ============ icone SVG inline ============ */
  var ICON_PATHS = {
    user: '<circle cx="12" cy="7.5" r="3.5"/><path d="M4.5 20c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5"/>',
    mail: '<rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/><path d="M4 7l8 6 8-6"/>',
    lock: '<rect x="5" y="11" width="14" height="9" rx="1.5"/><path d="M8 11V7.5a4 4 0 0 1 8 0V11"/>',
    logout: '<path d="M9 20H5.5A1.5 1.5 0 0 1 4 18.5v-13A1.5 1.5 0 0 1 5.5 4H9"/><path d="M14 16l4-4-4-4"/><path d="M18 12H9"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    image: '<rect x="3" y="4" width="18" height="16" rx="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M21 16l-5.5-5.5L4 21"/>',
    package: '<path d="M4 8l8-4 8 4v8l-8 4-8-4V8z"/><path d="M4 8l8 4 8-4M12 12v8"/>',
    "user-plus": '<circle cx="9" cy="7.5" r="3.5"/><path d="M2.5 20c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5"/><path d="M19 8v6M16 11h6"/>',
    "user-check": '<circle cx="9" cy="7.5" r="3.5"/><path d="M2.5 20c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5"/><path d="M16 11.5l2.2 2.2L22 9.5"/>',
    users: '<circle cx="8.5" cy="8" r="3"/><path d="M2.5 20c0-3.31 2.69-6 6-6s6 2.69 6 6"/><path d="M16 8.5a2.5 2.5 0 1 0 0-5"/><path d="M14.5 14.16A5.99 5.99 0 0 1 21.5 20"/>',
    swap: '<path d="M4 8h15M15 4l4 4-4 4"/><path d="M20 16H5M9 12l-4 4 4 4"/>',
    check: '<path d="M5 12.5l5 5L19 7"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    trash: '<path d="M4 7h16"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/><path d="M6 7l1 12.5A1.5 1.5 0 0 0 8.5 21h7a1.5 1.5 0 0 0 1.5-1.5L18 7"/>',
    edit: '<path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    inbox: '<path d="M4 12h4l2 3h4l2-3h4"/><path d="M5.5 5h13l1.5 7v6a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18v-6l1.5-7z"/>',
    send: '<path d="M4 12l16-8-6 16-3-7-7-1z"/>',
    "alert-circle": '<circle cx="12" cy="12" r="8.5"/><path d="M12 8v5"/><path d="M12 16h.01"/>',
    loader: '<path d="M12 3v3M12 18v3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M3 12h3M18 12h3M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>',
    "chevron-left": '<path d="M14.5 6L8.5 12l6 6"/>',
    refresh: '<path d="M20 12a8 8 0 1 1-2.34-5.66"/><path d="M20 4v5h-5"/>',
    gift: '<rect x="4" y="9.5" width="16" height="10.5" rx="1"/><path d="M4 13.5h16"/><path d="M12 9.5V20"/><path d="M12 9.5c-1.5 0-3-1-3-2.75S10.3 4 12 5.5c1.7-1.5 3-.75 3 1.25S13.5 9.5 12 9.5z"/>',
    search: '<circle cx="11" cy="11" r="7.5"/><path d="M21 21l-4.7-4.7"/>',
    message: '<path d="M4 5.5h16a1 1 0 0 1 1 1v9.5a1 1 0 0 1-1 1H9.5L5 21v-4H4a1 1 0 0 1-1-1v-9.5a1 1 0 0 1 1-1z"/>',
    paperclip: '<path d="M8 12.5l6.2-6.2a3.2 3.2 0 0 1 4.5 4.5L11.2 18a5 5 0 0 1-7.1-7.1L13.5 1.5"/>',
    video: '<rect x="3" y="6" width="13" height="12" rx="1.5"/><path d="M16 10l5-3v10l-5-3z"/>',
    "users-plus": '<circle cx="8.5" cy="8" r="3"/><path d="M2.5 20c0-3.31 2.69-6 6-6s6 2.69 6 6"/><path d="M18 8v6M15 11h6"/>',
    star: '<path d="M12 3.3l2.7 5.6 6.1.8-4.4 4.3 1 6.1L12 17l-5.4 3.1 1-6.1L3.2 9.7l6.1-.8z"/>'
  };
  function icon(name, extra) {
    return '<svg class="icon ' + (extra || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">' + (ICON_PATHS[name] || "") + "</svg>";
  }
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ============ Firebase (Auth + Realtime Database) ============ */
  /* La chiave API viene inserita in fase di build (vedi deploy.yml) offuscata in Base64
     e decodificata qui al volo. ATTENZIONE: e' solo un deterrente cosmetico contro chi
     guarda il sorgente a occhio nudo (es. "view-source"), NON una vera protezione:
     chiunque apra la scheda Network del browser vede comunque la chiave reale in chiaro
     nelle richieste a Firebase, perche' deve necessariamente viaggiare cosi'. La
     protezione vera si fa lato Google Cloud Console (restrizione della chiave per
     referrer HTTP, cosi' funziona solo se chiamata dal dominio dell'app) e/o abilitando
     Firebase App Check. */
  function decodeObfuscatedKey(v) {
    try { return atob(v); } catch (err) { return v; }
  }
  var firebaseConfig = {
    apiKey: decodeObfuscatedKey("__FIREBASE_API_KEY_B64__"),
    authDomain: "baratto-311e9.firebaseapp.com",
    databaseURL: "https://baratto-311e9-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "baratto-311e9",
    storageBucket: "baratto-311e9.firebasestorage.app",
    messagingSenderId: "38778508770",
    appId: "1:38778508770:web:0cb04b1e3de45b115f15bb",
    measurementId: "G-R707Y9EQ7B"
  };
  firebase.initializeApp(firebaseConfig);
  var fbAuth = firebase.auth();
  var fbDb = firebase.database();

  function dbGet(path) { return fbDb.ref(path).once("value").then(function (s) { return s.val(); }); }
  function dbSet(path, value) { return fbDb.ref(path).set(value); }
  /* Realtime Database trasforma gli array in oggetti/null: normalizziamo sempre a array */
  function toArray(v) {
    if (!v) return [];
    if (Array.isArray(v)) return v.filter(Boolean);
    return Object.keys(v).map(function (k) { return v[k]; });
  }
  function getInventory(uLower) { return dbGet("inventories/" + uLower).then(toArray); }
  /* modifica atomica dell'inventario (transazione): evita di sovrascrivere dati piu' recenti */
  function updateInventory(uLower, fn) {
    return fbDb.ref("inventories/" + uLower).transaction(function (cur) { return fn(toArray(cur)); }).then(function (res) {
      if (!res.committed) throw new Error("transaction aborted");
      return toArray(res.snapshot.val());
    });
  }
  function authErrorMessage(err) {
    var code = err && err.code;
    if (code === "auth/popup-closed-by-user" || code === "auth/cancelled-popup-request") return "";
    if (code === "auth/email-already-in-use") return "Esiste già un account con questa email.";
    if (code === "auth/invalid-email") return "Email non valida.";
    if (code === "auth/weak-password") return "La password deve avere almeno 6 caratteri.";
    if (code === "auth/user-not-found" || code === "auth/wrong-password" || code === "auth/invalid-credential" || code === "auth/invalid-login-credentials")
      return "Email o password errati. Se ti sei registrato con Google o con il link via email, usa quel metodo.";
    if (code === "auth/too-many-requests") return "Troppi tentativi. Riprova tra qualche minuto.";
    if (code === "auth/network-request-failed") return "Errore di rete. Controlla la connessione.";
    if (code === "auth/operation-not-allowed") return "Metodo di accesso non abilitato nella console Firebase (Authentication → Sign-in method).";
    if (code === "auth/popup-blocked") return "Il browser ha bloccato la finestra di Google: consenti i popup e riprova.";
    if (code === "auth/account-exists-with-different-credential") return "Esiste già un account con questa email: accedi con il metodo usato in origine.";
    if (code === "auth/invalid-action-code" || code === "auth/expired-action-code") return "Il link non è valido o è scaduto. Richiedine uno nuovo.";
    if (code === "auth/unauthorized-domain" || code === "auth/unauthorized-continue-uri") return "Dominio non autorizzato: aggiungilo in Authentication → Impostazioni → Domini autorizzati.";
    if (code === "auth/user-disabled") return "Questo account è stato disabilitato.";
    if (code === "PERMISSION_DENIED" || (err && /permission_denied/i.test(err.message || ""))) return "Permesso negato dalle regole del database.";
    return "Errore imprevisto. Riprova.";
  }

  /* messaggio d'errore per le operazioni sul database quando le regole negano il permesso */
  function dbErrorMessage(err, fallback) {
    var denied = err && (err.code === "PERMISSION_DENIED" || /permission_denied/i.test(err.message || ""));
    return denied ? "Permesso negato dalle regole del database." : fallback;
  }

  /* ============ utilita' ============ */
  var USERNAME_RE = /^[a-zA-Z0-9_]{3,20}$/;
  function sameUser(a, b) { return String(a || "").toLowerCase() === String(b || "").toLowerCase(); }
  var MAX_ITEM_PHOTOS = 6;
  var HISTORY_PAGE = 12; /* scambi mostrati per volta nello storico */
  function genId() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }

  /* foto: supporta sia i vecchi oggetti con "photo" (singola) sia i nuovi con "photos" (array).
     Ogni elemento può essere una stringa (data URL immagine) oppure {url, type:"video"} */
  function itemPhotos(item) {
    if (!item) return [];
    if (Array.isArray(item.photos)) return item.photos;
    if (item.photo) return [item.photo];
    return [];
  }
  /* restituisce l'URL stringa di un elemento foto/video */
  function photoUrl(p) { return (p && typeof p === "object") ? p.url : p; }
  /* true se l'elemento è un video */
  function isVideo(p) { return p && typeof p === "object" && p.type === "video"; }
  /* un oggetto senza il campo "available" è considerato disponibile (retrocompatibilità) */
  function isAvailable(item) {
    return !!item && item.available !== false;
  }

  function resizeImageFile(file, maxDim, quality) {
    maxDim = maxDim || 480; quality = quality || 0.6;
    return new Promise(function (resolve, reject) {
      if (!file.type || file.type.indexOf("image/") !== 0) { reject(new Error("Seleziona un file immagine valido.")); return; }
      var reader = new FileReader();
      reader.onerror = function () { reject(new Error("Impossibile leggere il file.")); };
      reader.onload = function (ev) {
        var img = new Image();
        img.onerror = function () { reject(new Error("Impossibile elaborare l'immagine.")); };
        img.onload = function () {
          var c = document.createElement("canvas"), cw = img.width, ch = img.height;
          var side = Math.min(cw, ch), x = (cw - side) / 2, y = (ch - side) / 2;
          c.width = c.height = side;
          var ctx = c.getContext("2d");
          ctx.drawImage(img, x, y, side, side, 0, 0, side, side);
          if (side > maxDim) {
            var c2 = document.createElement("canvas");
            c2.width = c2.height = maxDim;
            c2.getContext("2d").drawImage(c, 0, 0, side, side, 0, 0, maxDim, maxDim);
            c2.toBlob(function (blob) { resolve(blob); }, "image/jpeg", quality);
          } else {
            c.toBlob(function (blob) { resolve(blob); }, "image/jpeg", quality);
          }
        };
        img.src = ev.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  /* ============ App State ============ */
  var state = {
    booting: true,
    currentUser: "",
    needUsername: false,
    usernameInput: "",
    tab: "inventory",
    message: null,
    authMode: "login",
    authEmail: "",
    authPassword: "",
    authError: "",
    linkSentTo: null,
    showAddItem: false,
    newItemName: "",
    newItemPhotos: [],
    showEditItem: false,
    editItemId: null,
    editItemName: "",
    editItemPhotos: [],
    inventory: [],
    inventorySearch: "",
    showTradeBuilder: false,
    wantIds: [],
    offerIds: [],
    community: [],
    communityUsers: [],
    communitySearch: "",
    selectedUser: null,
    otherUserInventory: [],
    otherUserSearch: "",
    historyFilter: "completed",
    historyLimit: HISTORY_PAGE,
    historySearch: "",
    history: [],
    allTrades: [],
    friends: [],
    friendInput: "",
    lightbox: null,
    groups: [],
    showGroupModal: false,
    newGroupName: "",
    newGroupMembers: [],
    chatTarget: null,
    chatMessages: [],
    chatInput: "",
    chatOtherInventory: [],
    showChatTradeBuilder: false,
    pendingChatMedia: null,
    chatMediaSending: false,
    showDeleteAccountConfirm: false,
    tradeDuration: "",
    historyUserFilter: "",
    historyDateFrom: "",
    historyDateTo: "",
    showTosModal: false,
    installAvailable: false,
    isOffline: (typeof navigator !== "undefined" && "onLine" in navigator) ? !navigator.onLine : false
  };

  function setState(changes) { Object.assign(state, changes); }

  function setMessage(text, type) {
    var msg = { text: text, type: type || "success" };
    state.message = msg;
    /* il timeout deve anche richiamare render(), altrimenti il banner resta visibile
       per sempre finche' non capita un altro cambiamento di stato qualsiasi (bug: prima
       veniva solo svuotato lo stato, senza ridisegnare). Il controllo "state.message === msg"
       evita che un timer vecchio cancelli un messaggio piu' recente mostrato nel frattempo. */
    setTimeout(function () {
      if (state.message === msg) { state.message = null; render(); }
    }, 4000);
    render();
  }

  /* ============ utility per items ============ */
  function getItemById(id, arr) { return arr && arr.find(function (i) { return i && i.id === id; }); }
  function findItemIndexById(id, arr) { return arr && arr.findIndex(function (i) { return i && i.id === id; }); }

  /* ============ UI - modali ============ */
  function openAddItem() { setState({ showAddItem: true, newItemName: "", newItemPhotos: [] }); render(); }
  function openEditItem(item) { setState({ showEditItem: true, editItemId: item.id, editItemName: item.name, editItemPhotos: itemPhotos(item).slice() }); render(); }
  function closeEditItem() { setState({ showEditItem: false, editItemId: null, editItemName: "", editItemPhotos: [] }); render(); }

  function handleFileChange(e) {
    var files = Array.prototype.slice.call(e.target.files);
    if (!files.length) return;
    /* reset the input so the same file(s) can be selected again later */
    e.target.value = "";
    var isEditing = e.target.id === "photo-input-edit";
    var targetPhotos = isEditing ? state.editItemPhotos : state.newItemPhotos;
    var remaining = MAX_ITEM_PHOTOS - targetPhotos.length;
    if (remaining <= 0) { setMessage("Massimo " + MAX_ITEM_PHOTOS + " foto per oggetto.", "error"); return; }
    /* only process up to the number of remaining slots */
    var toProcess = files.slice(0, remaining);
    if (files.length > remaining) { setMessage("Aggiunte solo " + remaining + " foto (limite " + MAX_ITEM_PHOTOS + ").", "error"); }
    var errors = [];
    toProcess.reduce(function (chain, file) {
      return chain.then(function () {
        if (file.type && file.type.indexOf("video/") === 0) {
          /* video: store as data URL directly (no resize) */
          return new Promise(function (resolve) {
            var reader = new FileReader();
            reader.onload = function (ev) { targetPhotos.push({ url: ev.target.result, type: "video" }); resolve(); };
            reader.onerror = function () { errors.push(file.name); resolve(); };
            reader.readAsDataURL(file);
          });
        }
        return resizeImageFile(file).then(function (blob) {
          return new Promise(function (resolve) {
            var reader = new FileReader();
            reader.onload = function (ev) { targetPhotos.push(ev.target.result); resolve(); };
            reader.onerror = function () { errors.push(file.name); resolve(); };
            reader.readAsDataURL(blob);
          });
        }).catch(function (err) { errors.push(file.name + ": " + err.message); });
      });
    }, Promise.resolve()).then(function () {
      if (errors.length) { setMessage("Errore con: " + errors.join(", "), "error"); }
      render();
    });
  }

  /* scambia una foto (dell'array "photos", passato per riferimento) con quella adiacente,
     nella direzione "dir" (-1 = verso sinistra/prima, 1 = verso destra/dopo). Usata per
     riordinare le foto di un oggetto: la prima della lista e' sempre la copertina. */
  function swapPhotos(photos, idx, dir) {
    if (isNaN(idx)) return;
    var target = idx + dir;
    if (target < 0 || target >= photos.length) return;
    var tmp = photos[idx];
    photos[idx] = photos[target];
    photos[target] = tmp;
    render();
  }

  /* ============ add item ============ */
  function submitNewItem(e) {
    e.preventDefault();
    var name = (state.newItemName || "").trim();
    if (!name) { setMessage("Inserisci il nome dell'oggetto.", "error"); return; }
    /* il modale si chiude solo in caso di successo: prima veniva chiuso subito, quindi
       se il salvataggio falliva (es. permesso negato, connessione assente) il nome e le
       foto gia' inserite andavano persi senza che l'utente potesse riprovare */
    var item = { id: genId(), name: name, photos: state.newItemPhotos, available: true, created: Date.now() };
    updateInventory(state.currentUser.toLowerCase(), function (inv) { inv.push(item); return inv; }).then(function () {
      setState({ showAddItem: false, newItemName: "", newItemPhotos: [] });
      setMessage("Oggetto aggiunto con successo.", "success");
      loadInventory();
    }).catch(function (err) { setMessage("Errore: " + err.message, "error"); });
  }

  /* ============ edit item ============ */
  function submitEditItem(e) {
    e.preventDefault();
    var name = (state.editItemName || "").trim();
    if (!name) { setMessage("Inserisci il nome dell'oggetto.", "error"); return; }
    var editId = state.editItemId;
    updateInventory(state.currentUser.toLowerCase(), function (inv) {
      var idx = findItemIndexById(editId, inv);
      if (idx >= 0) {
        var item = inv[idx];
        item.name = name;
        item.photos = state.editItemPhotos;
      }
      return inv;
    }).then(function () {
      setState({ showEditItem: false, editItemId: null, editItemName: "", editItemPhotos: [] });
      setMessage("Oggetto modificato con successo.", "success");
      loadInventory();
    }).catch(function (err) { setMessage("Errore: " + err.message, "error"); });
  }

  /* ============ immagine profilo dall'inventario ============
     Il primo oggetto dell'inventario (indipendentemente dalla disponibilita') e' quello
     usato come immagine profilo ovunque nell'app (vedi profileItemId piu' sotto). Questa
     funzione lo porta in prima posizione: l'ordine locale cambia subito per reattivita',
     poi lo stesso spostamento (identificato per id, non per indice) viene rifatto anche
     lato server dentro una transazione, cosi' un eventuale altro salvataggio concorrente
     (es. un'altra scheda aperta) non viene sovrascritto ne' spezza l'ordine.
     Non e' previsto nessun riordino manuale libero degli oggetti (niente "sposta prima"/
     "sposta dopo"): l'unica azione possibile sulla posizione e' questa, per tenere la
     UI dell'inventario semplice. */
  function setAsProfileItem(itemId) {
    var inv = state.inventory;
    var idx = findItemIndexById(itemId, inv);
    if (idx <= 0) return;
    var item = inv.splice(idx, 1)[0];
    inv.unshift(item);
    render();
    updateInventory(state.currentUser.toLowerCase(), function (serverInv) {
      var i = findItemIndexById(itemId, serverInv);
      if (i > 0) { var it = serverInv.splice(i, 1)[0]; serverInv.unshift(it); }
      return serverInv;
    }).then(function () { loadInventory(); }).catch(function (err) {
      setMessage("Errore: " + err.message, "error");
      loadInventory();
    });
  }

  /* ============ delete item ============ */
  function deleteItem(id) {
    if (!confirm("Eliminare questo oggetto?")) return;
    updateInventory(state.currentUser.toLowerCase(), function (inv) {
      var idx = findItemIndexById(id, inv);
      if (idx >= 0) inv.splice(idx, 1);
      return inv;
    }).then(function () { setMessage("Oggetto eliminato.", "success"); loadInventory(); }).catch(function (err) { setMessage("Errore: " + err.message, "error"); });
  }

  /* ============ toggle availability ============ */
  function toggleAvailable(id) {
    updateInventory(state.currentUser.toLowerCase(), function (inv) {
      var item = getItemById(id, inv);
      if (item) item.available = !item.available;
      return inv;
    }).then(loadInventory).catch(function (err) { setMessage("Errore: " + err.message, "error"); });
  }

  /* ============ loads ============ */
  function loadInventory() { getInventory(state.currentUser.toLowerCase()).then(function (inv) { setState({ inventory: inv }); render(); }); }
  /* Carica TUTTI gli utenti registrati (da "usernames") e le loro inventory.
     Ogni utente compare nella community anche se ha 0 oggetti. */
  function loadCommunity() {
    Promise.all([
      dbGet("usernames"),
      dbGet("inventories")
    ]).then(function (results) {
      var usernames = results[0] || {};
      var invs = results[1] || {};
      var users = [];
      var allItems = [];
      Object.keys(usernames).forEach(function (uLower) {
        if (sameUser(uLower, state.currentUser)) return;
        var record = usernames[uLower];
        var displayName = (record && record.username) ? record.username : uLower;
        var allInv = toArray(invs[uLower]);
        var items = allInv.filter(isAvailable);
        /* l'immagine profilo mostrata in community e' la foto del PRIMO oggetto
           dell'inventario nell'ordine scelto dall'utente (vedi riordino nella tab
           Inventario), anche se quell'oggetto e' segnato come "non disponibile":
           l'utente puo' cosi' scegliere liberamente la propria immagine profilo senza
           dover per forza tenere quell'oggetto disponibile per lo scambio */
        users.push({ username: displayName, uLower: uLower, itemCount: items.length, firstItem: allInv[0] || null });
        items.forEach(function (item) {
          var copy = Object.assign({}, item);
          copy.user = uLower;
          allItems.push(copy);
        });
      });
      /* utenti con oggetti prima, poi ordine alfabetico */
      users.sort(function (a, b) {
        if (b.itemCount !== a.itemCount) return b.itemCount - a.itemCount;
        return a.uLower.localeCompare(b.uLower);
      });
      setState({ communityUsers: users, community: allItems });
      render();
    });
  }
  /* carica solo gli scambi che coinvolgono l'utente corrente (come mittente o destinatario):
     senza questo filtro la tab Scambi mostrava le proposte di TUTTI gli utenti, e chiunque
     poteva finire per accettare/rifiutare scambi non propri */
  function loadTrades() {
    dbGet("trades").then(function (trades) {
      var all = toArray(trades).filter(function (t) {
        var fromU = t.fromUser || t.from || "";
        var toU = t.toUser || t.to || "";
        return sameUser(fromU, state.currentUser) || sameUser(toU, state.currentUser);
      });
      setState({ allTrades: all, history: all });
      updateHistory();
    });
  }
  /* carica sia gli amici confermati (users/{u}/friends) sia le richieste pendenti
     (friendRequests), in entrata e in uscita, cosi' la tab Amici puo' mostrarle tutte */
  function loadFriends() {
    var uLower = state.currentUser.toLowerCase();
    Promise.all([
      dbGet("users/" + uLower + "/friends"),
      dbGet("friendRequests")
    ]).then(function (results) {
      var accepted = toArray(results[0]).map(function (f) { return Object.assign({}, f, { status: "accepted" }); });
      var allRequests = toArray(results[1]);
      /* sendFriendRequest saves {from, to, ...} — handle both old and new field names */
      var incoming = allRequests.filter(function (r) {
        return sameUser(r.toUser || r.to, state.currentUser);
      }).map(function (r) { return { id: r.id, username: r.fromUser || r.from, status: "pending" }; });
      var outgoing = allRequests.filter(function (r) {
        return sameUser(r.fromUser || r.from, state.currentUser);
      }).map(function (r) { return { id: r.id, username: r.toUser || r.to, status: "outgoing" }; });
      setState({ friends: accepted.concat(incoming, outgoing) });
      render();
    });
  }
  /* carica i gruppi di cui l'utente corrente e' membro */
  function loadGroups() {
    dbGet("groups").then(function (all) {
      var list = toArray(all).filter(function (g) {
        return toArray(g.members).some(function (m) { return sameUser(m, state.currentUser); });
      });
      list.sort(function (a, b) { return (b.created || 0) - (a.created || 0); });
      setState({ groups: list });
      render();
    });
  }
  /* controparte (l'altro utente coinvolto) di uno scambio rispetto all'utente corrente */
  function otherPartyOf(t) {
    var fromU = t.fromUser || t.from || "";
    var toU = t.toUser || t.to || "";
    return sameUser(fromU, state.currentUser) ? toU : fromU;
  }
  /* elenco (ordinato, senza duplicati) delle persone con cui l'utente ha scambi, per il
     filtro "utente" della tab Scambi */
  function historyCounterparts() {
    var seen = {}, list = [];
    (state.allTrades || []).forEach(function (t) {
      var other = otherPartyOf(t);
      if (other && !seen[other.toLowerCase()]) { seen[other.toLowerCase()] = true; list.push(other); }
    });
    list.sort(function (a, b) { return a.localeCompare(b); });
    return list;
  }
  function updateHistory() {
    var search = (state.historySearch || "").toLowerCase(), filter = state.historyFilter;
    var userFilter = state.historyUserFilter || "";
    /* i campi "date" HTML danno una stringa "YYYY-MM-DD": la interpretiamo come inizio/fine
       giornata locale, cosi' il filtro include l'intera giornata scelta */
    var dateFrom = state.historyDateFrom ? new Date(state.historyDateFrom + "T00:00:00").getTime() : null;
    var dateTo = state.historyDateTo ? new Date(state.historyDateTo + "T23:59:59.999").getTime() : null;
    /* always filter from the full unmodified trade list */
    var source = state.allTrades || state.history || [];
    var h = source.filter(function (t) {
      var matchSearch = !search ||
        (t.from || "").toLowerCase().indexOf(search) !== -1 ||
        (t.fromUser || "").toLowerCase().indexOf(search) !== -1 ||
        (t.to || "").toLowerCase().indexOf(search) !== -1 ||
        (t.toUser || "").toLowerCase().indexOf(search) !== -1;
      var matchFilter = filter === "completed" ? t.accepted : filter === "pending" ? (!t.accepted && !t.declined && !t.cancelled) : (t.declined || t.cancelled);
      var matchUser = !userFilter || sameUser(otherPartyOf(t), userFilter);
      var created = t.created || 0;
      var matchDate = (dateFrom === null || created >= dateFrom) && (dateTo === null || created <= dateTo);
      return matchSearch && matchFilter && matchUser && matchDate;
    }).sort(function (a, b) { return (b.created || 0) - (a.created || 0); });
    /* store filtered result separately so state.allTrades stays intact */
    setState({ history: h });
    render();
  }

  /* ============ auth ============ */
  /* email "finta" usata per gli account creati senza una vera email:
     Firebase Auth richiede comunque un'email per il metodo password,
     quindi ne generiamo una interna, mai mostrata all'utente */
  function syntheticEmail() { return "u" + genId() + "@baratto.local"; }
  function isSyntheticEmail(email) { return !!email && /@baratto\.local$/.test(email); }

  function handleAuthSubmit(e) {
    e.preventDefault();
    if (state.authMode === "noEmail") {
      var pwNoEmail = state.authPassword || "";
      if (pwNoEmail.length < 6) { setState({ authError: "Password troppo corta." }); render(); return; }
      fbAuth.createUserWithEmailAndPassword(syntheticEmail(), pwNoEmail).catch(function (err) { setState({ authError: authErrorMessage(err) }); render(); });
      return;
    }
    var input = state.authEmail.trim();
    if (!input) { setState({ authError: state.authMode === "login" ? "Inserisci email o nome utente." : "Inserisci email." }); render(); return; }
    if (state.authMode === "login" || state.authMode === "register") {
      var pw = state.authPassword || "";
      if (pw.length < 6) { setState({ authError: "Password troppo corta." }); render(); return; }
      if (state.authMode === "register") {
        fbAuth.createUserWithEmailAndPassword(input, pw).catch(function (err) { setState({ authError: authErrorMessage(err) }); render(); });
        return;
      }
      /* login: se non contiene "@" trattalo come nome utente e recupera l'email interna associata */
      var emailPromise = input.indexOf("@") === -1
        ? dbGet("loginEmails/" + input.toLowerCase()).then(function (rec) {
            if (!rec || !rec.email) { var e2 = new Error("Nome utente non trovato."); e2.code = ""; throw e2; }
            return rec.email;
          })
        : Promise.resolve(input);
      emailPromise.then(function (resolvedEmail) {
        return fbAuth.signInWithEmailAndPassword(resolvedEmail, pw);
      }).catch(function (err) {
        setState({ authError: err.code ? authErrorMessage(err) : err.message });
        render();
      });
    }
  }
  function handleGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    fbAuth.signInWithPopup(provider).catch(function (err) { setState({ authError: authErrorMessage(err) }); render(); });
  }
  function handleLogout() {
    detachChat();
    detachTradesLiveWatch();
    fbAuth.signOut().then(function () {
      setHash("");
      setState({
        currentUser: "",
        needUsername: false,
        usernameInput: "",
        tab: "inventory",
        message: null,
        authMode: "login",
        authEmail: "",
        authPassword: "",
        authError: "",
        linkSentTo: null,
        showAddItem: false,
        newItemName: "",
        newItemPhotos: [],
        showEditItem: false,
        editItemId: null,
        editItemName: "",
        editItemPhotos: [],
        inventory: [],
        inventorySearch: "",
        showTradeBuilder: false,
        wantIds: [],
        offerIds: [],
        community: [],
        communityUsers: [],
        communitySearch: "",
        selectedUser: null,
        otherUserInventory: [],
        historyFilter: "completed",
        historyLimit: HISTORY_PAGE,
        historySearch: "",
        history: [],
        allTrades: [],
        friends: [],
        friendInput: "",
        lightbox: null,
        groups: [],
        showGroupModal: false,
        newGroupName: "",
        newGroupMembers: [],
        chatTarget: null,
        chatMessages: [],
        chatInput: "",
        chatOtherInventory: [],
        showChatTradeBuilder: false,
        otherUserSearch: "",
        pendingChatMedia: null,
        chatMediaSending: false,
        showDeleteAccountConfirm: false,
        tradeDuration: "",
        historyUserFilter: "",
        historyDateFrom: "",
        historyDateTo: ""
      });
      render();
    });
  }

  /* ============ eliminazione account ============ */
  /* popup di conferma "vero" (modale dell'app) al posto del confirm() nativo del
     browser, troppo facile da chiudere/confermare per errore per un'azione così
     distruttiva e irreversibile */
  function openDeleteAccountConfirm() { setState({ showDeleteAccountConfirm: true }); render(); }
  function closeDeleteAccountConfirm() { setState({ showDeleteAccountConfirm: false }); render(); }
  function deleteAccount() {
    setState({ showDeleteAccountConfirm: false });
    performAccountDeletion(false);
  }
  function performAccountDeletion(isRetry) {
    var fbUser = fbAuth.currentUser;
    if (!fbUser) return;
    var uLower = state.currentUser.toLowerCase();
    var uid = fbUser.uid;
    /* loginEmails/$uLower si puo' cancellare solo finche' usernames/$uLower esiste ancora
       (le regole verificano root.child('usernames/'+uLower+'/uid') === auth.uid), quindi va
       rimosso PRIMA di usernames: se partono insieme il permesso viene negato e l'intera
       cancellazione fallisce senza eliminare nulla. */
    fbDb.ref("loginEmails/" + uLower).remove().then(function () {
      return Promise.all([
        fbDb.ref("usernames/" + uLower).remove(),
        fbDb.ref("profiles/" + uid).remove(),
        fbDb.ref("inventories/" + uLower).remove(),
        fbDb.ref("users/" + uLower + "/friends").remove()
      ]);
    }).then(function () {
      return fbUser.delete();
    }).then(function () {
      alert("Account eliminato con successo.");
    }).catch(function (err) {
      /* Firebase richiede un login recente per operazioni sensibili come l'eliminazione dell'account */
      if (err && err.code === "auth/requires-recent-login" && !isRetry && fbUser.email) {
        var pw = window.prompt("Per motivi di sicurezza, reinserisci la password per confermare l'eliminazione:");
        if (!pw) return;
        var cred = firebase.auth.EmailAuthProvider.credential(fbUser.email, pw);
        fbUser.reauthenticateWithCredential(cred).then(function () {
          performAccountDeletion(true);
        }).catch(function (err2) { setMessage(authErrorMessage(err2), "error"); });
        return;
      }
      setMessage(dbErrorMessage(err, "Errore: " + err.message), "error");
    });
  }

  function sendEmailLink(email) {
    fbAuth.sendSignInLinkToEmail(email, { url: window.location.href, handleCodeInApp: true }).then(function () {
      window.localStorage.setItem("emailForSignIn", email);
      setState({ linkSentTo: email });
      render();
    }).catch(function (err) { setState({ authError: authErrorMessage(err) }); render(); });
  }

  function completeEmailLinkSignIn() {
    if (fbAuth.isSignInWithEmailLink(window.location.href)) {
      var email = window.localStorage.getItem("emailForSignIn");
      if (!email) { email = window.prompt("Email per completare sign in:"); }
      if (email) {
        fbAuth.signInWithEmailLink(email, window.location.href).catch(function (err) { setState({ authError: authErrorMessage(err) }); render(); });
        window.localStorage.removeItem("emailForSignIn");
      }
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }

  function resolveProfile(fbUser) {
    dbGet("profiles/" + fbUser.uid).then(function (profile) {
      var uname = profile && profile.username;
      if (uname) { setState({ currentUser: uname }); loadInventory(); loadCommunity(); loadFriends(); loadTrades(); loadGroups(); attachTradesLiveWatch(); restoreFromHash(); }
      else { setState({ needUsername: true, usernameInput: "" }); }
      render();
    }).catch(function (err) {
      /* non lasciare l'app bloccata sulla schermata di caricamento se la lettura fallisce */
      setState({ needUsername: false, authError: dbErrorMessage(err, "Impossibile caricare il profilo: " + err.message) });
      render();
    });
  }

  function handleClaimUsername(e) {
    e.preventDefault();
    var u = (state.usernameInput || "").trim();
    if (!USERNAME_RE.test(u)) { setState({ authError: "Nome: 3-20 char, lettere/numeri/_" }); render(); return; }
    var uLower = u.toLowerCase();
    dbGet("usernames/" + uLower).then(function (existing) {
      if (existing) { setState({ authError: "Nome già in uso." }); render(); return; }
      var fbUser = fbAuth.currentUser;
      return dbSet("usernames/" + uLower, { uid: fbUser.uid, username: u }).then(function () {
        return dbSet("profiles/" + fbUser.uid, { username: u });
      }).then(function () {
        /* account senza email vera: memorizza l'email interna cosi' il login futuro puo' avvenire con il solo nome utente */
        if (isSyntheticEmail(fbUser.email)) return dbSet("loginEmails/" + uLower, { email: fbUser.email });
      }).then(function () {
        setState({ currentUser: u, needUsername: false });
        loadInventory();
        loadCommunity();
        loadFriends();
        loadTrades();
        loadGroups();
        attachTradesLiveWatch();
        render();
      });
    }).catch(function (err) { setState({ authError: "Errore: " + err.message }); render(); });
  }

  /* ============ community & friends ============ */
  /* prima di inviare una richiesta: rifiuta se e' il proprio nome, se esiste gia' un
     rapporto (amico/richiesta in corso in un senso o nell'altro), e soprattutto se
     quel nome utente non corrisponde a nessun account registrato (letto da
     "usernames", leggibile da qualunque utente autenticato). Solo se l'utente esiste
     davvero la richiesta viene effettivamente creata, usando la grafia esatta salvata
     in "usernames" (record.username) invece di quella digitata, cosi' compare sempre
     con le maiuscole/minuscole corrette a prescindere da come e' stata scritta. */
  function sendFriendRequest(username) {
    var uname = (username || "").trim();
    if (!uname) return;
    if (sameUser(uname, state.currentUser)) { setMessage("Non puoi aggiungere te stesso.", "error"); return; }
    var status = friendStatusFor(uname);
    if (status === "accepted") { setMessage("Siete già amici.", "error"); return; }
    if (status === "outgoing") { setMessage("Richiesta già inviata.", "error"); return; }
    if (status === "pending") { setMessage("Questo utente ti ha già mandato una richiesta: rispondi da \"Richieste in arrivo\".", "error"); return; }
    dbGet("usernames/" + uname.toLowerCase()).then(function (record) {
      if (!record) { setMessage("Nessun utente trovato con questo nome.", "error"); return; }
      var realUsername = record.username || uname;
      var id = genId();
      /* field names must match the DB rules: fromUser / toUser */
      var req = { id: id, fromUser: state.currentUser, toUser: realUsername, status: "pending", created: Date.now() };
      return dbSet("friendRequests/" + id, req).then(function () {
        state.friendInput = "";
        setMessage("Richiesta inviata.", "success");
        loadFriends();
      });
    }).catch(function (err) { setMessage("Errore: " + dbErrorMessage(err, err.message), "error"); });
  }

  function respondFriendRequest(reqId, accept) {
    dbGet("friendRequests/" + reqId).then(function (req) {
      if (!req) return;
      /* support both old (from/to) and new (fromUser/toUser) field names */
      var fromU = req.fromUser || req.from;
      var toU = req.toUser || req.to;
      var u1 = fromU.toLowerCase(), u2 = toU.toLowerCase();
      if (accept) {
        return Promise.all([
          dbGet("users/" + u1 + "/friends").then(function (f) { var arr = toArray(f); if (!arr.find(function (x) { return x && sameUser(x.username, toU); })) arr.push({ username: toU, id: genId() }); return dbSet("users/" + u1 + "/friends", arr); }),
          dbGet("users/" + u2 + "/friends").then(function (f) { var arr = toArray(f); if (!arr.find(function (x) { return x && sameUser(x.username, fromU); })) arr.push({ username: fromU, id: genId() }); return dbSet("users/" + u2 + "/friends", arr); })
        ]);
      }
    }).then(function () {
      return fbDb.ref("friendRequests/" + reqId).remove();
    }).then(function () { setMessage(accept ? "Amico aggiunto!" : "Richiesta rifiutata.", "success"); loadFriends(); }).catch(function (err) { setMessage("Errore: " + dbErrorMessage(err, err.message), "error"); });
  }

  function cancelFriendRequest(reqId) {
    fbDb.ref("friendRequests/" + reqId).remove().then(function () { setMessage("Richiesta annullata.", "success"); loadFriends(); }).catch(function (err) { setMessage("Errore: " + err.message, "error"); });
  }

  function removeFriend(id, username) {
    if (!confirm("Rimuovere " + username + " dai tuoi amici?")) return;
    var u = state.currentUser.toLowerCase();
    dbGet("users/" + u + "/friends").then(function (f) {
      var arr = toArray(f);
      var idx = arr.findIndex(function (x) { return x && x.id === id; });
      if (idx >= 0) arr.splice(idx, 1);
      return dbSet("users/" + u + "/friends", arr);
    }).then(function () { setMessage("Amico rimosso.", "success"); loadFriends(); }).catch(function (err) { setMessage("Errore: " + err.message, "error"); });
  }

  /* stato amicizia con un utente: "accepted" | "outgoing" | "pending" | null */
  function friendStatusFor(username) {
    var f = (state.friends || []).filter(function (x) { return x && sameUser(x.username, username); })[0];
    return f ? f.status : null;
  }

  function openUser(username) {
    /* se si arriva qui da una chat aperta (es. tap sull'icona profilo o sul nome
       del mittente), stacca il listener della chat: altrimenti resterebbe attivo
       in background anche dopo essere passati alla tab Community */
    if (state.tab === "chat") { detachChat(); clearPendingChatMedia(); }
    setState({ selectedUser: username, otherUserInventory: [], otherUserSearch: "", tab: "community", chatTarget: null });
    requestScrollTop();
    getInventory(username.toLowerCase()).then(function (inv) { setState({ otherUserInventory: inv }); render(); });
    render();
    setHash("community/" + encodeURIComponent(username));
  }
  function backToCommunity() { setState({ selectedUser: null, otherUserInventory: [], otherUserSearch: "" }); requestScrollTop(); render(); setHash("community"); }
  function openFriend(username) { openUser(username); setState({ tab: "community" }); render(); }

  /* ============ chat (privata e di gruppo) ============ */
  var chatRef = null; /* riferimento Firebase attivo, per poterlo staccare (off) quando si cambia chat */
  var MAX_CHAT_MEDIA_DIM = 640;
  var MAX_CHAT_MESSAGE_LEN = 500; /* limite caratteri per messaggio di testo, riflesso anche nelle regole del DB */
  /* id univoco e stabile per la coppia di utenti, indipendente da chi apre la chat per primo */
  function chatIdFor(u1, u2) {
    return [String(u1 || "").toLowerCase(), String(u2 || "").toLowerCase()].sort().join("__");
  }
  /* percorso del database dei messaggi per il target di chat attivo (amico o gruppo) */
  function chatMessagesPath() {
    if (!state.chatTarget) return null;
    if (state.chatTarget.type === "group") return "groupChats/" + state.chatTarget.id + "/messages";
    return "chats/" + chatIdFor(state.currentUser, state.chatTarget.id) + "/messages";
  }
  function detachChat() {
    if (chatRef) { chatRef.off("value"); chatRef = null; }
  }
  /* scarta un eventuale allegato in attesa di conferma: va chiamata ogni volta che
     cambia la chat attiva, altrimenti una foto/video scelto per una conversazione
     potrebbe finire inviato per sbaglio a un'altra se l'utente cambia chat prima di confermare */
  function clearPendingChatMedia() {
    if (state.pendingChatMedia && state.pendingChatMedia.previewUrl) { URL.revokeObjectURL(state.pendingChatMedia.previewUrl); }
    state.pendingChatMedia = null;
  }
  function attachChatRef() {
    var path = chatMessagesPath();
    if (!path) return;
    chatRef = fbDb.ref(path);
    chatRef.on("value", function (snap) {
      var msgs = toArray(snap.val()).sort(function (a, b) { return (a.created || 0) - (b.created || 0); });
      setState({ chatMessages: msgs });
      render();
      scrollChatToBottom();
    }, function (err) {
      setMessage(dbErrorMessage(err, "Errore chat: " + err.message), "error");
    });
  }
  function openChat(username) {
    if (!username) return;
    detachChat();
    clearPendingChatMedia();
    setState({ tab: "chat", chatTarget: { type: "friend", id: username, name: username }, chatMessages: [], chatInput: "", chatOtherInventory: [], showChatTradeBuilder: false });
    render();
    attachChatRef();
    setHash("chat/" + encodeURIComponent(username));
  }
  function openGroupChat(groupId) {
    var group = getItemById(groupId, state.groups);
    if (!group) return;
    detachChat();
    clearPendingChatMedia();
    setState({ tab: "chat", chatTarget: { type: "group", id: group.id, name: group.name, members: toArray(group.members) }, chatMessages: [], chatInput: "", showChatTradeBuilder: false });
    render();
    attachChatRef();
    setHash("chat");
  }
  function closeChat() { detachChat(); clearPendingChatMedia(); setState({ chatTarget: null, chatMessages: [], chatInput: "", showChatTradeBuilder: false }); render(); setHash("chat"); }
  function scrollChatToBottom() {
    setTimeout(function () {
      var el = document.getElementById("chat-messages");
      if (el) el.scrollTop = el.scrollHeight;
    }, 0);
  }
  /* invio dal modulo principale della chat: se c'e' un allegato in attesa di conferma,
     lo stesso tasto di invio del messaggio spedisce quello (non serve piu' un tasto
     separato); l'eventuale testo scritto insieme alla foto/video parte come didascalia,
     subito dopo, sotto forma di messaggio di testo normale */
  function sendChatMessage(e) {
    e.preventDefault();
    var path = chatMessagesPath();
    if (!path) return;
    var text = (state.chatInput || "").trim();
    if (text.length > MAX_CHAT_MESSAGE_LEN) {
      setMessage("Messaggio troppo lungo (max " + MAX_CHAT_MESSAGE_LEN + " caratteri).", "error");
      return;
    }
    if (state.pendingChatMedia) { confirmSendChatMedia(text); return; }
    if (!text) return;
    var msgId = genId();
    var msg = { id: msgId, from: state.currentUser, type: "text", text: text, created: Date.now() };
    setState({ chatInput: "" });
    render();
    dbSet(path + "/" + msgId, msg).catch(function (err) {
      /* invio fallito: ripristina il testo digitato, altrimenti andrebbe perso */
      setState({ chatInput: text });
      setMessage(dbErrorMessage(err, "Errore invio: " + err.message), "error");
    });
  }
  /* selezione di una foto o di un video da inviare in chat: NON viene inviato subito.
     Viene solo preparata un'anteprima (state.pendingChatMedia); l'invio vero parte
     solo quando l'utente conferma con confirmSendChatMedia() */
  function handleChatMediaChange(e) {
    var file = e.target.files && e.target.files[0];
    e.target.value = "";
    if (!file) return;
    var isImg = file.type && file.type.indexOf("image/") === 0;
    var isVid = file.type && file.type.indexOf("video/") === 0;
    if (!isImg && !isVid) { setMessage("Seleziona un'immagine o un video.", "error"); return; }
    if (state.pendingChatMedia && state.pendingChatMedia.previewUrl) { URL.revokeObjectURL(state.pendingChatMedia.previewUrl); }
    var previewUrl = URL.createObjectURL(file);
    setState({ pendingChatMedia: { file: file, previewUrl: previewUrl, type: isVid ? "video" : "image" } });
    render();
  }
  /* annulla l'allegato in attesa: niente viene inviato */
  function cancelChatMedia() {
    if (state.pendingChatMedia && state.pendingChatMedia.previewUrl) { URL.revokeObjectURL(state.pendingChatMedia.previewUrl); }
    setState({ pendingChatMedia: null });
    render();
  }
  /* invio effettivo dell'allegato: parte quando l'utente preme il tasto di invio
     principale della chat (vedi sendChatMessage). followUpText e' l'eventuale testo
     scritto insieme alla foto/video: viene inviato come messaggio a parte subito dopo,
     cosi' funziona anche da didascalia senza dover cambiare il formato dei messaggi */
  function confirmSendChatMedia(followUpText) {
    var pending = state.pendingChatMedia;
    var path = chatMessagesPath();
    if (!pending || !path || state.chatMediaSending) return;
    var file = pending.file, msgId = genId();
    setState({ pendingChatMedia: null, chatMediaSending: true, chatInput: "" });
    render();
    var finish = function () {
      if (pending.previewUrl) URL.revokeObjectURL(pending.previewUrl);
      setState({ chatMediaSending: false });
      render();
      if (followUpText) {
        var textMsgId = genId();
        var textMsg = { id: textMsgId, from: state.currentUser, type: "text", text: followUpText, created: Date.now() };
        dbSet(path + "/" + textMsgId, textMsg).catch(function (err) {
          setMessage(dbErrorMessage(err, "Errore invio: " + err.message), "error");
        });
      }
    };
    if (pending.type === "video") {
      var reader = new FileReader();
      reader.onload = function (ev) {
        var msg = { id: msgId, from: state.currentUser, type: "video", url: ev.target.result, created: Date.now() };
        dbSet(path + "/" + msgId, msg).catch(function (err) { setMessage(dbErrorMessage(err, "Errore invio: " + err.message), "error"); }).then(finish, finish);
      };
      reader.onerror = function () { setMessage("Impossibile leggere il video.", "error"); finish(); };
      reader.readAsDataURL(file);
    } else {
      resizeImageFile(file, MAX_CHAT_MEDIA_DIM, 0.65).then(function (blob) {
        var reader = new FileReader();
        reader.onload = function (ev) {
          var msg = { id: msgId, from: state.currentUser, type: "image", url: ev.target.result, created: Date.now() };
          dbSet(path + "/" + msgId, msg).catch(function (err) { setMessage(dbErrorMessage(err, "Errore invio: " + err.message), "error"); }).then(finish, finish);
        };
        reader.readAsDataURL(blob);
      }).catch(function (err) { setMessage("Errore: " + err.message, "error"); finish(); });
    }
  }
  function viewChatMedia(msgId) {
    var msg = getItemById(msgId, state.chatMessages);
    if (!msg) return;
    setState({ lightbox: { item: null, photos: [{ url: msg.url, type: msg.type === "video" ? "video" : "image" }], index: 0 } });
    render();
  }
  function formatChatTime(ts) {
    if (!ts) return "";
    var d = new Date(ts);
    var hh = d.getHours().toString().padStart(2, "0");
    var mm = d.getMinutes().toString().padStart(2, "0");
    return hh + ":" + mm;
  }

  /* ============ gruppi ============ */
  function openGroupModal() { setState({ showGroupModal: true, newGroupName: "", newGroupMembers: [] }); render(); }
  function closeGroupModal() { setState({ showGroupModal: false }); render(); }
  function toggleGroupMember(username) {
    var i = state.newGroupMembers.indexOf(username);
    if (i >= 0) state.newGroupMembers.splice(i, 1); else state.newGroupMembers.push(username);
    render();
  }
  function submitCreateGroup(e) {
    e.preventDefault();
    var name = (state.newGroupName || "").trim();
    if (!name) { setMessage("Inserisci un nome per il gruppo.", "error"); return; }
    if (!state.newGroupMembers.length) { setMessage("Seleziona almeno un amico.", "error"); return; }
    var group = { id: genId(), name: name, owner: state.currentUser, members: [state.currentUser].concat(state.newGroupMembers), created: Date.now() };
    dbSet("groups/" + group.id, group).then(function () {
      setState({ showGroupModal: false, newGroupName: "", newGroupMembers: [] });
      setMessage("Gruppo creato!", "success");
      loadGroups();
      setState({ groups: state.groups.concat([group]) });
      openGroupChat(group.id);
    }).catch(function (err) { setMessage("Errore: " + dbErrorMessage(err, err.message), "error"); });
  }
  function leaveGroup(groupId) {
    if (!confirm("Uscire da questo gruppo?")) return;
    dbGet("groups/" + groupId).then(function (g) {
      if (!g) return;
      var members = toArray(g.members).filter(function (m) { return !sameUser(m, state.currentUser); });
      if (!members.length) return fbDb.ref("groups/" + groupId).remove();
      g.members = members;
      return dbSet("groups/" + groupId, g);
    }).then(function () {
      setMessage("Hai lasciato il gruppo.", "success");
      closeChat();
      loadGroups();
    }).catch(function (err) { setMessage("Errore: " + err.message, "error"); });
  }

  /* ============ trades ============ */
  function toggleWant(id) { var i = state.wantIds.indexOf(id); if (i >= 0) state.wantIds.splice(i, 1); else state.wantIds.push(id); render(); }
  /* offrire in scambio l'oggetto attualmente usato come immagine profilo e' consentito
     (l'utente potrebbe volerlo comunque), ma avvisiamo prima: se lo scambio va a buon
     fine, l'immagine profilo passa automaticamente al prossimo oggetto in inventario. */
  function toggleOffer(id) {
    var i = state.offerIds.indexOf(id);
    if (i >= 0) { state.offerIds.splice(i, 1); render(); return; }
    if (id === profileItemId(state.inventory)) {
      var ok = confirm("Questo oggetto è la tua immagine profilo attuale: se lo scambi, l'immagine profilo passerà automaticamente al prossimo oggetto in inventario. Continuare?");
      if (!ok) return;
    }
    state.offerIds.push(id);
    render();
  }
  /* nomi degli oggetti selezionati, salvati nella proposta cosi' restano leggibili anche se l'oggetto viene poi modificato o eliminato */
  function namesForIds(ids, arr) {
    return ids.map(function (id) { var it = getItemById(id, arr); return it ? it.name : "?"; });
  }
  /* verifica che tutti gli id selezionati corrispondano ancora a oggetti esistenti e disponibili
     (un oggetto puo' essere stato reso non disponibile o eliminato tra la selezione e l'invio).
     Usata per gli oggetti che si VOGLIONO ricevere: quelli devono essere disponibili. */
  function idsStillAvailable(ids, arr) {
    return ids.every(function (id) { var it = getItemById(id, arr); return it && isAvailable(it); });
  }
  /* verifica solo che gli id esistano ancora (non richiede che siano "disponibili").
     Usata per gli oggetti OFFERTI: il proprietario puo' proporre in scambio anche un
     oggetto che ha segnato come "non disponibile" (es. lo tiene nascosto dalla community
     ma vuole comunque offrirlo a un amico specifico). */
  function idsStillExist(ids, arr) {
    return ids.every(function (id) { return !!getItemById(id, arr); });
  }

  /* durata di una proposta di scambio: state.tradeDuration e' la stringa scelta nel form
     ("" = nessuna scadenza, di default), un numero di giorni come stringa ("1","3",...),
     oppure un numero di ORE seguito da "h" ("1h","6h",...) per scadenze piu' brevi.
     Restituisce il timestamp di scadenza, o null se la proposta non scade mai. */
  function computeTradeExpiry() {
    var raw = state.tradeDuration || "";
    if (!raw) return null;
    if (raw.slice(-1) === "h") {
      var hours = parseInt(raw, 10);
      return (hours && hours > 0) ? Date.now() + hours * 60 * 60 * 1000 : null;
    }
    var days = parseInt(raw, 10);
    return (days && days > 0) ? Date.now() + days * 24 * 60 * 60 * 1000 : null;
  }
  /* true se una proposta ha una scadenza, non e' ancora stata accettata/rifiutata,
     ed e' passata la scadenza */
  function isTradeExpired(t) {
    return !!(t && t.expiresAt && !t.accepted && !t.declined && !t.cancelled && Date.now() > t.expiresAt);
  }
  /* formatta la data/ora di scadenza di una proposta come "gg/mm alle hh:mm" */
  function formatTradeExpiry(ts) {
    if (!ts) return "";
    var d = new Date(ts);
    var gg = d.getDate().toString().padStart(2, "0");
    var mm = (d.getMonth() + 1).toString().padStart(2, "0");
    var hh = d.getHours().toString().padStart(2, "0");
    var mi = d.getMinutes().toString().padStart(2, "0");
    return gg + "/" + mm + " alle " + hh + ":" + mi;
  }
  /* badge evidenziato con la data di scadenza di una proposta di scambio, se ne ha una:
     usato sia nella card di scambio in chat sia nella schermata "Scambi", cosi' la
     scadenza si nota subito e non solo dallo stato "In attesa"/"Scaduto". Ambra finche'
     il termine non e' passato, rosso una volta scaduta. */
  function renderTradeExpiryBadge(t, cssClass) {
    if (!t || !t.expiresAt) return "";
    var expired = isTradeExpired(t);
    var label = (expired ? "Scaduta il " : "Scade il ") + formatTradeExpiry(t.expiresAt);
    return '<div class="' + cssClass + (expired ? " is-expired" : "") + '">' + icon("clock") + ' ' + label + '</div>';
  }

  /* proporre uno scambio dall'inventario di un utente (tab Community, non dalla chat):
     la proposta finisce comunque come messaggio nella chat con quella persona, cosi' la
     notifica (e le azioni Accetta/Rifiuta, con stato aggiornato in tempo reale) si vedono
     sempre in chat, indipendentemente da dove e' stato avviato lo scambio */
  function submitTrade() {
    if (!state.selectedUser) return;
    if (!state.wantIds.length || !state.offerIds.length) { setMessage("Seleziona cosa vuoi e cosa offri.", "error"); return; }
    if (!idsStillAvailable(state.wantIds, state.otherUserInventory) || !idsStillExist(state.offerIds, state.inventory)) {
      setMessage("Alcuni oggetti selezionati non sono più disponibili. Aggiorna la selezione.", "error");
      return;
    }
    var wantNames = namesForIds(state.wantIds, state.otherUserInventory);
    var offerNames = namesForIds(state.offerIds, state.inventory);
    var trade = {
      id: genId(),
      /* field names must match the DB rules: fromUser / toUser (come friendRequests) */
      fromUser: state.currentUser,
      toUser: state.selectedUser,
      wantIds: state.wantIds,
      offerIds: state.offerIds,
      wantNames: wantNames,
      offerNames: offerNames,
      created: Date.now(),
      expiresAt: computeTradeExpiry(),
      accepted: false,
      declined: false
    };
    var chatPath = "chats/" + chatIdFor(state.currentUser, state.selectedUser) + "/messages";
    dbSet("trades/" + trade.id, trade).then(function () {
      setState({ showTradeBuilder: false, wantIds: [], offerIds: [], tradeDuration: "" });
      setMessage("Scambio proposto!", "success");
      loadTrades();
      var msgId = genId();
      var msg = { id: msgId, from: state.currentUser, type: "trade", tradeId: trade.id, wantNames: wantNames, offerNames: offerNames, created: Date.now() };
      return dbSet(chatPath + "/" + msgId, msg);
    }).catch(function (err) { setMessage("Errore: " + err.message, "error"); });
  }

  /* ============ proposta di scambio dalla chat ============ */
  function openChatTradeBuilder() {
    if (!state.chatTarget || state.chatTarget.type !== "friend") return;
    setState({ showChatTradeBuilder: true, wantIds: [], offerIds: [], chatOtherInventory: [], tradeDuration: "" });
    render();
    getInventory(state.chatTarget.id.toLowerCase()).then(function (inv) {
      setState({ chatOtherInventory: inv });
      render();
    });
  }
  function closeChatTradeBuilder() { setState({ showChatTradeBuilder: false, wantIds: [], offerIds: [], tradeDuration: "" }); render(); }
  function submitChatTrade() {
    if (!state.chatTarget || state.chatTarget.type !== "friend") return;
    if (!state.wantIds.length || !state.offerIds.length) { setMessage("Seleziona cosa vuoi e cosa offri.", "error"); return; }
    if (!idsStillAvailable(state.wantIds, state.chatOtherInventory) || !idsStillExist(state.offerIds, state.inventory)) {
      setMessage("Alcuni oggetti selezionati non sono più disponibili. Aggiorna la selezione.", "error");
      return;
    }
    var wantNames = namesForIds(state.wantIds, state.chatOtherInventory);
    var offerNames = namesForIds(state.offerIds, state.inventory);
    var trade = {
      id: genId(),
      /* field names must match the DB rules: fromUser / toUser (come friendRequests) */
      fromUser: state.currentUser,
      toUser: state.chatTarget.id,
      wantIds: state.wantIds,
      offerIds: state.offerIds,
      wantNames: wantNames,
      offerNames: offerNames,
      created: Date.now(),
      expiresAt: computeTradeExpiry(),
      accepted: false,
      declined: false
    };
    var path = chatMessagesPath();
    dbSet("trades/" + trade.id, trade).then(function () {
      setState({ showChatTradeBuilder: false, wantIds: [], offerIds: [], tradeDuration: "" });
      setMessage("Scambio proposto!", "success");
      loadTrades();
      if (path) {
        var msgId = genId();
        var msg = { id: msgId, from: state.currentUser, type: "trade", tradeId: trade.id, wantNames: wantNames, offerNames: offerNames, created: Date.now() };
        return dbSet(path + "/" + msgId, msg);
      }
    }).catch(function (err) { setMessage("Errore: " + err.message, "error"); });
  }

  /* id degli scambi attualmente in elaborazione: evita che un doppio click (o un tap
     multi-touch) su "Accetta" avvii due volte lo spostamento degli oggetti */
  var tradeInFlight = {};
  function respondTrade(tradeId, accept) {
    if (tradeInFlight[tradeId]) return;
    tradeInFlight[tradeId] = true;
    dbGet("trades/" + tradeId).then(function (trade) {
      if (!trade) return null;
      if (trade.accepted || trade.declined || trade.cancelled) {
        /* lo scambio e' gia' stato gestito nel frattempo (doppio click, o l'altra
           parte/un altro dispositivo ha gia' risposto, o e' stato annullato): non rielaborarlo */
        setMessage("Questo scambio è già stato gestito.", "error");
        loadTrades();
        return null;
      }
      if (!accept) {
        trade.accepted = false;
        trade.declined = true;
        return dbSet("trades/" + tradeId, trade).then(function () {
          setMessage("Scambio rifiutato.", "success");
          sendTradeSystemMessage(trade, "Scambio rifiutato.");
          loadTrades();
        });
      }
      var fromU = (trade.fromUser || trade.from || "").toLowerCase();
      var toU = (trade.toUser || trade.to || "").toLowerCase();
      var wantIds = toArray(trade.wantIds); /* oggetti di toU che passano a fromU */
      var offerIds = toArray(trade.offerIds); /* oggetti di fromU che passano a toU */
      var fromMoved = false; /* true una volta che il primo trasferimento e' andato a buon fine */
      /* accettare uno scambio deve spostare fisicamente gli oggetti tra i due inventari,
         non solo segnare la proposta come accettata (vedi commento su "inventories" nelle
         regole del DB, che apre la scrittura incrociata proprio per questo motivo) */
      return Promise.all([getInventory(fromU), getInventory(toU)]).then(function (res) {
        var fromInv = res[0], toInv = res[1];
        var offerItems = offerIds.map(function (id) { return getItemById(id, fromInv); }).filter(Boolean);
        var wantItems = wantIds.map(function (id) { return getItemById(id, toInv); }).filter(Boolean);
        if (offerItems.length !== offerIds.length || wantItems.length !== wantIds.length) {
          throw new Error("Alcuni oggetti coinvolti non sono più disponibili: lo scambio non può essere completato.");
        }
        return updateInventory(fromU, function (inv) {
          return inv.filter(function (it) { return offerIds.indexOf(it.id) === -1; }).concat(wantItems);
        }).then(function () {
          fromMoved = true;
          return updateInventory(toU, function (inv) {
            return inv.filter(function (it) { return wantIds.indexOf(it.id) === -1; }).concat(offerItems);
          });
        }).catch(function (err) {
          if (!fromMoved) throw err;
          /* il primo trasferimento e' riuscito ma il secondo no: senza rimedio lo scambio
             resterebbe bloccato a meta' (un lato ha gia' perso/ricevuto oggetti, l'altro no,
             e un nuovo tentativo fallirebbe perche' gli oggetti non risultano piu' disponibili).
             Ripristiniamo quindi l'inventario di fromU come se nulla fosse avvenuto. */
          return updateInventory(fromU, function (inv) {
            return inv.filter(function (it) { return wantIds.indexOf(it.id) === -1; }).concat(offerItems);
          }).then(function () { throw err; }, function () { throw err; });
        });
      }).then(function () {
        trade.accepted = true;
        trade.declined = false;
        return dbSet("trades/" + tradeId, trade);
      }).then(function () {
        setMessage("Scambio accettato!", "success");
        sendTradeSystemMessage(trade, "Scambio accettato: gli oggetti sono stati scambiati.");
        loadTrades();
        loadInventory();
      });
    }).catch(function (err) {
      setMessage("Errore: " + err.message, "error");
    }).then(function () {
      delete tradeInFlight[tradeId];
    });
  }

  function cancelTrade(tradeId) {
    dbGet("trades/" + tradeId).then(function (trade) {
      if (!trade) return null;
      if (trade.accepted || trade.declined || trade.cancelled) {
        /* gia' concluso (o gia' annullato) nel frattempo, es. da un altro dispositivo:
           non sovrascrivere l'esito reale */
        setMessage("Questo scambio è già stato gestito.", "error");
        loadTrades();
        return null;
      }
      /* segniamo la proposta come annullata invece di cancellarla dal database (come
         gia' avviene per accettazione/rifiuto): se la rimuovessimo del tutto, la card
         di scambio gia' visibile in chat all'altra persona non avrebbe piu' modo di
         sapere che quella proposta non esiste piu' e resterebbe bloccata su "In attesa"
         con i pulsanti Accetta/Rifiuta ancora attivi (che fallirebbero se premuti) */
      trade.cancelled = true;
      return dbSet("trades/" + tradeId, trade).then(function () {
        setMessage("Scambio annullato.", "success");
        sendTradeSystemMessage(trade, "Scambio annullato.");
        loadTrades();
      });
    }).catch(function (err) { setMessage("Errore: " + err.message, "error"); });
  }

  /* ============ messaggio di sistema in chat per l'esito di uno scambio ============
     Oltre alla card "Proposta di scambio" gia' presente in chat (che aggiorna da sola
     il proprio stato leggendo la proposta via id), inviamo anche un messaggio a parte
     quando lo scambio viene accettato/rifiutato/annullato, cosi' resta ben visibile
     nel flusso della conversazione anche se la card e' scorsa piu' in alto. Non blocca
     l'operazione principale se l'invio fallisce (non e' un dato critico). */
  function sendTradeSystemMessage(trade, text) {
    var fromU = trade.fromUser || trade.from || "";
    var toU = trade.toUser || trade.to || "";
    if (!fromU || !toU) return;
    var path = "chats/" + chatIdFor(fromU, toU) + "/messages";
    var msgId = genId();
    var msg = { id: msgId, from: state.currentUser, type: "system", text: text, created: Date.now() };
    dbSet(path + "/" + msgId, msg).catch(function () { /* non critico: solo informativo */ });
  }

  /* ============ notifica in tempo reale per scambi accettati/rifiutati ============
     Resta in ascolto sul nodo "trades" per tutta la sessione (non solo quando si apre
     la tab Scambi): se uno scambio che coinvolge l'utente passa da "in attesa" a
     "accettato"/"rifiutato" - tipicamente perché l'altra persona ha risposto da un altro
     dispositivo/scheda - avvisa con un banner e ricarica automaticamente inventario e
     storico, cosi' non serve ricaricare manualmente la pagina per vedere l'esito. */
  var tradesLiveRef = null;
  var knownTradeStatus = {};
  var tradesLiveFirstSnapshot = true;
  function tradeStatusOf(t) { return t.accepted ? "accepted" : t.declined ? "declined" : t.cancelled ? "cancelled" : "pending"; }
  function attachTradesLiveWatch() {
    if (tradesLiveRef) return;
    tradesLiveRef = fbDb.ref("trades");
    tradesLiveFirstSnapshot = true;
    tradesLiveRef.on("value", function (snap) {
      var mine = toArray(snap.val()).filter(function (t) {
        var fromU = t.fromUser || t.from || "";
        var toU = t.toUser || t.to || "";
        return sameUser(fromU, state.currentUser) || sameUser(toU, state.currentUser);
      });
      /* al primissimo evento (appena ci si e' collegati) "mine" contiene tutti gli
         scambi gia' esistenti: li registriamo soltanto, senza trattarli come "nuovi"
         (altrimenti al login comparirebbe una notifica per ogni scambio passato) */
      var isFirstSnapshot = tradesLiveFirstSnapshot;
      tradesLiveFirstSnapshot = false;
      var justResolved = [];
      var hasNewIncoming = false;
      mine.forEach(function (t) {
        var prev = knownTradeStatus[t.id];
        var cur = tradeStatusOf(t);
        if (!isFirstSnapshot && prev === undefined) {
          /* proposta arrivata proprio ora (non solo un cambio di stato di una gia'
             conosciuta): senza questo controllo, chi ha gia' la tab Scambi aperta non
             vedrebbe mai una nuova proposta ricevuta finche' non cambia tab manualmente */
          hasNewIncoming = true;
        }
        if (prev === "pending" && cur !== "pending" && !tradeInFlight[t.id]) justResolved.push(t);
        knownTradeStatus[t.id] = cur;
      });
      if (justResolved.length) {
        /* aggiorna sempre stato scambi/inventario, cosi' anche la card di scambio gia'
           aperta in chat (che legge lo stato da state.allTrades) mostra subito l'esito
           reale invece di restare bloccata su "In attesa", qualunque sia l'esito */
        loadTrades();
        loadInventory();
        var accepted = justResolved.filter(function (t) { return t.accepted; }).length;
        var declined = justResolved.filter(function (t) { return t.declined; }).length;
        var cancelled = justResolved.filter(function (t) { return t.cancelled; }).length;
        var parts = [];
        if (accepted) parts.push(accepted === 1 ? "Uno scambio è stato accettato" : accepted + " scambi sono stati accettati");
        if (declined) parts.push(declined === 1 ? "uno scambio è stato rifiutato" : declined + " scambi sono stati rifiutati");
        if (cancelled) parts.push(cancelled === 1 ? "una proposta è stata annullata" : cancelled + " proposte sono state annullate");
        setMessage(parts.join(", ") + (accepted ? " — inventario aggiornato." : "."), accepted ? "success" : "error");
      } else if (hasNewIncoming) {
        /* nessun banner per non essere invadenti (la proposta compare gia' come card
           in chat, che ha il suo listener dedicato): qui basta aggiornare in silenzio
           la tab Scambi, se e' quella aperta in questo momento */
        loadTrades();
      }
    }, function (err) {
      setMessage(dbErrorMessage(err, "Errore aggiornamento scambi: " + err.message), "error");
    });
  }
  function detachTradesLiveWatch() {
    if (tradesLiveRef) { tradesLiveRef.off("value"); tradesLiveRef = null; }
    knownTradeStatus = {};
    tradesLiveFirstSnapshot = true;
  }

  /* ============ timer di scadenza scambi ============
     isTradeExpired confronta Date.now() con expiresAt, ma viene ricalcolato solo quando
     render() gira per un altro motivo (un click, un nuovo messaggio, il listener live
     degli scambi...): se nel frattempo nessuno tocca nulla, una proposta che scade resta
     mostrata "In attesa" finche' qualcuno non interagisce con la pagina. Ogni tot secondi
     controlliamo se l'insieme delle proposte pendenti appena scadute e' cambiato rispetto
     all'ultimo controllo, e solo in quel caso chiamiamo render() (ora sicuro anche a
     intervalli regolari, perche' render() preserva scroll/focus): cosi' lo stato "Scaduto"
     compare da solo, senza ridisegnare in continuazione quando non serve. */
  var TRADE_EXPIRY_CHECK_MS = 30000;
  var lastExpiredTradeIds = "";
  function checkTradeExpiries() {
    if (!state.currentUser) return;
    var pending = (state.allTrades || []).filter(function (t) {
      return t && t.expiresAt && !t.accepted && !t.declined && !t.cancelled;
    });
    if (!pending.length) return;
    var expiredIds = pending.filter(isTradeExpired).map(function (t) { return t.id; }).sort().join(",");
    if (expiredIds !== lastExpiredTradeIds) {
      lastExpiredTradeIds = expiredIds;
      render();
    }
  }
  setInterval(checkTradeExpiries, TRADE_EXPIRY_CHECK_MS);

  /* ============ lightbox ============ */
  function viewPhotos(itemId, source) {
    var sourceArr = source === "other" ? state.otherUserInventory : state.inventory;
    var item = getItemById(itemId, sourceArr);
    if (!item) return;
    setState({ lightbox: { item: item, photos: itemPhotos(item), index: 0 } });
    render();
  }
  function closeLightbox() { setState({ lightbox: null }); render(); }
  function lightboxStep(dir) { if (state.lightbox) { state.lightbox.index = (state.lightbox.index + dir + state.lightbox.photos.length) % state.lightbox.photos.length; render(); } }

  /* ============ search & filter ============ */
  function clearSearch(target) {
    if (target === "community") { setState({ communitySearch: "" }); render(); }
    else if (target === "inventory") { setState({ inventorySearch: "" }); render(); }
    /* "history"/"historyFilters" ricalcolano subito state.history (updateHistory chiama
       gia' render() al suo interno), altrimenti il pulsante "cancella" azzererebbe lo
       stato del filtro senza aggiornare la lista mostrata */
    else if (target === "history") { setState({ historySearch: "", historyLimit: HISTORY_PAGE }); updateHistory(); }
    else if (target === "historyFilters") { setState({ historyUserFilter: "", historyDateFrom: "", historyDateTo: "", historyLimit: HISTORY_PAGE }); updateHistory(); }
    else if (target === "otherInventory") { setState({ otherUserSearch: "" }); render(); }
  }
  function syncSearchBox(el) { if (el && el.parentElement) { el.parentElement.classList.toggle("search-active", el.value.length > 0); } }
  function updateInventoryResults() {
    render();
  }

  /* ============ render ============ */
  function renderAddItemModal() {
    var photos = state.newItemPhotos;
    return '' +
      '<div id="add-item-overlay" class="modal-overlay" data-action="close-add-item"></div>' +
      '<div class="modal">' +
      '<div class="modal-header"><h2>Aggiungi Oggetto</h2><button type="button" data-action="close-add-item" class="btn-close">' + icon("x") + '</button></div>' +
      '<form id="add-item-form" class="modal-body">' +
      '<div class="field"><label>Nome</label><input id="new-item-name" type="text" placeholder="Es: Bicicletta blu" value="' + escapeHtml(state.newItemName) + '"/></div>' +
      '<div class="photos-section"><label>Foto (' + photos.length + '/' + MAX_ITEM_PHOTOS + ')</label>' +
      '<div class="photos-grid">' + photos.map(function (p, idx) {
        var url = photoUrl(p), vid = isVideo(p), isCover = idx === 0;
        return '<div class="photo-thumb' + (isCover ? " is-cover" : "") + '">' +
          (vid ? '<video src="' + escapeHtml(url) + '" class="photo-thumb-video" muted playsinline preload="metadata"></video>'
               : '<div style="background-image:url(' + escapeHtml(url) + ');width:100%;height:100%;background-size:cover;background-position:center;border-radius:inherit"></div>') +
          (isCover ? '<div class="photo-cover-badge" title="Immagine di copertina">' + icon("star") + '</div>' : "") +
          '<div class="photo-thumb-actions">' +
          (idx > 0 ? '<button type="button" data-action="move-photo-left" data-index="' + idx + '" class="btn-move-photo" title="Sposta prima">' + icon("chevron-left") + '</button>' : '<span class="btn-move-photo-spacer"></span>') +
          (idx < photos.length - 1 ? '<button type="button" data-action="move-photo-right" data-index="' + idx + '" class="btn-move-photo" title="Sposta dopo">' + icon("chevron-left", "icon-flip-h") + '</button>' : '<span class="btn-move-photo-spacer"></span>') +
          '</div>' +
          '<button type="button" data-action="remove-photo" data-index="' + idx + '" class="btn-remove-photo">' + icon("x") + '</button></div>';
      }).join("") +
      (photos.length < MAX_ITEM_PHOTOS ? '<label class="photo-upload"><input type="file" id="photo-input" accept="image/*,video/*" multiple style="display:none"/>' + icon("image") + ' Carica foto/video</label>' : '') +
      '</div>' + (photos.length > 1 ? '<p class="photos-hint">La prima foto è l\'immagine di copertina: usa le frecce per riordinarle.</p>' : '') + '</div>' +
      '<div class="modal-footer"><button type="submit" class="btn-primary block">Aggiungi</button></div>' +
      '</form></div>';
  }

  function renderEditItemModal() {
    var photos = state.editItemPhotos;
    return '' +
      '<div id="edit-item-overlay" class="modal-overlay" data-action="close-edit-item"></div>' +
      '<div class="modal">' +
      '<div class="modal-header"><h2>Modifica Oggetto</h2><button type="button" data-action="close-edit-item" class="btn-close">' + icon("x") + '</button></div>' +
      '<form id="edit-item-form" class="modal-body">' +
      '<div class="field"><label>Nome</label><input id="edit-item-name" type="text" placeholder="Es: Bicicletta blu" value="' + escapeHtml(state.editItemName) + '"/></div>' +
      '<div class="photos-section"><label>Foto (' + photos.length + '/' + MAX_ITEM_PHOTOS + ')</label>' +
      '<div class="photos-grid">' + photos.map(function (p, idx) {
        var url = photoUrl(p), vid = isVideo(p), isCover = idx === 0;
        return '<div class="photo-thumb' + (isCover ? " is-cover" : "") + '">' +
          (vid ? '<video src="' + escapeHtml(url) + '" class="photo-thumb-video" muted playsinline preload="metadata"></video>'
               : '<div style="background-image:url(' + escapeHtml(url) + ');width:100%;height:100%;background-size:cover;background-position:center;border-radius:inherit"></div>') +
          (isCover ? '<div class="photo-cover-badge" title="Immagine di copertina">' + icon("star") + '</div>' : "") +
          '<div class="photo-thumb-actions">' +
          (idx > 0 ? '<button type="button" data-action="move-edit-photo-left" data-index="' + idx + '" class="btn-move-photo" title="Sposta prima">' + icon("chevron-left") + '</button>' : '<span class="btn-move-photo-spacer"></span>') +
          (idx < photos.length - 1 ? '<button type="button" data-action="move-edit-photo-right" data-index="' + idx + '" class="btn-move-photo" title="Sposta dopo">' + icon("chevron-left", "icon-flip-h") + '</button>' : '<span class="btn-move-photo-spacer"></span>') +
          '</div>' +
          '<button type="button" data-action="remove-edit-photo" data-index="' + idx + '" class="btn-remove-photo">' + icon("x") + '</button></div>';
      }).join("") +
      (photos.length < MAX_ITEM_PHOTOS ? '<label class="photo-upload"><input type="file" id="photo-input-edit" accept="image/*,video/*" multiple style="display:none"/>' + icon("image") + ' Carica foto/video</label>' : '') +
      '</div>' + (photos.length > 1 ? '<p class="photos-hint">La prima foto è l\'immagine di copertina: usa le frecce per riordinarle.</p>' : '') + '</div>' +
      '<div class="modal-footer"><button type="submit" class="btn-primary block">Salva Modifiche</button></div>' +
      '</form></div>';
  }

  function renderLightbox() {
    if (!state.lightbox) return "";
    var lb = state.lightbox, p = lb.photos[lb.index];
    var mediaHtml = isVideo(p)
      ? '<video src="' + escapeHtml(photoUrl(p)) + '" class="lightbox-video" controls autoplay loop></video>'
      : '<img src="' + escapeHtml(photoUrl(p)) + '" alt="' + escapeHtml(lb.item ? lb.item.name : "") + '"/>';
    return '' +
      '<div id="lightbox-overlay" class="lightbox-overlay"></div>' +
      '<div class="lightbox">' +
      (lb.photos.length > 1 ? '<button type="button" data-action="lightbox-prev" class="lightbox-btn prev">' + icon("chevron-left") + '</button>' : '') +
      mediaHtml +
      (lb.photos.length > 1 ? '<button type="button" data-action="lightbox-next" class="lightbox-btn next">' + icon("chevron-left", "icon-flip-h") + '</button>' : '') +
      '<button type="button" data-action="close-lightbox" class="lightbox-close">' + icon("x") + '</button>' +
      '<div class="lightbox-counter">' + (lb.index + 1) + '/' + lb.photos.length + '</div></div>';
  }

  /* card compatta (con miniatura) usata nelle liste di selezione degli scambi
     ("Voglio" / "Offro"), cosi' si riconoscono gli oggetti anche solo dalla foto.
     showAvailability: se true e l'oggetto e' segnato "non disponibile" mostra un'etichetta
     (usato per la propria lista "Offro", dove si puo' scegliere anche un oggetto non disponibile) */
  function renderTradeItemCard(item, selected, action, showAvailability) {
    var photos = itemPhotos(item);
    var thumbHtml;
    if (photos.length) {
      var fp = photos[0];
      thumbHtml = isVideo(fp)
        ? '<video src="' + escapeHtml(photoUrl(fp)) + '" class="trade-item-thumb-media" muted playsinline preload="metadata"></video>'
        : '<img src="' + escapeHtml(photoUrl(fp)) + '" alt="" class="trade-item-thumb-media"/>';
    } else {
      thumbHtml = icon("package");
    }
    var unavailable = showAvailability && !isAvailable(item);
    /* showAvailability e' vero solo per la lista "Offro" (i propri oggetti): li' ha senso
       segnalare se quell'oggetto e' l'attuale immagine profilo, cosi' si sa a colpo
       d'occhio a cosa si va incontro selezionandolo (vedi anche l'avviso in toggleOffer) */
    var isProfile = showAvailability && item.id === profileItemId(state.inventory);
    return '<div class="trade-item ' + (selected ? "selected" : "") + (unavailable ? " trade-item-unavail" : "") + '" data-action="' + action + '" data-id="' + escapeHtml(item.id) + '">' +
      '<div class="trade-item-thumb' + (photos.length ? "" : " empty") + '">' + thumbHtml + '</div>' +
      '<span class="trade-item-name">' + escapeHtml(item.name) + (unavailable ? ' <span class="trade-item-badge">non disponibile</span>' : '') + (isProfile ? ' <span class="trade-item-badge trade-item-badge-profile">' + icon("star") + ' profilo</span>' : '') + '</span>' +
      (selected ? icon("check") : '') +
      '</div>';
  }

  /* selettore durata riusato in entrambi i form di proposta scambio (community e chat).
     Default "" = nessuna scadenza (infinita), coerente con lo stato iniziale del form. */
  function renderTradeDurationField() {
    var opts = [
      ["", "Nessuna scadenza"],
      ["1h", "1 ora"], ["3h", "3 ore"], ["6h", "6 ore"], ["12h", "12 ore"],
      ["1", "24 ore"], ["3", "3 giorni"], ["7", "7 giorni"], ["14", "14 giorni"], ["30", "30 giorni"]
    ];
    return '<div class="field trade-duration-field"><label>Durata della proposta</label><select id="trade-duration">' +
      opts.map(function (o) { return '<option value="' + o[0] + '"' + (state.tradeDuration === o[0] ? " selected" : "") + '>' + o[1] + '</option>'; }).join("") +
      '</select></div>';
  }

  /* id del primo oggetto dell'inventario (indipendentemente dal fatto che sia segnato
     come disponibile o no): e' la sua foto ad essere usata come "immagine profilo"
     dell'utente ovunque nella community (vedi loadCommunity: firstItem = allInv[0], non
     filtrato per disponibilita'). Usare "Profilo" su un altro oggetto (setAsProfileItem)
     cambia quindi anche l'immagine profilo mostrata agli altri, e va bene assegnarla
     anche a un oggetto non disponibile. */
  function profileItemId(inv) {
    return (inv && inv[0]) ? inv[0].id : null;
  }

  /* ============ immagine profilo di un utente, riusata ovunque fuori dalla Community ============
     state.communityUsers (caricato da loadCommunity all'accesso) contiene gia', per ogni
     ALTRO utente registrato, il suo "firstItem" (il primo oggetto d'inventario, da cui si
     prende la foto/copertina). Qui la riusiamo per mostrare la vera immagine profilo anche
     in chat, lista amici, suggerimenti amicizia e membri di un gruppo, invece della sola
     iconcina generica. Per l'utente stesso (mai presente in communityUsers, che esclude
     sempre currentUser) si usa direttamente state.inventory con ownAvatarHtml(). */
  function findCommunityUserPhoto(username) {
    var uLower = String(username || "").toLowerCase();
    var u = (state.communityUsers || []).filter(function (x) { return x.uLower === uLower; })[0];
    if (!u || !u.firstItem) return null;
    var photos = itemPhotos(u.firstItem);
    return photos.length ? photos[0] : null;
  }
  /* contenuto interno (img/video oppure icona di scorta) per l'avatar di un utente */
  function userAvatarInner(username) {
    var p = findCommunityUserPhoto(username);
    if (!p) return icon("user");
    return isVideo(p)
      ? '<video src="' + escapeHtml(photoUrl(p)) + '" muted playsinline preload="metadata"></video>'
      : '<img src="' + escapeHtml(photoUrl(p)) + '" alt=""/>';
  }
  /* div .chat-avatar completo per un utente, con la foto se disponibile */
  function userAvatarHtml(username, extraClass) {
    var hasPhoto = !!findCommunityUserPhoto(username);
    var cls = "chat-avatar" + (hasPhoto ? " chat-avatar--photo" : "") + (extraClass ? " " + extraClass : "");
    return '<div class="' + cls + '">' + userAvatarInner(username) + '</div>';
  }
  /* avatar di un gruppo: una "pila" con le foto profilo dei primi 2 membri (quelle
     disponibili), cosi' si riconosce a colpo d'occhio anche nella lista chat, invece della
     sola iconcina "persone". Se nessun membro ha una foto, resta l'iconcina generica. */
  function groupAvatarHtml(members) {
    var ms = toArray(members).slice(0, 2);
    if (!ms.length) return '<div class="chat-avatar group">' + icon("users") + '</div>';
    return '<div class="chat-avatar-stack">' + ms.map(function (uname) {
      var hasPhoto = !!findCommunityUserPhoto(uname);
      return '<div class="chat-avatar' + (hasPhoto ? " chat-avatar--photo" : "") + '">' + userAvatarInner(uname) + '</div>';
    }).join("") + '</div>';
  }
  /* immagine profilo dell'utente che ha effettuato l'accesso (usata nell'header dell'app):
     a differenza di userAvatarHtml, qui la foto si prende da state.inventory (gia' in
     memoria), non da communityUsers (che non include mai se stessi) */
  function ownAvatarHtml() {
    var first = state.inventory && state.inventory[0];
    var photos = first ? itemPhotos(first) : [];
    if (!photos.length) return '<span class="profile-btn-avatar">' + icon("user") + '</span>';
    var p = photos[0];
    var inner = isVideo(p)
      ? '<video src="' + escapeHtml(photoUrl(p)) + '" muted playsinline preload="metadata"></video>'
      : '<img src="' + escapeHtml(photoUrl(p)) + '" alt=""/>';
    return '<span class="profile-btn-avatar profile-btn-avatar--photo">' + inner + '</span>';
  }

  function renderInventoryItem(item, isOwn, reorder) {
    var av = isAvailable(item), photos = itemPhotos(item);
    var isProfile = isOwn && reorder && reorder.profileId === item.id;
    var html = '<div class="item-card ' + (av ? "" : "unavailable") + '">';
    if (photos.length) {
      var firstPhoto = photos[0];
      var firstUrl = photoUrl(firstPhoto);
      var firstIsVideo = isVideo(firstPhoto);
      html += '<div class="item-photo" data-action="view-photos" data-id="' + escapeHtml(item.id) + '" data-source="' + (isOwn ? "own" : "other") + '">' +
        (photos.length > 1 ? '<div class="photo-badge">' + photos.length + '</div>' : '') +
        (isProfile ? '<div class="item-profile-badge" title="Immagine profilo: e\' quella mostrata agli altri in Community">' + icon("star") + ' Profilo</div>' : '') +
        (firstIsVideo
          ? '<video src="' + escapeHtml(firstUrl) + '" class="item-thumb-video" muted playsinline preload="metadata"></video>'
          : '<img src="' + escapeHtml(firstUrl) + '" alt=""/>') +
        '</div>';
    } else { html += '<div class="item-photo-empty">' + icon("package") + '</div>'; }
    html += '<div class="item-info"><div class="item-header"><h3>' + escapeHtml(item.name) + '</h3>';
    if (isOwn) {
      html += '<div class="item-actions">' +
        '<button type="button" data-action="open-edit-item" data-id="' + escapeHtml(item.id) + '" class="btn-icon" title="Modifica">' + icon("edit") + '</button>' +
        '<button type="button" data-action="delete-item" data-id="' + escapeHtml(item.id) + '" class="btn-icon" title="Elimina">' + icon("trash") + '</button>' +
        '</div>';
    }
    html += '</div>';
    if (isOwn && reorder && !isProfile) {
      /* unica azione possibile sulla posizione: portare subito questo oggetto come
         immagine profilo (prima posizione). Nessun riordino libero degli altri oggetti. */
      html += '<div class="item-reorder">' +
        '<button type="button" data-action="set-profile-item" data-id="' + escapeHtml(item.id) + '" class="btn-move-item btn-set-profile" title="Imposta come immagine profilo">' + icon("star") + ' Imposta come profilo</button>' +
        '</div>';
    }
    if (isOwn) {
      html += '<label class="avail-toggle"><input type="checkbox" data-id="' + escapeHtml(item.id) + '" ' + (av ? "checked" : "") + '><span>' + (av ? "Disponibile" : "Non disponibile") + '</span></label>';
    }
    html += '</div></div>';
    return html;
  }

  function renderInventoryTab() {
    var search = (state.inventorySearch || "").toLowerCase();
    var filtered = state.inventory.filter(function (i) { return !search || i.name.toLowerCase().indexOf(search) !== -1; });
    var html = '<div class="page-header"><h2>Il mio inventario</h2><button type="button" data-action="open-add-item" class="btn-primary">' + icon("plus") + ' Aggiungi</button></div>';
    if (state.inventory.length === 0) {
      html += '<div class="empty-state"><p>Nessun oggetto. Aggiungi il primo!</p></div>';
    } else {
      html += '<div class="search-box-wrap"><input type="text" id="inventory-search" placeholder="Cerca..." value="' + escapeHtml(state.inventorySearch) + '"/>' + (state.inventorySearch ? '<button type="button" data-action="clear-search" data-target="inventory" class="btn-clear">' + icon("x") + '</button>' : '') + '</div>';
      var canSetProfile = !search && state.inventory.length > 1;
      var profileId = profileItemId(state.inventory);
      if (canSetProfile) { html += '<p class="photos-hint">Usa "Imposta come profilo" su un oggetto per usarlo come immagine profilo: è quella dell\'oggetto in prima posizione, mostrata agli altri ovunque nell\'app.</p>'; }
      html += '<div class="items-grid">' + filtered.map(function (item) {
        var reorder = canSetProfile ? { profileId: profileId } : null;
        return renderInventoryItem(item, true, reorder);
      }).join("") + '</div>';
      if (filtered.length === 0) { html += '<div class="empty-state"><p>Nessun risultato.</p></div>'; }
    }
    return html;
  }

  function renderCommunityTab() {
    var search = (state.communitySearch || "").toLowerCase();
    var users = state.communityUsers || [];
    var filtered = users.filter(function (u) { return !search || u.username.toLowerCase().indexOf(search) !== -1; });
    var html = '<div class="page-header"><h2>Community</h2>';
    html += '<button type="button" data-action="refresh-community" class="btn-ghost">' + icon("refresh") + '</button></div>';
    html += '<div class="search-box-wrap"><input type="text" id="community-search" placeholder="Cerca utente..." value="' + escapeHtml(state.communitySearch) + '"/>' + (state.communitySearch ? '<button type="button" data-action="clear-search" data-target="community" class="btn-clear">' + icon("x") + '</button>' : '') + '</div>';
    if (users.length === 0) {
      html += '<div class="empty-state"><p>Nessun altro utente registrato.</p></div>';
    } else {
      html += '<div class="community-users-grid">' + filtered.map(function (u) {
        /* mostra una miniatura dal primo oggetto dell'inventario dell'utente (l'ordine e'
           scelto da lui riordinando la sua tab Inventario), se ne ha uno con una foto */
        var thumb = '';
        if (u.firstItem) {
          var photos = itemPhotos(u.firstItem);
          if (photos.length) {
            var fp = photos[0];
            thumb = isVideo(fp)
              ? '<video src="' + escapeHtml(photoUrl(fp)) + '" class="community-user-thumb-video" muted playsinline preload="metadata"></video>'
              : '<img src="' + escapeHtml(photoUrl(fp)) + '" alt="" class="community-user-thumb-img"/>';
          }
        }
        var avatarHtml = thumb
          ? '<div class="community-user-avatar community-user-avatar--photo">' + thumb + '</div>'
          : '<div class="community-user-avatar">' + icon("user") + '</div>';
        var countLabel = u.itemCount === 0
          ? '<span class="community-item-count zero">Nessun oggetto</span>'
          : '<span class="community-item-count">' + u.itemCount + ' oggett' + (u.itemCount === 1 ? 'o' : 'i') + '</span>';
        return '<div class="community-user-card" data-action="open-user" data-username="' + escapeHtml(u.username) + '">' +
          avatarHtml +
          '<div class="community-user-info"><strong class="community-user-name">' + escapeHtml(u.username) + '</strong>' + countLabel + '</div></div>';
      }).join("") + '</div>';
      if (filtered.length === 0) { html += '<div class="empty-state"><p>Nessun utente trovato.</p></div>'; }
    }
    return html;
  }

  function renderOtherUserView() {
    var fStatus = friendStatusFor(state.selectedUser);
    var friendBtnHtml;
    if (fStatus === "accepted") {
      friendBtnHtml = '<span class="pill-muted">' + icon("user-check") + ' Amico</span>';
    } else if (fStatus === "outgoing") {
      friendBtnHtml = '<span class="pill-muted">Richiesta inviata</span>';
    } else if (fStatus === "pending") {
      var reqId = ((state.friends || []).filter(function (x) { return x && sameUser(x.username, state.selectedUser) && x.status === "pending"; })[0] || {}).id;
      friendBtnHtml = '<button type="button" data-action="accept-friend" data-id="' + escapeHtml(reqId || "") + '" class="btn-primary btn-sm">' + icon("user-check") + ' Accetta richiesta</button>';
    } else {
      friendBtnHtml = '<button type="button" data-action="add-friend" data-username="' + escapeHtml(state.selectedUser) + '" class="btn-ghost btn-sm">' + icon("user-plus") + ' Aggiungi amico</button>';
    }
    var search = (state.otherUserSearch || "").toLowerCase();
    var availableOther = state.otherUserInventory.filter(isAvailable);
    var filteredOther = availableOther.filter(function (i) { return !search || i.name.toLowerCase().indexOf(search) !== -1; });
    var html = '<div class="page-header"><button type="button" data-action="back-to-community" class="btn-icon-left">' + icon("chevron-left") + ' Indietro</button><h2>' + escapeHtml(state.selectedUser) + '</h2>' + friendBtnHtml + '</div>';
    if (state.otherUserInventory.length === 0) {
      html += '<div class="empty-state"><p>Nessun oggetto disponibile.</p></div>';
    } else {
      html += '<div class="search-box-wrap"><input type="text" id="other-inventory-search" placeholder="Cerca nell\'inventario di ' + escapeHtml(state.selectedUser) + '..." value="' + escapeHtml(state.otherUserSearch) + '"/>' + (state.otherUserSearch ? '<button type="button" data-action="clear-search" data-target="otherInventory" class="btn-clear">' + icon("x") + '</button>' : '') + '</div>';
      html += '<div class="items-grid">' + filteredOther.map(function (item) {
        var sel = state.wantIds.indexOf(item.id) !== -1;
        var photos = itemPhotos(item);
        var firstPhoto = photos[0];
        var thumbHtml = photos.length
          ? (isVideo(firstPhoto)
              ? '<video src="' + escapeHtml(photoUrl(firstPhoto)) + '" class="item-thumb-video" muted playsinline preload="metadata"></video>'
              : '<img src="' + escapeHtml(photoUrl(firstPhoto)) + '" alt=""/>')
          : "";
        return '<div class="item-card ' + (sel ? "selected" : "") + '"><div class="item-select" data-action="toggle-want" data-id="' + escapeHtml(item.id) + '">' +
          (photos.length ? '<div class="item-photo">' + thumbHtml + '</div>' : '<div class="item-photo-empty">' + icon("package") + '</div>') +
          '<div class="select-check">' + icon("check") + '</div>' +
          '</div><div class="item-info"><h3>' + escapeHtml(item.name) + '</h3></div></div>';
      }).join("") + '</div>';
      if (filteredOther.length === 0) { html += '<div class="empty-state"><p>Nessun risultato.</p></div>'; }
      html += '<div class="trade-builder-btn"><button type="button" data-action="open-trade-builder" class="btn-primary block">' + icon("swap") + ' Proponi Scambio</button></div>';
    }
    if (state.showTradeBuilder) {
      html += '<div class="trade-builder"><div class="trade-section"><h3>Voglio</h3><div class="items-list">' +
        filteredOther.map(function (item) {
          var sel = state.wantIds.indexOf(item.id) !== -1;
          return renderTradeItemCard(item, sel, "toggle-want", false);
        }).join("") +
        '</div></div>' +
        '<div class="trade-divider">' + icon("swap") + '</div>' +
        '<div class="trade-section"><h3>Offro</h3><p class="trade-section-hint">Puoi offrire anche oggetti segnati come "non disponibili": restano nascosti alla community ma puoi comunque proporli in questo scambio.</p><div class="items-list">' +
        state.inventory.map(function (item) {
          var sel = state.offerIds.indexOf(item.id) !== -1;
          return renderTradeItemCard(item, sel, "toggle-offer", true);
        }).join("") +
        '</div></div>' +
        renderTradeDurationField() +
        '<div class="trade-actions"><button type="button" data-action="cancel-trade-builder" class="btn-ghost">Annulla</button><button type="button" data-action="submit-trade" class="btn-primary">Invia Proposta</button></div></div>';
    }
    return html;
  }

  function renderFriendsTab() {
    var incoming = state.friends.filter(function (f) { return f.status === "pending"; });
    var outgoing = state.friends.filter(function (f) { return f.status === "outgoing"; });
    var accepted = state.friends.filter(function (f) { return f.status === "accepted"; });
    var html = '<div class="page-header"><h2>Amici</h2><button type="button" data-action="refresh-friends" class="btn-ghost" title="Aggiorna">' + icon("refresh") + '</button></div><form id="add-friend-form" class="friend-add"><div class="field"><label>Aggiungi amico</label><input id="friend-username" type="text" autocomplete="off" placeholder="Nome utente" value="' + escapeHtml(state.friendInput) + '"/></div><button type="submit" class="btn-primary">Aggiungi</button></form>';
    /* suggerimenti mentre si scrive: utenti della community il cui nome contiene il
       testo digitato (esclusi te stesso). Ogni riga mostra subito il rapporto attuale
       (amico / richiesta in corso) invece del pulsante, cosi' non si prova a mandare
       due volte la stessa richiesta. */
    var query = (state.friendInput || "").trim().toLowerCase();
    if (query) {
      var suggestions = (state.communityUsers || []).filter(function (u) {
        return u.username && u.username.toLowerCase().indexOf(query) !== -1;
      }).slice(0, 6);
      if (suggestions.length) {
        html += '<div class="friend-suggestions">' + suggestions.map(function (u) {
          var st = friendStatusFor(u.username);
          var right = st === "accepted" ? '<span class="pill-muted">Già amico</span>'
            : st === "outgoing" ? '<span class="pill-muted">Richiesta inviata</span>'
            : st === "pending" ? '<span class="pill-muted">Ti ha scritto</span>'
            : '<button type="button" data-action="suggest-add-friend" data-username="' + escapeHtml(u.username) + '" class="btn-ghost btn-sm">' + icon("user-plus") + ' Aggiungi</button>';
          return '<div class="friend-suggestion-row"><span class="who">' + userAvatarHtml(u.username) + '<span class="name">' + escapeHtml(u.username) + '</span></span>' + right + '</div>';
        }).join("") + '</div>';
      } else {
        html += '<p class="photos-hint">Nessun utente della community corrisponde a questo nome: se sei sicuro dell\'ortografia puoi comunque premere "Aggiungi", verrà controllato di nuovo.</p>';
      }
    }
    if (incoming.length) { html += '<div class="section-title">Richieste in sospeso</div>' + incoming.map(function (r) { return '<div class="friend-card"><div class="who">' + userAvatarHtml(r.username || "") + '<div><div class="name">' + escapeHtml(r.username || "") + '</div></div></div><div class="friend-actions"><button type="button" data-action="accept-friend" data-id="' + escapeHtml(r.id) + '" class="btn-ghost friend-accept">' + icon("user-check") + '</button><button type="button" data-action="decline-friend" data-id="' + escapeHtml(r.id) + '" class="btn-ghost">' + icon("x") + '</button></div></div>'; }).join(""); }
    if (outgoing.length) { html += '<div class="section-title">Richieste inviate</div>' + outgoing.map(function (r) { return '<div class="friend-card"><div class="who">' + userAvatarHtml(r.username || "") + '<div><div class="name">' + escapeHtml(r.username || "") + '</div></div></div><div class="friend-actions"><span class="pill-muted">In attesa</span><button type="button" data-action="cancel-friend-request" data-id="' + escapeHtml(r.id) + '" class="btn-ghost">' + icon("x") + '</button></div></div>'; }).join(""); }
    if (accepted.length) { html += '<div class="section-title">Amici</div>' + accepted.map(function (f) { return '<div class="friend-card"><div class="who clickable" data-action="open-chat" data-username="' + escapeHtml(f.username || "") + '" title="Apri chat con ' + escapeHtml(f.username || "") + '">' + userAvatarHtml(f.username || "") + '<div><div class="name">' + escapeHtml(f.username || "") + '</div></div></div><div class="friend-actions"><button type="button" data-action="open-chat" data-username="' + escapeHtml(f.username || "") + '" class="btn-ghost" title="Chat">' + icon("message") + '</button><button type="button" data-action="open-friend" data-username="' + escapeHtml(f.username || "") + '" class="btn-ghost" title="Inventario">' + icon("inbox") + '</button><button type="button" data-action="remove-friend" data-id="' + escapeHtml(f.id) + '" data-username="' + escapeHtml(f.username || "") + '" class="btn-ghost">' + icon("x") + '</button></div></div>'; }).join(""); }
    if (!incoming.length && !outgoing.length && !accepted.length) { html += '<div class="empty-state"><p>Nessun amico ancora. Inizia ad aggiungerne!</p></div>'; }
    return html;
  }

  function renderChatSidebar() {
    var accepted = state.friends.filter(function (f) { return f.status === "accepted"; });
    var html = '<div class="chat-sidebar-header"><h2>Chat</h2><button type="button" data-action="open-group-modal" class="btn-ghost btn-sm" title="Nuovo gruppo">' + icon("users-plus") + ' Gruppo</button></div>';
    if (!accepted.length && !state.groups.length) {
      html += '<div class="empty-state"><p>Aggiungi qualche amico per iniziare a chattare.</p></div>';
      return html;
    }
    html += '<div class="chat-friend-list">';
    if (state.groups.length) {
      html += '<div class="chat-list-section-title">Gruppi</div>' + state.groups.map(function (g) {
        var active = state.chatTarget && state.chatTarget.type === "group" && state.chatTarget.id === g.id;
        return '<div class="chat-friend-card ' + (active ? "active" : "") + '" data-action="open-group-chat" data-id="' + escapeHtml(g.id) + '">' +
          '<div class="who">' + groupAvatarHtml(g.members) + '<div><div class="name">' + escapeHtml(g.name || "") + '</div><div class="chat-sub">' + toArray(g.members).length + ' membri</div></div></div>' +
          icon("message") + '</div>';
      }).join("");
    }
    if (accepted.length) {
      html += '<div class="chat-list-section-title">Amici</div>' + accepted.map(function (f) {
        var active = state.chatTarget && state.chatTarget.type === "friend" && sameUser(state.chatTarget.id, f.username);
        return '<div class="chat-friend-card ' + (active ? "active" : "") + '" data-action="open-chat" data-username="' + escapeHtml(f.username || "") + '">' +
          '<div class="who">' + userAvatarHtml(f.username || "") + '<div><div class="name">' + escapeHtml(f.username || "") + '</div></div></div>' +
          icon("message") + '</div>';
      }).join("");
    }
    html += '</div>';
    return html;
  }

  function renderChatMessageContent(m) {
    var type = m.type || "text";
    if (type === "system") {
      return '<div class="chat-system-msg">' + escapeHtml(m.text || "") + '</div>';
    }
    if (type === "image") {
      return '<div class="chat-bubble-media" data-action="view-chat-media" data-id="' + escapeHtml(m.id) + '"><img src="' + escapeHtml(m.url) + '" alt="foto"/></div>';
    }
    if (type === "video") {
      return '<div class="chat-bubble-media" data-action="view-chat-media" data-id="' + escapeHtml(m.id) + '"><video src="' + escapeHtml(m.url) + '" muted playsinline preload="metadata"></video><div class="chat-bubble-play">' + icon("video") + '</div></div>';
    }
    if (type === "trade") {
      var trade = (state.allTrades || []).filter(function (t) { return t.id === m.tradeId; })[0];
      var expired = isTradeExpired(trade);
      var status = trade ? (trade.accepted ? "accepted" : trade.declined ? "declined" : trade.cancelled ? "cancelled" : expired ? "expired" : "pending") : "pending";
      var isRecipient = trade && sameUser(trade.toUser || trade.to, state.currentUser);
      var isSender = trade && sameUser(trade.fromUser || trade.from, state.currentUser);
      var want = (m.wantNames || (trade && trade.wantNames) || []).map(escapeHtml).join(", ") || "—";
      var offer = (m.offerNames || (trade && trade.offerNames) || []).map(escapeHtml).join(", ") || "—";
      var html = '<div class="chat-trade-card ' + status + '">' +
        '<div class="chat-trade-title">' + icon("swap") + ' Proposta di scambio</div>' +
        '<div class="chat-trade-row"><span class="chat-trade-label">Vuole:</span> ' + want + '</div>' +
        '<div class="chat-trade-row"><span class="chat-trade-label">Offre:</span> ' + offer + '</div>' +
        '<div class="chat-trade-status">' + (status === "accepted" ? "Accettato" : status === "declined" ? "Rifiutato" : status === "cancelled" ? "Annullato" : status === "expired" ? "Scaduto" : "In attesa") + '</div>' +
        (status === "pending" ? renderTradeExpiryBadge(trade, "chat-trade-expiry") : "");
      if (status === "pending" && trade) {
        if (isRecipient) {
          html += '<div class="trade-actions-inline"><button type="button" data-action="accept-trade" data-id="' + escapeHtml(trade.id) + '" class="btn-primary btn-sm">' + icon("check") + ' Accetta</button>' +
            '<button type="button" data-action="decline-trade" data-id="' + escapeHtml(trade.id) + '" class="btn-ghost btn-sm">' + icon("x") + ' Rifiuta</button></div>';
        } else if (isSender) {
          html += '<div class="trade-actions-inline"><button type="button" data-action="cancel-outgoing-trade" data-id="' + escapeHtml(trade.id) + '" class="btn-ghost btn-sm">' + icon("x") + ' Annulla</button></div>';
        }
      } else if (status === "expired" && trade && isSender) {
        /* la proposta e' scaduta e non puo' piu' essere accettata: chi l'ha inviata puo' comunque annullarla per pulizia */
        html += '<div class="trade-actions-inline"><button type="button" data-action="cancel-outgoing-trade" data-id="' + escapeHtml(trade.id) + '" class="btn-ghost btn-sm">' + icon("x") + ' Annulla</button></div>';
      }
      html += '</div>';
      return html;
    }
    return '<div class="chat-bubble-text">' + escapeHtml(m.text || "") + '</div>';
  }

  function renderChatThread() {
    var target = state.chatTarget;
    var isGroup = target.type === "group";
    var html = '<div class="chat-thread">';
    /* nelle chat 1-a-1 (non di gruppo) l'avatar/nome in cima porta sempre
       all'inventario dell'altra persona, come l'icona profilo propria in header */
    var profileAttrs = !isGroup ? ' data-action="open-user" data-username="' + escapeHtml(target.id) + '"' : '';
    html += '<div class="chat-thread-header"><button type="button" data-action="close-chat" class="btn-icon-left mobile-only">' + icon("chevron-left") + '</button>' +
      '<div class="chat-thread-profile' + (!isGroup ? " clickable" : "") + '"' + profileAttrs + (!isGroup ? ' title="Vai all\'inventario di ' + escapeHtml(target.name) + '"' : '') + '>' +
      (isGroup ? groupAvatarHtml(target.members) : userAvatarHtml(target.id)) +
      '<div class="chat-thread-title"><h2>' + escapeHtml(target.name) + '</h2>' + (isGroup ? '<div class="chat-sub">' + toArray(target.members).length + ' membri</div>' : '<div class="chat-sub">Vedi inventario</div>') + '</div>' +
      '</div>' +
      '<div class="chat-thread-actions">' +
      (!isGroup ? '<button type="button" data-action="open-chat-trade" class="btn-ghost btn-sm" title="Proponi scambio">' + icon("swap") + ' Scambio</button>' : '<button type="button" data-action="leave-group" data-id="' + escapeHtml(target.id) + '" class="btn-ghost btn-sm" title="Esci dal gruppo">' + icon("x") + ' Esci</button>') +
      '</div></div>';
    html += '<div class="chat-messages" id="chat-messages">';
    if (!state.chatMessages.length) {
      html += '<div class="empty-state"><p>Nessun messaggio ancora. Scrivi il primo!</p></div>';
    } else {
      html += state.chatMessages.map(function (m) {
        /* i messaggi di sistema (esito di uno scambio) sono centrati e senza mittente/orario,
           per distinguerli chiaramente dai normali messaggi di testo */
        if (m.type === "system") { return '<div class="chat-system-row">' + renderChatMessageContent(m) + '</div>'; }
        var own = sameUser(m.from, state.currentUser);
        var showSender = isGroup && !own;
        return '<div class="chat-bubble-row ' + (own ? "own" : "") + (showSender ? " has-avatar" : "") + '">' +
          (showSender ? userAvatarHtml(m.from, "chat-bubble-avatar") : '') +
          '<div class="chat-bubble ' + ((m.type === "image" || m.type === "video") ? "chat-bubble-has-media" : "") + '">' +
          (showSender ? '<div class="chat-bubble-sender clickable" data-action="open-user" data-username="' + escapeHtml(m.from) + '" title="Vai all\'inventario di ' + escapeHtml(m.from) + '">' + escapeHtml(m.from) + '</div>' : '') +
          renderChatMessageContent(m) +
          '<div class="chat-bubble-time">' + formatChatTime(m.created) + '</div>' +
          '</div></div>';
      }).join("");
    }
    html += '</div>';
    if (state.pendingChatMedia) {
      var pm = state.pendingChatMedia;
      html += '<div class="chat-pending-media">' +
        '<div class="chat-pending-preview">' +
        (pm.type === "video"
          ? '<video src="' + escapeHtml(pm.previewUrl) + '" muted playsinline preload="metadata"></video>'
          : '<img src="' + escapeHtml(pm.previewUrl) + '" alt=""/>') +
        '</div>' +
        '<span class="chat-pending-label">' + (pm.type === "video" ? "Video pronto: premi invio per spedirlo" : "Foto pronta: premi invio per spedirla") + '</span>' +
        '<div class="chat-pending-actions">' +
        '<button type="button" data-action="cancel-chat-media" class="btn-ghost btn-sm">' + icon("x") + ' Annulla</button>' +
        '</div></div>';
    } else if (state.chatMediaSending) {
      html += '<div class="chat-pending-media"><span class="chat-pending-label">' + icon("loader", "spin-tiny") + ' Invio in corso...</span></div>';
    }
    var chatLen = (state.chatInput || "").length;
    html += '<form id="chat-form" class="chat-form">' +
      '<label class="chat-attach-btn" title="Invia foto o video"><input type="file" id="chat-media-input" accept="image/*,video/*" style="display:none"/>' + icon("paperclip") + '</label>' +
      '<input id="chat-input" type="text" autocomplete="off" maxlength="' + MAX_CHAT_MESSAGE_LEN + '" placeholder="' + (state.pendingChatMedia ? "Didascalia (opzionale)..." : "Scrivi un messaggio...") + '" value="' + escapeHtml(state.chatInput) + '"/>' +
      (chatLen > MAX_CHAT_MESSAGE_LEN - 80 ? '<span class="chat-char-count' + (chatLen >= MAX_CHAT_MESSAGE_LEN ? " limit" : "") + '">' + chatLen + '/' + MAX_CHAT_MESSAGE_LEN + '</span>' : '') +
      '<button type="submit" class="btn-icon" title="Invia">' + icon("send") + '</button></form>';
    html += '</div>';
    return html;
  }

  function renderChatTab() {
    var active = state.chatTarget ? "thread" : "list";
    var mainInner = state.chatTarget ? renderChatThread() : '<div class="chat-placeholder">' + icon("message") + '<p>Seleziona una chat per iniziare</p></div>';
    return '<div class="chat-layout" data-active="' + active + '">' +
      '<div class="chat-sidebar">' + renderChatSidebar() + '</div>' +
      '<div class="chat-main">' + mainInner + '</div>' +
      '</div>' +
      (state.showGroupModal ? renderGroupModal() : '') +
      (state.showChatTradeBuilder ? renderChatTradeModal() : '');
  }

  function renderGroupModal() {
    var friendsList = state.friends.filter(function (f) { return f.status === "accepted"; });
    return '<div id="group-modal-overlay" class="modal-overlay" data-action="close-group-modal"></div>' +
      '<div class="modal">' +
      '<div class="modal-header"><h2>Nuovo gruppo</h2><button type="button" data-action="close-group-modal" class="btn-close">' + icon("x") + '</button></div>' +
      '<form id="create-group-form" class="modal-body">' +
      '<div class="field"><label>Nome del gruppo</label><input id="new-group-name" type="text" placeholder="Es: Scambisti del quartiere" value="' + escapeHtml(state.newGroupName) + '"/></div>' +
      '<div class="field"><label>Aggiungi amici</label>' +
      (friendsList.length
        ? '<div class="group-member-list">' + friendsList.map(function (f) {
            var sel = state.newGroupMembers.indexOf(f.username) !== -1;
            return '<div class="group-member-row ' + (sel ? "selected" : "") + '" data-action="toggle-group-member" data-username="' + escapeHtml(f.username) + '">' +
              '<div class="who">' + userAvatarHtml(f.username) + '<span>' + escapeHtml(f.username) + '</span></div>' +
              '<div class="select-check-inline">' + (sel ? icon("check") : "") + '</div></div>';
          }).join("") + '</div>'
        : '<p class="chat-sub">Aggiungi prima qualche amico per poter creare un gruppo.</p>') +
      '</div>' +
      '<div class="modal-footer"><button type="submit" class="btn-primary block">Crea gruppo</button></div>' +
      '</form></div>';
  }

  function renderDeleteAccountModal() {
    return '<div id="delete-account-overlay" class="modal-overlay" data-action="close-delete-account-confirm"></div>' +
      '<div class="modal">' +
      '<div class="modal-header"><h2>Eliminare l\'account?</h2><button type="button" data-action="close-delete-account-confirm" class="btn-close">' + icon("x") + '</button></div>' +
      '<div class="modal-body">' +
      '<div class="banner error">' + icon("alert-circle") + '<span>Questa azione è definitiva e non può essere annullata: verranno eliminati il profilo, l\'inventario, la lista amici e l\'accesso di <strong>' + escapeHtml(state.currentUser) + '</strong>. Gli scambi e i messaggi già scambiati con altri utenti potrebbero restare visibili a loro.</span></div>' +
      '</div>' +
      '<div class="modal-footer"><div class="trade-actions"><button type="button" data-action="close-delete-account-confirm" class="btn-ghost">Annulla</button><button type="button" data-action="confirm-delete-account" class="btn-danger">' + icon("trash") + ' Elimina definitivamente</button></div></div>' +
      '</div>';
  }

  function renderChatTradeModal() {
    var otherItems = state.chatOtherInventory.filter(isAvailable);
    return '<div id="chat-trade-overlay" class="modal-overlay" data-action="close-chat-trade"></div>' +
      '<div class="modal">' +
      '<div class="modal-header"><h2>Proponi scambio a ' + escapeHtml(state.chatTarget.name) + '</h2><button type="button" data-action="close-chat-trade" class="btn-close">' + icon("x") + '</button></div>' +
      '<div class="modal-body">' +
      '<div class="trade-builder trade-builder-inline"><div class="trade-section"><h3>Voglio</h3><div class="items-list">' +
      (otherItems.length ? otherItems.map(function (item) {
        var sel = state.wantIds.indexOf(item.id) !== -1;
        return renderTradeItemCard(item, sel, "toggle-want", false);
      }).join("") : '<p class="chat-sub">Nessun oggetto disponibile.</p>') +
      '</div></div>' +
      '<div class="trade-divider">' + icon("swap") + '</div>' +
      '<div class="trade-section"><h3>Offro</h3><p class="trade-section-hint">Puoi offrire anche oggetti segnati come "non disponibili".</p><div class="items-list">' +
      state.inventory.map(function (item) {
        var sel = state.offerIds.indexOf(item.id) !== -1;
        return renderTradeItemCard(item, sel, "toggle-offer", true);
      }).join("") +
      '</div></div></div>' +
      renderTradeDurationField() +
      '</div>' +
      '<div class="modal-footer"><div class="trade-actions"><button type="button" data-action="close-chat-trade" class="btn-ghost">Annulla</button><button type="button" data-action="submit-chat-trade" class="btn-primary">Invia Proposta</button></div></div>' +
      '</div>';
  }

  function renderTradesTab() {
    var search = (state.historySearch || "").toLowerCase();
    var html = '<div class="page-header"><div class="page-header-title"><h2>Scambi</h2><button type="button" data-action="refresh-trades" class="btn-ghost btn-icon" title="Aggiorna">' + icon("refresh") + '</button></div><div class="trade-filters">' +
      '<button type="button" data-action="history-filter" data-filter="completed" class="' + (state.historyFilter === "completed" ? "active" : "") + '">Completati</button>' +
      '<button type="button" data-action="history-filter" data-filter="pending" class="' + (state.historyFilter === "pending" ? "active" : "") + '">In attesa</button>' +
      '<button type="button" data-action="history-filter" data-filter="declined" class="' + (state.historyFilter === "declined" ? "active" : "") + '">Rifiutati/Annullati</button>' +
      '</div></div>';
    html += '<div class="search-box-wrap"><input type="text" id="history-search" placeholder="Cerca..." value="' + escapeHtml(state.historySearch) + '"/>' + (state.historySearch ? '<button type="button" data-action="clear-search" data-target="history" class="btn-clear">' + icon("x") + '</button>' : '') + '</div>';
    /* filtro per utente (l'altra persona coinvolta nello scambio) e per intervallo di date */
    var counterparts = historyCounterparts();
    var filtersActive = !!(state.historyUserFilter || state.historyDateFrom || state.historyDateTo);
    html += '<div class="history-adv-filters">' +
      '<div class="field"><label>Utente</label><select id="history-user-filter">' +
      '<option value="">Tutti</option>' +
      counterparts.map(function (u) { return '<option value="' + escapeHtml(u) + '"' + (sameUser(state.historyUserFilter, u) ? " selected" : "") + '>' + escapeHtml(u) + '</option>'; }).join("") +
      '</select></div>' +
      '<div class="field"><label>Da</label><input type="date" id="history-date-from" value="' + escapeHtml(state.historyDateFrom || "") + '"/></div>' +
      '<div class="field"><label>A</label><input type="date" id="history-date-to" value="' + escapeHtml(state.historyDateTo || "") + '"/></div>' +
      (filtersActive ? '<button type="button" data-action="clear-search" data-target="historyFilters" class="btn-ghost btn-sm history-adv-clear">' + icon("x") + ' Cancella filtri</button>' : '') +
      '</div>';
    if (state.history.length === 0) { html += '<div class="empty-state"><p>Nessuno scambio ancora.</p></div>'; }
    else {
      var visible = state.history.slice(0, state.historyLimit);
      html += '<div class="trade-history">' + visible.map(function (t) {
        var fromU = t.fromUser || t.from || "";
        var toU = t.toUser || t.to || "";
        var isSender = sameUser(fromU, state.currentUser);
        var isRecipient = sameUser(toU, state.currentUser);
        var other = escapeHtml(isSender ? toU : fromU);
        var expired = isTradeExpired(t);
        var statusClass = t.accepted ? "accepted" : t.declined ? "declined" : t.cancelled ? "cancelled" : expired ? "expired" : "pending";
        var statusLabel = t.accepted ? "Accettato" : t.declined ? "Rifiutato" : t.cancelled ? "Annullato" : expired ? "Scaduto" : "In attesa";
        return '<div class="trade-card ' + statusClass + '">' +
          '<div class="trade-header"><span>' + (isSender ? "A: " : "Da: ") + other + '</span>' +
          '<span class="trade-status">' + statusLabel + '</span></div>' +
          (!t.accepted && !t.declined && !t.cancelled ? renderTradeExpiryBadge(t, "trade-expiry") : "") +
          ((t.wantNames && t.wantNames.length) || (t.offerNames && t.offerNames.length)
            ? '<div class="chat-trade-row"><span class="chat-trade-label">' + (isSender ? "Volevi:" : "Vuole:") + '</span> ' + (t.wantNames || []).map(escapeHtml).join(", ") + '</div>' +
              '<div class="chat-trade-row"><span class="chat-trade-label">' + (isSender ? "Offrivi:" : "Offre:") + '</span> ' + (t.offerNames || []).map(escapeHtml).join(", ") + '</div>'
            : '') +
          (!t.accepted && !t.declined && !t.cancelled
            ? '<div class="trade-actions-inline">' +
              (isSender
                ? '<button type="button" data-action="cancel-outgoing-trade" data-id="' + escapeHtml(t.id) + '" class="btn-ghost">' + icon("x") + ' Annulla</button>'
                : isRecipient
                  ? (expired
                      ? '<span class="pill-muted">Proposta scaduta</span>'
                      : '<button type="button" data-action="accept-trade" data-id="' + escapeHtml(t.id) + '" class="btn-primary btn-sm">' + icon("check") + ' Accetta</button>' +
                        '<button type="button" data-action="decline-trade" data-id="' + escapeHtml(t.id) + '" class="btn-ghost btn-sm">' + icon("x") + ' Rifiuta</button>')
                  : '') +
              '</div>'
            : '') +
          '</div>';
      }).join("") + '</div>';
      if (state.history.length > state.historyLimit) { html += '<div class="load-more"><button type="button" data-action="history-more" class="btn-ghost">Carica altri...</button></div>'; }
    }
    return html;
  }

  function renderAuth() {
    if (state.needUsername) {
      return '<div class="auth-wrap"><div class="auth-box"><div class="auth-header"><h1 class="display">Baratto</h1></div><div class="auth-panel"><p style="margin-bottom:1rem;">Scegli un nome utente:</p><form id="username-form"><div class="field"><input id="new-username" type="text" placeholder="3-20 caratteri, lettere/numeri/_" maxlength="20" value="' + escapeHtml(state.usernameInput) + '"/></div>' + (state.authError ? '<div class="banner error">' + icon("alert-circle") + '<span>' + escapeHtml(state.authError) + '</span></div>' : '') + '<button type="submit" class="btn-primary block">Continua</button></form></div></div></div>';
    }
    var segHtml = '<div class="seg"><button type="button" data-action="show-login" class="' + (state.authMode === "login" ? "active" : "") + '">Accedi</button><button type="button" data-action="show-register" class="' + (state.authMode === "register" ? "active" : "") + '">Registrati</button><button type="button" data-action="show-noemail" class="' + (state.authMode === "noEmail" ? "active" : "") + '">Senza email</button><button type="button" data-action="show-link" class="' + (state.authMode === "link" ? "active" : "") + '">Link Email</button></div>';
    var formHtml = '';
    if (state.linkSentTo) {
      formHtml = '<div class="banner success">' + icon("check") + '<span>Link inviato a ' + escapeHtml(state.linkSentTo) + '. Controlla la posta.</span></div><button type="button" data-action="link-again" class="auth-link-btn">Invia un altro link</button>';
    } else if (state.authMode === "link") {
      formHtml = '<form id="auth-form"><div class="field"><label>Email</label><div class="field-icon-wrap"><input id="auth-email" type="email" placeholder="tua@email.com" value="' + escapeHtml(state.authEmail) + '"/><span class="icon">' + icon("mail") + '</span></div></div>' + (state.authError ? '<div class="banner error">' + icon("alert-circle") + '<span>' + escapeHtml(state.authError) + '</span></div>' : '') + '<button type="submit" class="btn-primary block">Invia Link</button></form>';
    } else if (state.authMode === "noEmail") {
      formHtml = '<form id="auth-form"><p class="chat-sub" style="margin-bottom:1rem;">Crea un account con la sola password: niente email. Dopo la registrazione sceglierai un nome utente che userai anche per accedere in seguito.</p><div class="field"><label>Password</label><div class="field-icon-wrap"><input id="auth-password" type="password" autocomplete="new-password" placeholder="Almeno 6 caratteri"/><span class="icon">' + icon("lock") + '</span></div></div>' + (state.authError ? '<div class="banner error">' + icon("alert-circle") + '<span>' + escapeHtml(state.authError) + '</span></div>' : '') + '<button type="submit" class="btn-primary block">Crea account</button></form>';
    } else {
      var idLabel = state.authMode === "login" ? "Email o nome utente" : "Email";
      var idPlaceholder = state.authMode === "login" ? "tua@email.com o nome utente" : "tua@email.com";
      formHtml = '<form id="auth-form"><div class="field"><label>' + idLabel + '</label><div class="field-icon-wrap"><input id="auth-email" type="text" placeholder="' + idPlaceholder + '" value="' + escapeHtml(state.authEmail) + '"/><span class="icon">' + icon("mail") + '</span></div></div><div class="field"><label>Password</label><div class="field-icon-wrap"><input id="auth-password" type="password" autocomplete="' + (state.authMode === "login" ? "current-password" : "new-password") + '" placeholder="Almeno 6 caratteri"/><span class="icon">' + icon("lock") + '</span></div></div>' + (state.authError ? '<div class="banner error">' + icon("alert-circle") + '<span>' + escapeHtml(state.authError) + '</span></div>' : '') + '<button type="submit" class="btn-primary block">' + (state.authMode === "login" ? "Accedi" : "Registrati") + '</button></form><div class="auth-divider">oppure</div><button type="button" data-action="google-login" class="btn-google"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor"/></svg>Google</button>';
    }
    return '<div class="auth-wrap"><div class="auth-box"><div class="auth-header"><h1 class="display">Baratto</h1><div class="ornament"><div class="line"></div><div class="dot"></div><div class="line"></div></div><p>Scambia oggetti con la comunità</p></div><div class="auth-panel">' + segHtml + formHtml + '</div><div class="auth-footnote">Creando un account accetti i nostri <a href="#" data-action="open-tos" style="color:var(--brass);">Termini di Servizio</a></div></div></div>' +
      (state.showTosModal ? renderTosModal() : '');
  }

  /* ============ Termini di Servizio ============
     Prima era un link morto (href="#") nel footer del login/registrazione: qui il testo
     e' generico ma pensato per QUESTA app (scambio diretto di oggetti tra utenti, senza
     denaro, con contenuti caricati dagli utenti stessi), non un semplice segnaposto.
     Non sostituisce una consulenza legale vera: se l'app va online per davvero conviene
     farlo rivedere da chi se ne intende, ma intanto il link porta a qualcosa di reale
     invece che a "#". */
  function renderTosModal() {
    return '<div id="tos-modal-overlay" class="modal-overlay" data-action="close-tos"></div>' +
      '<div class="modal">' +
      '<div class="modal-header"><h2>Termini di Servizio</h2><button type="button" data-action="close-tos" class="btn-close">' + icon("x") + '</button></div>' +
      '<div class="modal-body">' +
      '<p class="chat-sub" style="margin-bottom:0.9rem;">Ultimo aggiornamento: ' + new Date().getFullYear() + '. Usando Baratto accetti questi termini.</p>' +
      '<div class="tos-section"><h3>1. Cos\'è Baratto</h3><p>Baratto è un registro tra utenti per proporre e accettare scambi diretti di oggetti (nessun pagamento in denaro passa attraverso l\'app). L\'app mette in contatto le persone e tiene traccia degli scambi proposti, accettati, rifiutati o annullati; non verifica gli oggetti né garantisce che uno scambio vada a buon fine nella vita reale.</p></div>' +
      '<div class="tos-section"><h3>2. Account</h3><p>Sei responsabile della sicurezza delle tue credenziali e di tutto ciò che avviene dal tuo account. Puoi eliminare l\'account in qualsiasi momento dalle impostazioni; l\'eliminazione è definitiva e rimuove profilo, inventario e lista amici, mentre scambi e messaggi già condivisi con altri utenti possono restare visibili a loro.</p></div>' +
      '<div class="tos-section"><h3>3. Contenuti caricati</h3><p>Le foto, i video e i testi che carichi (oggetti, chat, gruppi) restano tuoi, ma pubblicandoli ne autorizzi la visualizzazione agli altri utenti con cui interagisci nell\'app, secondo le stesse funzionalità (community, chat, scambi). Non caricare contenuti che non hai il diritto di condividere, illegali, offensivi o ingannevoli sulla natura reale dell\'oggetto offerto.</p></div>' +
      '<div class="tos-section"><h3>4. Comportamento tra utenti</h3><p>Gli scambi avvengono sotto la tua responsabilità: verifica sempre di persona (o comunque prima di consegnare un oggetto) che quanto ricevuto corrisponda a quanto concordato. Baratto non è parte dello scambio e non media eventuali controversie tra utenti.</p></div>' +
      '<div class="tos-section"><h3>5. Limitazione di responsabilità</h3><p>L\'app viene fornita "così com\'è": nei limiti consentiti dalla legge, non si garantisce continuità del servizio né si risponde di eventuali danni derivanti da scambi non andati a buon fine, contenuti caricati da altri utenti o interruzioni del servizio.</p></div>' +
      '<div class="tos-section"><h3>6. Modifiche</h3><p>Questi termini possono cambiare nel tempo; l\'uso continuato dell\'app dopo un aggiornamento equivale ad accettarli.</p></div>' +
      '</div>' +
      '<div class="modal-footer"><button type="button" data-action="close-tos" class="btn-primary block">Ho capito</button></div>' +
      '</div>';
  }

  /* ============ header (barra in alto) ============
     Costruisce SOLO l'header: viene tenuto separato dal resto (renderAppBody piu' sotto)
     perche' in render() lo scriviamo nel DOM solo quando il suo HTML e' davvero cambiato,
     invece di ricrearlo ad ogni singolo render come il resto dell'app. Vedi il commento
     su #app-header-slot in render() per il motivo. */
  function renderHeader() {
    var tabsHtml = '<button type="button" data-action="switch-tab" data-tab="inventory" class="' + (state.tab === "inventory" ? "active" : "") + '">' + icon("package") + ' Inventario</button>' +
      '<button type="button" data-action="switch-tab" data-tab="community" class="' + (state.tab === "community" ? "active" : "") + '">' + icon("users") + ' Community</button>' +
      '<button type="button" data-action="switch-tab" data-tab="friends" class="' + (state.tab === "friends" ? "active" : "") + '">' + icon("user-plus") + ' Amici</button>' +
      '<button type="button" data-action="switch-tab" data-tab="chat" class="' + (state.tab === "chat" ? "active" : "") + '">' + icon("message") + ' Chat</button>' +
      '<button type="button" data-action="switch-tab" data-tab="trades" class="' + (state.tab === "trades" ? "active" : "") + '">' + icon("swap") + ' Scambi</button>';
    return '<header class="app-header"><div class="row"><span class="wordmark display">Baratto</span>' +
        '<div class="header-right">' +
        (state.installAvailable ? '<button data-action="install-app" class="btn-ghost" title="Installa l\'app">' + icon("package") + ' Installa</button>' : '') +
        '<button type="button" data-action="go-profile" class="profile-btn" title="Il mio inventario">' + ownAvatarHtml() + '<span class="greet">Ciao, <strong>' + escapeHtml(state.currentUser) + '</strong></span></button>' +
        '<button data-action="open-delete-account-confirm" class="btn-ghost" title="Elimina account">' + icon("trash") + '</button>' +
        '<button data-action="logout" class="btn-ghost">' + icon("logout") + " Esci</button></div></div>" +
        '<div class="tab-nav">' + tabsHtml + "</div></header>";
  }

  /* ============ tutto cio' che sta SOTTO l'header ============
     A differenza dell'header, questo viene ricostruito da zero ad ogni render() (vedi
     #app-body-slot in render()): non ha bisogno di essere "persistente" perche' non ha
     uno stato del browser (scroll orizzontale, ecc.) da preservare oltre a quello di cui
     render() gia' si occupa esplicitamente (scroll della finestra, scroll della chat, focus). */
  function renderAppBody() {
    var tabContent = '';
    if (state.tab === "inventory") tabContent = renderInventoryTab();
    else if (state.tab === "community") tabContent = state.selectedUser ? renderOtherUserView() : renderCommunityTab();
    else if (state.tab === "friends") tabContent = renderFriendsTab();
    else if (state.tab === "chat") tabContent = renderChatTab();
    else if (state.tab === "trades") tabContent = renderTradesTab();

    return (state.message ? '<div class="message-wrap"><div class="banner ' + state.message.type + '">' +
        icon(state.message.type === "error" ? "alert-circle" : "check") + "<span>" + escapeHtml(state.message.text) + "</span></div></div>" : "") +
      '<main class="main"><div class="content">' + tabContent + "</div></main>" +
      (state.showAddItem ? renderAddItemModal() : "") +
      (state.showEditItem ? renderEditItemModal() : "") +
      (state.showDeleteAccountConfirm ? renderDeleteAccountModal() : "") +
      renderLightbox();
  }

  /* ============ indirizzo (hash) per ogni vista ============
     Non si tratta di pagine .html separate (l'app resta un'unica SPA con un solo
     login Firebase e un'unica cache offline per la PWA), ma ogni sezione ha comunque
     un proprio indirizzo condivisibile/salvabile nei preferiti, es:
     #inventory, #community, #community/marco, #chat, #chat/marco, #friends, #trades */
  function setHash(h) {
    try { window.history.replaceState(null, "", h ? ("#" + h) : window.location.pathname); } catch (err) {}
  }
  function restoreFromHash() {
    var h = (window.location.hash || "").replace(/^#\/?/, "");
    if (!h) return;
    var parts = h.split("/").map(function (p) { try { return decodeURIComponent(p); } catch (e) { return p; } });
    var knownTabs = ["inventory", "community", "friends", "chat", "trades"];
    if (parts[0] === "community" && parts[1]) { openUser(parts[1]); }
    else if (parts[0] === "chat" && parts[1]) { switchTab("chat"); openChat(parts[1]); }
    else if (knownTabs.indexOf(parts[0]) !== -1) { switchTab(parts[0]); }
  }

  function switchTab(tab) {
    if (state.tab === "chat" && tab !== "chat") detachChat();
    clearPendingChatMedia();
    var changes = { tab: tab, selectedUser: null, otherUserInventory: [], otherUserSearch: "" };
    if (tab === "chat") { detachChat(); changes.chatTarget = null; changes.chatMessages = []; changes.showChatTradeBuilder = false; }
    setState(changes);
    render();
    setHash(tab);
  }
  /* usata dall'icona profilo nell'header: riporta sempre al proprio inventario,
     da qualunque punto dell'app ci si trovi (inventario di un altro utente, chat, ecc.) */
  function goToOwnInventory() { switchTab("inventory"); }

  /* banner fisso mostrato quando il dispositivo risulta offline: l'app (guscio) resta
     utilizzabile grazie al service worker, ma i dati (Firebase) richiedono connessione */
  function renderOfflineBanner() {
    if (!state.isOffline) return "";
    return '<div class="offline-banner">' + icon("alert-circle") + '<span>Sei offline: l\'app resta aperta, ma i dati non si aggiornano finché la connessione non torna.</span></div>';
  }

  /* ============ scroll della FINESTRA attraverso i render ============
     Come per lo scroll interno della chat (vedi sotto), ogni render() ricostruisce il
     "corpo" dell'app da zero (vedi #app-body-slot piu' sotto): senza questa conservazione,
     qualunque interazione (aprire un modale, spuntare una checkbox, digitare in un campo,
     ecc.) mentre si e' scrollati piu' in basso nella pagina - es. la lista Community, o gli
     scambi in "Scambi" - farebbe scattare la pagina di nuovo in cima.
     Le VERE navigazioni (cambio tab, apertura di una chat o del profilo di un altro utente,
     ecc.) devono invece riportare la vista in cima: quelle chiamano requestScrollTop()
     prima di render(), cosi' sappiamo di dover resettare invece di conservare. */
  var pendingScrollTop = false;
  function requestScrollTop() { pendingScrollTop = true; }

  /* ultimo HTML scritto nell'header (vedi render()): serve a capire se l'header e'
     davvero cambiato prima di riscriverlo nel DOM. null forza la riscrittura al prossimo
     render (usato quando lo slot dell'header non esiste ancora, es. subito dopo il boot). */
  var lastHeaderHtml = null;

  function render() {
    if (state.booting) {
      document.getElementById("app").innerHTML = '<div class="auth-wrap"><div class="auth-box" style="text-align:center;">' + icon("loader", "spin-sm") + "</div></div>";
      lastHeaderHtml = null;
      return;
    }
    var FOCUS_PRESERVE_IDS = ["friend-username", "community-search", "inventory-search", "other-inventory-search", "history-search", "chat-input", "new-group-name"];
    var active = document.activeElement;
    var keepFocusId = (active && FOCUS_PRESERVE_IDS.indexOf(active.id) !== -1) ? active.id : null;
    var selStart = keepFocusId ? active.selectionStart : null, selEnd = keepFocusId ? active.selectionEnd : null;
    /* il "corpo" dell'app viene ricostruito da zero ad ogni render() (vedi piu' sotto),
       quindi qualunque elemento scrollabile al suo interno perderebbe la propria posizione
       di scroll ad ogni singolo aggiornamento di stato (es. aprire il modale "Scambio" in
       chat, o qualunque altra azione), anche quando non c'entra nulla con quell'elemento.
       Salviamo qui le posizioni prima della sostituzione e le ripristiniamo subito dopo. */
    var savedWindowScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    var chatEl = document.getElementById("chat-messages");
    var chatScroll = null;
    if (chatEl) {
      var atBottom = (chatEl.scrollHeight - chatEl.scrollTop - chatEl.clientHeight) < 40;
      chatScroll = { top: chatEl.scrollTop, atBottom: atBottom };
    }

    /* ============ header persistente ============
       A differenza del corpo dell'app, l'header vive in un proprio nodo DOM fisso
       (#app-header-slot) che non viene MAI distrutto solo perche' e' cambiato qualcos'altro:
       lo riscriviamo solo quando il suo HTML e' davvero diverso da com'era (cambio tab,
       avatar, nome utente, comparsa/scomparsa del pulsante "Installa", login/logout...).
       Per tutti gli altri render (aprire un modale, spuntare una checkbox, digitare in un
       campo, ecc.) l'header non viene toccato: niente da "recuperare" dopo, come invece
       serve qui sotto per lo scroll della finestra e della chat. */
    var appEl = document.getElementById("app");
    var headerSlot = document.getElementById("app-header-slot");
    var bodySlot = document.getElementById("app-body-slot");
    if (!headerSlot || !bodySlot) {
      appEl.innerHTML = '<div id="app-header-slot"></div><div id="app-body-slot"></div>';
      headerSlot = document.getElementById("app-header-slot");
      bodySlot = document.getElementById("app-body-slot");
      lastHeaderHtml = null;
    }
    var newHeaderHtml = state.currentUser ? renderHeader() : "";
    if (newHeaderHtml !== lastHeaderHtml) {
      headerSlot.innerHTML = newHeaderHtml;
      lastHeaderHtml = newHeaderHtml;
    }
    bodySlot.innerHTML = renderOfflineBanner() + (state.currentUser ? renderAppBody() : renderAuth());

    if (keepFocusId) {
      var el = document.getElementById(keepFocusId);
      if (el) { el.focus(); try { el.setSelectionRange(selStart, selEnd); } catch (err) {} }
    }
    if (chatScroll) {
      var newChatEl = document.getElementById("chat-messages");
      if (newChatEl) { newChatEl.scrollTop = chatScroll.atBottom ? newChatEl.scrollHeight : chatScroll.top; }
    }
    if (pendingScrollTop) { window.scrollTo(0, 0); pendingScrollTop = false; }
    else if (savedWindowScroll) { window.scrollTo(0, savedWindowScroll); }
    /* la barra delle tab (.tab-nav) scorre in orizzontale su schermi stretti: quando
       l'header viene davvero riscritto (vedi sopra, es. per un cambio tab) va riportata a
       inquadrare la tab appena selezionata, altrimenti resterebbe scrollata dov'era prima
       nel vecchio elemento ormai sostituito (a schermo stretto rischiando di "nascondere"
       la tab appena cliccata).
       Prima si usava activeTabBtn.scrollIntoView({block:"nearest", inline:"nearest"}):
       "block" riguarda pero' lo scroll VERTICALE, e siccome .app-header e' position:sticky
       il browser calcola la sua posizione "di flusso" (come se non fosse sticky) per capire
       se serve scrollare, e quella posizione risulta sempre in cima alla pagina. Il risultato
       era che questo avrebbe fatto scattare la pagina/la chat in cima. Scrollando qui SOLO in
       orizzontale il contenitore .tab-nav stesso, il resto della pagina non viene mai toccato.
       Nei render che NON riscrivono l'header (la maggior parte) questo blocco e' di fatto un
       no-op: l'elemento non e' stato ricreato, quindi la sua scrollLeft e' gia' quella giusta. */
    var activeTabBtn = document.querySelector(".tab-nav button.active");
    if (activeTabBtn) {
      var tabNavEl = activeTabBtn.parentElement;
      if (tabNavEl) {
        var btnLeft = activeTabBtn.offsetLeft, btnRight = btnLeft + activeTabBtn.offsetWidth;
        var visibleLeft = tabNavEl.scrollLeft, visibleRight = visibleLeft + tabNavEl.clientWidth;
        if (btnLeft < visibleLeft) tabNavEl.scrollLeft = btnLeft;
        else if (btnRight > visibleRight) tabNavEl.scrollLeft = btnRight - tabNavEl.clientWidth;
      }
    }
  }

  /* ============ gestione eventi (delegazione) ============ */
  document.addEventListener("click", function (e) {
    /* chiudi il lightbox anche cliccando fuori dalla foto/video (non solo sull'overlay,
       che di fatto e' sempre coperto dal contenitore .lightbox a schermo intero) */
    if (e.target && (e.target.id === "lightbox-overlay" || e.target.classList.contains("lightbox"))) { closeLightbox(); return; }
    var t = e.target.closest("[data-action]");
    if (!t) return;
    var action = t.dataset.action;
    if (action === "show-login") { state.authMode = "login"; state.authError = ""; render(); }
    else if (action === "show-register") { state.authMode = "register"; state.authError = ""; render(); }
    else if (action === "show-link") { state.authMode = "link"; state.authError = ""; state.linkSentTo = null; render(); }
    else if (action === "show-noemail") { state.authMode = "noEmail"; state.authError = ""; render(); }
    else if (action === "link-again") { state.linkSentTo = null; render(); }
    else if (action === "open-tos") { e.preventDefault(); state.showTosModal = true; render(); }
    else if (action === "close-tos") { state.showTosModal = false; render(); }
    else if (action === "google-login") { handleGoogle(); }
    else if (action === "logout") { handleLogout(); }
    else if (action === "open-delete-account-confirm") { openDeleteAccountConfirm(); }
    else if (action === "close-delete-account-confirm") { closeDeleteAccountConfirm(); }
    else if (action === "confirm-delete-account") { deleteAccount(); }
    else if (action === "switch-tab") { switchTab(t.dataset.tab); }
    else if (action === "open-add-item") { openAddItem(); }
    else if (action === "close-add-item") { state.showAddItem = false; render(); }
    else if (action === "open-edit-item") { var itemId = t.dataset.id; var item = getItemById(itemId, state.inventory); if (item) openEditItem(item); }
    else if (action === "close-edit-item") { closeEditItem(); }
    else if (action === "remove-photo") {
      var idx = parseInt(t.dataset.index, 10);
      if (!isNaN(idx)) { state.newItemPhotos.splice(idx, 1); render(); }
    }
    else if (action === "remove-edit-photo") {
      var idx = parseInt(t.dataset.index, 10);
      if (!isNaN(idx)) { state.editItemPhotos.splice(idx, 1); render(); }
    }
    /* riordino delle foto: la prima della lista e' quella usata come copertina/immagine
       profilo dell'oggetto ovunque nell'app (community, inventario, card di scambio, ecc.),
       quindi spostare una foto in prima posizione la rende automaticamente la copertina */
    else if (action === "move-photo-left") { swapPhotos(state.newItemPhotos, parseInt(t.dataset.index, 10), -1); }
    else if (action === "move-photo-right") { swapPhotos(state.newItemPhotos, parseInt(t.dataset.index, 10), 1); }
    else if (action === "move-edit-photo-left") { swapPhotos(state.editItemPhotos, parseInt(t.dataset.index, 10), -1); }
    else if (action === "move-edit-photo-right") { swapPhotos(state.editItemPhotos, parseInt(t.dataset.index, 10), 1); }
    else if (action === "delete-item") { deleteItem(t.dataset.id); }
    else if (action === "set-profile-item") { setAsProfileItem(t.dataset.id); }
    else if (action === "open-user") { openUser(t.dataset.username); }
    else if (action === "back-to-community") { backToCommunity(); }
    else if (action === "refresh-community") { loadCommunity(); }
    else if (action === "refresh-trades") { loadTrades(); }
    else if (action === "refresh-friends") { loadFriends(); }
    else if (action === "add-friend") { sendFriendRequest(t.dataset.username); }
    else if (action === "suggest-add-friend") { sendFriendRequest(t.dataset.username); }
    else if (action === "accept-friend") { respondFriendRequest(t.dataset.id, true); }
    else if (action === "decline-friend") { respondFriendRequest(t.dataset.id, false); }
    else if (action === "cancel-friend-request") { cancelFriendRequest(t.dataset.id); }
    else if (action === "remove-friend") { removeFriend(t.dataset.id, t.dataset.username); }
    else if (action === "open-friend") { openFriend(t.dataset.username); }
    else if (action === "open-chat") { openChat(t.dataset.username); }
    else if (action === "close-chat") { closeChat(); }
    else if (action === "open-group-chat") { openGroupChat(t.dataset.id); }
    else if (action === "open-group-modal") { openGroupModal(); }
    else if (action === "close-group-modal") { closeGroupModal(); }
    else if (action === "toggle-group-member") { toggleGroupMember(t.dataset.username); }
    else if (action === "leave-group") { leaveGroup(t.dataset.id); }
    else if (action === "open-chat-trade") { openChatTradeBuilder(); }
    else if (action === "close-chat-trade") { closeChatTradeBuilder(); }
    else if (action === "submit-chat-trade") { submitChatTrade(); }
    else if (action === "view-chat-media") { viewChatMedia(t.dataset.id); }
    else if (action === "cancel-chat-media") { cancelChatMedia(); }
    else if (action === "go-profile") { goToOwnInventory(); }
    else if (action === "install-app") { promptInstall(); }
    else if (action === "open-trade-builder") { state.showTradeBuilder = true; state.tradeDuration = ""; render(); }
    else if (action === "cancel-trade-builder") { state.showTradeBuilder = false; state.wantIds = []; state.offerIds = []; state.tradeDuration = ""; render(); }
    else if (action === "toggle-want") { toggleWant(t.dataset.id); }
    else if (action === "toggle-offer") { toggleOffer(t.dataset.id); }
    else if (action === "submit-trade") { submitTrade(); }
    else if (action === "accept-trade") { respondTrade(t.dataset.id, true); }
    else if (action === "decline-trade") { respondTrade(t.dataset.id, false); }
    else if (action === "cancel-outgoing-trade") { cancelTrade(t.dataset.id); }
    else if (action === "view-photos") { viewPhotos(t.dataset.id, t.dataset.source); }
    else if (action === "close-lightbox") { closeLightbox(); }
    else if (action === "lightbox-prev") { lightboxStep(-1); }
    else if (action === "lightbox-next") { lightboxStep(1); }
    else if (action === "clear-search") { clearSearch(t.dataset.target); }
    else if (action === "history-filter") { state.historyFilter = t.dataset.filter; state.historyLimit = HISTORY_PAGE; updateHistory(); }
    else if (action === "history-more") { state.historyLimit += HISTORY_PAGE; updateHistory(); }
  });

  document.addEventListener("submit", function (e) {
    if (e.target && e.target.id === "auth-form") handleAuthSubmit(e);
    else if (e.target && e.target.id === "add-item-form") submitNewItem(e);
    else if (e.target && e.target.id === "edit-item-form") submitEditItem(e);
    else if (e.target && e.target.id === "username-form") handleClaimUsername(e);
    else if (e.target && e.target.id === "add-friend-form") handleAddFriendSubmit(e);
    else if (e.target && e.target.id === "chat-form") sendChatMessage(e);
    else if (e.target && e.target.id === "create-group-form") submitCreateGroup(e);
  });

  document.addEventListener("change", function (e) {
    if (e.target && e.target.id === "photo-input") handleFileChange(e);
    else if (e.target && e.target.id === "photo-input-edit") handleFileChange(e);
    else if (e.target && e.target.id === "chat-media-input") handleChatMediaChange(e);
    else if (e.target && e.target.type === "checkbox" && e.target.closest(".avail-toggle")) toggleAvailable(e.target.dataset.id);
    else if (e.target && e.target.id === "history-user-filter") { state.historyUserFilter = e.target.value; state.historyLimit = HISTORY_PAGE; updateHistory(); }
    else if (e.target && e.target.id === "history-date-from") { state.historyDateFrom = e.target.value; state.historyLimit = HISTORY_PAGE; updateHistory(); }
    else if (e.target && e.target.id === "history-date-to") { state.historyDateTo = e.target.value; state.historyLimit = HISTORY_PAGE; updateHistory(); }
    else if (e.target && e.target.id === "trade-duration") state.tradeDuration = e.target.value;
  });

  document.addEventListener("input", function (e) {
    if (e.target && e.target.id === "new-item-name") state.newItemName = e.target.value;
    else if (e.target && e.target.id === "edit-item-name") state.editItemName = e.target.value;
    else if (e.target && e.target.id === "auth-email") state.authEmail = e.target.value;
    else if (e.target && e.target.id === "new-username") state.usernameInput = e.target.value;
    else if (e.target && e.target.id === "friend-username") { state.friendInput = e.target.value; render(); }
    else if (e.target && e.target.id === "community-search") { state.communitySearch = e.target.value; render(); }
    else if (e.target && e.target.id === "inventory-search") { state.inventorySearch = e.target.value; syncSearchBox(e.target); updateInventoryResults(); }
    else if (e.target && e.target.id === "other-inventory-search") { state.otherUserSearch = e.target.value; syncSearchBox(e.target); render(); }
    else if (e.target && e.target.id === "history-search") { state.historySearch = e.target.value; state.historyLimit = HISTORY_PAGE; syncSearchBox(e.target); updateHistory(); }
    else if (e.target && e.target.id === "chat-input") { state.chatInput = e.target.value; }
    else if (e.target && e.target.id === "new-group-name") { state.newGroupName = e.target.value; }
  });

  document.addEventListener("keydown", function (e) {
    if (!state.lightbox) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") lightboxStep(-1);
    else if (e.key === "ArrowRight") lightboxStep(1);
  });

  /* ============ helper for auth password ============ */
  document.addEventListener("input", function (e) {
    if (e.target && e.target.id === "auth-password") state.authPassword = e.target.value;
  });

  /* ============ friend form submit ============ */
  function handleAddFriendSubmit(e) {
    e.preventDefault();
    var username = (state.friendInput || "").trim();
    if (!username) { setMessage("Inserisci un nome utente.", "error"); return; }
    /* il campo NON viene svuotato qui: se il nome non esiste o c'e' gia' un rapporto,
       sendFriendRequest mostra l'errore e l'utente puo' correggere senza doverlo
       riscrivere da capo. Viene svuotato solo dentro sendFriendRequest, a richiesta
       effettivamente inviata. */
    sendFriendRequest(username);
  }

  /* ============ stato connessione (banner offline) ============
     navigator.onLine dice solo se il dispositivo e' collegato a una rete, non se quella
     rete arriva davvero a Firebase (wifi senza internet, rete che blocca il dominio, ecc):
     per questo lo usiamo solo per un primo responso immediato, mentre il segnale vero
     arriva da ".info/connected" di Firebase, che riflette la connessione reale al database. */
  window.addEventListener("online", function () { setState({ isOffline: false }); render(); });
  window.addEventListener("offline", function () { setState({ isOffline: true }); render(); });
  fbDb.ref(".info/connected").on("value", function (snap) {
    setState({ isOffline: snap.val() !== true });
    render();
  });

  /* ============ PWA: installazione e service worker ============ */
  var deferredInstallPrompt = null;
  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    deferredInstallPrompt = e;
    setState({ installAvailable: true });
    render();
  });
  window.addEventListener("appinstalled", function () {
    deferredInstallPrompt = null;
    setState({ installAvailable: false });
    render();
  });
  function promptInstall() {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then(function () {
      deferredInstallPrompt = null;
      setState({ installAvailable: false });
      render();
    });
  }
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("service-worker.js").catch(function () { /* l'app funziona comunque senza service worker */ });
    });
  }

  /* ============ avvio ============ */
  (function init() {
    render();
    fbAuth.onAuthStateChanged(function (fbUser) {
      state.booting = false;
      if (!fbUser) {
        /* user signed out: clear everything so the auth screen shows */
        detachChat();
        detachTradesLiveWatch();
        setState({
          currentUser: "",
          needUsername: false,
          usernameInput: "",
          tab: "inventory",
          message: null,
          authMode: "login",
          authEmail: "",
          authPassword: "",
          authError: "",
          linkSentTo: null,
          showAddItem: false,
          newItemName: "",
          newItemPhotos: [],
          showEditItem: false,
          editItemId: null,
          editItemName: "",
          editItemPhotos: [],
          inventory: [],
          inventorySearch: "",
          showTradeBuilder: false,
          wantIds: [],
          offerIds: [],
          community: [],
          communityUsers: [],
          communitySearch: "",
          selectedUser: null,
          otherUserInventory: [],
          historyFilter: "completed",
          historyLimit: HISTORY_PAGE,
          historySearch: "",
          history: [],
          allTrades: [],
          friends: [],
          friendInput: "",
          lightbox: null,
          groups: [],
          showGroupModal: false,
          newGroupName: "",
          newGroupMembers: [],
          chatTarget: null,
          chatMessages: [],
          chatInput: "",
          chatOtherInventory: [],
          showChatTradeBuilder: false,
          otherUserSearch: "",
          pendingChatMedia: null,
          chatMediaSending: false,
          showDeleteAccountConfirm: false,
          tradeDuration: "",
          historyUserFilter: "",
          historyDateFrom: "",
          historyDateTo: "",
          showTosModal: false
        });
        render();
        return;
      }
      render();
      if (state.currentUser || state.needUsername) return;
      resolveProfile(fbUser);
    });
    completeEmailLinkSignIn();
  })();
})();
