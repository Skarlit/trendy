(function($) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> b04f72c528563f2444ed22c4c55c077b2f864fb1
	var lastChecked;

>>>>>>> clean up
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
	var lastChecked;

>>>>>>> clean up
>>>>>>> Revert
=======
	var lastChecked;

>>>>>>> clean up
>>>>>>> b04f72c528563f2444ed22c4c55c077b2f864fb1
	$.fn.actions = function(opts) {
		var options = $.extend({}, $.fn.actions.defaults, opts);
		var actionCheckboxes = $(this);
		var list_editable_changed = false;
		var checker = function(checked) {
			if (checked) {
				showQuestion();
			} else {
				reset();
			}
			$(actionCheckboxes).prop("checked", checked)
				.parent().parent().toggleClass(options.selectedClass, checked);
		},
		updateCounter = function() {
			var sel = $(actionCheckboxes).filter(":checked").length;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> b04f72c528563f2444ed22c4c55c077b2f864fb1
			// _actions_icnt is defined in the generated HTML
			// and contains the total amount of objects in the queryset
>>>>>>> clean up
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
			// _actions_icnt is defined in the generated HTML
			// and contains the total amount of objects in the queryset
>>>>>>> clean up
>>>>>>> Revert
=======
			// _actions_icnt is defined in the generated HTML
			// and contains the total amount of objects in the queryset
>>>>>>> clean up
>>>>>>> b04f72c528563f2444ed22c4c55c077b2f864fb1
			$(options.counterContainer).html(interpolate(
			ngettext('%(sel)s of %(cnt)s selected', '%(sel)s of %(cnt)s selected', sel), {
				sel: sel,
				cnt: _actions_icnt
			}, true));
			$(options.allToggle).prop("checked", function() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> b04f72c528563f2444ed22c4c55c077b2f864fb1
				var value;
>>>>>>> clean up
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
				var value;
>>>>>>> clean up
>>>>>>> Revert
=======
				var value;
>>>>>>> clean up
>>>>>>> b04f72c528563f2444ed22c4c55c077b2f864fb1
				if (sel == actionCheckboxes.length) {
					value = true;
					showQuestion();
				} else {
					value = false;
					clearAcross();
				}
				return value;
			});
		},
		showQuestion = function() {
			$(options.acrossClears).hide();
			$(options.acrossQuestions).show();
			$(options.allContainer).hide();
		},
		showClear = function() {
			$(options.acrossClears).show();
			$(options.acrossQuestions).hide();
			$(options.actionContainer).toggleClass(options.selectedClass);
			$(options.allContainer).show();
			$(options.counterContainer).hide();
		},
		reset = function() {
			$(options.acrossClears).hide();
			$(options.acrossQuestions).hide();
			$(options.allContainer).hide();
			$(options.counterContainer).show();
		},
		clearAcross = function() {
			reset();
			$(options.acrossInput).val(0);
			$(options.actionContainer).removeClass(options.selectedClass);
		};
		// Show counter by default
		$(options.counterContainer).show();
		// Check state of checkboxes and reinit state if needed
		$(this).filter(":checked").each(function(i) {
			$(this).parent().parent().toggleClass(options.selectedClass);
			updateCounter();
			if ($(options.acrossInput).val() == 1) {
				showClear();
			}
		});
		$(options.allToggle).show().click(function() {
			checker($(this).prop("checked"));
			updateCounter();
		});
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
		$("div.actions span.question a").click(function(event) {
=======
>>>>>>> b04f72c528563f2444ed22c4c55c077b2f864fb1
		$("a", options.acrossQuestions).click(function(event) {
>>>>>>> clean up
=======
<<<<<<< HEAD
<<<<<<< HEAD
		$("div.actions span.question a").click(function(event) {
=======
		$("a", options.acrossQuestions).click(function(event) {
>>>>>>> clean up
>>>>>>> Revert
=======
		$("a", options.acrossQuestions).click(function(event) {
>>>>>>> clean up
>>>>>>> b04f72c528563f2444ed22c4c55c077b2f864fb1
			event.preventDefault();
			$(options.acrossInput).val(1);
			showClear();
		});
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
		$("div.actions span.clear a").click(function(event) {
=======
>>>>>>> b04f72c528563f2444ed22c4c55c077b2f864fb1
		$("a", options.acrossClears).click(function(event) {
>>>>>>> clean up
=======
<<<<<<< HEAD
<<<<<<< HEAD
		$("div.actions span.clear a").click(function(event) {
=======
		$("a", options.acrossClears).click(function(event) {
>>>>>>> clean up
>>>>>>> Revert
=======
		$("a", options.acrossClears).click(function(event) {
>>>>>>> clean up
>>>>>>> b04f72c528563f2444ed22c4c55c077b2f864fb1
			event.preventDefault();
			$(options.allToggle).prop("checked", false);
			clearAcross();
			checker(0);
			updateCounter();
		});
		lastChecked = null;
		$(actionCheckboxes).click(function(event) {
			if (!event) { event = window.event; }
			var target = event.target ? event.target : event.srcElement;
			if (lastChecked && $.data(lastChecked) != $.data(target) && event.shiftKey === true) {
				var inrange = false;
				$(lastChecked).prop("checked", target.checked)
					.parent().parent().toggleClass(options.selectedClass, target.checked);
				$(actionCheckboxes).each(function() {
					if ($.data(this) == $.data(lastChecked) || $.data(this) == $.data(target)) {
						inrange = (inrange) ? false : true;
					}
					if (inrange) {
						$(this).prop("checked", target.checked)
							.parent().parent().toggleClass(options.selectedClass, target.checked);
					}
				});
			}
			$(target).parent().parent().toggleClass(options.selectedClass, target.checked);
			lastChecked = target;
			updateCounter();
		});
		$('form#changelist-form table#result_list tr').find('td:gt(0) :input').change(function() {
			list_editable_changed = true;
		});
		$('form#changelist-form button[name="index"]').click(function(event) {
			if (list_editable_changed) {
				return confirm(gettext("You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost."));
			}
		});
		$('form#changelist-form input[name="_save"]').click(function(event) {
			var action_changed = false;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
			$('div.actions select option:selected').each(function() {
=======
>>>>>>> b04f72c528563f2444ed22c4c55c077b2f864fb1
			$('select option:selected', options.actionContainer).each(function() {
>>>>>>> clean up
=======
<<<<<<< HEAD
<<<<<<< HEAD
			$('div.actions select option:selected').each(function() {
=======
			$('select option:selected', options.actionContainer).each(function() {
>>>>>>> clean up
>>>>>>> Revert
=======
			$('select option:selected', options.actionContainer).each(function() {
>>>>>>> clean up
>>>>>>> b04f72c528563f2444ed22c4c55c077b2f864fb1
				if ($(this).val()) {
					action_changed = true;
				}
			});
			if (action_changed) {
				if (list_editable_changed) {
					return confirm(gettext("You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action."));
				} else {
					return confirm(gettext("You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button."));
				}
			}
		});
	};
	/* Setup plugin defaults */
	$.fn.actions.defaults = {
		actionContainer: "div.actions",
		counterContainer: "span.action-counter",
		allContainer: "div.actions span.all",
		acrossInput: "div.actions input.select-across",
		acrossQuestions: "div.actions span.question",
		acrossClears: "div.actions span.clear",
		allToggle: "#action-toggle",
		selectedClass: "selected"
	};
})(django.jQuery);
