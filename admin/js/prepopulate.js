(function($) {
    $.fn.prepopulate = function(dependencies, maxLength) {
        /*
            Depends on urlify.js
            Populates a selected field with the values of the dependent fields,
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> b04f72c528563f2444ed22c4c55c077b2f864fb1
<<<<<<< HEAD
            URLifies and shortens the string. 
            dependencies - array of dependent fields id's 
            maxLength - maximum length of the URLify'd string 
        */
        return this.each(function() {
            var field = $(this);

            field.data('_changed', false);
            field.change(function() {
                field.data('_changed', true);
            });

            var populate = function () {
                // Bail if the fields value has changed
                if (field.data('_changed') == true) return;
 
                var values = [];
                $.each(dependencies, function(i, field) {
                  if ($(field).val().length > 0) {
                      values.push($(field).val());
                  }
                })
                field.val(URLify(values.join(' '), maxLength));
            };

            $(dependencies.join(',')).keyup(populate).change(populate).focus(populate);
=======
<<<<<<< HEAD
>>>>>>> Revert
=======
=======
>>>>>>> clean up
>>>>>>> b04f72c528563f2444ed22c4c55c077b2f864fb1
            URLifies and shortens the string.
            dependencies - array of dependent fields ids
            maxLength - maximum length of the URLify'd string
        */
        return this.each(function() {
            var prepopulatedField = $(this);

            var populate = function () {
                // Bail if the field's value has been changed by the user
                if (prepopulatedField.data('_changed')) {
                    return;
                }

                var values = [];
                $.each(dependencies, function(i, field) {
                    field = $(field);
                    if (field.val().length > 0) {
                        values.push(field.val());
                    }
                });
                prepopulatedField.val(URLify(values.join(' '), maxLength));
            };

            prepopulatedField.data('_changed', false);
            prepopulatedField.change(function() {
                prepopulatedField.data('_changed', true);
            });

            if (!prepopulatedField.val()) {
                $(dependencies.join(',')).keyup(populate).change(populate).focus(populate);
            }
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
        });
    };
})(django.jQuery);
