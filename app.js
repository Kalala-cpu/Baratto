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
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    inbox: '<path d="M4 12h4l2 3h4l2-3h4"/><path d="M5.5 5h13l1.5 7v6a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18v-6l1.5-7z"/>',
    send: '<path d="M4 12l16-8-6 16-3-7-7-1z"/>',
    "alert-circle": '<circle cx="12" cy="12" r="8.5"/><path d="M12 8v5"/><path d="M12 16h.01"/>',
    loader: '<path d="M12 3v3M12 18v3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M3 12h3M18 12h3M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>',
    "chevron-left": '<path d="M14.5 6L8.5 12l6 6"/>',
    refresh: '<path d="M20 12a8 8 0 1 1-2.34-5.66"/><path d="M20 4v5h-5"/>',
    gift: '<rect x="4" y="9.5" width="16" height="10.5" rx="1"/><path d="M4 13.5h16"/><path d="M12 9.5V20"/><path d="M12 9.5c-1.5 0-3-1-3-2.75S10.3 4 12 5.5c1.7-1.5 3-.75 3 1.25S13.5 9.5 12 9.5z"/>'
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
    apiKey: "AIzaSyDLiTnXkxJAJgUXuYyZrw6Rp6RvMhIU8MM",
    authDomain: "baratto-311e9.firebaseapp.com",
    databaseURL: "https://baratto-311e9-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "baratto-311e9",
    storageBucket: "baratto-311e9.firebasestorage.app",
    messagingSenderId: "38778508770",
    appId: "1:38778508770:web:ddb8608a51c569915f15bb"
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
          var width = img.width, height = img.height;
          if (width > maxDim || height > maxDim) {
            if (width >= height) { height = Math.round(height * maxDim / width); width = maxDim; }
            else { width = Math.round(width * maxDim / height); height = maxDim; }
          }
          var canvas = document.createElement("canvas");
          canvas.width = width; canvas.height = height;
          canvas.getContext("2d").drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL("image/jpeg", quality));
        };
        img.src = ev.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  function timeAgo(ts) {
    var s = Math.floor((Date.now() - ts) / 1000);
    if (s < 60) return "poco fa";
    var m = Math.floor(s / 60);
    if (m < 60) return m + " min fa";
    var h = Math.floor(m / 60);
    if (h < 24) return h + " ore fa";
    var d = Math.floor(h / 24);
    return d + " g fa";
  }

  function getPerspective(trade, me) {
    var isFrom = trade.fromUser === me;
    return {
      counterpart: isFrom ? trade.toUser : trade.fromUser,
      give: isFrom ? trade.offerItems : trade.requestItems,
      receive: isFrom ? trade.requestItems : trade.offerItems,
      isFrom: isFrom
    };
  }

  /* ============ stato applicazione ============ */
  var state = {
    booting: true, authEmail: "", linkSentTo: null, freshLogin: false, needUsername: false, usernameInput: "", usernameError: "", currentUser: null, authMode: "login", authError: "", authBusy: false,
    tab: "inventory", message: null,
    myInventory: [], invLoading: false,
    communityLoading: false, communityUsers: [], selectedUser: null, otherInventory: [], otherInventoryTotal: 0, otherLoading: false,
    showAddItem: false, newItemName: "", newItemPhotos: [], addBusy: false,
    showTradeBuilder: false, wantIds: [], offerIds: [], tradeBusy: false,
    incomingTrades: [], outgoingTrades: [], historyTrades: [], tradesLoading: false, respondingId: null,
    incomingFriendReqs: [], outgoingFriendReqs: [], friends: [], friendsSig: "", friendsLoading: false, friendInput: "", friendAddBusy: false, friendBusyId: null,
    lightbox: null
  };
  var msgTimer = null;
  var tradesPollInterval = null;
  var friendsPollInterval = null;

  function notify(type, text) {
    state.message = { type: type, text: text };
    render();
    if (msgTimer) clearTimeout(msgTimer);
    msgTimer = setTimeout(function () { state.message = null; render(); }, 4500);
  }

  /* ============ autenticazione ============ */
  /* Metodi: email+password, link via email (senza password), Google.
     Dopo l'accesso, ogni utente Firebase (uid) deve avere uno username: profiles/{uid} + usernames/{username}. */
  var LINK_EMAIL_KEY = "baratto:emailForSignIn"; /* solo comodita' per-dispositivo, non e' un dato dell'app */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function completeLogin(username, silent, isNew) {
    state.currentUser = username;
    state.authBusy = false; state.needUsername = false; state.linkSentTo = null;
    state.authError = ""; state.tab = "inventory";
    render();
    loadMyInventory();
    loadTrades(true);
    loadFriends(true);
    if (!silent) notify("success", (isNew ? "Benvenuto, " : "Bentornato, ") + username + "!");
  }

  function authFail(err) {
    console.error("auth error", err);
    state.authBusy = false; state.freshLogin = false;
    state.authError = authErrorMessage(err);
    render();
  }

  /* cerca lo username collegato all'uid; se manca, chiede di sceglierlo */
  function resolveProfile(fbUser) {
    return dbGet("profiles/" + fbUser.uid).then(function (profile) {
      var silent = !state.freshLogin; state.freshLogin = false;
      if (profile && profile.username) { completeLogin(profile.username, silent); }
      else {
        state.authBusy = false; state.needUsername = true; state.usernameError = ""; state.usernameInput = "";
        render();
      }
    }).catch(authFail);
  }

  function handleAuthSubmit(e) {
    e.preventDefault();
    var email = (document.getElementById("auth-email").value || "").trim();
    state.authEmail = email;
    if (state.authMode === "link") { handleSendLink(email); return; }
    var pass = document.getElementById("auth-password").value;
    if (state.authMode === "login") handleLogin(email, pass);
    else handleRegister(email, pass, document.getElementById("auth-password2").value);
  }

  function handleRegister(email, pass, pass2) {
    state.authError = "";
    if (!EMAIL_RE.test(email)) { state.authError = "Inserisci un'email valida."; render(); return; }
    if (pass.length < 6) { state.authError = "La password deve avere almeno 6 caratteri."; render(); return; }
    if (pass !== pass2) { state.authError = "Le password non coincidono."; render(); return; }
    state.authBusy = true; state.freshLogin = true; render();
    fbAuth.createUserWithEmailAndPassword(email, pass).catch(authFail);
  }

  function handleLogin(email, pass) {
    state.authError = "";
    if (!email || !pass) { state.authError = "Inserisci email e password."; render(); return; }
    state.authBusy = true; state.freshLogin = true; render();
    fbAuth.signInWithEmailAndPassword(email, pass).catch(authFail);
  }

  function handleGoogle() {
    state.authError = "";
    state.authBusy = true; state.freshLogin = true; render();
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    fbAuth.signInWithPopup(provider).catch(authFail);
  }

  function handleSendLink(email) {
    state.authError = "";
    if (!EMAIL_RE.test(email)) { state.authError = "Inserisci un'email valida."; render(); return; }
    state.authBusy = true; render();
    var settings = { url: window.location.origin + window.location.pathname, handleCodeInApp: true };
    fbAuth.sendSignInLinkToEmail(email, settings).then(function () {
      try { localStorage.setItem(LINK_EMAIL_KEY, email); } catch (e) {}
      state.authBusy = false; state.linkSentTo = email; render();
    }).catch(authFail);
  }

  /* se la pagina e' stata aperta dal link ricevuto via email, completa l'accesso */
  function completeEmailLinkSignIn() {
    var href = window.location.href;
    if (!fbAuth.isSignInWithEmailLink(href)) return;
    var email = null;
    try { email = localStorage.getItem(LINK_EMAIL_KEY); } catch (e) {}
    if (!email) email = window.prompt("Conferma la tua email per completare l'accesso:");
    function cleanUrl() { try { window.history.replaceState(null, "", window.location.pathname); } catch (e) {} }
    if (!email) { cleanUrl(); return; }
    state.authBusy = true; state.freshLogin = true; render();
    fbAuth.signInWithEmailLink(email.trim(), href).then(function () {
      try { localStorage.removeItem(LINK_EMAIL_KEY); } catch (e) {}
      cleanUrl();
    }).catch(function (err) { cleanUrl(); authFail(err); });
  }

  function handleClaimUsername(e) {
    e.preventDefault();
    var uname = (state.usernameInput || "").trim();
    var user = fbAuth.currentUser;
    state.usernameError = "";
    if (!user) { state.usernameError = "Sessione scaduta: accedi di nuovo."; render(); return; }
    if (!USERNAME_RE.test(uname)) { state.usernameError = "Lo username deve avere 3-20 caratteri: lettere, numeri o underscore."; render(); return; }
    state.authBusy = true; render();
    var lower = uname.toLowerCase();
    dbGet("usernames/" + lower).then(function (existing) {
      if (existing) { state.authBusy = false; state.usernameError = "Questo username è già in uso, scegline un altro."; render(); return; }
      var updates = {};
      updates["usernames/" + lower] = { uid: user.uid, username: uname, createdAt: Date.now() };
      updates["profiles/" + user.uid] = { username: uname };
      return fbDb.ref().update(updates).then(function () { state.freshLogin = false; completeLogin(uname, false, true); });
    }).catch(function (err) {
      console.error("claim username", err);
      state.authBusy = false; state.usernameError = authErrorMessage(err) || "Errore imprevisto. Riprova."; render();
    });
  }

  function handleLogout() {
    stopTradesPolling(); stopFriendsPolling();
    fbAuth.signOut();
    state.currentUser = null; state.myInventory = []; state.selectedUser = null; state.otherInventory = [];
    state.incomingTrades = []; state.outgoingTrades = []; state.historyTrades = []; state.communityUsers = [];
    state.incomingFriendReqs = []; state.outgoingFriendReqs = []; state.friends = []; state.friendsSig = "";
    state.friendInput = ""; state.friendAddBusy = false; state.friendBusyId = null; state.friendsLoading = false;
    state.tab = "inventory"; state.authMode = "login"; state.lightbox = null;
    state.needUsername = false; state.linkSentTo = null; state.authBusy = false; state.freshLogin = false; state.authError = "";
    render();
  }

  /* ============ inventario ============ */
  function loadMyInventory() {
    if (!state.currentUser) return Promise.resolve();
    state.invLoading = true; render();
    return getInventory(state.currentUser.toLowerCase()).then(function (inv) {
      state.myInventory = inv;
    }).catch(function (e) {
      console.error("loadMyInventory", e);
      notify("error", "Impossibile caricare l'inventario.");
    }).then(function () { state.invLoading = false; render(); });
  }

  function openAddItem() {
    state.newItemName = ""; state.newItemPhotos = []; state.showAddItem = true; render();
    var el = document.getElementById("new-item-name");
    if (el) el.focus();
  }

  function handleFileChange(e) {
    var input = e.target;
    var files = input.files ? Array.prototype.slice.call(input.files) : [];
    if (!files.length) return;
    var current = state.newItemPhotos || [];
    var room = MAX_ITEM_PHOTOS - current.length;
    if (room <= 0) {
      notify("error", "Puoi caricare al massimo " + MAX_ITEM_PHOTOS + " foto per oggetto.");
      input.value = ""; return;
    }
    var toProcess = files.slice(0, room);
    var overflow = files.length - toProcess.length;
    Promise.allSettled(toProcess.map(function (f) { return resizeImageFile(f); })).then(function (results) {
      var okUrls = [], failCount = 0;
      results.forEach(function (r) { if (r.status === "fulfilled") okUrls.push(r.value); else failCount++; });
      state.newItemPhotos = current.concat(okUrls);
      render();
      if (failCount > 0) notify("error", failCount === 1 ? "Una foto non è stata caricata." : failCount + " foto non sono state caricate.");
      else if (overflow > 0) notify("error", "Puoi caricare al massimo " + MAX_ITEM_PHOTOS + " foto: " + overflow + " immagini non sono state aggiunte.");
      input.value = "";
    });
  }

  function submitNewItem(e) {
    e.preventDefault();
    var name = (state.newItemName || "").trim();
    if (!name) { notify("error", "Dai un nome all'oggetto."); return; }
    state.addBusy = true; render();
    var item = { id: genId(), name: name, photos: state.newItemPhotos || [], available: true, createdAt: Date.now() };
    updateInventory(state.currentUser.toLowerCase(), function (inv) { return inv.concat([item]); }).then(function (updated) {
      state.addBusy = false;
      state.myInventory = updated; state.newItemName = ""; state.newItemPhotos = []; state.showAddItem = false;
      notify("success", "Oggetto aggiunto all'inventario.");
    }).catch(function (err) {
      console.error("submitNewItem", err);
      state.addBusy = false; notify("error", "Errore nel salvataggio dell'oggetto."); render();
    });
  }

  function deleteItem(itemId) {
    updateInventory(state.currentUser.toLowerCase(), function (inv) {
      return inv.filter(function (i) { return i.id !== itemId; });
    }).then(function (updated) {
      state.myInventory = updated; notify("success", "Oggetto rimosso.");
    }).catch(function (err) { console.error("deleteItem", err); notify("error", "Errore durante la rimozione."); });
  }

  function toggleAvailable(itemId) {
    updateInventory(state.currentUser.toLowerCase(), function (inv) {
      return inv.map(function (i) {
        if (i.id !== itemId) return i;
        return Object.assign({}, i, { available: i.available === false });
      });
    }).then(function (updated) {
      state.myInventory = updated; render();
    }).catch(function (err) { console.error("toggleAvailable", err); notify("error", "Errore durante l'aggiornamento."); render(); });
  }

  /* ============ galleria foto (lightbox) ============ */
  function viewPhotos(itemId, source) {
    var list = source === "mine" ? state.myInventory : state.otherInventory;
    var item = null;
    for (var i = 0; i < list.length; i++) { if (list[i].id === itemId) { item = list[i]; break; } }
    var photos = itemPhotos(item);
    if (!photos.length) return;
    state.lightbox = { photos: photos, index: 0, name: item.name };
    render();
  }
  function closeLightbox() { state.lightbox = null; render(); }
  function lightboxStep(delta) {
    if (!state.lightbox) return;
    var n = state.lightbox.photos.length;
    state.lightbox.index = (state.lightbox.index + delta + n) % n;
    render();
  }

  /* ============ community ============ */
  function loadCommunity() {
    if (!state.currentUser) return;
    state.communityLoading = true; render();
    loadFriends(true, true);
    var me = state.currentUser.toLowerCase();
    dbGet("usernames").then(function (users) {
      users = users || {};
      var others = Object.keys(users).filter(function (u) { return u !== me; });
      return Promise.all(others.map(function (uLower) {
        return getInventory(uLower).then(function (inv) {
          return { username: (users[uLower] && users[uLower].username) || uLower, count: inv.filter(isAvailable).length };
        }).catch(function () { return { username: (users[uLower] && users[uLower].username) || uLower, count: 0 }; });
      }));
    }).then(function (results) {
      results.sort(function (a, b) { return a.username.localeCompare(b.username); });
      state.communityUsers = results;
    }).catch(function (e) {
      console.error("loadCommunity", e);
      notify("error", "Impossibile caricare la community.");
    }).then(function () { state.communityLoading = false; render(); });
  }

  function openUser(username) {
    state.selectedUser = username; state.otherLoading = true;
    state.wantIds = []; state.offerIds = []; state.showTradeBuilder = false;
    render();
    loadFriends(true, true);
    getInventory(username.toLowerCase()).then(function (inv) {
      state.otherInventoryTotal = inv.length;
      state.otherInventory = inv.filter(isAvailable);
    }).catch(function (e) {
      console.error("openUser", e);
      notify("error", "Impossibile caricare l'inventario di " + username + ".");
    }).then(function () { state.otherLoading = false; render(); });
  }

  function backToCommunity() {
    state.selectedUser = null; state.otherInventory = []; state.otherInventoryTotal = 0; state.showTradeBuilder = false;
    state.wantIds = []; state.offerIds = [];
    render(); loadCommunity();
  }

  function toggleWant(id) {
    var idx = state.wantIds.indexOf(id);
    if (idx === -1) state.wantIds.push(id); else state.wantIds.splice(idx, 1);
    render();
  }
  function toggleOffer(id) {
    var idx = state.offerIds.indexOf(id);
    if (idx === -1) state.offerIds.push(id); else state.offerIds.splice(idx, 1);
    render();
  }

  function submitTrade() {
    if (state.wantIds.length === 0) { notify("error", "Seleziona almeno un oggetto che desideri."); return; }
    if (state.offerIds.length === 0) { notify("error", "Seleziona almeno un tuo oggetto da offrire."); return; }
    state.tradeBusy = true; render();
    var offerSnapshot = state.myInventory.filter(function (i) { return state.offerIds.indexOf(i.id) !== -1; })
      .map(function (i) { return { id: i.id, name: i.name, photos: itemPhotos(i) }; });
    var wantSnapshot = state.otherInventory.filter(function (i) { return state.wantIds.indexOf(i.id) !== -1; })
      .map(function (i) { return { id: i.id, name: i.name, photos: itemPhotos(i) }; });
    var trade = {
      id: genId(), fromUser: state.currentUser, toUser: state.selectedUser,
      offerItems: offerSnapshot, requestItems: wantSnapshot, status: "pending", createdAt: Date.now()
    };
    dbSet("trades/" + trade.id, trade).then(function () {
      state.tradeBusy = false;
      var to = state.selectedUser;
      state.showTradeBuilder = false; state.wantIds = []; state.offerIds = []; state.tab = "trades";
      notify("success", "Proposta di scambio inviata a " + to + ".");
      loadTrades(true);
    }).catch(function (err) {
      console.error("submitTrade", err);
      state.tradeBusy = false; notify("error", "Errore nell'invio della proposta."); render();
    });
  }

  /* ============ amici ============
     Ogni relazione e' un record friendRequests/{id} = { id, fromUser, toUser, status, createdAt, respondedAt }.
     status "pending" = richiesta in attesa, "accepted" = amicizia attiva. Rifiutare, annullare o rimuovere un amico
     cancella il record. Gli amici sono i record "accepted" in cui compaio come fromUser o toUser. */
  function queryFriendRequests(field) {
    return fbDb.ref("friendRequests").orderByChild(field).equalTo(state.currentUser).once("value").then(function (s) { return toArray(s.val()); });
  }

  function fetchFriendData() {
    var me = state.currentUser;
    return Promise.all([queryFriendRequests("fromUser"), queryFriendRequests("toUser")]).then(function (res) {
      var seen = {}, mine = [];
      res[0].concat(res[1]).forEach(function (r) { if (r && r.id && !seen[r.id]) { seen[r.id] = true; mine.push(r); } });
      mine.sort(function (a, b) { return b.createdAt - a.createdAt; });
      var byName = {}, friends = [];
      mine.filter(function (r) { return r.status === "accepted"; }).forEach(function (r) {
        var other = sameUser(r.fromUser, me) ? r.toUser : r.fromUser;
        var key = String(other).toLowerCase();
        if (byName[key]) return;
        byName[key] = true;
        friends.push({ id: r.id, username: other, since: r.respondedAt || r.createdAt });
      });
      friends.sort(function (a, b) { return a.username.localeCompare(b.username); });
      return {
        incoming: mine.filter(function (r) { return r.status === "pending" && sameUser(r.toUser, me); }),
        outgoing: mine.filter(function (r) { return r.status === "pending" && sameUser(r.fromUser, me); }),
        friends: friends
      };
    });
  }

  /* applica i dati allo stato; restituisce true se qualcosa e' cambiato */
  function applyFriendData(d) {
    var sig = JSON.stringify(d), changed = sig !== state.friendsSig;
    state.friendsSig = sig;
    state.incomingFriendReqs = d.incoming; state.outgoingFriendReqs = d.outgoing; state.friends = d.friends;
    return changed;
  }

  /* silent: niente spinner. onlyIfChanged: ridisegna solo se i dati sono cambiati (per il polling, cosi' non si perde il focus) */
  function loadFriends(silent, onlyIfChanged) {
    if (!state.currentUser) return Promise.resolve();
    if (!silent) { state.friendsLoading = true; render(); }
    var me = state.currentUser;
    return fetchFriendData().then(function (d) {
      return state.currentUser === me ? applyFriendData(d) : false;
    }).catch(function (e) {
      console.error("loadFriends", e);
      if (!silent) notify("error", dbErrorMessage(e, "Impossibile caricare gli amici."));
      return true;
    }).then(function (changed) {
      var wasLoading = state.friendsLoading;
      state.friendsLoading = false;
      if (onlyIfChanged && !changed && !wasLoading) return;
      render();
    });
  }

  function friendStatusWith(username) {
    var i, list;
    list = state.friends;
    for (i = 0; i < list.length; i++) if (sameUser(list[i].username, username)) return { kind: "friend", id: list[i].id };
    list = state.outgoingFriendReqs;
    for (i = 0; i < list.length; i++) if (sameUser(list[i].toUser, username)) return { kind: "sent", id: list[i].id };
    list = state.incomingFriendReqs;
    for (i = 0; i < list.length; i++) if (sameUser(list[i].fromUser, username)) return { kind: "received", id: list[i].id };
    return { kind: "none", id: null };
  }

  function sendFriendRequest(rawName) {
    var name = (rawName || "").trim();
    if (!USERNAME_RE.test(name)) { notify("error", "Inserisci uno username valido: 3-20 caratteri tra lettere, numeri e underscore."); return; }
    if (sameUser(name, state.currentUser)) { notify("error", "Non puoi aggiungere te stesso agli amici."); return; }
    state.friendAddBusy = true; render();
    /* dati freschi: cosi' evitiamo doppioni se l'altro utente ci ha appena scritto */
    Promise.all([dbGet("usernames/" + name.toLowerCase()), fetchFriendData()]).then(function (res) {
      var rec = res[0];
      applyFriendData(res[1]);
      if (!rec) { state.friendAddBusy = false; notify("error", "Nessun utente con questo username."); return; }
      var target = rec.username || name;
      var st = friendStatusWith(target);
      if (st.kind === "friend") { state.friendAddBusy = false; notify("error", "Tu e " + target + " siete già amici."); return; }
      if (st.kind === "sent") { state.friendAddBusy = false; notify("error", "Hai già inviato una richiesta a " + target + "."); return; }
      if (st.kind === "received") { state.friendAddBusy = false; state.friendInput = ""; return respondFriendRequest(st.id, true); }
      var req = { id: genId(), fromUser: state.currentUser, toUser: target, status: "pending", createdAt: Date.now() };
      return dbSet("friendRequests/" + req.id, req).then(function () {
        state.friendAddBusy = false; state.friendInput = "";
        notify("success", "Richiesta di amicizia inviata a " + target + ".");
        return loadFriends(true);
      });
    }).catch(function (err) {
      console.error("sendFriendRequest", err);
      state.friendAddBusy = false; notify("error", dbErrorMessage(err, "Errore nell'invio della richiesta."));
    });
  }

  function respondFriendRequest(id, accept) {
    state.friendBusyId = id; render();
    var ref = fbDb.ref("friendRequests/" + id);
    return dbGet("friendRequests/" + id).then(function (fresh) {
      if (!fresh || fresh.status !== "pending") { notify("error", "Questa richiesta non è più valida."); return; }
      if (accept) {
        return ref.update({ status: "accepted", respondedAt: Date.now() }).then(function () {
          notify("success", "Ora tu e " + fresh.fromUser + " siete amici!");
        });
      }
      return ref.remove().then(function () { notify("success", "Richiesta rifiutata."); });
    }).catch(function (err) {
      console.error("respondFriendRequest", err);
      notify("error", dbErrorMessage(err, "Errore durante l'operazione. Riprova."));
    }).then(function () { state.friendBusyId = null; return loadFriends(true); });
  }

  function cancelFriendRequest(id) {
    state.friendBusyId = id; render();
    dbGet("friendRequests/" + id).then(function (fresh) {
      if (!fresh) { notify("error", "Questa richiesta non esiste più."); return; }
      if (fresh.status !== "pending") { notify("error", "La richiesta è già stata accettata."); return; }
      return fbDb.ref("friendRequests/" + id).remove().then(function () { notify("success", "Richiesta annullata."); });
    }).catch(function (err) {
      console.error("cancelFriendRequest", err);
      notify("error", dbErrorMessage(err, "Errore durante l'annullamento."));
    }).then(function () { state.friendBusyId = null; loadFriends(true); });
  }

  function removeFriend(id, username) {
    if (!window.confirm("Rimuovere " + username + " dagli amici?")) return;
    state.friendBusyId = id; render();
    dbGet("friendRequests/" + id).then(function (fresh) {
      if (!fresh || fresh.status !== "accepted") { notify("error", "Questa amicizia non esiste più."); return; }
      return fbDb.ref("friendRequests/" + id).remove().then(function () { notify("success", username + " è stato rimosso dagli amici."); });
    }).catch(function (err) {
      console.error("removeFriend", err);
      notify("error", dbErrorMessage(err, "Errore durante la rimozione."));
    }).then(function () { state.friendBusyId = null; loadFriends(true); });
  }

  function handleAddFriendSubmit(e) {
    e.preventDefault();
    var el = document.getElementById("friend-username");
    sendFriendRequest(el ? el.value : state.friendInput);
  }

  function openFriend(username) {
    stopFriendsPolling();
    state.tab = "community";
    openUser(username);
  }

  function startFriendsPolling() { stopFriendsPolling(); friendsPollInterval = setInterval(function () { loadFriends(true, true); }, 15000); }
  function stopFriendsPolling() { if (friendsPollInterval) { clearInterval(friendsPollInterval); friendsPollInterval = null; } }

  /* ============ scambi ============ */
  function queryTrades(field) {
    return fbDb.ref("trades").orderByChild(field).equalTo(state.currentUser).once("value").then(function (s) { return toArray(s.val()); });
  }

  function loadTrades(silent) {
    if (!state.currentUser) return Promise.resolve();
    if (!silent) { state.tradesLoading = true; render(); }
    return Promise.all([queryTrades("fromUser"), queryTrades("toUser")]).then(function (res) {
      var seen = {}, mine = [];
      res[0].concat(res[1]).forEach(function (t) { if (t && t.id && !seen[t.id]) { seen[t.id] = true; mine.push(t); } });
      mine.sort(function (a, b) { return b.createdAt - a.createdAt; });
      state.incomingTrades = mine.filter(function (t) { return t.toUser === state.currentUser && t.status === "pending"; });
      state.outgoingTrades = mine.filter(function (t) { return t.fromUser === state.currentUser && t.status === "pending"; });
      state.historyTrades = mine.filter(function (t) { return t.status !== "pending"; });
    }).catch(function (e) {
      console.error("loadTrades", e);
      if (!silent) notify("error", "Impossibile caricare gli scambi.");
    }).then(function () { state.tradesLoading = false; render(); });
  }

  function respondTrade(tradeId, accept) {
    state.respondingId = tradeId; render();
    var tradeRef = fbDb.ref("trades/" + tradeId);
    dbGet("trades/" + tradeId).then(function (fresh) {
      if (!fresh || fresh.status !== "pending") {
        state.respondingId = null; notify("error", "Questa proposta non è più valida."); return loadTrades(true);
      }
      if (!accept) {
        return tradeRef.update({ status: "declined", respondedAt: Date.now() }).then(function () {
          state.respondingId = null; notify("success", "Proposta rifiutata."); return loadTrades(true);
        });
      }
      var fromKey = fresh.fromUser.toLowerCase(), toKey = fresh.toUser.toLowerCase();
      return Promise.all([getInventory(fromKey), getInventory(toKey)]).then(function (invs) {
        var fromInventory = invs[0], toInventory = invs[1];
        var offerIdsList = toArray(fresh.offerItems).map(function (i) { return i.id; });
        var requestIdsList = toArray(fresh.requestItems).map(function (i) { return i.id; });
        var offerAvailable = offerIdsList.every(function (id) { return fromInventory.some(function (i) { return i.id === id && isAvailable(i); }); });
        var requestAvailable = requestIdsList.every(function (id) { return toInventory.some(function (i) { return i.id === id && isAvailable(i); }); });
        if (!offerAvailable || !requestAvailable) {
          return tradeRef.update({ status: "failed", respondedAt: Date.now() }).then(function () {
            state.respondingId = null;
            notify("error", "Uno o più oggetti non sono più disponibili. Scambio annullato."); return loadTrades(true);
          });
        }
        var movedFromItems = fromInventory.filter(function (i) { return offerIdsList.indexOf(i.id) !== -1; });
        var movedToItems = toInventory.filter(function (i) { return requestIdsList.indexOf(i.id) !== -1; });
        var newFromInventory = fromInventory.filter(function (i) { return offerIdsList.indexOf(i.id) === -1; }).concat(movedToItems);
        var newToInventory = toInventory.filter(function (i) { return requestIdsList.indexOf(i.id) === -1; }).concat(movedFromItems);
        /* aggiornamento multi-percorso: entrambi gli inventari e lo stato dello scambio cambiano insieme, o niente */
        var updates = {};
        updates["inventories/" + fromKey] = newFromInventory.length ? newFromInventory : null;
        updates["inventories/" + toKey] = newToInventory.length ? newToInventory : null;
        updates["trades/" + tradeId + "/status"] = "accepted";
        updates["trades/" + tradeId + "/respondedAt"] = Date.now();
        return fbDb.ref().update(updates).then(function () {
          var me = state.currentUser.toLowerCase();
          if (me === toKey) state.myInventory = newToInventory;
          else if (me === fromKey) state.myInventory = newFromInventory;
          state.respondingId = null;
          notify("success", "Scambio completato!"); return loadTrades(true);
        });
      });
    }).catch(function (err) {
      console.error("respondTrade", err);
      state.respondingId = null; notify("error", "Errore durante l'operazione. Riprova."); loadTrades(true);
    });
  }

  function cancelTrade(tradeId) {
    state.respondingId = tradeId; render();
    dbGet("trades/" + tradeId).then(function (fresh) {
      if (fresh && fresh.status === "pending") {
        return fbDb.ref("trades/" + tradeId).update({ status: "cancelled", respondedAt: Date.now() }).then(function () {
          notify("success", "Proposta annullata.");
        });
      }
    }).catch(function (err) {
      console.error("cancelTrade", err); notify("error", "Errore durante l'annullamento.");
    }).then(function () { state.respondingId = null; loadTrades(true); });
  }

  function switchTab(tabId) {
    state.tab = tabId;
    if (tabId !== "community") state.selectedUser = null;
    render();
    if (tabId === "inventory") { loadMyInventory(); render(); }
    if (tabId === "community" && !state.selectedUser) loadCommunity();
    if (tabId === "trades") { loadTrades(); startTradesPolling(); } else { stopTradesPolling(); }
    if (tabId === "friends") { loadFriends(); startFriendsPolling(); } else { stopFriendsPolling(); }
  }
  function startTradesPolling() { stopTradesPolling(); tradesPollInterval = setInterval(function () { loadTrades(true); }, 15000); }
  function stopTradesPolling() { if (tradesPollInterval) { clearInterval(tradesPollInterval); tradesPollInterval = null; } }

  /* ============ rendering (stringhe HTML) ============ */
  function renderItemPhotoBlock(item, source, clickable) {
    var photos = itemPhotos(item);
    var openAttrs = (clickable && photos.length) ? ' data-action="view-photos" data-id="' + item.id + '" data-source="' + source + '"' : "";
    return '<div class="item-photo' + (clickable && photos.length ? " clickable" : "") + '"' + openAttrs + '>' +
      (photos.length ? '<img src="' + photos[0] + '" alt="' + escapeHtml(item.name) + '" />' : icon("image")) +
      (photos.length > 1 ? '<span class="item-photo-count">' + icon("image") + photos.length + "</span>" : "") +
      "</div>";
  }

  var GOOGLE_G = '<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>';

  function renderAuthHeader() {
    return '<div class="auth-header">' +
      '<h1 class="display">Baratto</h1>' +
      '<div class="ornament"><span class="line"></span><span class="dot"></span><span class="line"></span></div>' +
      '<p>Il registro degli scambi tra collezionisti</p>' +
    '</div>';
  }

  function renderUsernameStep() {
    return '' +
      '<div class="auth-wrap"><div class="auth-box">' + renderAuthHeader() +
        '<div class="auth-panel">' +
          '<p class="auth-hint">Ultimo passo: scegli lo username con cui gli altri collezionisti ti vedranno. Non potrai cambiarlo.</p>' +
          '<form id="username-form" novalidate>' +
            '<div class="field has-icon">' +
              '<label for="new-username">Username</label>' +
              '<div class="field-icon-wrap">' + icon("user") + '<input type="text" id="new-username" placeholder="mario_rossi" autocomplete="username" maxlength="20" value="' + escapeHtml(state.usernameInput || "") + '" /></div>' +
            '</div>' +
            (state.usernameError ? '<div class="banner error">' + icon("alert-circle") + "<span>" + escapeHtml(state.usernameError) + "</span></div>" : "") +
            '<button type="submit" class="btn-primary block" ' + (state.authBusy ? "disabled" : "") + '>' +
              (state.authBusy ? icon("loader", "spin-sm") : "") + "Continua" +
            '</button>' +
          '</form>' +
          '<div style="text-align:center;margin-top:1rem;"><button type="button" class="auth-link-btn" data-action="logout">Esci</button></div>' +
        '</div>' +
      '</div></div>';
  }

  function renderAuth() {
    if (state.needUsername) return renderUsernameStep();
    var mode = state.authMode;
    var busy = state.authBusy ? "disabled" : "";
    var seg = '<div class="seg">' +
      '<button type="button" data-action="show-login" class="' + (mode === "login" ? "active" : "") + '">Accedi</button>' +
      '<button type="button" data-action="show-register" class="' + (mode === "register" ? "active" : "") + '">Registrati</button>' +
      '<button type="button" data-action="show-link" class="' + (mode === "link" ? "active" : "") + '">Link email</button>' +
    '</div>';

    var body;
    if (mode === "link" && state.linkSentTo) {
      body = '<div class="banner success">' + icon("check") + "<span>Ti abbiamo inviato un link a <strong>" + escapeHtml(state.linkSentTo) +
        "</strong>. Aprilo da questo dispositivo per accedere (controlla anche nello spam).</span></div>" +
        '<div style="text-align:center;"><button type="button" class="auth-link-btn" data-action="link-again">Usa un\'altra email</button></div>';
    } else {
      body = '<form id="auth-form" novalidate>' +
        (mode === "link" ? '<p class="auth-hint">Inserisci la tua email: ti mandiamo un link per accedere, senza password. Se non hai ancora un account, verrà creato.</p>' : "") +
        '<div class="field has-icon">' +
          '<label for="auth-email">Email</label>' +
          '<div class="field-icon-wrap">' + icon("mail") + '<input type="email" id="auth-email" name="email" placeholder="mario@esempio.it" autocomplete="email" value="' + escapeHtml(state.authEmail || "") + '" /></div>' +
        '</div>' +
        (mode !== "link" ?
          '<div class="field has-icon">' +
            '<label for="auth-password">Password</label>' +
            '<div class="field-icon-wrap">' + icon("lock") + '<input type="password" id="auth-password" name="password" placeholder="••••••••" autocomplete="' + (mode === "login" ? "current-password" : "new-password") + '" /></div>' +
          '</div>' : "") +
        (mode === "register" ?
          '<div class="field has-icon">' +
            '<label for="auth-password2">Conferma password</label>' +
            '<div class="field-icon-wrap">' + icon("lock") + '<input type="password" id="auth-password2" name="password2" placeholder="••••••••" autocomplete="new-password" /></div>' +
          '</div>' : "") +
        (state.authError ? '<div class="banner error">' + icon("alert-circle") + "<span>" + escapeHtml(state.authError) + "</span></div>" : "") +
        '<button type="submit" class="btn-primary block" ' + busy + '>' +
          (state.authBusy ? icon("loader", "spin-sm") : "") + (mode === "login" ? "Accedi" : mode === "register" ? "Crea account" : "Inviami il link") +
        '</button>' +
      '</form>';
    }

    return '' +
      '<div class="auth-wrap"><div class="auth-box">' + renderAuthHeader() +
        '<div class="auth-panel">' + seg + body +
          '<div class="auth-divider"><span>oppure</span></div>' +
          '<button type="button" class="btn-google" data-action="google-login" ' + busy + '>' + GOOGLE_G + 'Continua con Google</button>' +
        '</div>' +
        '<p class="auth-footnote">Account, inventari e scambi sono salvati online su Firebase e condivisi tra tutti gli utenti. Le password sono gestite da Firebase Authentication.</p>' +
      '</div></div>';
  }

  function renderPhotoPicker() {
    var photos = state.newItemPhotos || [];
    var tiles = photos.map(function (src, idx) {
      return '<div class="photo-preview"><img src="' + src + '" alt="Anteprima ' + (idx + 1) + '" />' +
        '<button type="button" data-action="remove-photo" data-index="' + idx + '" class="photo-remove">' + icon("x") + "</button></div>";
    }).join("");
    var addTile = photos.length < MAX_ITEM_PHOTOS ?
      '<label class="photo-drop">' + icon("image") + "<span>" + (photos.length === 0 ? "Carica" : "Aggiungi") + "</span>" +
      '<input type="file" id="photo-input" accept="image/*" multiple style="display:none;" /></label>' : "";
    return '<div class="photo-row">' + tiles + addTile + "</div>";
  }

  function renderAddItemModal() {
    return '' +
      '<div id="add-item-overlay" class="modal-overlay">' +
        '<div class="modal-box">' +
          '<div class="modal-head"><h3 class="display">Nuovo oggetto</h3><button data-action="close-add-item" class="icon-btn">' + icon("x") + "</button></div>" +
          '<form id="add-item-form" novalidate>' +
            '<div class="field">' +
              '<label for="new-item-name">Nome oggetto</label>' +
              '<input type="text" id="new-item-name" maxlength="40" placeholder="Es. Carta rara, Vinile, Figurina..." value="' + escapeHtml(state.newItemName || "") + '" />' +
            "</div>" +
            '<div class="field">' +
              "<label>Foto (opzionale, fino a " + MAX_ITEM_PHOTOS + ")</label>" +
              renderPhotoPicker() +
            "</div>" +
            '<button type="submit" class="btn-primary block" ' + (state.addBusy ? "disabled" : "") + ">" +
              (state.addBusy ? icon("loader", "spin-sm") : "") + "Aggiungi all'inventario" +
            "</button>" +
          "</form>" +
        "</div>" +
      "</div>";
  }

  function renderInventoryTab() {
    var count = state.myInventory.length, body;
    if (state.invLoading) {
      body = '<div class="spinner-wrap">' + icon("loader", "spin") + "</div>";
    } else if (count === 0) {
      body = '<div class="empty-state">' + icon("package") + "<p>Il tuo inventario è vuoto.</p><p class=\"sub\">Aggiungi il tuo primo oggetto per iniziare a scambiare.</p></div>";
    } else {
      var items = state.myInventory.slice().reverse();
      body = '<div class="item-grid">' + items.map(function (item) {
        var available = isAvailable(item);
        return '<div class="item-tile' + (available ? "" : " unavailable") + '">' +
          renderItemPhotoBlock(item, "mine", true) +
          '<div class="item-label"><p title="' + escapeHtml(item.name) + '">' + escapeHtml(item.name) + "</p></div>" +
          '<div class="item-avail-row"><label class="switch"><input type="checkbox" class="avail-toggle" data-id="' + item.id + '" ' + (available ? "checked" : "") + ' /><span class="slider"></span></label>' +
            '<span class="avail-text">' + (available ? "Disponibile" : "Non disponibile") + "</span></div>" +
          '<button class="item-delete" data-action="delete-item" data-id="' + item.id + '" title="Rimuovi oggetto">' + icon("trash") + "</button>" +
        "</div>";
      }).join("") + "</div>";
    }
    return '<div class="section-head"><div><h2 class="display">Il mio inventario</h2><p class="section-sub">' + count + " oggett" + (count === 1 ? "o" : "i") + '</p></div>' +
      '<button data-action="open-add-item" class="btn-primary">' + icon("plus") + " Aggiungi oggetto</button></div>" + body;
  }

  function renderCommunityTab() {
    var body;
    if (state.communityLoading) {
      body = '<div class="spinner-wrap">' + icon("loader", "spin") + "</div>";
    } else if (state.communityUsers.length === 0) {
      body = '<div class="empty-state">' + icon("users") + "<p>Nessun altro utente registrato, per ora.</p></div>";
    } else {
      body = '<div class="user-list">' + state.communityUsers.map(function (u) {
        return '<button class="user-row" data-action="open-user" data-username="' + escapeHtml(u.username) + '">' +
          '<div class="left"><div class="avatar md">' + escapeHtml(u.username.charAt(0).toUpperCase()) + '</div>' +
          '<div><p class="name">' + escapeHtml(u.username) + (friendStatusWith(u.username).kind === "friend" ? '<span class="badge accepted">Amico</span>' : "") + '</p><p class="count">' + u.count + " oggett" + (u.count === 1 ? "o" : "i") + "</p></div></div>" +
          icon("chevron-left", "chevron") + "</button>";
      }).join("") + "</div>";
    }
    return '<div class="section-head"><div><h2 class="display">Community</h2><p class="section-sub">Sfoglia gli inventari degli altri utenti</p></div>' +
      '<button data-action="refresh-community" class="btn-ghost">' + icon("refresh", state.communityLoading ? "spin-sm" : "") + " Aggiorna</button></div>" + body;
  }

  /* pulsante/stato amicizia mostrato nel profilo di un altro utente */
  function friendActionButton(username) {
    var st = friendStatusWith(username);
    var busy = (state.friendAddBusy || (st.id && state.friendBusyId === st.id)) ? "disabled" : "";
    if (st.kind === "friend") return '<span class="friend-pill">' + icon("user-check") + " Amici</span>";
    if (st.kind === "sent") return '<button class="btn-ghost" disabled>' + icon("clock") + " Richiesta inviata</button>";
    if (st.kind === "received") return '<button class="btn-ghost friend-accept" data-action="accept-friend" data-id="' + st.id + '" ' + busy + ">" + icon("check") + " Accetta richiesta</button>";
    return '<button class="btn-ghost" data-action="add-friend" data-username="' + escapeHtml(username) + '" ' + busy + ">" + icon("user-plus") + " Aggiungi amico</button>";
  }

  function friendRequestCard(r, incoming) {
    var name = incoming ? r.fromUser : r.toUser;
    var busy = state.friendBusyId === r.id ? "disabled" : "";
    var spin = state.friendBusyId === r.id;
    var actions = incoming ?
      '<button class="btn-accept" data-action="accept-friend" data-id="' + r.id + '" ' + busy + ">" + (spin ? icon("loader", "spin-sm") : icon("check")) + " Accetta</button>" +
      '<button class="btn-decline" data-action="decline-friend" data-id="' + r.id + '" ' + busy + ">" + icon("x") + " Rifiuta</button>" :
      '<button class="btn-ghost" data-action="cancel-friend-request" data-id="' + r.id + '" ' + busy + ">" + (spin ? icon("loader", "spin-sm") : icon("x")) + " Annulla</button>";
    return '<div class="friend-card"><div class="who"><div class="avatar md">' + escapeHtml(name.charAt(0).toUpperCase()) + '</div>' +
      '<div><p class="name">' + escapeHtml(name) + '</p><p class="sub">' + icon("clock") + " " + timeAgo(r.createdAt) + "</p></div></div>" +
      '<div class="friend-actions">' + actions + "</div></div>";
  }

  function friendCard(f) {
    var busy = state.friendBusyId === f.id ? "disabled" : "";
    var since = f.since ? new Date(f.since).toLocaleDateString("it-IT", { day: "numeric", month: "short", year: "numeric" }) : "";
    return '<div class="friend-card"><div class="who"><div class="avatar md">' + escapeHtml(f.username.charAt(0).toUpperCase()) + '</div>' +
      '<div><p class="name">' + escapeHtml(f.username) + '</p>' + (since ? '<p class="sub">Amici dal ' + since + "</p>" : "") + "</div></div>" +
      '<div class="friend-actions">' +
        '<button class="btn-ghost" data-action="open-friend" data-username="' + escapeHtml(f.username) + '">' + icon("package") + " Inventario</button>" +
        '<button class="icon-btn" data-action="remove-friend" data-id="' + f.id + '" data-username="' + escapeHtml(f.username) + '" title="Rimuovi dagli amici" ' + busy + ">" + icon("x") + "</button>" +
      "</div></div>";
  }

  function renderFriendsTab() {
    var inc = state.incomingFriendReqs, out = state.outgoingFriendReqs, fr = state.friends, body;
    if (state.friendsLoading) {
      body = '<div class="spinner-wrap">' + icon("loader", "spin") + "</div>";
    } else {
      body = "";
      if (inc.length > 0) {
        body += '<section class="trade-section"><h3>' + icon("inbox") + " Richieste ricevute (" + inc.length + ')</h3><div class="user-list">' +
          inc.map(function (r) { return friendRequestCard(r, true); }).join("") + "</div></section>";
      }
      if (out.length > 0) {
        body += '<section class="trade-section"><h3>' + icon("send") + " Richieste inviate (" + out.length + ')</h3><div class="user-list">' +
          out.map(function (r) { return friendRequestCard(r, false); }).join("") + "</div></section>";
      }
      body += '<section class="trade-section"><h3>' + icon("users") + " I tuoi amici " + (fr.length > 0 ? "(" + fr.length + ")" : "") + "</h3>" +
        (fr.length === 0 ?
          '<div class="empty-state">' + icon("users") + "<p>Non hai ancora amici.</p><p class=\"sub\">Invia una richiesta con lo username, oppure dalla scheda Community.</p></div>" :
          '<div class="user-list">' + fr.map(friendCard).join("") + "</div>") +
        "</section>";
    }
    return '<div class="section-head"><div><h2 class="display">Amici</h2><p class="section-sub">Aggiungi altri collezionisti e ritrova subito i loro inventari</p></div>' +
      '<button data-action="refresh-friends" class="btn-ghost">' + icon("refresh", state.friendsLoading ? "spin-sm" : "") + " Aggiorna</button></div>" +
      '<form id="add-friend-form" class="friend-add" novalidate>' +
        '<div class="field has-icon"><label for="friend-username">Aggiungi con lo username</label>' +
          '<div class="field-icon-wrap">' + icon("user-plus") + '<input type="text" id="friend-username" placeholder="mario_rossi" maxlength="20" autocomplete="off" autocapitalize="none" spellcheck="false" value="' + escapeHtml(state.friendInput || "") + '" /></div></div>' +
        '<button type="submit" class="btn-primary" ' + (state.friendAddBusy ? "disabled" : "") + ">" +
          (state.friendAddBusy ? icon("loader", "spin-sm") : "") + "Invia richiesta</button>" +
      "</form>" + body;
  }

  function renderTradeBuilder() {
    var offerable = state.myInventory.filter(isAvailable);
    return '' +
      '<div class="builder-head"><p class="text-dim" style="font-size:.875rem;margin:0;">Seleziona cosa vuoi e cosa offri</p>' +
      '<button data-action="cancel-trade-builder" class="link-btn" style="font-size:.75rem;">Annulla</button></div>' +
      '<div class="builder-cols">' +
        '<div class="builder-col"><h3>' + icon("gift", "text-brass") + " Vuoi da " + escapeHtml(state.selectedUser) +
          ' <span class="text-dim" style="font-weight:400;">(' + state.wantIds.length + ")</span></h3>" +
          '<div class="pick-grid">' + state.otherInventory.map(function (item) {
            var picked = state.wantIds.indexOf(item.id) !== -1;
            return '<button type="button" class="pick-tile ' + (picked ? "picked-want" : "") + '" data-action="toggle-want" data-id="' + item.id + '">' +
              renderItemPhotoBlock(item, "other", false) +
              "<p>" + escapeHtml(item.name) + "</p>" +
              (picked ? '<span class="pick-check" style="background:var(--brass);color:var(--brass-ink);">' + icon("check") + "</span>" : "") +
              "</button>";
          }).join("") + "</div></div>" +
        '<div class="builder-col"><h3>' + icon("package", "text-verdigris") + ' Offri tu <span class="text-dim" style="font-weight:400;">(' + state.offerIds.length + ")</span></h3>" +
          (offerable.length === 0 ? '<p class="empty-inline">Non hai oggetti disponibili da offrire. Segna un oggetto come "disponibile" dal tuo inventario.</p>' :
          '<div class="pick-grid">' + offerable.map(function (item) {
            var picked = state.offerIds.indexOf(item.id) !== -1;
            return '<button type="button" class="pick-tile ' + (picked ? "picked-offer" : "") + '" data-action="toggle-offer" data-id="' + item.id + '">' +
              renderItemPhotoBlock(item, "mine", false) +
              "<p>" + escapeHtml(item.name) + "</p>" +
              (picked ? '<span class="pick-check" style="background:var(--verdigris);color:var(--ink);">' + icon("check") + "</span>" : "") +
              "</button>";
          }).join("") + "</div>") +
        "</div>" +
      "</div>" +
      '<button data-action="submit-trade" class="btn-primary" style="margin-top:1.25rem;" ' + (state.tradeBusy || state.wantIds.length === 0 || state.offerIds.length === 0 ? "disabled" : "") + ">" +
        (state.tradeBusy ? icon("loader", "spin-sm") : "") + icon("send") + " Invia proposta di scambio</button>";
  }

  function renderOtherUserView() {
    var count = state.otherInventory.length, body;
    if (state.otherLoading) {
      body = '<div class="spinner-wrap">' + icon("loader", "spin") + "</div>";
    } else if (count === 0) {
      var emptyMsg = state.otherInventoryTotal > 0 ?
        " non ha oggetti disponibili per lo scambio al momento." :
        " non ha ancora oggetti nell'inventario.";
      body = '<div class="empty-state">' + icon("package") + "<p>" + escapeHtml(state.selectedUser) + emptyMsg + "</p></div>";
    } else if (state.showTradeBuilder) {
      body = renderTradeBuilder();
    } else {
      body = '<div class="item-grid">' + state.otherInventory.map(function (item) {
        return '<div class="item-tile">' + renderItemPhotoBlock(item, "other", true) +
          '<div class="item-label"><p title="' + escapeHtml(item.name) + '">' + escapeHtml(item.name) + "</p></div></div>";
      }).join("") + "</div>";
    }
    return '<button data-action="back-to-community" class="link-btn" style="margin-bottom:1.25rem;">' + icon("chevron-left") + " Torna alla community</button>" +
      '<div class="section-head"><div><h2 class="display">Inventario di ' + escapeHtml(state.selectedUser) + '</h2><p class="section-sub">' + count + " oggett" + (count === 1 ? "o" : "i") + "</p></div>" +
      (!state.showTradeBuilder ? '<div class="head-actions">' + friendActionButton(state.selectedUser) +
        (count > 0 ? '<button data-action="open-trade-builder" class="btn-primary">' + icon("swap") + " Proponi scambio</button>" : "") + "</div>" : "") +
      "</div>" + body;
  }

  function statusBadge(status) {
    var map = {
      pending: { text: "In attesa", cls: "pending" }, accepted: { text: "Accettato", cls: "accepted" },
      declined: { text: "Rifiutato", cls: "declined" }, cancelled: { text: "Annullato", cls: "cancelled" },
      failed: { text: "Non riuscito", cls: "declined" }
    };
    var s = map[status] || map.cancelled;
    return '<span class="badge ' + s.cls + '">' + s.text + "</span>";
  }

  function tradeItemsRow(items, label, colorClass) {
    return '<div><p class="label ' + colorClass + '">' + label + '</p><div class="chip-row">' + items.map(function (it) {
      var photos = itemPhotos(it);
      return '<div class="chip"><div class="thumb">' + (photos.length ? '<img src="' + photos[0] + '" alt="' + escapeHtml(it.name) + '" />' : icon("image")) + '</div>' +
        '<span class="name">' + escapeHtml(it.name) + "</span></div>";
    }).join("") + "</div></div>";
  }

  function tradeCard(trade) {
    var p = getPerspective(trade, state.currentUser);
    var busy = state.respondingId === trade.id;
    var actions = "";
    if (trade.status === "pending" && !p.isFrom) {
      actions = '<div class="trade-actions">' +
        '<button class="btn-accept" data-action="accept-trade" data-id="' + trade.id + '" ' + (busy ? "disabled" : "") + ">" + (busy ? icon("loader", "spin-sm") : icon("check")) + " Accetta</button>" +
        '<button class="btn-decline" data-action="decline-trade" data-id="' + trade.id + '" ' + (busy ? "disabled" : "") + ">" + icon("x") + " Rifiuta</button></div>";
    } else if (trade.status === "pending" && p.isFrom) {
      actions = '<button class="link-btn trade-cancel" data-action="cancel-outgoing-trade" data-id="' + trade.id + '" ' + (busy ? "disabled" : "") + ">" + (busy ? icon("loader", "spin-sm") : icon("x")) + " Annulla proposta</button>";
    }
    return '<div class="trade-card"><div class="head"><div class="who">' +
      '<div class="avatar sm">' + escapeHtml(p.counterpart.charAt(0).toUpperCase()) + '</div>' +
      '<div><p class="name">' + escapeHtml(p.counterpart) + '</p><p class="time">' + icon("clock") + " " + timeAgo(trade.createdAt) + "</p></div></div>" +
      statusBadge(trade.status) + "</div>" +
      '<div class="trade-items">' + tradeItemsRow(p.receive, "Ricevi", "text-brass") + tradeItemsRow(p.give, "Dai", "text-verdigris") + "</div>" +
      actions + "</div>";
  }

  function renderTradesTab() {
    var body;
    if (state.tradesLoading) {
      body = '<div class="spinner-wrap">' + icon("loader", "spin") + "</div>";
    } else {
      body = '<section class="trade-section"><h3>' + icon("inbox") + " Ricevute " + (state.incomingTrades.length > 0 ? "(" + state.incomingTrades.length + ")" : "") + "</h3>" +
        (state.incomingTrades.length === 0 ? '<p class="none">Nessuna proposta ricevuta al momento.</p>' : '<div class="trade-grid">' + state.incomingTrades.map(tradeCard).join("") + "</div>") +
        "</section>" +
        '<section class="trade-section"><h3>' + icon("send") + " Inviate " + (state.outgoingTrades.length > 0 ? "(" + state.outgoingTrades.length + ")" : "") + "</h3>" +
        (state.outgoingTrades.length === 0 ? '<p class="none">Nessuna proposta inviata al momento.</p>' : '<div class="trade-grid">' + state.outgoingTrades.map(tradeCard).join("") + "</div>") +
        "</section>" +
        (state.historyTrades.length > 0 ? '<section class="trade-section history"><h3>' + icon("clock") + " Storico</h3><div class=\"trade-grid\">" + state.historyTrades.map(tradeCard).join("") + "</div></section>" : "");
    }
    return '<div class="section-head"><h2 class="display">Scambi</h2><button data-action="refresh-trades" class="btn-ghost">' + icon("refresh", state.tradesLoading ? "spin-sm" : "") + " Aggiorna</button></div>" + body;
  }

  function renderLightbox() {
    if (!state.lightbox) return "";
    var lb = state.lightbox;
    var multi = lb.photos.length > 1;
    return '<div id="lightbox-overlay" class="modal-overlay lightbox-overlay">' +
      '<div class="lightbox-box">' +
        '<button data-action="close-lightbox" class="icon-btn lightbox-close" title="Chiudi">' + icon("x") + "</button>" +
        (multi ? '<button data-action="lightbox-prev" class="lightbox-nav prev" title="Foto precedente">' + icon("chevron-left") + "</button>" : "") +
        '<img class="lightbox-img" src="' + lb.photos[lb.index] + '" alt="' + escapeHtml(lb.name) + '" />' +
        (multi ? '<button data-action="lightbox-next" class="lightbox-nav next" title="Foto successiva">' + icon("chevron-left", "rotate-180") + "</button>" : "") +
        (multi ? '<div class="lightbox-counter">' + (lb.index + 1) + " / " + lb.photos.length + "</div>" : "") +
      "</div>" +
    "</div>";
  }

  function renderApp() {
    var navTabs = [
      { id: "inventory", label: "Inventario", i: "package" },
      { id: "community", label: "Community", i: "users" },
      { id: "friends", label: "Amici", i: "user-plus", badge: state.incomingFriendReqs.length },
      { id: "trades", label: "Scambi", i: "swap", badge: state.incomingTrades.length }
    ];
    var tabsHtml = navTabs.map(function (t) {
      return '<button data-action="switch-tab" data-tab="' + t.id + '" class="tab-btn ' + (state.tab === t.id ? "active" : "") + '">' +
        icon(t.i) + " " + t.label + (t.badge ? '<span class="tab-badge">' + t.badge + "</span>" : "") + "</button>";
    }).join("");
    var tabContent = "";
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
      (state.showAddItem ? renderAddItemModal() : "") + renderLightbox();
  }

  function render() {
    if (state.booting) {
      document.getElementById("app").innerHTML = '<div class="auth-wrap"><div class="auth-box" style="text-align:center;">' + icon("loader", "spin-sm") + "</div></div>";
      return;
    }
    /* il campo "aggiungi amico" non deve perdere focus e cursore se la pagina si ridisegna mentre si scrive */
    var active = document.activeElement;
    var keepFocus = !!(active && active.id === "friend-username");
    var selStart = keepFocus ? active.selectionStart : null, selEnd = keepFocus ? active.selectionEnd : null;
    document.getElementById("app").innerHTML = state.currentUser ? renderApp() : renderAuth();
    if (keepFocus) {
      var el = document.getElementById("friend-username");
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
    else if (action === "remove-photo") {
      var idx = parseInt(t.dataset.index, 10);
      if (!isNaN(idx)) { state.newItemPhotos.splice(idx, 1); render(); }
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
  });

  document.addEventListener("submit", function (e) {
    if (e.target && e.target.id === "auth-form") handleAuthSubmit(e);
    else if (e.target && e.target.id === "add-item-form") submitNewItem(e);
    else if (e.target && e.target.id === "username-form") handleClaimUsername(e);
    else if (e.target && e.target.id === "add-friend-form") handleAddFriendSubmit(e);
  });

  document.addEventListener("change", function (e) {
    if (e.target && e.target.id === "photo-input") handleFileChange(e);
    else if (e.target && e.target.classList.contains("avail-toggle")) toggleAvailable(e.target.dataset.id);
  });

  document.addEventListener("input", function (e) {
    if (e.target && e.target.id === "new-item-name") state.newItemName = e.target.value;
    else if (e.target && e.target.id === "auth-email") state.authEmail = e.target.value;
    else if (e.target && e.target.id === "new-username") state.usernameInput = e.target.value;
    else if (e.target && e.target.id === "friend-username") state.friendInput = e.target.value;
  });

  document.addEventListener("keydown", function (e) {
    if (!state.lightbox) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") lightboxStep(-1);
    else if (e.key === "ArrowRight") lightboxStep(1);
  });

  /* ============ avvio ============ */
  (function init() {
    render();
    /* Firebase Auth ricorda la sessione e notifica ogni accesso/uscita, con qualsiasi metodo */
    fbAuth.onAuthStateChanged(function (fbUser) {
      state.booting = false;
      if (!fbUser) { render(); return; }
      if (state.currentUser || state.needUsername) { render(); return; }
      resolveProfile(fbUser);
    });
    completeEmailLinkSignIn();
  })();
})();
