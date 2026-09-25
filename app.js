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
    search: '<circle cx="11" cy="11" r="7.5"/><path d="M21 21l-4.7-4.7"/>'
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
  var firebaseConfig = {
    apiKey: "__FIREBASE_API_KEY__",
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

  /* messaggio d'errore per le operazioni sul database: se mancano le regole, lo dice chiaramente */
  function dbErrorMessage(err, fallback) {
    var denied = err && (err.code === "PERMISSION_DENIED" || /permission_denied/i.test(err.message || ""));
    return denied ? "Permesso negato dalle regole del database: aggiungi il nodo friendRequests nelle regole di Firebase." : fallback;
  }

  /* ============ utilita' ============ */
  var USERNAME_RE = /^[a-zA-Z0-9_]{3,20}$/;
  function sameUser(a, b) { return String(a || "").toLowerCase() === String(b || "").toLowerCase(); }
  var MAX_ITEM_PHOTOS = 6;
  var HISTORY_PAGE = 12; /* scambi mostrati per volta nello storico */
  function genId() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }

  /* foto: supporta sia i vecchi oggetti con "photo" (singola) sia i nuovi con "photos" (array) */
  function itemPhotos(item) {
    if (!item) return [];
    if (Array.isArray(item.photos)) return item.photos;
    if (item.photo) return [item.photo];
    return [];
  }
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
    communitySearch: "",
    selectedUser: null,
    otherUserInventory: [],
    historyFilter: "completed",
    historyLimit: HISTORY_PAGE,
    historySearch: "",
    history: [],
    friends: [],
    friendInput: "",
    lightbox: null
  };

  function setState(changes) { Object.assign(state, changes); }

  function setMessage(text, type) { state.message = { text: text, type: type || "success" }; setTimeout(function () { state.message = null; }, 4000); render(); }

  /* ============ utility per items ============ */
  function getItemById(id, arr) { return arr && arr.find(function (i) { return i && i.id === id; }); }
  function findItemIndexById(id, arr) { return arr && arr.findIndex(function (i) { return i && i.id === id; }); }

  /* ============ UI - modali ============ */
  function openAddItem() { setState({ showAddItem: true, newItemName: "", newItemPhotos: [] }); render(); }
  function openEditItem(item) { setState({ showEditItem: true, editItemId: item.id, editItemName: item.name, editItemPhotos: itemPhotos(item).slice() }); render(); }
  function closeEditItem() { setState({ showEditItem: false, editItemId: null, editItemName: "", editItemPhotos: [] }); render(); }

  function handleFileChange(e) {
    var file = e.target.files[0];
    if (!file) return;
    var isEditing = state.showEditItem;
    var targetPhotos = isEditing ? state.editItemPhotos : state.newItemPhotos;
    if (targetPhotos.length >= MAX_ITEM_PHOTOS) { setMessage("Massimo " + MAX_ITEM_PHOTOS + " foto per oggetto.", "error"); return; }
    resizeImageFile(file).then(function (blob) {
      var reader = new FileReader();
      reader.onload = function (ev) { targetPhotos.push(ev.target.result); render(); };
      reader.readAsDataURL(blob);
    }).catch(function (err) { setMessage(err.message, "error"); });
  }

  /* ============ add item ============ */
  function submitNewItem(e) {
    e.preventDefault();
    var name = (state.newItemName || "").trim();
    if (!name) { setMessage("Inserisci il nome dell'oggetto.", "error"); return; }
    setState({ showAddItem: false });
    var item = { id: genId(), name: name, photos: state.newItemPhotos, available: true, created: Date.now() };
    updateInventory(state.currentUser.toLowerCase(), function (inv) { inv.push(item); return inv; }).then(function () {
      setState({ newItemName: "", newItemPhotos: [] });
      setMessage("Oggetto aggiunto con successo.", "success");
      loadInventory();
    }).catch(function (err) { setMessage("Errore: " + err.message, "error"); });
  }

  /* ============ edit item ============ */
  function submitEditItem(e) {
    e.preventDefault();
    var name = (state.editItemName || "").trim();
    if (!name) { setMessage("Inserisci il nome dell'oggetto.", "error"); return; }
    setState({ showEditItem: false });
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
      setState({ editItemId: null, editItemName: "", editItemPhotos: [] });
      setMessage("Oggetto modificato con successo.", "success");
      loadInventory();
    }).catch(function (err) { setMessage("Errore: " + err.message, "error"); });
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
  /* "inventories" e' un oggetto {usernameLower: [item, item, ...]}: qui lo appiattiamo
     in un'unica lista di oggetti disponibili, ciascuno con il proprietario ("user") allegato */
  function loadCommunity() {
    dbGet("inventories").then(function (invs) {
      invs = invs || {};
      var all = [];
      Object.keys(invs).forEach(function (uLower) {
        if (sameUser(uLower, state.currentUser)) return;
        toArray(invs[uLower]).forEach(function (item) {
          if (!isAvailable(item)) return;
          var copy = Object.assign({}, item);
          copy.user = uLower;
          all.push(copy);
        });
      });
      setState({ community: all });
      render();
    });
  }
  function loadTrades() { dbGet("trades").then(function (trades) { var all = toArray(trades); setState({ history: all }); updateHistory(); }); }
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
      var incoming = allRequests.filter(function (r) { return sameUser(r.to, state.currentUser); })
        .map(function (r) { return { id: r.id, username: r.from, status: "pending" }; });
      var outgoing = allRequests.filter(function (r) { return sameUser(r.from, state.currentUser); })
        .map(function (r) { return { id: r.id, username: r.to, status: "outgoing" }; });
      setState({ friends: accepted.concat(incoming, outgoing) });
      render();
    });
  }
  function updateHistory() {
    var search = (state.historySearch || "").toLowerCase(), filter = state.historyFilter;
    var h = state.history.filter(function (t) {
      var matchSearch = !search || (t.from || "").toLowerCase().indexOf(search) !== -1 || (t.to || "").toLowerCase().indexOf(search) !== -1;
      var matchFilter = filter === "completed" ? t.accepted : filter === "pending" ? !t.accepted && !t.declined : t.declined;
      return matchSearch && matchFilter;
    }).sort(function (a, b) { return (b.created || 0) - (a.created || 0); }).slice(0, state.historyLimit);
    setState({ history: h });
    render();
  }

  /* ============ auth ============ */
  function handleAuthSubmit(e) {
    e.preventDefault();
    var email = state.authEmail.trim();
    if (!email) { setState({ authError: "Inserisci email." }); render(); return; }
    if (state.authMode === "login" || state.authMode === "register") {
      var pw = state.authPassword || "";
      if (pw.length < 6) { setState({ authError: "Password troppo corta." }); render(); return; }
      var fn = state.authMode === "login" ? fbAuth.signInWithEmailAndPassword : fbAuth.createUserWithEmailAndPassword;
      fn.call(fbAuth, email, pw).catch(function (err) { setState({ authError: authErrorMessage(err) }); render(); });
    }
  }
  function handleGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    fbAuth.signInWithPopup(provider).catch(function (err) { setState({ authError: authErrorMessage(err) }); render(); });
  }
  function handleLogout() { fbAuth.signOut(); }

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
      if (uname) { setState({ currentUser: uname }); loadInventory(); loadCommunity(); loadFriends(); loadTrades(); }
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
        setState({ currentUser: u, needUsername: false });
        loadInventory();
        loadCommunity();
        loadFriends();
        loadTrades();
        render();
      });
    }).catch(function (err) { setState({ authError: "Errore: " + err.message }); render(); });
  }

  /* ============ community & friends ============ */
  function sendFriendRequest(username) {
    var id = genId();
    var req = { id: id, from: state.currentUser, to: username, created: Date.now() };
    dbSet("friendRequests/" + id, req).then(function () { setMessage("Richiesta inviata.", "success"); loadFriends(); }).catch(function (err) { setMessage("Errore: " + dbErrorMessage(err, err.message), "error"); });
  }

  function respondFriendRequest(reqId, accept) {
    dbGet("friendRequests/" + reqId).then(function (req) {
      if (!req) return;
      var u1 = req.from.toLowerCase(), u2 = req.to.toLowerCase();
      if (accept) {
        return Promise.all([
          dbGet("users/" + u1 + "/friends").then(function (f) { var arr = toArray(f); if (!arr.find(function (x) { return x && x.username === req.to; })) arr.push({ username: req.to, id: genId() }); return dbSet("users/" + u1 + "/friends", arr); }),
          dbGet("users/" + u2 + "/friends").then(function (f) { var arr = toArray(f); if (!arr.find(function (x) { return x && x.username === req.from; })) arr.push({ username: req.from, id: genId() }); return dbSet("users/" + u2 + "/friends", arr); })
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

  function openUser(username) { setState({ selectedUser: username, otherUserInventory: [] }); getInventory(username.toLowerCase()).then(function (inv) { setState({ otherUserInventory: inv }); render(); }); }
  function backToCommunity() { setState({ selectedUser: null, otherUserInventory: [] }); render(); }
  function openFriend(username) { openUser(username); setState({ tab: "community" }); render(); }

  /* ============ trades ============ */
  function toggleWant(id) { var i = state.wantIds.indexOf(id); if (i >= 0) state.wantIds.splice(i, 1); else state.wantIds.push(id); render(); }
  function toggleOffer(id) { var i = state.offerIds.indexOf(id); if (i >= 0) state.offerIds.splice(i, 1); else state.offerIds.push(id); render(); }

  function submitTrade() {
    if (!state.selectedUser) return;
    if (!state.wantIds.length || !state.offerIds.length) { setMessage("Seleziona cosa vuoi e cosa offri.", "error"); return; }
    var trade = {
      id: genId(),
      from: state.currentUser,
      to: state.selectedUser,
      wantIds: state.wantIds,
      offerIds: state.offerIds,
      created: Date.now(),
      accepted: false,
      declined: false
    };
    dbSet("trades/" + trade.id, trade).then(function () {
      setState({ showTradeBuilder: false, wantIds: [], offerIds: [] });
      setMessage("Scambio proposto!", "success");
      loadTrades();
    }).catch(function (err) { setMessage("Errore: " + err.message, "error"); });
  }

  function respondTrade(tradeId, accept) {
    dbGet("trades/" + tradeId).then(function (trade) {
      if (!trade) return;
      trade.accepted = accept;
      trade.declined = !accept;
      return dbSet("trades/" + tradeId, trade);
    }).then(function () { setMessage(accept ? "Scambio accettato!" : "Scambio rifiutato.", "success"); loadTrades(); }).catch(function (err) { setMessage("Errore: " + err.message, "error"); });
  }

  function cancelTrade(tradeId) {
    fbDb.ref("trades/" + tradeId).remove().then(function () { setMessage("Scambio annullato.", "success"); loadTrades(); }).catch(function (err) { setMessage("Errore: " + err.message, "error"); });
  }

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
    if (target === "community") setState({ communitySearch: "" });
    else if (target === "inventory") setState({ inventorySearch: "" });
    else if (target === "history") setState({ historySearch: "", historyLimit: HISTORY_PAGE });
    render();
  }
  function syncSearchBox(el) { if (el && el.parentElement) { el.parentElement.classList.toggle("search-active", el.value.length > 0); } }
  function updateInventoryResults() {
    var search = (state.inventorySearch || "").toLowerCase();
    render();
  }

  /* ============ render ============ */
  function renderAddItemModal() {
    var photos = state.newItemPhotos;
    return '' +
      '<div id="add-item-overlay" class="modal-overlay"></div>' +
      '<div class="modal">' +
      '<div class="modal-header"><h2>Aggiungi Oggetto</h2><button type="button" data-action="close-add-item" class="btn-close">' + icon("x") + '</button></div>' +
      '<form id="add-item-form" class="modal-body">' +
      '<div class="field"><label>Nome</label><input id="new-item-name" type="text" placeholder="Es: Bicicletta blu" value="' + escapeHtml(state.newItemName) + '"/></div>' +
      '<div class="photos-section"><label>Foto (' + photos.length + '/' + MAX_ITEM_PHOTOS + ')</label>' +
      '<div class="photos-grid">' + photos.map(function (p, idx) { return '<div class="photo-thumb" style="background-image:url(' + p + ')"><button type="button" data-action="remove-photo" data-index="' + idx + '" class="btn-remove-photo">' + icon("x") + '</button></div>'; }).join("") +
      (photos.length < MAX_ITEM_PHOTOS ? '<label class="photo-upload"><input type="file" id="photo-input" accept="image/*" style="display:none"/>' + icon("image") + ' Carica foto</label>' : '') +
      '</div></div>' +
      '<div class="modal-footer"><button type="submit" class="btn-primary block">Aggiungi</button></div>' +
      '</form></div>';
  }

  function renderEditItemModal() {
    var photos = state.editItemPhotos;
    return '' +
      '<div id="add-item-overlay" class="modal-overlay"></div>' +
      '<div class="modal">' +
      '<div class="modal-header"><h2>Modifica Oggetto</h2><button type="button" data-action="close-edit-item" class="btn-close">' + icon("x") + '</button></div>' +
      '<form id="edit-item-form" class="modal-body">' +
      '<div class="field"><label>Nome</label><input id="edit-item-name" type="text" placeholder="Es: Bicicletta blu" value="' + escapeHtml(state.editItemName) + '"/></div>' +
      '<div class="photos-section"><label>Foto (' + photos.length + '/' + MAX_ITEM_PHOTOS + ')</label>' +
      '<div class="photos-grid">' + photos.map(function (p, idx) { return '<div class="photo-thumb" style="background-image:url(' + p + ')"><button type="button" data-action="remove-edit-photo" data-index="' + idx + '" class="btn-remove-photo">' + icon("x") + '</button></div>'; }).join("") +
      (photos.length < MAX_ITEM_PHOTOS ? '<label class="photo-upload"><input type="file" id="photo-input-edit" accept="image/*" style="display:none"/>' + icon("image") + ' Carica foto</label>' : '') +
      '</div></div>' +
      '<div class="modal-footer"><button type="submit" class="btn-primary block">Salva Modifiche</button></div>' +
      '</form></div>';
  }

  function renderLightbox() {
    if (!state.lightbox) return "";
    var lb = state.lightbox, p = lb.photos[lb.index];
    return '' +
      '<div id="lightbox-overlay" class="lightbox-overlay"></div>' +
      '<div class="lightbox"><button type="button" data-action="lightbox-prev" class="lightbox-btn prev">' + icon("chevron-left") + '</button>' +
      '<img src="' + escapeHtml(p) + '" alt="' + escapeHtml(lb.item.name) + '"/>' +
      '<button type="button" data-action="lightbox-next" class="lightbox-btn next">' + icon("chevron-left") + '</button>' +
      '<button type="button" data-action="close-lightbox" class="lightbox-close">' + icon("x") + '</button>' +
      '<div class="lightbox-counter">' + (lb.index + 1) + '/' + lb.photos.length + '</div></div>';
  }

  function renderInventoryItem(item, isOwn) {
    var av = isAvailable(item), photos = itemPhotos(item);
    var html = '<div class="item-card ' + (av ? "" : "unavailable") + '">';
    if (photos.length) { html += '<div class="item-photo" data-action="view-photos" data-id="' + escapeHtml(item.id) + '">' + (photos.length > 1 ? '<div class="photo-badge">' + photos.length + '</div>' : '') + '<img src="' + escapeHtml(photos[0]) + '" alt=""/></div>'; }
    else { html += '<div class="item-photo-empty">' + icon("package") + '</div>'; }
    html += '<div class="item-info"><div class="item-header"><h3>' + escapeHtml(item.name) + '</h3>';
    if (isOwn) {
      html += '<div class="item-actions">' +
        '<button type="button" data-action="open-edit-item" data-id="' + escapeHtml(item.id) + '" class="btn-icon" title="Modifica">' + icon("edit") + '</button>' +
        '<button type="button" data-action="delete-item" data-id="' + escapeHtml(item.id) + '" class="btn-icon" title="Elimina">' + icon("trash") + '</button>' +
        '</div>';
    }
    html += '</div>';
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
      html += '<div class="items-grid">' + filtered.map(function (item) { return renderInventoryItem(item, true); }).join("") + '</div>';
      if (filtered.length === 0) { html += '<div class="empty-state"><p>Nessun risultato.</p></div>'; }
    }
    return html;
  }

  function renderCommunityTab() {
    var search = (state.communitySearch || "").toLowerCase();
    var filtered = state.community.filter(function (item) { return !search || item.name.toLowerCase().indexOf(search) !== -1; });
    var html = '<div class="page-header"><h2>Community</h2></div>';
    html += '<div class="search-box-wrap"><input type="text" id="community-search" placeholder="Cerca..." value="' + escapeHtml(state.communitySearch) + '"/>' + (state.communitySearch ? '<button type="button" data-action="clear-search" data-target="community" class="btn-clear">' + icon("x") + '</button>' : '') + '</div>';
    if (state.community.length === 0) {
      html += '<div class="empty-state"><p>Nessun oggetto disponibile al momento.</p></div>';
    } else {
      html += '<div class="items-grid">' + filtered.map(function (item) {
        return '<div class="item-card" onclick="var action=event.target.closest(\'[data-action]\');if(action) return;' + "openUser('" + escapeHtml(item.user || "") + "');setState({tab:'community'});render();" + '">' +
          (itemPhotos(item).length ? '<div class="item-photo"><img src="' + escapeHtml(itemPhotos(item)[0]) + '" alt=""/></div>' : '<div class="item-photo-empty">' + icon("package") + '</div>') +
          '<div class="item-info"><div class="item-header"><h3>' + escapeHtml(item.name) + '</h3><span class="item-user">' + escapeHtml(item.user || "") + '</span></div></div></div>';
      }).join("") + '</div>';
      if (filtered.length === 0) { html += '<div class="empty-state"><p>Nessun risultato.</p></div>'; }
    }
    return html;
  }

  function renderOtherUserView() {
    var html = '<div class="page-header"><button type="button" data-action="back-to-community" class="btn-icon-left">' + icon("chevron-left") + ' Indietro</button><h2>' + escapeHtml(state.selectedUser) + '</h2></div>';
    if (state.otherUserInventory.length === 0) {
      html += '<div class="empty-state"><p>Nessun oggetto disponibile.</p></div>';
    } else {
      html += '<div class="items-grid">' + state.otherUserInventory.filter(isAvailable).map(function (item) {
        var sel = state.wantIds.indexOf(item.id) !== -1;
        return '<div class="item-card ' + (sel ? "selected" : "") + '"><div class="item-select" data-action="toggle-want" data-id="' + escapeHtml(item.id) + '">' +
          (itemPhotos(item).length ? '<div class="item-photo"><img src="' + escapeHtml(itemPhotos(item)[0]) + '" alt=""/></div>' : '<div class="item-photo-empty">' + icon("package") + '</div>') +
          '<div class="select-check">' + icon("check") + '</div>' +
          '</div><div class="item-info"><h3>' + escapeHtml(item.name) + '</h3></div></div>';
      }).join("") + '</div>';
      html += '<div class="trade-builder-btn"><button type="button" data-action="open-trade-builder" class="btn-primary block">' + icon("swap") + ' Proponi Scambio</button></div>';
    }
    if (state.showTradeBuilder) {
      html += '<div class="trade-builder"><div class="trade-section"><h3>Voglio</h3><div class="items-list">' +
        state.otherUserInventory.filter(isAvailable).map(function (item) {
          var sel = state.wantIds.indexOf(item.id) !== -1;
          return '<div class="trade-item ' + (sel ? "selected" : "") + '" data-action="toggle-want" data-id="' + escapeHtml(item.id) + '">' + escapeHtml(item.name) + (sel ? ' ' + icon("check") : "") + '</div>';
        }).join("") +
        '</div></div>' +
        '<div class="trade-divider">' + icon("swap") + '</div>' +
        '<div class="trade-section"><h3>Offro</h3><div class="items-list">' +
        state.inventory.map(function (item) {
          var sel = state.offerIds.indexOf(item.id) !== -1;
          return '<div class="trade-item ' + (sel ? "selected" : "") + '" data-action="toggle-offer" data-id="' + escapeHtml(item.id) + '">' + escapeHtml(item.name) + (sel ? ' ' + icon("check") : "") + '</div>';
        }).join("") +
        '</div></div>' +
        '<div class="trade-actions"><button type="button" data-action="cancel-trade-builder" class="btn-ghost">Annulla</button><button type="button" data-action="submit-trade" class="btn-primary">Invia Proposta</button></div></div>';
    }
    return html;
  }

  function renderFriendsTab() {
    var incoming = state.friends.filter(function (f) { return f.status === "pending"; });
    var outgoing = state.friends.filter(function (f) { return f.status === "outgoing"; });
    var accepted = state.friends.filter(function (f) { return f.status === "accepted"; });
    var html = '<div class="page-header"><h2>Amici</h2></div><form id="add-friend-form" class="friend-add"><div class="field"><label>Aggiungi amico</label><input id="friend-username" type="text" placeholder="Nome utente" value="' + escapeHtml(state.friendInput) + '"/></div><button type="submit" class="btn-primary">Aggiungi</button></form>';
    if (incoming.length) { html += '<div class="section-title">Richieste in sospeso</div>' + incoming.map(function (r) { return '<div class="friend-card"><div class="who"><div>' + icon("user") + '</div><div><div class="name">' + escapeHtml(r.username || "") + '</div></div></div><div class="friend-actions"><button type="button" data-action="accept-friend" data-id="' + escapeHtml(r.id) + '" class="btn-ghost friend-accept">' + icon("user-check") + '</button><button type="button" data-action="decline-friend" data-id="' + escapeHtml(r.id) + '" class="btn-ghost">' + icon("x") + '</button></div></div>'; }).join(""); }
    if (outgoing.length) { html += '<div class="section-title">Richieste inviate</div>' + outgoing.map(function (r) { return '<div class="friend-card"><div class="who"><div>' + icon("user") + '</div><div><div class="name">' + escapeHtml(r.username || "") + '</div></div></div><div class="friend-actions"><span class="pill-muted">In attesa</span><button type="button" data-action="cancel-friend-request" data-id="' + escapeHtml(r.id) + '" class="btn-ghost">' + icon("x") + '</button></div></div>'; }).join(""); }
    if (accepted.length) { html += '<div class="section-title">Amici</div>' + accepted.map(function (f) { return '<div class="friend-card"><div class="who"><div>' + icon("user") + '</div><div><div class="name">' + escapeHtml(f.username || "") + '</div></div></div><div class="friend-actions"><button type="button" data-action="open-friend" data-username="' + escapeHtml(f.username || "") + '" class="btn-ghost">' + icon("inbox") + '</button><button type="button" data-action="remove-friend" data-id="' + escapeHtml(f.id) + '" data-username="' + escapeHtml(f.username || "") + '" class="btn-ghost">' + icon("x") + '</button></div></div>'; }).join(""); }
    if (!incoming.length && !outgoing.length && !accepted.length) { html += '<div class="empty-state"><p>Nessun amico ancora. Inizia ad aggiungerne!</p></div>'; }
    return html;
  }

  function renderTradesTab() {
    var search = (state.historySearch || "").toLowerCase();
    var html = '<div class="page-header"><h2>Scambi</h2><div class="trade-filters">' +
      '<button type="button" data-action="history-filter" data-filter="completed" class="' + (state.historyFilter === "completed" ? "active" : "") + '">Completati</button>' +
      '<button type="button" data-action="history-filter" data-filter="pending" class="' + (state.historyFilter === "pending" ? "active" : "") + '">In attesa</button>' +
      '<button type="button" data-action="history-filter" data-filter="declined" class="' + (state.historyFilter === "declined" ? "active" : "") + '">Rifiutati</button>' +
      '</div></div>';
    html += '<div class="search-box-wrap"><input type="text" id="history-search" placeholder="Cerca..." value="' + escapeHtml(state.historySearch) + '"/>' + (state.historySearch ? '<button type="button" data-action="clear-search" data-target="history" class="btn-clear">' + icon("x") + '</button>' : '') + '</div>';
    if (state.history.length === 0) { html += '<div class="empty-state"><p>Nessuno scambio ancora.</p></div>'; }
    else { html += '<div class="trade-history">' + state.history.slice(0, state.historyLimit).map(function (t) { var isSender = sameUser(t.from, state.currentUser); return '<div class="trade-card ' + (t.accepted ? "accepted" : t.declined ? "declined" : "pending") + '"><div class="trade-header"><span>' + (isSender ? "A: " : "Da: ") + escapeHtml(isSender ? t.to : t.from) + '</span><span class="trade-status">' + (t.accepted ? "Accettato" : t.declined ? "Rifiutato" : "In attesa") + '</span></div></div>'; }).join("") + '</div>'; if (state.history.length >= state.historyLimit) { html += '<div class="load-more"><button type="button" data-action="history-more" class="btn-ghost">Carica altri...</button></div>'; } }
    return html;
  }

  function renderAuth() {
    if (state.needUsername) {
      return '<div class="auth-wrap"><div class="auth-box"><div class="auth-header"><h1 class="display">Baratto</h1></div><div class="auth-panel"><p style="margin-bottom:1rem;">Scegli un nome utente:</p><form id="username-form"><div class="field"><input id="new-username" type="text" placeholder="3-20 caratteri, lettere/numeri/_" maxlength="20" value="' + escapeHtml(state.usernameInput) + '"/></div>' + (state.authError ? '<div class="banner error">' + icon("alert-circle") + '<span>' + escapeHtml(state.authError) + '</span></div>' : '') + '<button type="submit" class="btn-primary block">Continua</button></form></div></div></div>';
    }
    var segHtml = '<div class="seg"><button type="button" data-action="show-login" class="' + (state.authMode === "login" ? "active" : "") + '">Accedi</button><button type="button" data-action="show-register" class="' + (state.authMode === "register" ? "active" : "") + '">Registrati</button><button type="button" data-action="show-link" class="' + (state.authMode === "link" ? "active" : "") + '">Link Email</button></div>';
    var formHtml = '';
    if (state.linkSentTo) {
      formHtml = '<div class="banner success">' + icon("check") + '<span>Link inviato a ' + escapeHtml(state.linkSentTo) + '. Controlla la posta.</span></div><button type="button" data-action="link-again" class="auth-link-btn">Invia un altro link</button>';
    } else if (state.authMode === "link") {
      formHtml = '<form id="auth-form"><div class="field"><label>Email</label><div class="field-icon-wrap"><input id="auth-email" type="email" placeholder="tua@email.com" value="' + escapeHtml(state.authEmail) + '"/><span class="icon">' + icon("mail") + '</span></div></div>' + (state.authError ? '<div class="banner error">' + icon("alert-circle") + '<span>' + escapeHtml(state.authError) + '</span></div>' : '') + '<button type="submit" class="btn-primary block">Invia Link</button></form>';
    } else {
      formHtml = '<form id="auth-form"><div class="field"><label>Email</label><div class="field-icon-wrap"><input id="auth-email" type="email" placeholder="tua@email.com" value="' + escapeHtml(state.authEmail) + '"/><span class="icon">' + icon("mail") + '</span></div></div><div class="field"><label>Password</label><div class="field-icon-wrap"><input id="auth-password" type="password" placeholder="Almeno 6 caratteri"/><span class="icon">' + icon("lock") + '</span></div></div>' + (state.authError ? '<div class="banner error">' + icon("alert-circle") + '<span>' + escapeHtml(state.authError) + '</span></div>' : '') + '<button type="submit" class="btn-primary block">' + (state.authMode === "login" ? "Accedi" : "Registrati") + '</button></form><div class="auth-divider">oppure</div><button type="button" data-action="google-login" class="btn-google"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor"/></svg>Google</button>';
    }
    return '<div class="auth-wrap"><div class="auth-box"><div class="auth-header"><h1 class="display">Baratto</h1><div class="ornament"><div class="line"></div><div class="dot"></div><div class="line"></div></div><p>Scambia oggetti con la comunità</p></div><div class="auth-panel">' + segHtml + formHtml + '</div><div class="auth-footnote">Creando un account accetti i nostri <a href="#" style="color:var(--brass);">Termini di Servizio</a></div></div></div>';
  }

  function renderApp() {
    var tabsHtml = '<button type="button" data-action="switch-tab" data-tab="inventory" class="' + (state.tab === "inventory" ? "active" : "") + '">' + icon("package") + ' Inventario</button>' +
      '<button type="button" data-action="switch-tab" data-tab="community" class="' + (state.tab === "community" ? "active" : "") + '">' + icon("users") + ' Community</button>' +
      '<button type="button" data-action="switch-tab" data-tab="friends" class="' + (state.tab === "friends" ? "active" : "") + '">' + icon("user-plus") + ' Amici</button>' +
      '<button type="button" data-action="switch-tab" data-tab="trades" class="' + (state.tab === "trades" ? "active" : "") + '">' + icon("swap") + ' Scambi</button>';
    var tabContent = '';
    if (state.tab === "inventory") tabContent = renderInventoryTab();
    else if (state.tab === "community") tabContent = state.selectedUser ? renderOtherUserView() : renderCommunityTab();
    else if (state.tab === "friends") tabContent = renderFriendsTab();
    else if (state.tab === "trades") tabContent = renderTradesTab();

    return '' +
      '<header class="app-header"><div class="row"><span class="wordmark display">Baratto</span>' +
        '<div class="header-right"><span class="greet">Ciao, <strong>' + escapeHtml(state.currentUser) + '</strong></span>' +
        '<button data-action="logout" class="btn-ghost">' + icon("logout") + " Esci</button></div></div>" +
        '<div class="tab-nav">' + tabsHtml + "</div></header>" +
      (state.message ? '<div class="message-wrap"><div class="banner ' + state.message.type + '">' +
        icon(state.message.type === "error" ? "alert-circle" : "check") + "<span>" + escapeHtml(state.message.text) + "</span></div></div>" : "") +
      '<main class="main"><div class="content">' + tabContent + "</div></main>" +
      (state.showAddItem ? renderAddItemModal() : "") +
      (state.showEditItem ? renderEditItemModal() : "") +
      renderLightbox();
  }

  function switchTab(tab) { setState({ tab: tab, selectedUser: null, otherUserInventory: [] }); render(); }

  function render() {
    if (state.booting) {
      document.getElementById("app").innerHTML = '<div class="auth-wrap"><div class="auth-box" style="text-align:center;">' + icon("loader", "spin-sm") + "</div></div>";
      return;
    }
    var FOCUS_PRESERVE_IDS = ["friend-username", "community-search", "inventory-search", "history-search"];
    var active = document.activeElement;
    var keepFocusId = (active && FOCUS_PRESERVE_IDS.indexOf(active.id) !== -1) ? active.id : null;
    var selStart = keepFocusId ? active.selectionStart : null, selEnd = keepFocusId ? active.selectionEnd : null;
    document.getElementById("app").innerHTML = state.currentUser ? renderApp() : renderAuth();
    if (keepFocusId) {
      var el = document.getElementById(keepFocusId);
      if (el) { el.focus(); try { el.setSelectionRange(selStart, selEnd); } catch (err) {} }
    }
  }

  /* ============ gestione eventi (delegazione) ============ */
  document.addEventListener("click", function (e) {
    if (e.target && e.target.id === "add-item-overlay") { state.showAddItem = false; render(); return; }
    if (e.target && e.target.id === "lightbox-overlay") { closeLightbox(); return; }
    var t = e.target.closest("[data-action]");
    if (!t) return;
    var action = t.dataset.action;
    if (action === "show-login") { state.authMode = "login"; state.authError = ""; render(); }
    else if (action === "show-register") { state.authMode = "register"; state.authError = ""; render(); }
    else if (action === "show-link") { state.authMode = "link"; state.authError = ""; state.linkSentTo = null; render(); }
    else if (action === "link-again") { state.linkSentTo = null; render(); }
    else if (action === "google-login") { handleGoogle(); }
    else if (action === "logout") { handleLogout(); }
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
    else if (action === "delete-item") { deleteItem(t.dataset.id); }
    else if (action === "open-user") { openUser(t.dataset.username); }
    else if (action === "back-to-community") { backToCommunity(); }
    else if (action === "refresh-community") { loadCommunity(); }
    else if (action === "refresh-trades") { loadTrades(); }
    else if (action === "refresh-friends") { loadFriends(); }
    else if (action === "add-friend") { sendFriendRequest(t.dataset.username); }
    else if (action === "accept-friend") { respondFriendRequest(t.dataset.id, true); }
    else if (action === "decline-friend") { respondFriendRequest(t.dataset.id, false); }
    else if (action === "cancel-friend-request") { cancelFriendRequest(t.dataset.id); }
    else if (action === "remove-friend") { removeFriend(t.dataset.id, t.dataset.username); }
    else if (action === "open-friend") { openFriend(t.dataset.username); }
    else if (action === "open-trade-builder") { state.showTradeBuilder = true; render(); }
    else if (action === "cancel-trade-builder") { state.showTradeBuilder = false; state.wantIds = []; state.offerIds = []; render(); }
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
  });

  document.addEventListener("change", function (e) {
    if (e.target && e.target.id === "photo-input") handleFileChange(e);
    else if (e.target && e.target.id === "photo-input-edit") handleFileChange(e);
    else if (e.target && e.target.classList.contains("avail-toggle")) toggleAvailable(e.target.dataset.id);
  });

  document.addEventListener("input", function (e) {
    if (e.target && e.target.id === "new-item-name") state.newItemName = e.target.value;
    else if (e.target && e.target.id === "edit-item-name") state.editItemName = e.target.value;
    else if (e.target && e.target.id === "auth-email") state.authEmail = e.target.value;
    else if (e.target && e.target.id === "new-username") state.usernameInput = e.target.value;
    else if (e.target && e.target.id === "friend-username") state.friendInput = e.target.value;
    else if (e.target && e.target.id === "community-search") { state.communitySearch = e.target.value; render(); }
    else if (e.target && e.target.id === "inventory-search") { state.inventorySearch = e.target.value; syncSearchBox(e.target); updateInventoryResults(); }
    else if (e.target && e.target.id === "history-search") { state.historySearch = e.target.value; state.historyLimit = HISTORY_PAGE; syncSearchBox(e.target); updateHistory(); }
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
    sendFriendRequest(username);
    state.friendInput = "";
    render();
  }

  /* ============ avvio ============ */
  (function init() {
    render();
    fbAuth.onAuthStateChanged(function (fbUser) {
      state.booting = false;
      render();
      if (!fbUser) return;
      if (state.currentUser || state.needUsername) return;
      resolveProfile(fbUser);
    });
    completeEmailLinkSignIn();
  })();
})();
