(function($) {
    $.fn.simpleJekyllSearch = function(options) {
        var settings = $.extend({
            jsonFile: '/search.json',
            jsonFormat: 'title,tags,categories,url,date',
            template: '<li><article><a href="{url}"><span class="entry-category">{categories}</span> {title} <span class="entry-date"><time datetime="{date}">{formattedDate}</time></span></a></article></li>',
            searchResults: '.search-results',
            limit: '10',
            noResults: '<p>Oh no! We didn\'t find anything :(</p>'
        }, options);

        var properties = settings.jsonFormat.split(',');

        var jsonData = [],
            origThis = this,
            searchResults = $(settings.searchResults);

        if (settings.jsonFile.length && searchResults.length) {
            $.ajax({
                type: "GET",
                url: settings.jsonFile,
                dataType: 'json',
                success: function(data, textStatus, jqXHR) {
                    jsonData = data;
                    registerEvent();
                },
                error: function(x, y, z) {
                    console.log("***ERROR in simpleJekyllSearch.js***");
                    console.log(x);
                    console.log(y);
                    console.log(z);
                    // x.responseText should have what's wrong
                }
            });
        }

        function registerEvent() {
            origThis.keyup(function(e) {
                if ($(this).val().length) {
                    writeMatches(performSearch($(this).val()));
                } else {
                    clearSearchResults();
                }
            });
        }

        function performSearch(str) {
            var matches = [];

            $.each(jsonData, function(i, entry) {
                for (var i = 0; i < properties.length; i++)
                    if (entry[properties[i]] !== undefined && entry[properties[i]].toLowerCase().indexOf(str.toLowerCase()) !== -1) {
                        matches.push(entry);
                        i = properties.length;
                    }
            });
            return matches;
        }

        function writeMatches(m) {
            clearSearchResults();
            searchResults.append($(settings.searchResultsTitle));

            if (m.length) {
                var options = { year: "numeric", month: "long", day: "numeric" };
                var locale = "fr-FR"; // French (France) locale

                $.each(m, function(i, entry) {
                    if (i < settings.limit) {
                        // Format the date using French locale
                        var date = new Date(entry.date);
                        var formattedDate = new Intl.DateTimeFormat(locale, options).format(date);

                        var output = settings.template;

                        // Replace the {formattedDate} placeholder with the formatted date
                        output = output.replace("{formattedDate}", formattedDate);

                        for (var i = 0; i < properties.length; i++) {
                            var regex = new RegExp("{" + properties[i] + "}", 'g');
                            output = output.replace(regex, entry[properties[i]]);
                        }
                        searchResults.append($(output));
                    }
                });
            } else {
                searchResults.append(settings.noResults);
            }
        }

        function clearSearchResults() {
            searchResults.children().remove();
        }
    }
}(Zepto));
