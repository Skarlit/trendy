// Handles related-objects functionality: lookup link for raw_id_fields
// and Add Another links.

function html_unescape(text) {
    // Unescape a string that was escaped using django.utils.html.escape.
    text = text.replace(/&lt;/g, '<');
    text = text.replace(/&gt;/g, '>');
    text = text.replace(/&quot;/g, '"');
    text = text.replace(/&#39;/g, "'");
    text = text.replace(/&amp;/g, '&');
    return text;
}

// IE doesn't accept periods or dashes in the window name, but the element IDs
// we use to generate popup window names may contain them, therefore we map them
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
// to allowed characters in a reversible way so that we can locate the correct 
=======
>>>>>>> b04f72c528563f2444ed22c4c55c077b2f864fb1
// to allowed characters in a reversible way so that we can locate the correct
>>>>>>> clean up
=======
<<<<<<< HEAD
<<<<<<< HEAD
// to allowed characters in a reversible way so that we can locate the correct 
=======
// to allowed characters in a reversible way so that we can locate the correct
>>>>>>> clean up
>>>>>>> Revert
=======
// to allowed characters in a reversible way so that we can locate the correct
>>>>>>> clean up
>>>>>>> b04f72c528563f2444ed22c4c55c077b2f864fb1
// element when the popup window is dismissed.
function id_to_windowname(text) {
    text = text.replace(/\./g, '__dot__');
    text = text.replace(/\-/g, '__dash__');
    return text;
}

function windowname_to_id(text) {
    text = text.replace(/__dot__/g, '.');
    text = text.replace(/__dash__/g, '-');
    return text;
}

function showRelatedObjectLookupPopup(triggeringLink) {
    var name = triggeringLink.id.replace(/^lookup_/, '');
    name = id_to_windowname(name);
    var href;
    if (triggeringLink.href.search(/\?/) >= 0) {
        href = triggeringLink.href + '&_popup=1';
    } else {
        href = triggeringLink.href + '?_popup=1';
    }
    var win = window.open(href, name, 'height=500,width=800,resizable=yes,scrollbars=yes');
    win.focus();
    return false;
}

function dismissRelatedLookupPopup(win, chosenId) {
    var name = windowname_to_id(win.name);
    var elem = document.getElementById(name);
    if (elem.className.indexOf('vManyToManyRawIdAdminField') != -1 && elem.value) {
        elem.value += ',' + chosenId;
    } else {
        document.getElementById(name).value = chosenId;
    }
    win.close();
}

function showAddAnotherPopup(triggeringLink) {
    var name = triggeringLink.id.replace(/^add_/, '');
    name = id_to_windowname(name);
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
    href = triggeringLink.href
=======
>>>>>>> b04f72c528563f2444ed22c4c55c077b2f864fb1
    var href = triggeringLink.href;
>>>>>>> clean up
=======
<<<<<<< HEAD
<<<<<<< HEAD
    href = triggeringLink.href
=======
    var href = triggeringLink.href;
>>>>>>> clean up
>>>>>>> Revert
=======
    var href = triggeringLink.href;
>>>>>>> clean up
>>>>>>> b04f72c528563f2444ed22c4c55c077b2f864fb1
    if (href.indexOf('?') == -1) {
        href += '?_popup=1';
    } else {
        href  += '&_popup=1';
    }
    var win = window.open(href, name, 'height=500,width=800,resizable=yes,scrollbars=yes');
    win.focus();
    return false;
}

function dismissAddAnotherPopup(win, newId, newRepr) {
    // newId and newRepr are expected to have previously been escaped by
    // django.utils.html.escape.
    newId = html_unescape(newId);
    newRepr = html_unescape(newRepr);
    var name = windowname_to_id(win.name);
    var elem = document.getElementById(name);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> b04f72c528563f2444ed22c4c55c077b2f864fb1
<<<<<<< HEAD
    if (elem) {
        var elemName = elem.nodeName.toUpperCase();
        if (elemName == 'SELECT') {
            var o = new Option(newRepr, newId);
=======
<<<<<<< HEAD
>>>>>>> Revert
=======
=======
>>>>>>> clean up
>>>>>>> b04f72c528563f2444ed22c4c55c077b2f864fb1
    var o;
    if (elem) {
        var elemName = elem.nodeName.toUpperCase();
        if (elemName == 'SELECT') {
            o = new Option(newRepr, newId);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> clean up
>>>>>>> Revert
=======
>>>>>>> clean up
=======
>>>>>>> clean up
>>>>>>> b04f72c528563f2444ed22c4c55c077b2f864fb1
            elem.options[elem.options.length] = o;
            o.selected = true;
        } else if (elemName == 'INPUT') {
            if (elem.className.indexOf('vManyToManyRawIdAdminField') != -1 && elem.value) {
                elem.value += ',' + newId;
            } else {
                elem.value = newId;
            }
        }
    } else {
        var toId = name + "_to";
<<<<<<< HEAD
<<<<<<< HEAD
        o = new Option(newRepr, newId);
=======
=======
>>>>>>> b04f72c528563f2444ed22c4c55c077b2f864fb1
<<<<<<< HEAD
        elem = document.getElementById(toId);
        var o = new Option(newRepr, newId);
=======
        o = new Option(newRepr, newId);
>>>>>>> clean up
<<<<<<< HEAD
>>>>>>> Revert
=======
=======
        o = new Option(newRepr, newId);
>>>>>>> clean up
>>>>>>> b04f72c528563f2444ed22c4c55c077b2f864fb1
        SelectBox.add_to_cache(toId, o);
        SelectBox.redisplay(toId);
    }
    win.close();
}
