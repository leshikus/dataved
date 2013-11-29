(function () {
    var _UDS_CONST_LOCALE = 'ru';
    var _UDS_CONST_SHORT_DATE_PATTERN = 'DMY';
    var _UDS_MSG_SEARCHER_IMAGE = ('\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430');
    var _UDS_MSG_SEARCHER_WEB = ('\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442');
    var _UDS_MSG_SEARCHER_BLOG = ('\u0411\u043b\u043e\u0433');
    var _UDS_MSG_SEARCHER_VIDEO = ('\u0412\u0438\u0434\u0435\u043e');
    var _UDS_MSG_SEARCHER_LOCAL = ('\u0410\u0434\u0440\u0435\u0441\u0430');
    var _UDS_MSG_SEARCHCONTROL_SAVE = ('\u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c');
    var _UDS_MSG_SEARCHCONTROL_KEEP = ('\u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c');
    var _UDS_MSG_SEARCHCONTROL_INCLUDE = ('\u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c');
    var _UDS_MSG_SEARCHCONTROL_COPY = ('\u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c');
    var _UDS_MSG_SEARCHCONTROL_CLOSE = ('\u0437\u0430\u043a\u0440\u044b\u0442\u044c');
    var _UDS_MSG_SEARCHCONTROL_SPONSORED_LINKS = ('\u0420\u0435\u043a\u043b\u0430\u043c\u043d\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438');
    var _UDS_MSG_SEARCHCONTROL_SEE_MORE = ('\u0435\u0449\u0451...');
    var _UDS_MSG_SEARCHCONTROL_WATERMARK = ('\u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0438\u0437 Google');
    var _UDS_MSG_SEARCHER_CONFIG_SET_LOCATION = ('\u0420\u0435\u0433\u0438\u043e\u043d \u043f\u043e\u0438\u0441\u043a\u0430');
    var _UDS_MSG_SEARCHER_CONFIG_DISABLE_ADDRESS_LOOKUP = ('\u041e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043f\u043e\u0438\u0441\u043a \u0430\u0434\u0440\u0435\u0441\u043e\u0432');
    var _UDS_MSG_SEARCHER_NEWS = ('\u041d\u043e\u0432\u043e\u0441\u0442\u0438');

    function _UDS_MSG_MINUTES_AGO(AGE_MINUTES_AGO) {
        return ('' + AGE_MINUTES_AGO + ' \u043c\u0438\u043d. \u043d\u0430\u0437\u0430\u0434');
    }
    var _UDS_MSG_ONE_HOUR_AGO = ('1 \u0447\u0430\u0441 \u043d\u0430\u0437\u0430\u0434');

    function _UDS_MSG_HOURS_AGO(AGE_HOURS_AGO) {
        return ('' + AGE_HOURS_AGO + ' \u0447. \u043d\u0430\u0437\u0430\u0434');
    }

    function _UDS_MSG_NEWS_ALL_N_RELATED(NUMBER) {
        return ('\u043f\u043e\u0445\u043e\u0436\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438: ' + NUMBER);
    }
    var _UDS_MSG_NEWS_RELATED = ('\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438');
    var _UDS_MSG_BRANDING_STRING = ('\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 Google');
    var _UDS_MSG_SORT_BY_DATE = ('\u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c \u043f\u043e \u0434\u0430\u0442\u0435');
    var _UDS_MSG_MONTH_ABBR_JAN = ('\u044f\u043d\u0432');
    var _UDS_MSG_MONTH_ABBR_FEB = ('\u0444\u0435\u0432');
    var _UDS_MSG_MONTH_ABBR_MAR = ('\u043c\u0430\u0440');
    var _UDS_MSG_MONTH_ABBR_APR = ('\u0430\u043f\u0440');
    var _UDS_MSG_MONTH_ABBR_MAY = ('\u043c\u0430\u0439');
    var _UDS_MSG_MONTH_ABBR_JUN = ('\u0438\u044e\u043d');
    var _UDS_MSG_MONTH_ABBR_JUL = ('\u0438\u044e\u043b');
    var _UDS_MSG_MONTH_ABBR_AUG = ('\u0430\u0432\u0433');
    var _UDS_MSG_MONTH_ABBR_SEP = ('\u0441\u0435\u043d\u0442');
    var _UDS_MSG_MONTH_ABBR_OCT = ('\u043e\u043a\u0442');
    var _UDS_MSG_MONTH_ABBR_NOV = ('\u043d\u043e\u044f\u0431');
    var _UDS_MSG_MONTH_ABBR_DEC = ('\u0434\u0435\u043a');
    var _UDS_MSG_DIRECTIONS = ('\u043c\u0430\u0440\u0448\u0440\u0443\u0442\u044b \u043f\u0440\u043e\u0435\u0437\u0434\u0430');
    var _UDS_MSG_CLEAR_RESULTS = ('\u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b');
    var _UDS_MSG_SHOW_ONE_RESULT = ('\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0434\u0438\u043d \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442');
    var _UDS_MSG_SHOW_MORE_RESULTS = ('\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b');
    var _UDS_MSG_SHOW_ALL_RESULTS = ('\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b');
    var _UDS_MSG_SETTINGS = ('\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438');
    var _UDS_MSG_SEARCH = ('\u043f\u043e\u0438\u0441\u043a');
    var _UDS_MSG_SEARCH_UC = ('\u041f\u043e\u0438\u0441\u043a');
    var _UDS_MSG_POWERED_BY = ('\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f');

    function _UDS_MSG_LOCAL_ATTRIBUTION(LOCAL_RESULTS_PROVIDER) {
        return ('\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u0439 \u043e \u0431\u0438\u0437\u043d\u0435\u0441\u0430\u0445:  ' + LOCAL_RESULTS_PROVIDER);
    }
    var _UDS_MSG_SEARCHER_BOOK = ('\u041a\u043d\u0438\u0433\u0438');

    function _UDS_MSG_FOUND_ON_PAGE(FOUND_ON_PAGE) {
        return ('\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 ' + FOUND_ON_PAGE);
    }

    function _UDS_MSG_TOTAL_PAGE_COUNT(PAGE_COUNT) {
        return ('' + PAGE_COUNT + ' \u0441\u0442\u0440.');
    }
    var _UDS_MSG_SEARCHER_BY = ('\u0410\u0432\u0442\u043e\u0440:');
    var _UDS_MSG_SEARCHER_CODE = ('\u041a\u043e\u0434');
    var _UDS_MSG_UNKNOWN_LICENSE = ('\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u044f');
    var _UDS_MSG_SEARCHER_GSA = ('Google Search Appliance');
    var _UDS_MSG_SEARCHCONTROL_MORERESULTS = ('\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b');
    var _UDS_MSG_SEARCHCONTROL_PREVIOUS = ('\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f');
    var _UDS_MSG_SEARCHCONTROL_NEXT = ('\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f');
    var _UDS_MSG_GET_DIRECTIONS = ('\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u044b \u043f\u0440\u043e\u0435\u0437\u0434\u0430');
    var _UDS_MSG_GET_DIRECTIONS_TO_HERE = ('\u0421\u044e\u0434\u0430');
    var _UDS_MSG_GET_DIRECTIONS_FROM_HERE = ('\u041e\u0442\u0441\u044e\u0434\u0430');
    var _UDS_MSG_CLEAR_RESULTS_UC = ('\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b');
    var _UDS_MSG_SEARCH_THE_MAP = ('\u043d\u0430\u0439\u0442\u0438 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435');
    var _UDS_MSG_SCROLL_THROUGH_RESULTS = ('\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b');
    var _UDS_MSG_EDIT_TAGS = ('\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0435\u0433\u0438');
    var _UDS_MSG_TAG_THIS_SEARCH = ('\u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u043f\u043e\u0438\u0441\u043a');
    var _UDS_MSG_SEARCH_STRING = ('\u043d\u0430\u0439\u0442\u0438 \u0446\u0435\u043f\u043e\u0447\u043a\u0443');
    var _UDS_MSG_OPTIONAL_LABEL = ('\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u044f\u0440\u043b\u044b\u043a');
    var _UDS_MSG_DELETE = ('\u0443\u0434\u0430\u043b\u0438\u0442\u044c');
    var _UDS_MSG_DELETED = ('\u0443\u0434\u0430\u043b\u0435\u043d\u043e');
    var _UDS_MSG_CANCEL = ('\u043e\u0442\u043c\u0435\u043d\u0430');
    var _UDS_MSG_UPLOAD_YOUR_VIDEOS = ('\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0432\u0438\u0434\u0435\u043e\u0440\u043e\u043b\u0438\u043a');
    var _UDS_MSG_IM_DONE_WATCHING = ('\u0437\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440');
    var _UDS_MSG_CLOSE_VIDEO_PLAYER = ('\u0437\u0430\u043a\u0440\u044b\u0442\u044c \u0432\u0438\u0434\u0435\u043e\u043f\u043b\u0435\u0435\u0440');
    var _UDS_MSG_NO_RESULTS = ('\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u043d\u0435\u0442');
    var _UDS_MSG_LINKEDCSE_ERROR_RESULTS = ('\u0412 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u044d\u0442\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u043f\u043e\u0438\u0441\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u0447\u0435\u0440\u0435\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434.');
    var _UDS_MSG_COUPONS = ('\u041a\u0443\u043f\u043e\u043d\u044b');
    var _UDS_MSG_BACK = ('\u043d\u0430\u0437\u0430\u0434');
    var _UDS_MSG_SUBSCRIBE = ('\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f');
    var _UDS_MSG_SEARCHER_PATENT = ('\u041f\u0430\u0442\u0435\u043d\u0442');
    var _UDS_MSG_USPAT = ('\u041f\u0430\u0442\u0435\u043d\u0442 (\u0421\u0428\u0410)');
    var _UDS_MSG_USPAT_APP = ('\u0417\u0430\u044f\u0432\u043a\u0430 \u043d\u0430 \u043f\u0430\u0442\u0435\u043d\u0442 (\u0421\u0428\u0410)');
    var _UDS_MSG_PATENT_FILED = ('\u0417\u0430\u044f\u0432\u043b\u0435\u043d');
    var _UDS_MSG_ADS_BY_GOOGLE = ('\u0420\u0435\u043a\u043b\u0430\u043c\u0430 \u043e\u0442 Google');
    var _UDS_MSG_SET_DEFAULT_LOCATION = ('\u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e');
    var _UDS_MSG_NEWSCAT_TOPSTORIES = ('\u0413\u043b\u0430\u0432\u043d\u044b\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438');
    var _UDS_MSG_NEWSCAT_WORLD = ('\u0412 \u043c\u0438\u0440\u0435');
    var _UDS_MSG_NEWSCAT_NATION = ('\u041d\u0430\u0446\u0438\u044f');
    var _UDS_MSG_NEWSCAT_BUSINESS = ('\u0411\u0438\u0437\u043d\u0435\u0441');
    var _UDS_MSG_NEWSCAT_SCITECH = ('\u041d\u0430\u0443\u043a\u0430 \u0438 \u0442\u0435\u0445\u043d\u0438\u043a\u0430');
    var _UDS_MSG_NEWSCAT_ENTERTAINMENT = ('\u041a\u0443\u043b\u044c\u0442\u0443\u0440\u0430');
    var _UDS_MSG_NEWSCAT_HEALTH = ('\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435');
    var _UDS_MSG_NEWSCAT_SPORTS = ('\u0421\u043f\u043e\u0440\u0442');
    var _UDS_MSG_NEWSCAT_POLITICS = ('\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430');
    var _UDS_MSG_SEARCH_RESULTS = ('\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430');
    var _UDS_MSG_DID_YOU_MEAN = ('\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u0432\u044b \u0438\u043c\u0435\u043b\u0438 \u0432 \u0432\u0438\u0434\u0443:');
    var _UDS_MSG_CUSTOM_SEARCH = ('\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u043f\u043e\u0438\u0441\u043a');
    var _UDS_MSG_LABELED = ('\u0421 \u043f\u043e\u043c\u0435\u0442\u043a\u043e\u0439');
    var _UDS_MSG_LOADING = ('\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...');
    var _UDS_MSG_ALL_RESULTS_SHORT = ('\u0412\u0441\u0435');
    var _UDS_MSG_ALL_RESULTS_LONG = ('\u0412\u0441\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b');
    var _UDS_MSG_REFINE_RESULTS = ('\u0423\u0442\u043e\u0447\u043d\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b:');

    function _UDS_MSG_REVIEWS(REVIEW_COUNT) {
        return ('\u041e\u0442\u0437\u044b\u0432\u043e\u0432: ' + REVIEW_COUNT);
    }

    function _UDS_MSG_CALORIES(CALORIES) {
        return ('' + CALORIES + ' \u043a\u0430\u043b.');
    }

    function _UDS_MSG_PRICE_RANGE(RANGE) {
        return ('\u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0446\u0435\u043d: ' + RANGE + '.');
    }

    function _UDS_MSG_PRICE(PRICE) {
        return ('\u0426\u0435\u043d\u0430: ' + PRICE + '.');
    }

    function _UDS_MSG_AVAILABILITY(AVAILABILITY) {
        return ('\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c: ' + AVAILABILITY + '.');
    }

    function _UDS_MSG_TELEPHONE(TELEPHONE) {
        return ('\u0422\u0435\u043b.: ' + TELEPHONE);
    }

    function _UDS_MSG_RESULT_INFO(NUMBER_OF_RESULTS, SEARCH_TIME) {
        return ('\u041d\u0430\u0439\u0434\u0435\u043d\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432: \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e ' + NUMBER_OF_RESULTS + ' (\u0437\u0430 ' + SEARCH_TIME + ' \u0441\u0435\u043a.)');
    }
    var _UDS_MSG_FILE_FORMAT = ('\u0424\u043e\u0440\u043c\u0430\u0442 \u0444\u0430\u0439\u043b\u0430:');
    var _UDS_MSG_SHOWING_RESULTS_FOR = ('\u041f\u043e\u043a\u0430\u0437\u0430\u043d\u044b \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443');
    var _UDS_MSG_SEARCH_INSTEAD_FOR = ('\u0418\u0441\u043a\u0430\u0442\u044c \u0432\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0433\u043e');

    function _UDS_MSG_FILTERED_RESULTS(NUM) {
        return ('\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0437\u043d\u0430\u0447\u0438\u043c\u044b\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b, \u043c\u044b \u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435, \u043e\u0447\u0435\u043d\u044c \u043f\u043e\u0445\u043e\u0436\u0438\u0435 \u043d\u0430 ' + NUM + ' \u0443\u0436\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445. \u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435, \u043c\u043e\u0436\u043d\u043e ' + '<a>\u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u043f\u043e\u0438\u0441\u043a, \u0432\u043a\u043b\u044e\u0447\u0438\u0432 \u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b' + '</a>.');
    }
    var _UDS_MSG_ORDER_BY = ('\u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c:');
    var _UDS_MSG_ORDER_BY_RELEVANCE = ('\u043f\u043e \u0440\u0435\u043b\u0435\u0432\u0430\u043d\u0442\u043d\u043e\u0441\u0442\u0438');
    var _UDS_MSG_ORDER_BY_DATE = ('\u043f\u043e \u0434\u0430\u0442\u0435');

    var d = encodeURIComponent,
        ea = google_exportSymbol,
        ka = _UDS_CONST_SHORT_DATE_PATTERN,
        k = window,
        p = document,
        la = isNaN,
        ma = Math,
        oa = Array,
        qa = navigator,
        sa = parseInt,
        ta = parseFloat,
        ua = String,
        ya = _UDS_CONST_LOCALE,
        za = decodeURIComponent,
        Aa = RegExp;

    function Ca(a, b) {
        return a.onload = b
    }

    function Da(a, b) {
        return a.width = b
    }

    function Ea(a, b) {
        return a.padding = b
    }

    function Ha(a, b) {
        return a.cancelBubble = b
    }

    function Ia(a, b) {
        return a.checked = b
    }

    function Ma(a, b) {
        return a.total = b
    }

    function Na(a, b) {
        return a.enabled = b
    }

    function Oa(a, b) {
        return a.href = b
    }

    function Qa(a, b) {
        return a.display = b
    }

    function Ra(a, b) {
        return a.execute = b
    }

    function Sa(a, b) {
        return a.height = b
    }

    function Ta(a, b) {
        return a.root = b
    }

    function Ua(a, b) {
        return a.input = b
    }

    function Va(a, b) {
        return a.innerHTML = b
    }

    function Wa(a, b) {
        return a.value = b
    }

    function Xa(a, b) {
        return a.left = b
    }

    function Ya(a, b) {
        return a.type = b
    }

    function bb(a, b) {
        return a.visibility = b
    }

    function db(a, b) {
        return a.title = b
    }

    function r(a, b) {
        return a.className = b
    }

    function eb(a, b) {
        return a.target = b
    }

    function fb(a, b) {
        return a.onclick = b
    }
    var s = "appendChild",
        kb = "pushState",
        lb = "clearTimeout",
        mb = "width",
        t = "replace",
        nb = "floor",
        ob = "content",
        qb = "offsetWidth",
        rb = "concat",
        sb = "charAt",
        tb = "createTextNode",
        vb = "insertBefore",
        wb = "match",
        xb = "focus",
        yb = "createElement",
        zb = "keyCode",
        Ab = "firstChild",
        Bb = "select",
        Cb = "setAttribute",
        Fb = "cloneNode",
        Gb = "clear",
        Hb = "childNodes",
        Ib = "refresh",
        Mb = "attachEvent",
        Nb = "nextSibling",
        Ob = "getTime",
        Pb = "getElementsByTagName",
        Qb = "substr",
        Rb = "cursor",
        Sb = "checked",
        Tb = "setTimeout",
        Ub = "split",
        Vb = "stopPropagation",
        Wb = "userAgent",
        Xb = "buffer",
        Yb = "location",
        Zb = "count",
        $b = "hasOwnProperty",
        ac = "getComputedStyle",
        v = "style",
        bc = "close",
        cc = "hasChildNodes",
        w = "search",
        dc = "state",
        ec = "isEnabled",
        fc = "random",
        gc = "protocol",
        hc = "enabled",
        x = "addRule",
        ic = "href",
        jc = "console",
        kc = "apply",
        lc = "reset",
        mc = "removeAttribute",
        nc = "label",
        oc = "execute",
        pc = "height",
        qc = "root",
        rc = "offsetHeight",
        D = "push",
        sc = "test",
        tc = "replaceChild",
        uc = "input",
        vc = "styleSheet",
        wc = "submit",
        xc = "text",
        yc = "round",
        Dc = "nodeType",
        Ec = "getElementById",
        Fc = "innerHTML",
        Gc = "srcElement",
        Hc =
            "RENDERER",
        Ic = "value",
        Jc = "indexOf",
        Kc = "insertRow",
        Lc = "getElementsByClassName",
        Mc = "addEventListener",
        Nc = "type",
        Oc = "defaultView",
        Pc = "ServiceBase",
        Qc = "name",
        Rc = "insertCell",
        H = "length",
        Sc = "title",
        I = "prototype",
        Tc = "className",
        Uc = "clientWidth",
        Vc = "Version",
        Wc = "document",
        Xc = "body",
        Yc = "history",
        Zc = "removeChild",
        $c = "target",
        ad = "call",
        bd = "anchor",
        cd = "getAttribute",
        dd = "charCodeAt",
        ed = "sort",
        fd = "loader",
        gd = "currentStyle",
        hd = "substring",
        id = "themes",
        jd = "shiftKey",
        J = "element",
        kd = "parentNode",
        ld = "CurrentLocale",
        md = "splice",
        nd = "join",
        od = "toLowerCase",
        pd = "event",
        L;
    var qd = this,
        rd = function (a, b, c) {
            a = a[Ub](".");
            c = c || qd;
            a[0] in c || !c.execScript || c.execScript("var " + a[0]);
            for (var e; a[H] && (e = a.shift());) a[H] || void 0 === b ? c = c[e] ? c[e] : c[e] = {} : c[e] = b
        };
    var xd = function (a, b) {
        if (b) return a[t](sd, "&amp;")[t](td, "&lt;")[t](ud, "&gt;")[t](vd, "&quot;");
        if (!wd[sc](a)) return a; - 1 != a[Jc]("&") && (a = a[t](sd, "&amp;")); - 1 != a[Jc]("<") && (a = a[t](td, "&lt;")); - 1 != a[Jc](">") && (a = a[t](ud, "&gt;")); - 1 != a[Jc]('"') && (a = a[t](vd, "&quot;"));
        return a
    }, sd = /&/g,
        td = /</g,
        ud = />/g,
        vd = /\"/g,
        wd = /[&<>\"]/;
    var yd = /<[^>]*>|&[^;]+;/g,
        zd = Aa("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),
        Ad = Aa("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]"),
        Bd = /^http:\/\/.*/,
        Cd = Aa("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff][^\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*$"),
        Dd = Aa("[\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc][^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*$"),
        Ed = /\s+/,
        Fd = /\d/;
    var Gd = function (a, b) {
        this.td = "number" == typeof a ? 0 < a ? 1 : 0 > a ? -1 : null : null == a ? null : a ? -1 : 1;
        this.Jw = !! b
    };
    L = Gd[I];
    L.el = function (a, b) {
        for (var c = 0, e = 0, g = !1, f = (b ? a[t](yd, "") : a)[Ub](Ed), h = 0; h < f[H]; h++) {
            var l = f[h];
            Ad[sc](l) ? (c++, e++) : Bd[sc](l) ? g = !0 : zd[sc](l) ? e++ : Fd[sc](l) && (g = !0)
        }
        return 0 == e ? g ? 1 : 0 : 0.4 < c / e ? -1 : 1
    };
    L.Mw = function (a, b) {
        return 0 > a * b
    };
    L.Bq = function (a, b, c, e) {
        return e && (this.Mw(b, this.td) || 1 == this.td && Dd[sc](c ? a[t](yd, "") : a) || -1 == this.td && Cd[sc](c ? a[t](yd, "") : a)) ? 1 == this.td ? "\u200e" : "\u200f" : ""
    };
    L.tq = function (a, b) {
        return this.Hq(this.el(a, b))
    };
    L.Hq = function (a) {
        return -1 == (0 == a ? this.td : a) ? "rtl" : "ltr"
    };
    L.wq = function (a, b, c) {
        return this.Ox(null, a, b, c)
    };
    L.Ox = function (a, b, c, e) {
        null == a && (a = this.el(b, c));
        return this.Pw(a, b, c, e)
    };
    L.Pw = function (a, b, c, e) {
        e = e || void 0 == e;
        c || (b = xd(b));
        c = [];
        var g = 0 != a && a != this.td;
        if (this.Jw || g) c[D]("<span"), g && c[D](-1 == a ? ' dir="rtl"' : ' dir="ltr"'), c[D](">" + b + "</span>");
        else c[D](b);
        c[D](this.Bq(b, a, !0, e));
        return c[nd]("")
    };
    L.uq = function (a, b) {
        return this.xx(null, a, b)
    };
    L.xx = function (a, b, c) {
        null == a && (a = this.el(b, c));
        return this.Bq(b, a, c, !0)
    };
    L.Px = function () {
        return -1 == this.td ? "right" : "left"
    };
    L.mx = function () {
        return -1 == this.td ? "left" : "right"
    };
    var Hd, Id, Jd, Kd, Ld, Md, Nd, Od, Pd, Sd, Td, Ud, Vd, Wd, Xd, Yd, Zd, $d, ae, be, ce, de, ee, fe, ge, he, ie, je, ke, le, me, ne, oe, pe, qe, re, se, te, ue, ve, we, xe, ye, ze, Ae, Be, Ce, De, Ee, He, Ie, Je, Ke, Le, Me, Ne, Oe, Pe, Qe, Re, Se, Te, Ue, Ve, We, Xe, Ye, Ze, $e, af, bf = /^[6-9]$/,
        ff = {
            vv: 0,
            op: 1,
            uv: 2,
            ci: 3
        }, gf = {
            EMPTY: 0,
            Ts: 1,
            bn: 2
        }, hf = {
            Ds: 1,
            Es: 2,
            kA: 3,
            Cs: 4,
            Fs: 5,
            BA: 6,
            Sz: 7,
            wf: 8
        }, jf = {
            DONT_CARE: 1,
            Bs: 2,
            Nm: 3
        }, kf = {
            np: 0,
            wv: 1,
            ci: 2
        }, lf = [23, 24],
        M = {
            Yt: 0,
            Ez: 114,
            Vc: 115,
            Nf: 116,
            hb: 117,
            Lf: 494,
            Fa: 118,
            Yd: 119,
            Uc: 374,
            Zc: 120,
            Qc: 121,
            gh: 122,
            Ub: 123,
            le: 124,
            hh: 125,
            bu: 230,
            sA: 553,
            gc: 126,
            qe: 127,
            Fb: 128,
            fn: 343,
            of: 129,
            Dz: 231,
            Rd: 130,
            Tt: 131,
            Hz: 237,
            Pz: 570,
            nA: 132,
            Vt: 134,
            Nt: 189,
            Ot: 246,
            pA: 264,
            oA: 256,
            oh: 133,
            Us: 184,
            xf: 419,
            CA: 503,
            DA: 578,
            EA: 579,
            FA: 505,
            IA: 516,
            GA: 509,
            HA: 512,
            ce: 173,
            dA: 568,
            eA: 569,
            cm: 135,
            cj: 136,
            dj: 137,
            gm: 138,
            ef: 139,
            Ut: 140,
            dm: 141,
            em: 142,
            fm: 240,
            Wt: 143,
            Xt: 144,
            zh: 347,
            jk: 191,
            Rh: 150,
            gf: 145,
            Rp: 146,
            Bf: 147,
            JA: 148,
            zA: 245,
            jo: 155,
            Rf: 149,
            Pg: 154,
            fh: 311,
            Cd: 153,
            RENDERER: 152,
            sc: 156,
            oe: 151,
            dk: 158,
            en: 294,
            Sj: 157,
            ke: 160,
            gA: 328,
            ed: 159
        }, mf = {
            lo: 161,
            mo: 162
        };
    var nf = function (a) {
        return {
            hi: function () {
                return a.hi()
            },
            Db: function () {
                return a.Db()
            },
            zb: function () {
                return a.zb()
            }
        }
    };
    (function () {
        function a(a) {
            for (var b = [], g = 0, f; f = a[g++];) b[D](f.api || {
                a: f.Zf,
                b: f.Za,
                c: f.Ed,
                d: f.J,
                e: f.Ee,
                f: f.Jp,
                g: f.Ip,
                i: f.Sg,
                j: f.ta,
                k: f.Bh,
                l: f.Hp
            });
            return b
        }

        function b(a) {
            for (var b = [], g = 0, f; f = a[g++];) f = f.api || f, b[D]({
                api: f,
                Zf: f.a,
                Za: f.b,
                Ed: f.c,
                J: f.d,
                Ee: f.e,
                Jp: f.f,
                Ip: f.g,
                Sg: f.i,
                ta: f.j,
                Bh: f.k,
                Hp: f.l
            });
            return b
        }
        Hd = function (a) {
            var b = {};
            if (a)
                for (var g = 0; g < a[H]; ++g) b[a[g]] = !0;
            return b
        };
        Id = function (b) {
            var e = a(b.zb());
            return b.api || {
                a: b.Db,
                b: function () {
                    return e
                },
                c: b.hi
            }
        };
        Jd = function (a) {
            a = a.api || a;
            var e = b(a.b());
            return {
                api: a,
                Db: a.a,
                zb: function () {
                    return e
                },
                hi: a.c
            }
        };
        Kd = function (a) {
            return a ? (a = a[od](), "zh-tw" == a || "zh-cn" == a || "ja" == a || "ko" == a) : !1
        };
        Ld = function () {
            return (new Date)[Ob]()
        };
        Md = function (a) {
            return "string" == typeof a
        };
        Nd = function (a) {
            return "number" == typeof a
        }
    })();
    var of = function () {
        return {
            kf: function () {
                return {
                    Ui: "hp",
                    Vi: "hp",
                    Rn: "google.com",
                    Mt: "",
                    Xd: "en",
                    Xl: "",
                    js: "",
                    Vr: "",
                    fo: 0,
                    ps: "",
                    Wi: "",
                    Vn: !1,
                    Lt: "",
                    Zj: "",
                    Yj: 0,
                    Qy: null,
                    Wn: !1,
                    Jy: !1,
                    $g: !1,
                    mf: Hd([19, 5, 0]),
                    uy: !1,
                    gs: !0,
                    ty: 10,
                    os: !0,
                    lm: !0,
                    ry: !1,
                    hs: !1,
                    hu: !1,
                    yl: !1,
                    Ay: !1,
                    vt: !1,
                    my: !0,
                    My: "en",
                    vi: !0,
                    Wq: !1,
                    jr: 500,
                    Ci: !1,
                    qh: !0,
                    $m: !0,
                    Tr: !1,
                    tm: "",
                    By: "//www.google.com/textinputassistant",
                    Cy: "",
                    Ey: 7,
                    vy: !1,
                    wy: !1,
                    ir: !1,
                    Zr: !0,
                    $r: !1,
                    Gl: !1,
                    $q: !1,
                    Zq: !1,
                    Lg: 1,
                    Yq: !0,
                    zi: !1,
                    Li: !1,
                    Cr: !1,
                    Hr: 10,
                    lj: !1,
                    py: 0,
                    xy: !1,
                    Ir: !0,
                    Xq: !1,
                    Of: p[Xc],
                    Ur: !0,
                    zm: null,
                    $d: {},
                    sy: {},
                    Fy: 0,
                    Dr: !1,
                    is: !0,
                    Ad: !1,
                    Ly: null,
                    Sr: !1,
                    Pt: null,
                    Zm: null,
                    Ps: !1,
                    bs: !0,
                    Br: !1,
                    Py: 1,
                    ny: 1,
                    spellcheck: !1,
                    Gr: !1,
                    es: "Search",
                    ij: "I'm  Feeling Lucky",
                    fs: "",
                    ds: "Learn more",
                    Iy: "Remove",
                    Gy: "This search was removed from your Web History",
                    yy: "",
                    qy: "Did you mean:",
                    Dy: "",
                    Ky: "",
                    Ny: "Search by voice",
                    Nl: !1,
                    Er: null,
                    Ml: 0,
                    Fr: 0,
                    Mi: "",
                    Dm: "",
                    zy: !1,
                    Cf: "absolute",
                    Yr: !1,
                    Is: !1,
                    Pl: null,
                    Ol: !0,
                    Oy: 0,
                    re: [0, 0, 0],
                    im: null,
                    Hl: null,
                    Hs: [0],
                    Cm: 0,
                    Hy: 1,
                    Di: "",
                    Wl: "",
                    Vl: "",
                    Ij: null,
                    Kj: "",
                    Jj: "",
                    oy: 1,
                    Pi: {},
                    Kr: !0
                }
            }
        }
    };
    var pf = /<\/?(?:b|em)>/gi,
        qf = {
            yt: 8,
            wf: 9,
            Sn: 13,
            Dh: 27,
            AA: 32,
            wt: 37,
            dn: 38,
            xt: 39,
            cn: 40,
            zt: 46,
            mA: 190
        };
    var rf = function () {
        function a(a, b, c) {
            f[a] = c;
            m[a] = [b]
        }

        function b(a, b, e) {
            var f = l[a];
            f ? f != c && (l[a] = c) : l[a] = e;
            (f = m[a]) ? f[D](b) : m[a] = [b];
            h[b] = e
        }
        var c = Od,
            e = 0,
            g = {}, f = {}, h = {}, l = {}, m = {}, n = 1E4;
        return {
            qz: function () {
                return e++
            },
            pz: function () {
                return n++
            },
            xq: a,
            rz: function (b, c) {
                var e = n++;
                a(b, e, c);
                return e
            },
            ia: b,
            sz: function (a, c) {
                var e = n++;
                b(a, e, c);
                return e
            },
            Ht: function () {
                return m
            },
            kf: function (a, b) {
                var e = g[a];
                return e ? e : (e = f[a]) ? g[a] = e() : b ? (e = h[b]) ? e() : null : (e = l[a]) && e != c ? e() : null
            }
        }
    }();
    var sf = function (a, b, c, e, g, f) {
        function h() {
            if (B) {
                for (var a = 0, b; b = A[a++];) b.ub && b.ub();
                B = !1
            }
        }

        function l(a) {
            for (var b in a) {
                var c = b,
                    e = a[c];
                if (e != y.lo)
                    if (C[c]) {
                        for (var f = F[c] || [], g = 0, h = void 0; g < e[H]; ++g)(h = m(c, e[g])) && f[D](h);
                        F[c] = f
                    } else(e = m(c, e)) && (G[c] = e)
            }
        }

        function m(a, b) {
            var c;
            if (b && b instanceof Object) c = b;
            else if (c = U.kf(a, b), !c) return null;
            if (c.tf) {
                var e = c.tf();
                if (e)
                    for (var f = 0, g, h, m; g = e[f++];) {
                        m = !1;
                        h = g.J();
                        if (C[h]) {
                            if (m = N[h]) {
                                m[D](g);
                                continue
                            }
                            m = !0
                        }
                        N[h] = m ? [g] : g
                    }
            }
            K[D]([c, a]);
            A[D](c);
            return c
        }

        function n(a) {
            for (var b =
                M.Yt, c = 0, e; e = K[c++];) e[0] == a && (b = e[1]);
            return b
        }

        function q(a, b) {
            var c = Pd(a.J(), E),
                e = Pd(b.J(), E);
            return 0 > c ? 1 : 0 > e ? -1 : c - e
        }
        var y = mf,
            u = M,
            C = Hd([u.ed, u.jo, u.Rf, u.Cd, u.Pg, u.fh, u[Hc], u.sc, u.gh, u.oe, u.dk, u.en, u.ke]),
            z = [u.gf, u.hb, u.Fa, u.Yd, u.Uc, u.gc, u.Vc, u.Nf, u.Zc, u.Bf, u.Qc, u.oh, u.Ub, u.le, u.hh, u.qe, u.Fb, u.fn, u.of],
            E = [u.qe, u.Rf, u.Vt, u.Ub, u.Qc, u.gc, u.Fa, u.Vc, u.Fb, u.ke, u.ce, u.Yd, u.Nf, u[Hc], u.Cd, u.of, u.Zc, u.Uc, u.le, u.dk, u.jo, u.Tt, u.Rd, u.Bf, u.dm, u.em, u.dj, u.fm, u.Wt, u.gm, u.Xt, u.ef, u.Ut, u.cm, u.cj],
            G = {}, F = {}, N = {},
            K = [],
            A = [],
            B = !1,
            U = rf,
            aa = {
                Y: function (a) {
                    h();
                    for (var b = 0, c; c = A[b++];) c.Y && c.Y(a);
                    B = !0
                },
                ub: h,
                Ul: function () {
                    return B
                },
                get: function (a, b) {
                    var c = G[a];
                    if (c) return c.R ? c.R(n(b)) : {}
                },
                tb: function (a, b) {
                    var c = F[a];
                    if (c) {
                        for (var e = [], f = n(b), g = 0, h; h = c[g++];) e[D](h.R ? h.R(f) : {});
                        return e
                    }
                    return []
                },
                Pd: function () {
                    return a
                },
                Dg: function () {
                    return g
                },
                Un: function (a, b) {
                    var c = F[u.ed];
                    if (c)
                        for (var e = 0, f; f = c[e++];)
                            if (f.S() == a) return f.R ? f.R(n(b)) : {};
                    return null
                }
            };
        (function () {
            if (f.Kr) {
                var g = U.Ht(),
                    h, n, u, E;
                for (E in g) {
                    var K = E;
                    h = g[K];
                    n = C[K];
                    if (u = b[K]) {
                        if (u != y.lo && n && u[H]) {
                            n = b;
                            u = u.slice(0);
                            for (var F = [], na = {}, pa = 0, ca = void 0, va = void 0; va = u[pa++];) va instanceof Object && (ca = va.S(), na[ca] || (F[D](va), na[ca] = 1), u[md](--pa, 1));
                            pa = Hd(u);
                            pa[y.mo] && (pa = Hd(u[rb](h)), delete pa[y.mo]);
                            for (ca in pa) na[ca] || F[D](sa(ca, 10));
                            n[K] = F
                        }
                    } else b[K] = n ? h : h[0]
                }
            }
            l(b);
            for (g = 0; E = z[g++];) b[E] || (n = m(E, void 0)) && (G[E] = n);
            l(N);
            A[ed](q);
            for (g = 0; E = A[g++];) E.Sa && E.Sa(c, e);
            a.Xj(e, c.Hg());
            e.Zt();
            for (g = 0; E = A[g++];) E.ca && E.ca(aa);
            for (g = 0; E = A[g++];) E.ib && E.ib(f);
            for (g = 0; E = A[g++];) E.Y && E.Y(f);
            B = !0
        })();
        return aa
    };
    var tf = function (a, b, c) {
        function e() {
            return a
        }

        function g() {
            return z
        }

        function f() {
            return E
        }

        function h() {
            return b
        }

        function l() {
            return c || ""
        }

        function m(a, b) {
            u(a, b)
        }

        function n(a, b) {
            u(a, b, !0)
        }

        function q() {
            A || (B = U = !0)
        }

        function y() {
            Q = !0
        }

        function u(a, b, c) {
            A || (B = !0, G[a] = b, c && (F[a] = b))
        }
        var C = Ud(),
            z, E, G = {}, F = {}, N, K, A = !1,
            B = !1,
            U = !1,
            aa = !1,
            Q = !1,
            ia = {
                jb: function () {
                    return C
                },
                Yn: function () {
                    var a = sa(C, 36);
                    return la(a) ? -1 : a
                },
                Db: e,
                wo: g,
                Gd: f,
                cf: h,
                ta: function () {
                    return G
                },
                Co: function () {
                    return N
                },
                Uh: l,
                ck: function () {
                    return K
                },
                Il: function () {
                    return {
                        Db: e,
                        wo: g,
                        Gd: f,
                        cf: h,
                        Uh: l,
                        setParameter: m,
                        Gh: n,
                        ow: q,
                        nw: y
                    }
                },
                setParameter: m,
                Gh: n,
                ow: q,
                nw: y,
                Gt: function () {
                    return U
                },
                Ft: function () {
                    B = aa = !0
                },
                cs: function (e, f, g) {
                    return !B && a == e && b.Sv(f) && c == g
                },
                $n: function () {
                    return aa
                },
                Do: function () {
                    return Q
                },
                Et: function () {
                    A || (K = Ld(), "cp" in F || n("cp", b.Og()), u("gs_id", C), N = Sd(F) + ":" + a, B = A = !0)
                }
            };
        z = a[od]();
        E = Td(z);
        return ia
    };
    var vf = function (a, b, c, e, g, f) {
        function h() {
            return !!b && !! b[0]
        }
        var l, m = !0,
            n, q = {
                Fc: function () {
                    return a
                },
                Db: function () {
                    return a.Db()
                },
                xi: function () {
                    return h() ? b[0] : null
                },
                zb: function () {
                    return b
                },
                Pc: h,
                ta: function () {
                    return c
                },
                Vj: function () {
                    return e
                },
                Ph: function () {
                    return g
                },
                Vu: function () {
                    return f
                },
                J: function () {
                    return m
                },
                Qn: function () {
                    n || (n = nf(q));
                    return n
                },
                hi: function () {
                    return l
                }
            };
        b ? b[H] && 33 == b[0].J() && (g = m = !1) : b = [];
        c ? l = c.cw("t") : c = uf;
        return q
    };
    var wf = function (a, b, c, e, g, f) {
        function h(a) {
            if (g)
                for (var b = 0, c; c = a[b++];)
                    if (-1 != Pd(c, g)) return !0;
            return !1
        }
        var l = !1,
            m = {
                Zf: function () {
                    return a
                },
                Za: function () {
                    return b
                },
                Ed: function () {
                    return c
                },
                J: function () {
                    return e
                },
                Bh: function () {
                    return f.Ya("za")
                },
                Hp: function () {
                    return f.Ya("zb")
                },
                Ee: function () {
                    return g || []
                },
                Jp: function (a) {
                    return !!g && h([a])
                },
                Ip: h,
                ta: function () {
                    return f
                },
                Sg: function () {
                    return l
                }
            };
        switch (e) {
        case 0:
        case 32:
        case 38:
        case 39:
        case 400:
        case 407:
        case 35:
        case 33:
        case 41:
        case 34:
        case 44:
        case 45:
        case 40:
        case 46:
        case 56:
        case 30:
            l = !0
        }
        f || (f = uf);
        return m
    };
    (function () {
        var a = /\s/g,
            b = /\u3000/g,
            c = /^\s/,
            e = /\s+/,
            g = /\s+/g,
            f = /^\s+|\s+$/g,
            h = /^\s+$/,
            l = /<[^>]*>/g,
            m = /&nbsp;/g,
            n = /&#x3000;/g,
            q = [/&/g, /&amp;/g, /</g, /&lt;/g, />/g, /&gt;/g, /"/g, /&quot;/g, /'/g, /&#39;/g, /{/g, /&#123;/g],
            y = p[Pb]("head")[0],
            u = 0;
        Wd = function (a, b) {
            void 0 === b && (b = a);
            var c = function () {
                return b
            };
            return {
                Og: c,
                Hm: function () {
                    return a
                },
                fw: c,
                mz: function () {
                    return a < b
                },
                Sv: function (c) {
                    return c && a == c.Hm() && b == c.fw()
                }
            }
        };
        Vd = function (a, b, c, e) {
            if (null == b || "" === b) {
                if (!e) return;
                b = ""
            }
            c[D](a + "=" + d(ua(b)))
        };
        Sd = function (a) {
            var b = [],
                c;
            for (c in a) Vd(c, a[c], b);
            return b[nd]("&")
        };
        Xd = function (a) {
            return !!a && !h[sc](a)
        };
        Yd = function (a) {
            for (var b = q[H], c = 0; c < b; c += 2) a = a[t](q[c], q[c + 1].source);
            return a
        };
        Zd = function (a) {
            for (var b = q[H], c = 0; c < b; c += 2) a = a[t](q[c + 1], q[c].source);
            a = a[t](m, " ");
            return a[t](n, "\u3000")
        };
        $d = function (a) {
            return a[t](pf, "")
        };
        ae = function (a) {
            return a[t](l, "")
        };
        be = function (c) {
            return c && (-1 < c[Jc](" ") || e[sc](c)) ? (c = c[t](b, "&#x3000;"), c[t](a, "&nbsp;")) : c
        };
        Td = function (a, b) {
            return a && (-1 < a[Jc](" ") || e[sc](a)) ? (a = a[t](g, " "),
                a[t](b ? f : c, "")) : a
        };
        ce = function (a, b, c) {
            c && (a = a[od](), b = b[od]());
            return b[H] <= a[H] && a[hd](0, b[H]) == b
        };
        de = function (a, b) {
            return a || b ? !! a && !! b && a[od]() == b[od]() : !0
        };
        ee = function (a) {
            k[lb](a)
        };
        Od = function () {};
        fe = function () {
            return y
        };
        Ud = function () {
            return (u++).toString(36)
        };
        ge = function (a) {
            return bf[sc](a)
        };
        he = function (a, b) {
            return wf(a.Zf(), a.Za(), b, a.J(), a.Ee(), a.ta())
        };
        Pd = function (a, b) {
            if (b[Jc]) return b[Jc](a);
            for (var c = 0, e = b[H]; c < e; ++c)
                if (b[c] === a) return c;
            return -1
        };
        ie = function (a, b) {
            return a.Va() - b.Va()
        };
        je = function (a, b) {
            return b.Va() - a.Va()
        };
        ke = function (a) {
            var b = {}, c;
            for (c in a) b[c] = a[c];
            return b
        };
        le = function (a, b, c) {
            b in a || (a[b] = [162]);
            a[b][D](c)
        }
    })();
    var xf = function (a) {
        return {
            contains: function (b) {
                return b in a
            },
            zv: function (b) {
                return !!a[b]
            },
            gn: function (b) {
                return a[b] || 0
            },
            Ya: function (b) {
                return a[b] || ""
            },
            cw: function (b) {
                return a[b] || null
            }
        }
    }, uf = xf({});
    (function () {
        function a(a, b, c) {
            a = p[yb](a);
            b && r(a, b);
            c && (a.id = c);
            return a
        }

        function b(b) {
            return a("div", b)
        }

        function c(a, b) {
            var c = a[Pb]("input");
            if (c)
                for (var e = 0, f; f = c[e++];)
                    if (f[Qc] == b && "submit" != f[Nc][od]()) return f;
            return null
        }

        function e(a) {
            a && (a.preventDefault && a.preventDefault(), a.returnValue = !1);
            return !1
        }

        function g(a) {
            return a ? a.ownerDocument || a[Wc] : k[Wc]
        }

        function f(a) {
            return a ? (a = g(a), a[Oc] || a.parentWindow) : k
        }
        var h = void 0 != p.documentElement[v].opacity,
            l = {
                rtl: "right",
                ltr: "left"
            };
        re = function (a, b) {
            try {
                if (a.setSelectionRange) a.setSelectionRange(b,
                    b);
                else if (a.createTextRange) {
                    var c = a.createTextRange();
                    c.collapse(!0);
                    c.moveStart("character", b);
                    c[Bb]()
                }
            } catch (e) {}
        };
        se = function (a) {
            try {
                var b, c;
                if ("selectionStart" in a) b = a.selectionStart, c = a.selectionEnd;
                else {
                    var e = a.createTextRange(),
                        f = g(a).selection.createRange();
                    e.inRange(f) && (e.setEndPoint("EndToStart", f), b = e[xc][H], e.setEndPoint("EndToEnd", f), c = e[xc][H])
                } if (void 0 !== b) return Wd(b, c)
            } catch (h) {}
            return null
        };
        te = function (a, b) {
            for (var c = 0, e = 0; a && (!b || a != b);) {
                c += a.offsetTop;
                e += a.offsetLeft;
                try {
                    a =
                        a.offsetParent
                } catch (f) {
                    a = null
                }
            }
            return {
                pk: c,
                Jd: e
            }
        };
        ue = function (a) {
            try {
                return g(a).activeElement == a
            } catch (b) {}
            return !1
        };
        ve = function (a) {
            return 38 == a || 40 == a
        };
        oe = a;
        we = function () {
            var b = a("table");
            b.cellPadding = b.cellSpacing = 0;
            Da(b[v], "100%");
            return b
        };
        xe = b;
        ye = function (a, c) {
            var e = b(a),
                f = e[v];
            f.background = "transparent";
            f.color = "#000";
            Ea(f, 0);
            f.position = "absolute";
            c && (f.zIndex = c);
            f.whiteSpace = "pre";
            return e
        };
        ze = function (a, b) {
            a[Fc] != b && (b && (me ? b = be(b) : ne && (b = '<pre style="font:inherit;margin:0">' + b + "</pre>")),
                Va(a, b))
        };
        Ae = function (a, b, c) {
            var e = a[v];
            "INPUT" != a.nodeName && (c += 1);
            Xa(e, e.right = "");
            e[b] = c + "px"
        };
        Be = function (a) {
            return "rtl" == a ? "right" : "left"
        };
        Ce = function (a, b) {
            a.dir != b && (a.dir = b, a[v].textAlign = l[b])
        };
        De = function (b, e, f) {
            if (c(b, e)) return null;
            var g = a("input");
            Ya(g, "hidden");
            g.name = e;
            f && Wa(g, f);
            return b[s](g)
        };
        Ee = c;
        He = function (a) {
            var b = p.createEvent("KeyboardEvent");
            b.initKeyEvent && (b.initKeyEvent("keypress", !0, !0, null, !1, !1, !0, !1, 27, 0), a.dispatchEvent(b))
        };
        Ie = e;
        Je = function (a) {
            if (a = a || k[pd]) a[Vb] &&
                a[Vb](), Ha(a, a.cancel = !0);
            return e(a)
        };
        Ke = function (a, b) {
            b[kd][vb](a, b[Nb])
        };
        Le = function (a) {
            a = a[Rc](-1);
            var b = oe("a");
            Oa(b, "#ifl");
            r(b, "gssb_j gss_ifl");
            a[s](b);
            return b
        };
        Me = function (a, b) {
            var c = f(a);
            return (c = c[ac] ? c[ac](a, "") : a[gd]) ? c[b] : null
        };
        Ne = function (a) {
            var b = a || k;
            a = b[Wc];
            var c = b.innerWidth,
                b = b.innerHeight;
            if (!c) {
                var e = a.documentElement;
                e && (c = e[Uc], b = e.clientHeight);
                c || (c = a[Xc][Uc], b = a[Xc].clientHeight)
            }
            return {
                bo: c,
                Zn: b
            }
        };
        Oe = function (a) {
            return (a || k)[Wc].documentElement[Uc]
        };
        Pe = function (a) {
            a = a[v];
            a.border = "none";
            Ea(a, pe || qe ? "0 1px" : "0");
            a.margin = "0";
            Sa(a, "auto");
            Da(a, "100%")
        };
        Qe = function (a) {
            return (h ? "opacity" : "filter") + ":" + (h ? a + "" : (me ? "progid:DXImageTransform.Microsoft.Alpha(" : "alpha(") + "opacity=" + ma[nb](100 * a) + ")") + ";"
        };
        Re = function (a) {
            var b = {};
            if (a)
                for (var c = 0, e; e = a[c++];) b[e.bg()] = e;
            return b
        };
        Se = g;
        Te = f;
        Ue = function (a) {
            pe && (a.tabIndex = 0)
        }
    })();
    rf.xq(M.jk, 192, function () {
        function a(a) {
            Md(a) && (a = e(a));
            var b = "";
            if (a) {
                for (var c = a[H], f = 0, g = 0, h = 0; c--;)
                    for (g <<= 8, g |= a[h++], f += 8; 6 <= f;) var l = g >> f - 6 & 63,
                b = b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_" [sb](l), f = f - 6;
                f && (l = g << 8 >> f + 8 - 6 & 63, b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_" [sb](l))
            }
            return b
        }

        function b(a) {
            var b = [];
            if (a)
                for (var c = 0, e = 0, f = 0; f < a[H]; ++f) {
                    var g = a[dd](f);
                    if (32 > g || 127 < g || !m[g - 32]) return [];
                    c <<= 6;
                    c |= m[g - 32] - 1;
                    e += 6;
                    8 <= e && (b[D](c >> e - 8 & 255), e -=
                        8)
                }
            return b
        }

        function c(a, b) {
            var c = {};
            c.fb = oa(4);
            c.buffer = oa(4);
            c.bw = oa(4);
            Ea(c, oa(64));
            c.padding[0] = 128;
            for (var n = 1; 64 > n; ++n) c.padding[n] = 0;
            g(c);
            var n = oa(64),
                m;
            64 < b[H] ? (g(c), h(c, b), m = l(c)) : m = b;
            for (var q = 0; q < m[H]; ++q) n[q] = m[q] ^ 92;
            for (q = m[H]; 64 > q; ++q) n[q] = 92;
            g(c);
            for (q = 0; 64 > q; ++q) c[Xb][q] = n[q] ^ 106;
            f(c, c[Xb]);
            Ma(c, 64);
            h(c, e(a));
            m = l(c);
            g(c);
            f(c, n);
            Ma(c, 64);
            h(c, m);
            return l(c)
        }

        function e(a) {
            for (var b = [], c = 0, e = 0; e < a[H]; ++e) {
                var f = a[dd](e);
                128 > f ? b[c++] = f : (2048 > f ? b[c++] = f >> 6 | 192 : (b[c++] = f >> 12 | 224, b[c++] = f >>
                    6 & 63 | 128), b[c++] = f & 63 | 128)
            }
            return b
        }

        function g(a) {
            a.fb[0] = 1732584193;
            a.fb[1] = 4023233417;
            a.fb[2] = 2562383102;
            a.fb[3] = 271733878;
            a.ji = Ma(a, 0)
        }

        function f(a, b) {
            for (var c = a.bw, e = 0; 64 > e; e += 4) c[e / 4] = b[e] | b[e + 1] << 8 | b[e + 2] << 16 | b[e + 3] << 24;
            for (var e = a.fb[0], f = a.fb[1], g = a.fb[2], h = a.fb[3], l, m, A, B = 0; 64 > B; ++B) 16 > B ? (l = h ^ f & (g ^ h), m = B) : 32 > B ? (l = g ^ h & (f ^ g), m = 5 * B + 1 & 15) : 48 > B ? (l = f ^ g ^ h, m = 3 * B + 5 & 15) : (l = g ^ (f | ~h), m = 7 * B & 15), A = h, h = g, g = f, f = f + (((e + l + q[B] + c[m] & 4294967295) << n[B] | (e + l + q[B] + c[m] & 4294967295) >>> 32 - n[B]) & 4294967295) & 4294967295,
            e = A;
            a.fb[0] = a.fb[0] + e & 4294967295;
            a.fb[1] = a.fb[1] + f & 4294967295;
            a.fb[2] = a.fb[2] + g & 4294967295;
            a.fb[3] = a.fb[3] + h & 4294967295
        }

        function h(a, b, c) {
            c || (c = b[H]);
            Ma(a, a.total + c);
            for (var e = 0; e < c; ++e) a[Xb][a.ji++] = b[e], 64 == a.ji && (f(a, a[Xb]), a.ji = 0)
        }

        function l(a) {
            var b = oa(16),
                c = 8 * a.total,
                e = a.ji;
            h(a, a.padding, 56 > e ? 56 - e : 64 - (e - 56));
            for (var g = 56; 64 > g; ++g) a[Xb][g] = c & 255, c >>>= 8;
            f(a, a[Xb]);
            for (g = e = 0; 4 > g; ++g)
                for (c = 0; 32 > c; c += 8) b[e++] = a.fb[g] >> c & 255;
            return b
        }
        var m = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 53, 54, 55, 56, 57, 58, 59, 60,
            61, 62, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 0, 0, 0, 0, 64, 0, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 0, 0, 0, 0, 0
        ],
            n = [7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21],
            q = [3614090360, 3905402710, 606105819, 3250441966, 4118548399, 1200080426, 2821735955, 4249261313, 1770035416, 2336552879, 4294925233, 2304563134,
                1804603682, 4254626195, 2792965006, 1236535329, 4129170786, 3225465664, 643717713, 3921069994, 3593408605, 38016083, 3634488961, 3889429448, 568446438, 3275163606, 4107603335, 1163531501, 2850285829, 4243563512, 1735328473, 2368359562, 4294588738, 2272392833, 1839030562, 4259657740, 2763975236, 1272893353, 4139469664, 3200236656, 681279174, 3936430074, 3572445317, 76029189, 3654602809, 3873151461, 530742520, 3299628645, 4096336452, 1126891415, 2878612391, 4237533241, 1700485571, 2399980690, 4293915773, 2240044497, 1873313359, 4264355552, 2734768916,
                1309151649, 4149444226, 3174756917, 718787259, 3951481745
            ];
        return {
            J: function () {
                return M.jk
            },
            S: function () {
                return 192
            },
            R: function () {
                return {
                    pu: a,
                    ou: b,
                    qu: c
                }
            }
        }
    });
    rf.xq(M.Rh, 95, function () {
        function a(a, c) {
            c = Yd($d(c));
            a = Yd(Td(a, !0));
            if (ce(c, a)) return a + "<b>" + c[Qb](a[H]) + "</b>";
            for (var e = "", g = [], f = c[H] - 1, h = 0, l = -1, m; m = c[sb](h); ++h) " " == m || "\t" == m ? e[H] && (g[D]({
                Op: e,
                ug: l,
                tg: h + 1
            }), e = "", l = -1) : (e += m, -1 == l ? l = h : h == f && g[D]({
                Op: e,
                ug: l,
                tg: h + 1
            }));
            e = a[Ub](/\s+/);
            h = {};
            for (f = 0; l = e[f++];) h[l] = 1;
            m = -1;
            for (var e = [], n = g[H] - 1, f = 0; l = g[f]; ++f) h[l.Op] ? (l = -1 == m, f == n ? e[D]({
                ug: l ? f : m,
                tg: f
            }) : l && (m = f)) : -1 < m && (e[D]({
                ug: m,
                tg: f - 1
            }), m = -1);
            if (!e[H]) return "<b>" + c + "</b>";
            f = "";
            for (h = l = 0; m = e[h]; ++h)(n =
                g[m.ug].ug) && (f += "<b>" + c[hd](l, n - 1) + "</b> "), l = g[m.tg].tg, f += c[hd](n, l);
            l < c[H] && (f += "<b>" + c[hd](l) + "</b> ");
            return f
        }
        return {
            J: function () {
                return M.Rh
            },
            S: function () {
                return 95
            },
            R: function () {
                return {
                    bold: a
                }
            }
        }
    });
    rf.ia(M.Rp, 12, function () {
        function a(a) {
            a = b(a, y, c);
            a = b(a, u, e);
            return b(a, z, g)
        }

        function b(a, b, c) {
            for (var e, f = "", g = 0; null != (e = b.exec(a));) g < e.index && (f += a[hd](g, e.index)), f += c(e[0]), g = b.lastIndex;
            if (!f) return a;
            g < a[H] && (f += a[hd](g));
            return f
        }

        function c(a) {
            return ua.fromCharCode(a[dd](0) - 65248)
        }

        function e(a) {
            var b = a[dd](0);
            return 1 == a[H] ? h[sb](b - 65377) : 65438 == a[dd](1) ? l[sb](b - 65395) : m[sb](b - 65418)
        }

        function g(a) {
            var b = a[dd](0);
            return 12443 == a[dd](1) ? n[sb](b - 12454) : q[sb](b - 12495)
        }

        function f(a) {
            return eval('"\\u30' +
                a[Ub](",")[nd]("\\u30") + '"')
        }
        var h = f("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C"),
            l = f("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC"),
            m = f("D1,D4,D7,DA,DD"),
            n = f("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC"),
            q = f("D1__,D4__,D7__,DA__,DD"),
            y = /[\uFF01-\uFF5E]/g,
            u = Aa("([\uff73\uff76-\uff84\uff8a-\uff8e]\uff9e)|([\uff8a-\uff8e]\uff9f)|([\uff61-\uff9f])",
                "g"),
            C = "([" + f("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB") + "]\u309b)|([" + f("CF,D2,D5,D8,DB") + "]\u309c)",
            z = Aa(C, "g");
        return {
            J: function () {
                return M.Rp
            },
            S: function () {
                return 12
            },
            R: function () {
                return {
                    lz: a
                }
            }
        }
    });
    var yf = function (a, b, c, e, g) {
        var f = Ve ? "-moz-" : qe ? "-ms-" : pe ? "-o-" : We ? "-webkit-" : "",
            h = ".gstl_" + e,
            l = Aa("(\\.(" + g[nd]("|") + ")\\b)"),
            m = [];
        return {
            addRule: function (a, e) {
                if (b) {
                    if (c) {
                        for (var f = a[Ub](","), g = [], C = 0, z; z = f[C++];) z = l[sc](z) ? z[t](l, h + "$1") : h + " " + z, g[D](z);
                        a = g[nd](",")
                    }
                    m[D](a, "{", e, "}")
                }
            },
            Zt: function () {
                if (b && m[H]) {
                    b = !1;
                    var c = oe("style");
                    c[Cb]("type", "text/css");
                    (a || fe())[s](c);
                    var e = m[nd]("");
                    m = null;
                    c[vc] ? c[vc].cssText = e : c[s](p[tb](e))
                }
            },
            prefix: function (a, b) {
                var c = a + (b || "");
                f && (c += b ? a + f + b : f + a);
                return c
            }
        }
    };
    rf.ia(M.Bf, 10, function () {
        function a(a) {
            var b = 0;
            a && (h || c(), e(), a in l ? b = l[a] : (ze(h, Yd(a)), l[a] = b = h[qb], ze(h, "")));
            return b
        }

        function b() {
            h || c();
            e();
            m || (ze(h, "|"), m = h[rc]);
            return m
        }

        function c() {
            h = ye(g.Mi);
            bb(h[v], "hidden");
            f[s](h)
        }

        function e() {
            var a = Ld();
            if (!q || q + 3E3 < a) q = a, a = Me(h, "fontSize"), n && a == n || (l = {}, m = null, n = a)
        }
        var g, f, h, l, m, n, q;
        return {
            Sa: function (a) {
                f = a.Im() || p[Xc]
            },
            ib: function (a) {
                g = a
            },
            J: function () {
                return M.Bf
            },
            S: function () {
                return 10
            },
            R: function () {
                return {
                    Wd: a,
                    Wc: b
                }
            }
        }
    });
    var zf = function (a) {
        var b;
        (function () {
            var c = function () {};
            a || (a = {});
            var e = function (b) {
                return a[b] || c
            };
            b = {
                Uj: e("a"),
                search: e("b"),
                Ge: e("c"),
                Nh: e("d"),
                Mh: e("e"),
                ph: e("f"),
                tj: e("g"),
                uj: e("h"),
                pj: e("i"),
                ok: e("j"),
                Ah: e("k"),
                $j: e("l"),
                sj: e("m"),
                bq: e("n"),
                Cj: e("o"),
                Dj: e("p"),
                Lh: e("q"),
                Xj: e("r"),
                Zp: e("s"),
                $p: e("t"),
                rj: e("u"),
                Ej: e("w"),
                mj: e("x"),
                qj: e("y"),
                oj: e("z"),
                nj: e("aa"),
                vj: e("ab"),
                ek: e("ac")
            }
        })();
        return {
            Uj: function () {
                return b.Uj()
            },
            search: function (a, e) {
                b[w](a, e)
            },
            Ge: function (a) {
                b.Ge(a)
            },
            Nh: function (a) {
                b.Nh(a)
            },
            Mh: function (a) {
                return b.Mh(a)
            },
            ph: function (a) {
                b.ph(a)
            },
            tj: function (a) {
                b.tj(a)
            },
            uj: function (a) {
                b.uj(a)
            },
            pj: function (a) {
                b.pj(a)
            },
            ok: function (a, e) {
                b.ok(a, e)
            },
            Ah: function (a, e) {
                b.Ah(a, e)
            },
            $j: function () {
                b.$j()
            },
            sj: function (a) {
                b.sj(a)
            },
            bq: function (a) {
                b.bq(a)
            },
            Cj: function () {
                b.Cj()
            },
            Dj: function () {
                b.Dj()
            },
            Lh: function (a) {
                b.Lh(a)
            },
            Xj: function (a, e) {
                b.Xj(a, e)
            },
            Zp: function (a) {
                b.Zp(a)
            },
            $p: function () {
                b.$p()
            },
            rj: function () {
                b.rj()
            },
            qj: function () {
                b.qj()
            },
            Ej: function (a) {
                b.Ej(a)
            },
            mj: function () {
                b.mj()
            },
            oj: function () {
                b.oj()
            },
            nj: function () {
                b.nj()
            },
            vj: function () {
                b.vj()
            },
            ek: function (a, e) {
                return b.ek(a, e)
            }
        }
    };
    rf.ia(M.Rf, 6, function () {
        function a(a, b, c, e) {
            var f = a.jb(),
                h = a.Db();
            E.Vn || g();
            b = q + y + u + "?" + (C ? C + "&" : "") + (b ? b + "&" : "");
            var m = Vd;
            a = [];
            m("q", h, a, !0);
            E.Wn || m("callback", "google.sbox.p" + n, a);
            if (z) {
                for (var h = "", N = 4 + ma[nb](32 * ma[fc]()), fa = 0, V; fa < N; ++fa) V = 0.3 > ma[fc]() ? 48 + ma[nb](10 * ma[fc]()) : (0.5 < ma[fc]() ? 65 : 97) + ma[nb](26 * ma[fc]()), h += ua.fromCharCode(V);
                m("gs_gbg", h, a)
            }
            m = oe("script");
            m.src = b + a[nd]("&");
            m.charset = "utf-8";
            G[f] = m;
            F = E.Vn ? e : c;
            l[s](m);
            return !0
        }

        function b() {
            return 0
        }

        function c() {
            return 0
        }

        function e(a) {
            var b =
                G[a];
            b && (l[Zc](b), delete G[a])
        }

        function g() {
            for (var a in G) l[Zc](G[a]);
            G = {};
            F = null
        }

        function f(a) {
            F && F(a)
        }

        function h(a) {
            a || (a = Od);
            var b = k.google;
            E.Wn ? b.ac.h = a : b.sbox["p" + n] = a
        }
        var l = fe(),
            m, n, q, y, u, C, z, E, G = {}, F, N = {
                ca: function (a) {
                    m = a.get(M.qe, N);
                    n = a.Dg().jb()
                },
                Y: function (a) {
                    E = a;
                    0 == a.Yj && (a = m.Yu(), q = a[gc], y = a.host, u = a.Zj, C = a.Zu, z = "https:" == p[Yb][gc], h(f), (new Image).src = q + y + "/generate_204")
                },
                J: function () {
                    return M.Rf
                },
                S: function () {
                    return 6
                },
                R: function () {
                    return {
                        Kt: a,
                        Jt: e,
                        Ug: Od,
                        Oo: b,
                        co: c
                    }
                },
                ub: function () {
                    h(null);
                    g()
                }
            };
        return N
    });
    rf.ia(M.gf, 1, function () {
        function a(a) {
            if (!l) return !0;
            for (var b = !1, c = !1, f = 0, h; f < a[H]; ++f)
                if (h = a[sb](f), !e[sc](h) && (g[sc](h) ? c = !0 : b = !0, c && b)) return !0;
            return !1
        }

        function b(a, b, c) {
            if (!l) return !0;
            var g = f[sc](c),
                m = h[sc](b);
            return "ltr" == a ? g || m || e[sc](c) || e[sc](b) : !g || !m
        }

        function c(a) {
            var b = m;
            l && (g[sc](a) ? b = "ltr" : e[sc](a) || (b = "rtl"));
            return b
        }
        var e = Aa("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),
            g = Aa("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])"),
            f = Aa("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])"),
            h = Aa("(?:\\d|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),
            l = g[sc]("x"),
            m;
        return {
            Sa: function (a) {
                m = a.Zd()
            },
            J: function () {
                return M.gf
            },
            S: function () {
                return 1
            },
            R: function () {
                return {
                    Rs: a,
                    qs: b,
                    Ki: c
                }
            }
        }
    });
    rf.ia(M.hb, 2, function () {
        function a(a, b, c, e, f) {
            var g = q(a);
            g || (g = {}, z[D]({
                element: a,
                Dv: g
            }));
            var h = g[b];
            h || (h = g[b] = [], g = a.Bv ? k : Te(a), g = n(b, g, h), Md(b) ? a[Mc] ? a[Mc](b, g, !1) : a["on" + b] = g : a[b] = g);
            h[D]({
                Fv: !! f,
                zk: !1,
                pp: e || 0,
                Be: c
            });
            h[ed](u);
            c.Cv = b
        }

        function b(a, b) {
            var c = q(a);
            if (c && (c = c[b.Cv]))
                for (var e = 0, f; f = c[e++];)
                    if (f.Be == b) {
                        f.zk = !0;
                        break
                    }
        }

        function c(b, c, e, f) {
            a(E, b, c, e, f)
        }

        function e(a) {
            b(E, a)
        }

        function g(a, b) {
            var c = b || {}, e = E[a];
            e && e(c, c.vf)
        }

        function f(a, b, c) {
            a[Mc] ? a[Mc](b, c, !1) : a[Mb]("on" + b, c)
        }

        function h(a,
            b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent("on" + b, c)
        }

        function l(a) {
            if (C) G || (G = [], f(k, "message", m)), G[D](a), a = k[Yb][ic], k.postMessage("sbox.df", /HTTPS?:\/\//i [sc](a) ? a : "*");
            else k[Tb](a, 0)
        }

        function m(a) {
            G && a && a.source == k && "sbox.df" == a.data && G[H] && (G.shift()(), G && G[H] && k.postMessage("sbox.df", k[Yb][ic]))
        }

        function n(a, b, c) {
            return function (e, f) {
                if (c[H]) {
                    var g;
                    if (!(g = e)) {
                        g = {};
                        var h = b[pd];
                        h && (h[zb] && (g.keyCode = h[zb]), g.Ev = !0)
                    }
                    g.vf = f || a;
                    for (var h = g, l, m, n = 0, q; q = c[n++];) q.zk ? m = !0 : l || (q.Fv ? y(q, h) : l = q.Be(h));
                    if (m)
                        for (n = 0; q = c[n];) q.zk ? c[md](n, 1) : ++n;
                    if (g.Eh) return delete g.Eh, g.Ev && (g = b[pd] || g), Je(g), g.returnValue = !1
                }
            }
        }

        function q(a) {
            for (var b = 0, c; b < z[H]; ++b)
                if (c = z[b], c[J] == a) return c.Dv;
            return null
        }

        function y(a, b) {
            l(function () {
                a.Be(b)
            })
        }

        function u(a, b) {
            return b.pp - a.pp
        }
        var C = k.postMessage && !(qe || Xe || pe),
            z = [],
            E = {
                Bv: 1
            }, G;
        return {
            J: function () {
                return M.hb
            },
            S: function () {
                return 2
            },
            R: function () {
                return {
                    ob: a,
                    Wj: b,
                    Ib: c,
                    Vy: e,
                    lb: g,
                    uf: f,
                    Uy: h,
                    defer: l
                }
            },
            ub: function () {
                G = null
            }
        }
    });
    rf.ia(M.Lf, 495, function () {
        function a(a) {
            h[a.jb()] = !0
        }

        function b(a) {
            var b = a.Fc();
            a = b.jb();
            a in h && (b = b.ck(), b = Ld() - b, m += b, ++l, delete h[a])
        }

        function c() {
            var a = 0,
                b;
            for (b in h) a++;
            return a
        }

        function e() {
            return l
        }

        function g() {
            return m
        }

        function f() {
            h = {};
            m = l = 0
        }
        var h, l, m;
        return {
            Y: function () {
                f()
            },
            J: function () {
                return M.Lf
            },
            S: function () {
                return 495
            },
            R: function () {
                return {
                    St: a,
                    Cu: b,
                    lu: c,
                    mu: e,
                    nu: g,
                    reset: f
                }
            }
        }
    });
    rf.ia(M.Uc, 375, function () {
        function a(a) {
            g[a] = !0;
            f = a
        }

        function b() {
            var a = [],
                b;
            for (b in g) a[D](sa(b, 10));
            return a
        }

        function c() {
            return f
        }

        function e() {
            g = {};
            f = null
        }
        var g, f;
        return {
            Y: function () {
                e()
            },
            J: function () {
                return M.Uc
            },
            S: function () {
                return 375
            },
            R: function () {
                return {
                    add: a,
                    wu: b,
                    lt: c,
                    reset: e
                }
            }
        }
    });
    rf.ia(M.Zc, 9, function () {
        function a(a) {
            var b = q.ic(),
                c;
            c = [];
            c[27] = 25;
            c[0] = e(G.Ui);
            c[28] = e(G.Vi);
            c[1] = void 0 == a ? "" : a + "";
            c[26] = y.wu()[nd]("j");
            a = "";
            C.Rj() ? a = "o" : z.Td() && (a = z.ms() + "");
            c[2] = a;
            a = "";
            var h = z.zb();
            if (h) {
                for (var A, Y = 0, fa = 0, V; V = h[fa++];) {
                    var ha = V;
                    V = ha.J() + "";
                    ha = ha.Ee();
                    ha[H] && (V += "i" + ha[nd]("i"));
                    V != A && (1 < Y && (a += "l" + Y), a += (A ? "j" : "") + V, Y = 0, A = V);
                    ++Y
                }
                1 < Y && (a += "l" + Y)
            }
            c[3] = a;
            c[4] = g(q.yr());
            c[5] = g(q.zr());
            c[6] = F;
            c[7] = Ld() - N;
            c[18] = g(q.Ar());
            c[8] = n.bt();
            if (A = n.Vs()) c[25] = A.ft ? "1" + (G.os ? "a" : "") + (G.lm ?
                "c" : "") : "", c[10] = A.et;
            c[11] = n.Hj();
            c[12] = n.Ys();
            if (A = n.Xs()) c[9] = A.ht, c[22] = A.gt, c[17] = A.it;
            c[13] = n.$s();
            c[14] = n.Zs();
            c[15] = n.dt();
            c[16] = n.Ws();
            c[30] = u.lu();
            c[31] = u.mu();
            c[32] = u.nu();
            c[19] = e(G.Wi);
            A = (A = C.Oc()) ? A.ta().Ya("e") ? "1" : "" : "";
            c[20] = A;
            for (A = 0; a = E[A++];) h = a.Ed(), l[h] && (c[h] = void 0 == c[h] ? e(a.uu()) : "");
            c = c[nd](".")[t](f, "");
            m && K ? (A = b + c, a = m.ou(K), A = m.qu(A, a), A = A.slice(0, 8), A = m.pu(A)) : A = "";
            return {
                oq: b,
                gs_l: c + "." + A
            }
        }

        function b() {
            N = Ld();
            ++F;
            q.Yc();
            y[lc]();
            n.Yc();
            for (var a = 0, b; b = E[a++];) b[lc]()
        }

        function c(a) {
            K =
                a
        }

        function e(a) {
            return a ? a[t](h, "-") : ""
        }

        function g(a) {
            return ma.max(a - N, 0)
        }
        var f = /\.+$/,
            h = /\./g,
            l = Hd(lf),
            m, n, q, y, u, C, z, E, G, F = -1,
            N, K, A = {
                ca: function (a) {
                    m = a.get(M.jk, A);
                    n = a.get(M.Ub, A);
                    q = a.get(M.Fa, A);
                    y = a.get(M.Uc, A);
                    u = a.get(M.Lf, A);
                    C = a.get(M.gc, A);
                    z = a.get(M.Fb, A);
                    E = a.tb(M.fh, A);
                    Re(a.tb(M[Hc], A))
                },
                ib: function (a) {
                    K = a.ps
                },
                Y: function (a) {
                    G = a;
                    b()
                },
                J: function () {
                    return M.Zc
                },
                S: function () {
                    return 9
                },
                R: function () {
                    return {
                        ta: a,
                        reset: b,
                        jt: c
                    }
                }
            };
        return A
    });
    rf.ia(M.Qc, 11, function () {
        function a(a, b) {
            if (C) {
                for (var c = !1, e = 0, g; g = C[e++];) 2 == g.jf(a, b) && (c = !0);
                if (c) return
            }
            if (Xd(a) || A.Ad || m && m.Ad()) ge(b) ? K && !N && (N = De(K, "btnI", "1")) : N && (K[Zc](N), N = null), h(b), F[w](a, b), f(), n.lb(14, {
                Mg: a
            })
        }

        function b(a) {
            h();
            F.Ge(a);
            f()
        }

        function c(a) {
            h();
            F.Nh(a);
            f()
        }

        function e(a) {
            h(1);
            F.Lh(a);
            f()
        }

        function g(a) {
            return F.Mh(a)
        }

        function f() {
            q.yi();
            q.kt();
            u[lc]();
            E ? E[Gb]() : z[Gb]();
            y.ic() != y.Oa() && y.ls();
            G && G[Gb]()
        }

        function h(a) {
            l && A.Ps && l.Wg(a)
        }
        var l, m, n, q, y, u, C, z, E, G, F, N, K, A, B = {
                Sa: function (a) {
                    K =
                        a.Im()
                },
                ca: function (a) {
                    l = a.get(M.zh, B);
                    m = a.get(M.Rd, B);
                    n = a.get(M.hb, B);
                    q = a.get(M.Ub, B);
                    y = a.get(M.Fa, B);
                    u = a.get(M.Zc, B);
                    z = a.get(M.Fb, B);
                    E = a.get(M.fn, B);
                    G = a.get(M.ef, B);
                    F = a.Pd();
                    C = a.tb(M.en, B)
                },
                Y: function (a) {
                    A = a
                },
                J: function () {
                    return M.Qc
                },
                S: function () {
                    return 11
                },
                R: function () {
                    return {
                        search: a,
                        Ge: b,
                        Nh: c,
                        Lh: e,
                        Mh: g
                    }
                }
            };
        return B
    });
    rf.ia(M.le, 14, function () {
        function a(a) {
            return (a[g.ci] || {}).j
        }

        function b(a) {
            return a[g.np]
        }

        function c(a, b) {
            var c = a[g.np],
                q = a[g.wv];
            b || (b = tf(c, Wd(c[H])));
            var E = {}, G = a[g.ci];
            if (G)
                for (var F in G) {
                    var N = G[F];
                    F in n && (N = n[F].parse(N));
                    E[F] = N
                }
            G = vf;
            F = b;
            for (var K = !1, A = !1, N = !1, B = 0, U; U = q[B++];)
                if (33 == (U[f.op] || 0) ? A = !0 : K = !0, A && K) {
                    N = !0;
                    break
                }
            K = 0;
            A = [];
            for (B = 0; U = q[B++];) {
                var aa = U[f.op] || 0;
                if (h[aa] && (!N || 33 != aa)) {
                    var Q;
                    Q = U[f.vv];
                    m && (Q = l.bold(c[od](), ae(Zd(Q))));
                    A[D](wf(Q, ae(Zd(Q)), K++, aa, U[f.uv] || [], e(U)))
                }
            }
            return G(F,
                A, xf(E), !1, !0, !1)
        }

        function e(a) {
            return (a = a[f.ci]) ? xf(a) : uf
        }
        var g = kf,
            f = ff,
            h, l, m, n = {}, q = {
                ca: function (a) {
                    l = a.get(M.Rh, q);
                    if (a = a.tb(M.dk, q))
                        for (var b = 0, c; c = a[b++];) n[c.Sy()] = c
                },
                Y: function (a) {
                    h = a.mf;
                    m = a.lj
                },
                J: function () {
                    return M.le
                },
                S: function () {
                    return 14
                },
                R: function () {
                    return {
                        It: a,
                        Ty: b,
                        bj: c
                    }
                }
            };
        return q
    });
    rf.ia(M.hh, 15, function () {
        function a(a) {
            var c = b(a);
            if (c) {
                if (h)
                    for (var g = 0, q; q = h[g++];) a = q.Du(a);
                l.Eu(a);
                g = a;
                q = g.Fc().Db();
                var E = g.zb();
                if (m[ec]())
                    if (E[H]) {
                        var G = !1 == g.J();
                        m.Ei(q, E, G) && f.Cu(g)
                    } else m[Gb]();
                e.lb(3, {
                    input: q,
                    ks: E
                })
            }
            n.ok(a, c);
            return c
        }

        function b(a) {
            var b = g.Oa(),
                c = l.Oc(),
                b = b[od](),
                e = a.Db()[od]();
            b == e ? c = !0 : (b = Td(b), a = (e = a.Fc()) ? e.Gd() : Td(a.Db()[od]()), c = c ? c.Fc().Gd() : "", c = 0 == b[Jc](a) ? 0 == b[Jc](c) ? a[H] >= c[H] : !0 : !1);
            return c
        }

        function c(a, b) {
            return a.Va() - b.Va()
        }
        var e, g, f, h, l, m, n, q = {
                ca: function (a) {
                    e =
                        a.get(M.hb, q);
                    g = a.get(M.Fa, q);
                    f = a.get(M.Lf, q);
                    h = a.tb(M.gh, q);
                    l = a.get(M.gc, q);
                    m = a.get(M.Fb, q);
                    n = a.Pd();
                    h[ed](c)
                },
                J: function () {
                    return M.hh
                },
                S: function () {
                    return 15
                },
                R: function () {
                    return {
                        Be: a,
                        Vg: b
                    }
                }
            };
        return q
    });
    rf.ia(M.Ub, 13, function () {
        function a(a, b) {
            if (Fa && !(Ja || fa && fa.fy())) {
                a.Gh("ds", Za.Xl);
                a.Gh("pq", gb);
                a.Et();
                var c = !0,
                    e = a.Yn();
                e > ba && (ba = e);
                ++P;
                na.St(a);
                var e = Ld(),
                    f;
                for (f in Pa) {
                    var g = Pa[f].ck();
                    2500 < e - g && B(f)
                }
                xa && (f = Y.get(a)) && ((c = da || a.Gt()) && Za.is && a.Ft(), ca.Be(f), f.Vj() && ++ja, $ = null);
                c && ($ = a, S && !b || A())
            }
        }

        function b() {
            return 10 <= hb || 3 <= V.co() ? !0 : !1
        }

        function c() {
            Ga = ba
        }

        function e() {
            return ba <= Ga
        }

        function g() {
            $ = null
        }

        function f() {
            return P
        }

        function h() {
            return {
                ft: xa,
                et: xa ? Y.Ct() : 0
            }
        }

        function l() {
            return xa ?
                Y.Hj() : 0
        }

        function m() {
            return ja
        }

        function n() {
            return {
                ht: ib,
                gt: $a,
                it: ub
            }
        }

        function q() {
            return Jb
        }

        function y() {
            return jb
        }

        function u(a) {
            a = pa.bj(a);
            return ca.Vg(a)
        }

        function C() {
            return ab
        }

        function z() {
            for (var a = [], b = 0, c, e = 0; e <= Q; ++e) c = cb[e], 0 == c ? b++ : (b = 1 == b ? "0j" : 1 < b ? e + "-" : "", a[D](b + c), b = 0);
            return a[nd]("j")
        }

        function E() {
            xa && Y.At()
        }

        function G(a) {
            xa && Y.Bt(a)
        }

        function F() {
            xa && Y.Yc();
            ab = jb = Jb = ub = $a = ib = ja = hb = P = 0;
            cb = [];
            for (var a = 0; a <= Q; ++a) cb[a] = 0
        }

        function N(a) {
            gb = a
        }

        function K(a) {
            return function (b) {
                U(b, a)
            }
        }

        function A() {
            ee(S);
            S = null;
            if (!(2 < V.co()) && $) {
                var a = [],
                    b = $.ta();
                if (b)
                    for (var c in b) Vd(c, b[c], a);
                R.$j();
                a = V.Kt($, a[nd]("&"), K($), U);
                $.$n() || (++ib, a ? (a = $, Pa[a.jb()] = a, ++hb) : ++$a);
                $ = null;
                a = 100;
                b = (hb - 2) / 2;
                for (c = 1; c++ <= b;) a *= 2;
                a < Ba && (a = Ba);
                S = k[Tb](A, a)
            }
        }

        function B(a) {
            V.Jt(a);
            delete Pa[a];
            hb && --hb
        }

        function U(a, b) {
            if (Fa) {
                if (!b) {
                    var c = pa.It(a);
                    b = Pa[c];
                    if (!b) return
                }
                if (!b.$n()) {
                    c = pa.bj(a, b);
                    if (va) var e = ha.Oa(),
                    c = va.hy(c, e);
                    xa && Y.put(c);
                    b.Yn() <= Ga || (++ub, ca.Be(c) || ++Jb, e = b, Ba = c.ta().gn("d"), e && (B(e.jb()), e = e.ck(), e = Ld() - e, ab +=
                        e, jb = ma.max(e, jb), ++cb[e > ia ? Q : aa[ma[nb](e / 100)]]));
                    c && (c = c.ta().Ya("q")) && wa.jt(c)
                }
            }
        }
        var aa = [0, 1, 2, 3, 4, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8],
            Q = aa[aa[H] - 1] + 1,
            ia = 100 * aa[H] - 1,
            Y, fa, V, ha, wa, na, pa, ca, va, ra, R, Fa = !1,
            $, ba = -1,
            Pa, P, hb, ja, ib, $a, ub, Jb, jb, ab, cb, Ba, S, da, Ja, Ga, xa, Za, gb, Ka = {
                ca: function (a) {
                    Y = a.get(M.oh, Ka);
                    fa = a.get(M.Rd, Ka);
                    a.get(M.hb, Ka);
                    ha = a.get(M.Fa, Ka);
                    wa = a.get(M.Zc, Ka);
                    na = a.get(M.Lf, Ka);
                    pa = a.get(M.le, Ka);
                    ca = a.get(M.hh, Ka);
                    va = a.get(M.bu, Ka);
                    a.get(M.gc, Ka);
                    ra = a.get(M.qe, Ka);
                    a.get(M.Fb, Ka);
                    R = a.Pd()
                },
                Y: function (a) {
                    V =
                        ra.Dt();
                    Za = a;
                    Fa = !0;
                    Pa = {};
                    Ba = 0;
                    da = a.hs;
                    Ja = a.$g;
                    Ga = -1;
                    xa = Za.gs && !! Y;
                    gb = a.js
                },
                J: function () {
                    return M.Ub
                },
                S: function () {
                    return 13
                },
                R: function () {
                    return {
                        vl: a,
                        Rj: b,
                        yi: c,
                        $l: e,
                        kt: g,
                        bt: f,
                        Vs: h,
                        Hj: l,
                        Ys: m,
                        Xs: n,
                        $s: q,
                        Zs: y,
                        Vg: u,
                        dt: C,
                        Ws: z,
                        Ug: E,
                        gy: G,
                        Yc: F,
                        bm: N
                    }
                },
                ub: function () {
                    Fa = !1;
                    ee(S);
                    Pa = $ = S = null;
                    c()
                }
            };
        return Ka
    });
    rf.ia(M.gc, 5, function () {
        function a() {
            return g.Rj()
        }

        function b(a) {
            f = a
        }

        function c() {
            return f
        }

        function e() {
            f = null
        }
        var g, f, h = {
                ca: function (a) {
                    g = a.get(M.Ub, h)
                },
                Y: function () {
                    f = null
                },
                J: function () {
                    return M.gc
                },
                S: function () {
                    return 5
                },
                R: function () {
                    return {
                        Rj: a,
                        Eu: b,
                        Oc: c,
                        kz: e
                    }
                }
            };
        return h
    });
    rf.ia(M.qe, 16, function () {
        function a() {
            return g
        }

        function b() {
            return f
        }

        function c() {
            g && g.Ug()
        }
        var e = {}, g, f, h = {
                ca: function (a) {
                    a = a.tb(M.Rf, h);
                    for (var b = 0, c; c = a[b++];) e[c.Oo()] = c
                },
                Y: function (a) {
                    var b = "https:" == p[Yb][gc],
                        c = Vd,
                        h = [];
                    c("client", a.Ui, h);
                    c("hl", a.Xd, h);
                    c("gl", a.Mt, h);
                    c("sugexp", a.Wi, h);
                    c("gs_rn", 25, h);
                    c("gs_ri", a.Vi, h);
                    a.fo && c("authuser", a.fo, h);
                    f = {
                        protocol: "http" + (b ? "s" : "") + "://",
                        host: a.Lt || "clients1." + a.Rn,
                        Zj: a.Zj || "/complete/search",
                        Zu: h[H] ? h[nd]("&") : ""
                    };
                    g && g.Oo() == a.Yj || (g = e[a.Yj])
                },
                J: function () {
                    return M.qe
                },
                S: function () {
                    return 16
                },
                R: function (e) {
                    return {
                        Dt: e == M.Ub ? a : Od,
                        Yu: b,
                        Ry: c
                    }
                }
            };
        return h
    });
    rf.ia(M.Vc, 7, function () {
        function a(a) {
            m.dh(a)
        }

        function b() {
            return n
        }

        function c(a) {
            if (a in q) {
                if (y) {
                    if (a == y.kj()) return;
                    f();
                    y.km()
                }
                y = q[a];
                m.eh(y)
            }
        }

        function e() {
            return n ? m.Wc() : 0
        }

        function g() {
            n || (m.show(h()), n = !0)
        }

        function f() {
            n && (m.zf(), n = !1)
        }

        function h() {
            var a = ke(l);
            y.jm(a);
            return a
        }
        var l = {
            vu: !1,
            Zi: "left",
            Xn: !0,
            je: null,
            marginWidth: 0
        }, m, n, q = {}, y, u = {
                ca: function (a) {
                    m = a.get(M.Nf, u);
                    if (a = a.tb(M.Pg, u))
                        for (var b = 0, c; c = a[b++];) q[c.kj()] = c
                },
                Y: function () {
                    n = !1
                },
                J: function () {
                    return M.Vc
                },
                S: function () {
                    return 7
                },
                R: function () {
                    return {
                        Ze: b,
                        eh: c,
                        Wc: e,
                        show: g,
                        zf: f,
                        dh: a
                    }
                },
                ub: function () {
                    f()
                }
            };
        return u
    });
    rf.ia(M.Fa, 3, function () {
        function a() {
            var a = {};
            xa.lb(13, a);
            !a.cancel && Kb.vi && xa.defer(ga.Ai);
            Lb.qj()
        }

        function b() {
            xa.lb(12);
            Lb.rj()
        }

        function c() {
            $a("rtl")
        }

        function e() {
            $a("ltr")
        }

        function g() {
            ga.fr()
        }

        function f(a) {
            ga.Pc() ? ga.er() : ga.Bg(a)
        }

        function h() {
            if (0 == Kb.Lg) return !1;
            if (4 == Kb.Lg) return Lb.vj(), !1;
            var a = ub();
            if (a) switch (Kb.Lg) {
            case 1:
                if (Jb(a, !0)) return gb.add(S.wf), !0;
                break;
            case 3:
                return ga.$e(a)
            }
            return !1
        }

        function l() {
            Kb.$q ? Pa(5) : (ga.Ze() ? ga.Ai() : E(), U())
        }

        function m(a) {
            La && a.Hm() == La[H] && (zc && zc[Gb](),
                Kb.Zq && Pa(2), Lb.pj(La))
        }

        function n(a) {
            Ja && 0 == a.Og() && Ja.Gs()
        }

        function q(a, b, c, e) {
            Kb.Xq && !a && ga.rl(!0);
            Kb.Wq && !ga.Ze() && "mousedown" == c && ga.Bg(b);
            var f;
            Rd && Rd.cs(a, b, c) ? f = Rd : Rd = f = tf(a, b, c);
            var g = b = !1;
            if (a != La || "onremovechip" == c) ce(c, "key") ? gb.add(S.Ds) : "paste" == c && gb.add(S.Es), b = !0, cb(a), xa.lb(1, {
                vf: c,
                je: Bc
            }), Lb.ph(a), g = Ld(), Fe || (Fe = g), cf = g, Xd(a) && (e = !0), g = !0;
            a = Ba.DONT_CARE;
            var h = f.Il(),
                l = pb.Oc();
            if (Db)
                for (var m = 0, n; n = Db[m++];) n = n.jf(h, l), n > a && (a = n);
            switch (a) {
            case Ba.Bs:
                e = !0;
                break;
            case Ba.Nm:
                e = !1
            }
            e ?
                (b && ga.gr(), Ge && f.setParameter("gs_is", 1), Lb.sj(Ge), Za.vl(f), Rd = null) : g && (ga[Gb](), Za.yi());
            xa.lb(2, {
                vf: c
            })
        }

        function y(a) {
            (Ge = a) && gb.add(S.Cs)
        }

        function u(a) {
            df != a && ((df = a) ? Lb.oj() : Lb.nj())
        }

        function C(a) {
            jb(a)
        }

        function z() {
            da[xb]()
        }

        function E() {
            da.blur()
        }

        function G() {
            return da.Cg()
        }

        function F(a, b, c) {
            ce(a, La, !0) && (a = La + a[Qb](La[H]));
            c = c || Wd(a[H]);
            q(a, c, "", b);
            jb(a, !0)
        }

        function N(a) {
            F(a, !0);
            ef = Ld();
            gb.add(S.Fs)
        }

        function K() {
            q(La, V(), "onremovechip")
        }

        function A(a) {
            cb(a);
            da[Ib]();
            xa.lb(4, {
                je: Bc,
                input: a
            })
        }

        function B() {
            da[Bb]()
        }

        function U() {
            La != Cc && cb(Cc);
            xa.lb(5, {
                input: Cc,
                ks: ga.zb(),
                je: Bc
            });
            da[Ib]();
            Lb.uj(Cc)
        }

        function aa() {
            Cc = La
        }

        function Q() {
            return da.Ql()
        }

        function ia() {
            return Cc
        }

        function Y() {
            return La
        }

        function fa() {
            return Bc
        }

        function V() {
            return da.cf()
        }

        function ha() {
            return da.Ji()
        }

        function wa() {
            return da.Wc()
        }

        function na() {
            return da.Wd()
        }

        function pa() {
            return da.Rl()
        }

        function ca() {
            return Fe
        }

        function va() {
            return cf
        }

        function ra() {
            return ef
        }

        function R() {
            return 0 != Yf
        }

        function Fa() {
            if (Qd) {
                if (Kb.Ci) return !0;
                for (var a = 0, b; b = Ac[a++];)
                    if (b[ec]()) return !0
            }
            return !1
        }

        function $(a) {
            if (a == La) return !0;
            var b = La[H];
            return a[Qb](0, b) == La ? Ga.qs(Bc, La, a[Qb](b)) : !1
        }

        function ba() {
            da.Hi()
        }

        function Pa(a) {
            Ka[w](La, a)
        }

        function P(a) {
            La && (cb(""), da[Gb](), xa.lb(1), ga[Gb](), Lb.ph(La));
            a && Lb.mj()
        }

        function hb() {
            ef = cf = Fe = 0
        }

        function ja(a) {
            da.Zg(a)
        }

        function ib() {
            var a = ub();
            a && Jb(a)
        }

        function $a(a) {
            var b = V().Og();
            Bc == a ? ga.Pc() && b == La[H] && (ga.Td() ? Kb.zi && (a = ga.Sd(), Ka[w](a.Za(), 6)) : Kb.Yq && h()) : Ja && 0 == b && Ja.Gs()
        }

        function ub() {
            if (ga.Pc()) {
                var a =
                    ga.Td() ? ga.Sd() : ga.xi();
                if (a.Sg()) return a
            }
            return null
        }

        function Jb(a, b) {
            var c = a.Za();
            return de(Cc, c) ? !1 : (aa(), b ? F(c, !0) : A(c), !0)
        }

        function jb(a, b) {
            La = a || "";
            ab();
            da[Ib]();
            b || (xa.lb(4, {
                je: Bc,
                input: La
            }), Lb.tj(La))
        }

        function ab() {
            var a = Ga.Ki(La);
            a != Bc && (da.Ii(a), Bc = a)
        }

        function cb(a) {
            La = Cc = a || "";
            ab()
        }
        var Ba = jf,
            S = hf,
            da, Ja, Ga, xa, Za, gb, Ka, Db, pb, ga, zc, Qd, Ac, Lb, Cc, La, Bc, Yf, Fe, cf, ef, Ge, df, Rd, Kb, Eb = {
                ca: function (a) {
                    da = a.get(M.Yd, Eb);
                    Ja = a.get(M.Rd, Eb);
                    Ga = a.get(M.gf, Eb);
                    xa = a.get(M.hb, Eb);
                    Za = a.get(M.Ub, Eb);
                    gb = a.get(M.Uc,
                        Eb);
                    Ka = a.get(M.Qc, Eb);
                    Db = a.tb(M.sc, Eb);
                    pb = a.get(M.gc, Eb);
                    ga = a.get(M.Fb, Eb);
                    zc = a.get(M.ef, Eb);
                    Qd = a.get(M.ce, Eb);
                    Ac = a.tb(M.ke, Eb);
                    Lb = a.Pd();
                    Yf = a.Dg().Bi()
                },
                ib: function (a) {
                    Kb = a;
                    Db[ed](ie);
                    La = Cc = da.kr() || ""
                },
                Y: function (a) {
                    Kb = a;
                    df = Ge = !1;
                    ab()
                },
                J: function () {
                    return M.Fa
                },
                S: function () {
                    return 3
                },
                R: function () {
                    return {
                        Sl: a,
                        qr: b,
                        sr: c,
                        tr: e,
                        ur: g,
                        or: f,
                        $e: h,
                        pr: l,
                        nr: m,
                        mr: n,
                        rr: q,
                        wr: y,
                        Tl: u,
                        Kg: C,
                        xr: z,
                        Si: E,
                        Am: G,
                        Ll: F,
                        Rx: N,
                        Sx: K,
                        qc: A,
                        Kl: B,
                        dr: U,
                        ls: aa,
                        Ql: Q,
                        ic: ia,
                        Oa: Y,
                        Ki: fa,
                        cf: V,
                        Ji: ha,
                        Wc: wa,
                        Wd: na,
                        Rl: pa,
                        yr: ca,
                        zr: va,
                        Ar: ra,
                        vr: R,
                        Ri: Fa,
                        Tx: $,
                        Hi: ba,
                        search: Pa,
                        clear: P,
                        Yc: hb,
                        Zg: ja,
                        Jl: ib
                    }
                }
            };
        return Eb
    });
    rf.ia(M.Fb, 17, function () {
        function a(a) {
            a.je = Db;
            a.marginWidth = Ka;
            var b = pb.Hl;
            b || (b = "rtl" == Db ? "right" : "left");
            a.Zi = b
        }

        function b(a, b, e) {
            var f = !1;
            a = jb && jb.Yx(b);
            U();
            (Ba = b) && b[H] && (f = b[0].Za(), Pa.Rs(f) && (f = ja.ic()), Db = Pa.Ki(f), e ? (Ja = $.Ts, f = ba.Or(b, Db), b = b[0].ta().Ya("a"), b = Zd(b), Ka = ib.Wd(b)) : (Ja = $.bn, f = ba.ka(ca(), Db), Ka = 0), a && (da = jb.Xx(), c(jb.Vx())), f ? A() : U());
            return f
        }

        function c(a) {
            Fa();
            if (S != a) {
                var b = S;
                S = a;
                R(b)
            }
        }

        function e() {
            if (F())
                if (Ga) {
                    var a = S;
                    S == Ba[H] - 1 ? da = S = null : null == S ? S = 0 : ++S;
                    da = S;
                    ra(a, e)
                } else A()
        }

        function g() {
            if (F())
                if (Ga) {
                    var a = S;
                    Ba && 0 != S ? null == S ? S = Ba[H] - 1 : --S : da = S = null;
                    da = S;
                    ra(a, g)
                } else A()
        }

        function f(a) {
            var b = a ? 4 : 3;
            if (N()) a = E(), ba.Ng(a) || ja[w](b), b = ja.ic(), cb.Ah(b, a);
            else ja[w](b)
        }

        function h(a) {
            return ba.$e(a)
        }

        function l(a) {
            da = S = a;
            a = Ba[a];
            var b = ja.ic();
            cb.Ah(b, a)
        }

        function m() {
            return Ga
        }

        function n() {
            return xa
        }

        function q(a) {
            xa && !a && U();
            xa = a
        }

        function y() {
            return Ja
        }

        function u() {
            return Ba
        }

        function C() {
            return F() ? Ba[0] : null
        }

        function z() {
            return S
        }

        function E() {
            return N() ? Ba[da] : null
        }

        function G() {
            return da
        }

        function F() {
            return !(!Ba || !Ba[H])
        }

        function N() {
            return null != da
        }

        function K() {
            Ga && !Za && (Za = k[Tb](U, pb.jr))
        }

        function A() {
            Ga || (P.eh(17), P.show(), Ga = !0, cb.Cj())
        }

        function B() {
            Ga && (Za && (ee(Za), Za = null), P.zf(), Ga = !1, cb.Dj())
        }

        function U() {
            B();
            Ba = null;
            Ja = $.EMPTY;
            null != S && ba.lh(S);
            da = S = null;
            ba[Gb]()
        }

        function aa() {
            hb.yi();
            B()
        }

        function Q() {
            null != S && ba.lh(S);
            da = S = null
        }

        function ia() {
            Fa();
            gb = k[Tb](Q, 0)
        }

        function Y() {
            Fa()
        }

        function fa(a) {
            if (F()) A();
            else {
                var b = ja.ic();
                if (b) {
                    a = a || ja.cf();
                    b = tf(b, a);
                    if (ub) {
                        a = b.Il();
                        for (var c =
                            Jb.Oc(), e = 0, f; f = ub[e++];) f.jf(a, c)
                    }
                    hb.vl(b)
                }
            }
        }

        function V() {
            return ba.Ba()
        }

        function ha() {
            return ba.Qg()
        }

        function wa() {
            Ga = !1
        }

        function na() {
            ba.qf()
        }

        function pa() {
            return 17
        }

        function ca() {
            if (F() && Ja == $.bn) {
                for (var a = [], b = [], c = 0, e;
                    (e = $a[c++]) && !e.Wm(ja.ic(), Ba, b););
                (c = b ? b[H] : 0) && (c -= va(b, a, 0));
                for (e = 0; e < Ba[H]; ++e) a[D](Ba[e]);
                c && (c -= va(b, a, 1));
                pb.ir && a[D](1);
                c && va(b, a, 2);
                pb.Gl && a[D](2);
                ab && ab.Ss(a);
                return a
            }
            return null
        }

        function va(a, b, c) {
            for (var e = 0, f = 0, g; f < a[H]; ++f)(g = a[f]) && g.position == c && (b[D](g), ++e);
            return e
        }

        function ra(a, b) {
            if (null == S || ba.se(S))
                if (R(a), null == S) ja.dr();
                else {
                    var c = ba.ih(Ba[S]);
                    ja.Kg(c);
                    cb.Ej(c)
                } else ba.lh(a), b()
        }

        function R(a) {
            Fa();
            null != a && ba.lh(a);
            null != S && ba.Nr(S)
        }

        function Fa() {
            gb && (ee(gb), gb = null)
        }
        var $ = gf,
            ba, Pa, P, hb, ja, ib, $a, ub, Jb, jb, ab, cb, Ba, S, da, Ja, Ga, xa, Za, gb, Ka, Db, pb, ga = {
                ca: function (a) {
                    ba = a.get(M.of, ga);
                    Pa = a.get(M.gf, ga);
                    P = a.get(M.Vc, ga);
                    hb = a.get(M.Ub, ga);
                    ja = a.get(M.Fa, ga);
                    ib = a.get(M.Bf, ga);
                    $a = a.tb(M.Cd, ga);
                    ub = a.tb(M.sc, ga);
                    Jb = a.get(M.gc, ga);
                    jb = a.get(M.Us, ga);
                    ab = a.get(M.Sj,
                        ga);
                    cb = a.Pd()
                },
                ib: function () {
                    ub[ed](ie);
                    $a[ed](je)
                },
                Y: function (a) {
                    pb = a;
                    da = S = null;
                    Ja = $.EMPTY;
                    Ga = !1;
                    xa = !0;
                    Db = "";
                    Ka = 0
                },
                J: function () {
                    return M.Fb
                },
                S: function () {
                    return 17
                },
                R: function () {
                    return {
                        Ei: b,
                        Rr: c,
                        er: e,
                        fr: g,
                        Ng: f,
                        $e: h,
                        Mr: l,
                        Ze: m,
                        isEnabled: n,
                        rl: q,
                        hr: y,
                        zb: u,
                        xi: C,
                        Wx: z,
                        Sd: E,
                        ms: G,
                        Pc: F,
                        Td: N,
                        gr: K,
                        show: A,
                        zf: B,
                        clear: U,
                        Ai: aa,
                        Pr: Q,
                        Qr: ia,
                        Ux: Y,
                        Bg: fa
                    }
                },
                tf: function () {
                    var b = {
                        jm: a,
                        Ba: V,
                        Qg: ha,
                        km: wa,
                        qf: na,
                        kj: pa
                    };
                    return [{
                        Sa: Od,
                        ca: Od,
                        ib: Od,
                        Y: Od,
                        J: function () {
                            return M.Pg
                        },
                        S: function () {
                            return 17
                        },
                        R: function () {
                            return b
                        },
                        tf: Od,
                        ub: Od
                    }]
                },
                ub: function () {
                    Za && (ee(Za), Za = null);
                    Ba = null;
                    B()
                }
            };
        return ga
    });
    rf.ia(M.Nf, 8, function () {
        function a(a) {
            a != B && (B = a, a = a.Ba(), U ? a != U && K[tc](a, U) : K[s](a), U = a)
        }

        function b() {
            A || (A = K ? ma.max(K[rc], 0) : 0);
            return A
        }

        function c(a) {
            r(K, a.vu ? "gssb_e gsdd_a" : "gssb_e");
            var b = a.je || fa;
            E != b && (E = b, Ce(z, b));
            b = a.marginWidth;
            if (N != b) {
                var c = F[v];
                b ? (G[cc]() || G[s](F), Da(c, b + "px"), Ve && (c.paddingLeft = "1px")) : (G[cc]() && G[Zc](F), c.paddingLeft = "");
                N = b
            }
            ha = a.Xn;
            wa = a.Zi;
            m(aa, !0);
            m(Y, !0);
            y.lb(16);
            g()
        }

        function e() {
            A = 0;
            m(aa, !1);
            m(Y, !1);
            var a = fa;
            E != a && (E = a, Ce(z, a));
            y.lb(11)
        }

        function g() {
            A = 0;
            h();
            if (Y) {
                var a =
                    u.Hs[0],
                    c = Y[v];
                "relative" != u.Cf && (c.top = z[v].top, Xa(c, z.offsetLeft + G[qb] + "px"));
                a = b() + a;
                Sa(Y[v], ma.max(a, 0) + "px");
                l(Y, K[qb])
            }
            B && B.qf()
        }

        function f(a) {
            if (Q) ia != a && Q[tc](a, ia);
            else {
                var b = z[Kc](-1);
                Sa(b[v], "0");
                b[Rc](-1);
                Q = b[Rc](-1);
                n.Ze() || (m(K, !1), m(z, !0), g());
                aa = K;
                Q[s](a)
            }
            ia = a
        }

        function h() {
            var a, b, c;
            a = (b = B && B.Qg()) ? b[qb] : q.Wd();
            (c = V) ? Md(c) && (c = null) : N || !ha ? (Da(K[v], ""), Da(z[v], "")) : (Da(K[v], "100%"), c = a + u.re[2], l(z, c));
            if ("relative" != u.Cf) {
                var e = q.Ji();
                b && (e.Jd = te(b).Jd);
                b = u.re;
                var f = b[1];
                b = b[0];
                b =
                    e.pk + q.Wc() + b;
                "right" == wa ? (c = Te(z), a = Oe(c) - (e.Jd - f + a), c = void 0) : (e = e.Jd + f, "center" == wa && c && (e += (a - c) / 2), c = e, a = void 0);
                f = {
                    Jd: 0,
                    pk: 0
                };
                "absolute" == u.Cf && u.Of && u.Of != p[Xc] && (f = te(u.Of));
                e = z[v];
                e.top = b - f.pk + "px";
                Xa(e, e.right = "");
                void 0 != c ? Xa(e, c - f.Jd + "px") : e.right = a + f.Jd + "px"
            }
            me && (e.zoom = "normal", e.zoom = 1)
        }

        function l(a, b) {
            Nd(b) ? 0 < b && Da(a[v], b + "px") : Da(a[v], b)
        }

        function m(a, b) {
            a && Qa(a[v], b ? "" : "none")
        }
        var n, q, y, u, C, z, E, G, F, N, K, A, B, U, aa, Q, ia, Y, fa, V, ha = !0,
            wa, na = {
                Sa: function (a, b) {
                    fa = a.Zd();
                    b[x](".gssb_c", "border:0;position:absolute;z-index:989");
                    b[x](".gssb_e", "border:1px solid #ccc;border-top-color:#d9d9d9;" + b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);") + "cursor:default");
                    b[x](".gssb_f", "visibility:hidden;white-space:nowrap");
                    b[x](".gssb_k", "border:0;display:block;position:absolute;top:0;z-index:988");
                    b[x](".gsdd_a", "border:none!important")
                },
                ca: function (a) {
                    n = a.get(M.Vc, na);
                    q = a.get(M.Fa, na);
                    y = a.get(M.hb, na);
                    C = a.Dg().jb()
                },
                ib: function (a) {
                    u = a;
                    z = we();
                    r(z, "gstl_" + C + " gssb_c");
                    m(z, !1);
                    aa = z;
                    var b = z[Kc](-1);
                    G = b[Rc](-1);
                    r(G, "gssb_f");
                    F = xe();
                    K =
                        b[Rc](-1);
                    r(K, "gssb_e");
                    Da(K[v], "100%");
                    u.Is && (Y = oe("iframe", "gstl_" + C + " gssb_k"), m(Y, !1), (u.Of || p[Xc])[s](Y));
                    if (V = u.im) Nd(V) && (V += u.re[2]), l(z, V);
                    h();
                    (a.Of || p[Xc])[s](z);
                    y.Ib(8, g)
                },
                Y: function (a) {
                    u = a;
                    z[v].position = a.Cf
                },
                J: function () {
                    return M.Nf
                },
                S: function () {
                    return 8
                },
                R: function () {
                    return {
                        eh: a,
                        Wc: b,
                        dh: f,
                        show: c,
                        zf: e,
                        qf: g
                    }
                }
            };
        return na
    });
    rf.ia(M.Yd, 4, function () {
        function a(a, b) {
            ub && (ub = !1, $.Wj(P, Y), $.Wj(P, fa));
            b || (b = a);
            P[kd][tc](a, P);
            b[s](P);
            $a && ib.Ir && (qe || Ve ? $.defer(function () {
                P[xb]();
                re(P, ab.Og())
            }) : P[xb]());
            V()
        }

        function b() {
            return Ja
        }

        function c(a) {
            var b = "rtl" == a == ("rtl" == Db);
            P.dir = a;
            if (Ga) {
                ba.Ii(a);
                var c = S[kd];
                c[Zc](Ga);
                b ? Ke(Ga, S) : c[vb](Ga, S)
            }
            Ja && (Ja.dir = a, c = Ja[kd], c[Zc](Ja), b ? c[vb](Ja, S) : Ke(Ja, S));
            0 != hb && (a = Be(a), Ae(P, a, 0))
        }

        function e() {
            return ab
        }

        function g() {
            return te(da)
        }

        function f() {
            var a = da ? da[rc] : 0;
            ga > a && (a = ga);
            return a
        }

        function h() {
            return zc ? zc : da ? da[qb] : 0
        }

        function l() {
            var a = P[qb];
            ib.yl && (a -= P[rc]);
            return a
        }

        function m() {
            return P[Ic]
        }

        function n(a) {
            (ib.Nl ? P : S || Qd || P)[v].background = a || "transparent"
        }

        function q() {
            Ba = !0
        }

        function y() {
            P[Bb]();
            ca()
        }

        function u() {
            Ye && Wa(P, "");
            Wa(P, R.Oa());
            Ye && Wa(P, P[Ic]);
            N()
        }

        function C() {
            if (!$a) try {
                P[xb](), $a = !0, N()
            } catch (a) {}
        }

        function z() {
            $a && (P.blur(), $a = !1)
        }

        function E() {
            return $a
        }

        function G() {
            Wa(P, "")
        }

        function F() {
            var b = pb.get("gs_id");
            if (b) Ja = pb.get("gs_ttc"), S = pb.get("gs_tti"), R.Ri() &&
                ba && (xa = ba.Ba(), Ga = xa[kd]);
            else {
                b = we();
                b.id = pb.jb("gs_id");
                r(b, "gstl_" + ja + " " + (ib.Di || P[Tc]));
                var c = b[Kc](-1),
                    e = b[v],
                    f = P[v];
                Da(e, zc ? zc + "px" : f[mb]);
                Sa(e, ga ? ga + "px" : f[pc]);
                Ea(e, "0");
                Pe(P);
                r(P, ib.Mi);
                Ka && (Ja = c[Rc](-1), Ja.id = pb.jb("gs_ttc"), Ja[v].whiteSpace = "nowrap");
                S = c[Rc](-1);
                S.id = pb.jb("gs_tti");
                r(S, "gsib_a");
                R.Ri() && ba && (xa = ba.Ba(), Ga = c[Rc](-1), r(Ga, "gsib_b"), Ga[s](xa));
                a(b, S)
            }
            Ze && We && (Sa(P[v], "1.25em"), P[v].marginTop = "-0.0625em");
            K(b);
            da = b
        }

        function N() {
            if ($a) {
                var a = P[Ic][H];
                ab = Wd(a);
                re(P, a)
            }
        }

        function K(a) {
            $.ob(a,
                "mouseup", function () {
                    P[xb]()
                })
        }

        function A() {
            $.ob(P, "keydown", U);
            (pe || ib.Br) && $.ob(P, "keypress", Q);
            $.ob(P, "select", ca, 10);
            var a = !1,
                b = function (b) {
                    $.ob(P, b, ia, 10, a)
                };
            b("mousedown");
            b("keyup");
            b("keypress");
            a = !0;
            b("mouseup");
            b("keydown");
            b("focus");
            b("blur");
            b("cut");
            b("paste");
            b("input");
            $.ob(P, "compositionstart", B);
            $.ob(P, "compositionend", B)
        }

        function B(a) {
            a = a[Nc];
            "compositionstart" == a ? R.Tl(!0) : "compositionend" == a && R.Tl(!1)
        }

        function U(a) {
            var b = a[zb];
            cb = b;
            var c = (We || Ve) && ve(b) && Fa.Pc(),
                e = b == ra.Sn,
                f = b ==
                    ra.Dh;
            Za = !1;
            b == ra.wf && (Za = R.$e());
            e && ((b = Fa.Sd()) && aa(b) ? Fa.Ng(a[jd]) : $.defer(function () {
                Fa.Ng(a[jd])
            }));
            if (c || e || f || Za) a.Eh = !0
        }

        function aa(a) {
            return (a = Pa[a.J()].Zx) && a()
        }

        function Q(a) {
            var b = a[zb],
                c = b == ra.Dh,
                e = b == ra.wf && Za;
            if (b == ra.Sn || c || e) a.Eh = !0
        }

        function ia(a) {
            if (!gb) {
                var b = a.vf;
                if (!(b[Jc]("key") || a.ctrlKey || a.altKey || a[jd] || a.metaKey)) t: if (a = a[zb], "keypress" != b) {
                    var c = ve(a),
                        e;
                    if ("keydown" == b) {
                        if (R.wr(229 == a), c) break t
                    } else if (e = a != cb, cb = -1, !c || e) break t;
                    switch (a) {
                    case ra.Dh:
                        R.pr();
                        break;
                    case ra.wt:
                        R.sr();
                        break;
                    case ra.xt:
                        R.tr();
                        break;
                    case ra.dn:
                        R.ur();
                        break;
                    case ra.cn:
                        R.or(ab);
                        break;
                    case ra.zt:
                        R.nr(ab);
                        break;
                    case ra.yt:
                        R.mr(ab)
                    }
                }
                ca();
                R.rr(P[Ic], ab, b)
            }
        }

        function Y() {
            $a = !0;
            R.qr()
        }

        function fa() {
            $a = !1;
            R.Sl()
        }

        function V() {
            ub || (ub = !0, $.ob(P, "focus", Y, 99), $.ob(P, "blur", fa, 99))
        }

        function ha() {
            jb || (jb = k.setInterval(na, ib.Hr || 50))
        }

        function wa() {
            jb && (ee(jb), jb = null)
        }

        function na() {
            ia({
                vf: "polling"
            })
        }

        function pa() {
            Ve && He(P)
        }

        function ca() {
            if ($a) {
                var a = se(P);
                a && (ab = a)
            }
        }

        function va() {
            var a;
            $.uf(k, "pagehide", function () {
                gb = !0;
                a = P[Ic]
            });
            $.uf(k, "pageshow", function (b) {
                gb = !1;
                b.persisted && R.qc(a)
            })
        }
        var ra = qf,
            R, Fa, $, ba, Pa, P, hb, ja, ib, $a, ub = !1,
            Jb, jb, ab = Wd(0),
            cb = -1,
            Ba = !1,
            S, da, Ja, Ga, xa, Za, gb, Ka, Db, pb, ga, zc, Qd, Ac = {
                Sa: function (a, b) {
                    pb = a;
                    P = a.Oi();
                    Db = a.Zd();
                    a.Hg() || (b[x](".gsib_a", "width:100%;padding:4px 6px 0"), b[x](".gsib_a,.gsib_b", "vertical-align:top"))
                },
                ca: function (a) {
                    R = a.get(M.Fa, Ac);
                    $ = a.get(M.hb, Ac);
                    Fa = a.get(M.Fb, Ac);
                    ba = a.get(M.ce, Ac);
                    Pa = Re(a.tb(M[Hc], Ac));
                    a = a.Dg();
                    hb = a.Bi();
                    ja = a.jb()
                },
                ib: function (a) {
                    ib = a;
                    ga = a.Ml;
                    zc = a.Fr;
                    $a = ue(P);
                    ca();
                    qe && $.ob(P, "beforedeactivate", function (a) {
                        Ba && (Ba = !1, a.Eh = !0)
                    }, 10);
                    Ve && va();
                    da = P;
                    Ka = !! a.$d[M.Rd];
                    (R.vr() || R.Ri() || Ka || a.Dr) && F();
                    a.Cr && ($.ob(P, "blur", wa, 10), $.ob(P, "focus", ha, 10), Jb = !0);
                    $.Ib(8, pa);
                    A();
                    V()
                },
                Y: function (a) {
                    ib = a;
                    var b = a.Er;
                    b && (Qd = pb.Eg(b));
                    P[Cb]("autocomplete", "off");
                    P[Cb]("spellcheck", a.spellcheck);
                    P[v].outline = a.Gr ? "" : "none";
                    Jb && ha()
                },
                J: function () {
                    return M.Yd
                },
                S: function () {
                    return 4
                },
                R: function () {
                    return {
                        $x: a,
                        Ql: b,
                        Ii: c,
                        cf: e,
                        Ji: g,
                        Wc: f,
                        Wd: h,
                        Rl: l,
                        kr: m,
                        Zg: n,
                        Hi: q,
                        select: y,
                        refresh: u,
                        focus: C,
                        blur: z,
                        Cg: E,
                        clear: G
                    }
                },
                ub: function () {
                    Jb && wa();
                    ib.vi && $.Wj(P, R.Sl)
                }
            };
        return Ac
    });
    rf.ia(M.of, 18, function () {
        function a(a, b) {
            if (!ca) return !1;
            na = b;
            F();
            for (var c = !1, e = 0, f; f = a[e++];) u(f) && (c = !0);
            return c
        }

        function b(a) {
            var b = B[a.J()];
            return b && b.Qt ? b.Qt(a) : !1
        }

        function c(a) {
            return B[a.J()].Tf(null, a, U)
        }

        function e(a) {
            var b = B[a.J()];
            if (b && b.ih) {
                var c = A.ic();
                return b.ih(a, c)
            }
            return a.Za()
        }

        function g(a, b) {
            if (!ca) return !1;
            na = b;
            F();
            for (var c = !1, e = 0, f; f = a[e++];)
                if (1 == f)
                    if (ra) va[s](ra);
                    else {
                        f = z();
                        var g = f[v];
                        g.textAlign = "center";
                        g.whiteSpace = "nowrap";
                        f.dir = pa;
                        g = xe();
                        g[v].position = "relative";
                        R =
                            xe();
                        r(R, "gssb_g");
                        Q.Gl && (R[v].paddingBottom = "1px");
                        C(Q.es, R, 13);
                        Q.Zr ? C(Q.ij, R, 8) : Q.$r && C(Q.fs, R, 14);
                        g[s](R);
                        f[s](g);
                        ra = f[kd]
                    } else if (2 == f)
                if (Fa) va[s](Fa);
                else f = z(), g = f[v], Ea(g, "1px 4px 2px 0"), g.fontSize = "11px", g.textAlign = "right", g = oe("a"), g.id = "gssb_b", Oa(g, "http://www.google.com/support/websearch/bin/answer.py?hl=" + Q.Xd + "&answer=106230"), Va(g, Q.ds), f[s](g), Fa = f[kd];
                else if (3 == f)
                if (f = V.pop()) va[s](f);
                else f = ca[Kc](-1), f.Rt = !0, f = f[Rc](-1), g = oe("div", "gssb_l"), f[s](g);
                else u(f) && (c = !0);
            return c
        }

        function f(a) {
            E(a, $);
            var b = N.zb();
            b && K.lb(9, {
                index: a,
                dy: b[a],
                ey: ha[a]
            })
        }

        function h(a) {
            E(a, "");
            K.lb(10)
        }

        function l() {
            for (var a, b, c; c = Y.pop();) a = c.J(), (b = ia[a]) || (b = ia[a] = []), b[D](c), a = c.Ba(), a[kd][Zc](a);
            for (; a = va[Ab];) a = va[Zc](a), a.Rt ? V[D](a) : a != ra && a != Fa && fa[D](a);
            ha = []
        }

        function m(a) {
            return (a = ha[a]) ? a.se() : !1
        }

        function n() {
            F()
        }

        function q() {
            return ca
        }

        function y() {
            return Q.Ol || pa == na ? wa : null
        }

        function u(a) {
            var b = a.J(),
                c = B[b];
            if (!c) return !1;
            var e = (b = ia[b]) && b.pop();
            e || (e = c.Sf(U));
            c.ka(a, e);
            Y[D](e);
            var f =
                e.Ba(),
                b = z();
            r(b, "gssb_a " + Q.Dm);
            b[s](f);
            if (void 0 !== a.Ed) {
                ha[D](e);
                var e = na,
                    g = a.Ed();
                Q.bs && (f.onmouseover = function () {
                    N.Rr(g)
                }, f.onmouseout = function () {
                    N.Qr()
                });
                fb(f, function (b) {
                    A.Si();
                    a.Sg() && A.Kg(a.Za());
                    N.Pr();
                    N.Mr(g);
                    b = b || Te(f)[pd];
                    c.fd(b, a, U)
                })
            } else e = pa;
            Ce(b, e);
            return !0
        }

        function C(a, b, c) {
            var e = oe("input");
            Ya(e, "button");
            Wa(e, Zd(a));
            fb(e, function () {
                U[w](A.Oa(), c)
            });
            var f;
            if (Q.Yr) {
                a = "lsb";
                f = oe("span");
                var g = oe("span");
                r(f, "ds");
                r(g, "lsbb");
                f[s](g);
                g[s](e)
            } else a = "gssb_h", f = e;
            r(e, a);
            b[s](f)
        }

        function z() {
            var a =
                fa.pop();
            if (a) return va[s](a), a[Ab];
            a = ca[Kc](-1);
            a = a[Rc](-1);
            r(a, Q.Dm);
            a.onmousedown = G;
            return a
        }

        function E(a, b) {
            var c = ha[a];
            c && c.se() && r(c.Ba()[kd][kd], b)
        }

        function G(a) {
            a = a || Te(ca)[pd];
            a[Vb] ? a[Vb]() : pe || qe && A.Hi();
            return !1
        }

        function F() {
            if (R) {
                var a = Q.Cm ? Q.Cm : A.Wd() - 3;
                0 < a && Da(R[v], a + "px")
            }
        }
        var N, K, A, B, U, aa, Q, ia = {}, Y = [],
            fa = [],
            V = [],
            ha = [],
            wa, na, pa, ca, va, ra, R, Fa, $, ba = {
                Sa: function (a, b) {
                    aa = a;
                    pa = a.Zd();
                    b[x](".gssb_a", "padding:0 7px");
                    b[x](".gssb_a,.gssb_a td", "white-space:nowrap;overflow:hidden;line-height:22px");
                    b[x]("#gssb_b", "font-size:11px;color:#36c;text-decoration:none");
                    b[x]("#gssb_b:hover", "font-size:11px;color:#36c;text-decoration:underline");
                    b[x](".gssb_g", "text-align:center;padding:8px 0 7px;position:relative");
                    b[x](".gssb_h", "font-size:15px;height:28px;margin:0.2em" + (We ? ";-webkit-appearance:button" : ""));
                    b[x](".gssb_i", "background:#eee");
                    b[x](".gss_ifl", "visibility:hidden;padding-left:5px");
                    b[x](".gssb_i .gss_ifl", "visibility:visible");
                    b[x]("a.gssb_j", "font-size:13px;color:#36c;text-decoration:none;line-height:100%");
                    b[x]("a.gssb_j:hover", "text-decoration:underline");
                    b[x](".gssb_l", "height:1px;background-color:#e5e5e5");
                    b[x](".gssb_m", "color:#000;background:#fff")
                },
                ca: function (a) {
                    N = a.get(M.Fb, ba);
                    K = a.get(M.hb, ba);
                    A = a.get(M.Fa, ba);
                    U = a.get(M.Qc, ba);
                    B = Re(a.tb(M[Hc], ba))
                },
                ib: function (a) {
                    Q = a;
                    ca = we();
                    a = oe("tbody");
                    ca[s](a);
                    va = ca[Pb]("tbody")[0]
                },
                Y: function (a) {
                    Q = a;
                    var b = a.Pl;
                    b && (wa = aa.Eg(b));
                    r(ca, a.Wl || "gssb_m");
                    $ = a.Vl || "gssb_i"
                },
                J: function () {
                    return M.of
                },
                S: function () {
                    return 18
                },
                R: function () {
                    return {
                        Or: a,
                        ih: e,
                        Ng: c,
                        $e: b,
                        ka: g,
                        Nr: f,
                        lh: h,
                        clear: l,
                        se: m,
                        qf: n,
                        Ba: q,
                        Qg: y
                    }
                }
            };
        return ba
    });
    rf.ia(M.zh, 346, function () {
        function a(a) {
            a = c.ta(a);
            for (var f in h) f in a || (a[f] = h[f]);
            b(e + Sd(a))
        }

        function b(a) {
            var b = new Image,
                c = f;
            b.onerror = Ca(b, b.onabort = function () {
                try {
                    delete g[c]
                } catch (a) {}
            });
            g[f] = b;
            b.src = a;
            f++
        }
        var c, e, g = [],
            f = 0,
            h, l = {
                ca: function (a) {
                    c = a.get(M.Zc, l)
                },
                Y: function (a) {
                    e = "//" + (a.Pt || "www." + a.Rn) + "/gen_204?";
                    h = a.Zm || {}
                },
                J: function () {
                    return M.zh
                },
                S: function () {
                    return 346
                },
                R: function () {
                    return {
                        Wg: a
                    }
                }
            };
        return l
    });
    rf.ia(M.oh, 21, function () {
        function a(a) {
            l(a);
            var b = a.Fc();
            if ((!b || !b.Do()) && y)
                for (b = 0; b < y[H]; ++b) y[b].update(a)
        }

        function b(a) {
            var b = q[a.Co()] || null;
            if (b)++u;
            else if (y && !a.Do())
                for (var c = 0; c < y[H]; ++c)
                    if (b = y[c].get(a)) {
                        l(b);
                        ++C;
                        break
                    }
            return b ? vf(a, b.zb(), b.ta(), b.Vj(), b.Ph(), b.Vu()) : null
        }

        function c() {
            return u
        }

        function e() {
            return C
        }

        function g() {
            C = u = 0
        }

        function f(a) {
            var b, c, e, f;
            for (f in q)
                for (b = q[f], b = b.zb(), e = 0; c = b[e++];)
                    if (c.J() == a) {
                        delete q[f];
                        break
                    }
            m()
        }

        function h() {
            q = {};
            m()
        }

        function l(a) {
            a && a.Ph() &&
                (q[a.Fc().Co()] = a)
        }

        function m() {
            if (y)
                for (var a = 0; a < y[H]; ++a) y[a][lc]()
        }

        function n(a, b) {
            return b.Va() - a.Va()
        }
        var q = {}, y, u, C, z = {
                ca: function (a) {
                    y = a.tb(M.oe, z);
                    y[ed](n)
                },
                Y: function () {
                    g()
                },
                J: function () {
                    return M.oh
                },
                S: function () {
                    return 21
                },
                R: function () {
                    return {
                        put: a,
                        get: b,
                        Ct: c,
                        Hj: e,
                        Yc: g,
                        Bt: f,
                        At: h
                    }
                }
            };
        return z
    });
    rf.ia(M.ed, 190, function () {
        function a() {
            q && m.vk(l)
        }

        function b() {
            q && m.Zh(l)
        }

        function c() {
            q && n.vk(l)
        }

        function e() {
            q && n.Zh(l)
        }
        var g, f, h, l, m, n, q = !1,
            y = {
                Sa: function (a, b) {
                    h = a;
                    var c = function (a) {
                        return "box-shadow:" + a + "-moz-box-shadow:" + a + "-webkit-box-shadow:" + a
                    };
                    b[x](".gsfe_a", "border:1px solid #b9b9b9;border-top-color:#a0a0a0;" + c("inset 0px 1px 2px rgba(0,0,0,0.1);"));
                    b[x](".gsfe_b", "border:1px solid #4d90fe;outline:none;" + c("inset 0px 1px 2px rgba(0,0,0,0.3);"))
                },
                ca: function (a) {
                    g = a.get(M.hb, y);
                    f = a.get(M.Fa,
                        y)
                },
                ib: function (f) {
                    var q = f.Ij;
                    if (l = q ? h.Eg(q) : null) g.Ib(12, c), g.Ib(13, e), g.ob(l, "mouseover", a), g.ob(l, "mouseout", b), m = Af(f.Kj || "gsfe_a"), n = Af(f.Jj || "gsfe_b")
                },
                Y: function () {
                    q = !0;
                    l && f.Am() && n.vk(l)
                },
                J: function () {
                    return M.ed
                },
                S: function () {
                    return 190
                },
                ub: function () {
                    q = !1;
                    l && (m.Zh(l), n.Zh(l))
                }
            };
        return y
    });
    var Af = function (a) {
        var b = Aa("(?:^|\\s+)" + a + "(?:$|\\s+)");
        return {
            vk: function (c) {
                c && !b[sc](c[Tc]) && r(c, c[Tc] + (" " + a))
            },
            Zh: function (a) {
                a && r(a, a[Tc][t](b, " "))
            }
        }
    };
    var Bf = function () {
        function a(a) {
            if ("keyup" == a.Uh()) {
                var b = Ld();
                if (m) {
                    var c = b - m;
                    e += c;
                    g += c * c
                }
                a = a.Db()[H];
                a < l && ++f;
                ++h;
                l = a;
                m = b
            }
        }

        function b() {
            return [e, g, h, f]
        }

        function c() {
            m = l = h = f = g = e = 0
        }
        var e, g, f, h, l, m;
        return {
            J: function () {
                return M.ed
            },
            S: function () {
                return 325
            },
            R: function () {
                return {
                    Jv: a,
                    bk: b,
                    Yc: c
                }
            }
        }
    };
    var Cf = function () {
        function a() {
            return 23
        }

        function b() {
            return f.bk()[nd]("j")[t](e, "j")[t](g, "")
        }

        function c() {
            f.Yc()
        }
        var e = /j0/g,
            g = /j+$/,
            f, h = {
                ca: function (a) {
                    f = a.Un(325, h)
                },
                J: function () {
                    return M.fh
                },
                S: function () {
                    return 337
                },
                R: function () {
                    return {
                        Ed: a,
                        uu: b,
                        reset: c
                    }
                }
            };
        return h
    };
    var Df = function () {
        function a(a) {
            c.Jv(a);
            return 1
        }

        function b() {
            return 17
        }
        var c, e = {
                ca: function (a) {
                    c = a.Un(325, e)
                },
                J: function () {
                    return M.sc
                },
                S: function () {
                    return 331
                },
                R: function () {
                    return {
                        jf: a,
                        Va: b
                    }
                }
            };
        return e
    };
    var Ef = function () {
        function a(a) {
            return C && u == a.Db() ? vf(a, C, uf, !0, !1, !1) : null
        }

        function b(a) {
            return !!a && 0 <= a[Jc]("**")
        }

        function c() {
            return F
        }

        function e() {
            F = ""
        }

        function g() {
            var a = !z || !n.Oa();
            a != E && (E ? G[mc]("x-webkit-speech") : G[Cb]("x-webkit-speech", ""), E = a)
        }

        function f(a, b) {
            b = Yd(b);
            a = Yd(Td(a, !0));
            for (var c = a[Ub](" "), e = b[Ub](" "), f, g = 0; g < e[H]; ++g) f = e[g], 0 > c[Jc](f) && (e[g] = f.bold());
            return e[nd](" ")[t](l, " ")
        }

        function h(a) {
            a = a && a.fv ? a.fv : [];
            var c = ma.min(a[H], 3);
            u = a[0].gv;
            q.add(6);
            if (b(u)) {
                C = [];
                for (var e =
                    0; e < c; ++e) {
                    var g = a[e].gv;
                    b(g) || C[D](wf(f(u, g), g, e, 40, null))
                }
            } else C = null, F = u, y[w](u, 15)
        }
        var l = /<\/b> <b>/gi,
            m, n, q, y, u, C, z, E, G, F = "",
            N = {
                Sa: function (a) {
                    G = a.Oi()
                },
                ca: function (a) {
                    m = a.get(M.hb, N);
                    n = a.get(M.Fa, N);
                    q = a.get(M.Uc, N);
                    y = a.get(M.Qc, N)
                },
                ib: function (a) {
                    z = a.vt;
                    g();
                    G[Cb]("x-webkit-grammar", "builtin:search");
                    "" != a.Xd && G[Cb]("lang", a.Xd);
                    m.uf(G, "webkitspeechchange", h);
                    z && (m.Ib(4, g), m.Ib(5, g), m.Ib(1, g))
                },
                J: function () {
                    return M.xf
                },
                S: function () {
                    return 90
                },
                R: function () {
                    return {
                        Lu: e,
                        Mu: c,
                        $u: a,
                        Em: b
                    }
                }
            };
        return N
    };
    var Gf = function () {
        function a(a) {
            return Ff(g, a)
        }

        function b(a, b) {
            b.ka(a.Zf(), a.Za(), f)
        }

        function c(a, b, c) {
            c[w](b.Za(), 1)
        }

        function e() {
            return 40
        }
        var g, f, h = {
                Sa: function (a, b) {
                    b[x](".gsq_a", "padding:0")
                },
                ca: function (a) {
                    g = a.get(M.Fa, h)
                },
                Y: function (a) {
                    f = a.Li ? a.ij : ""
                },
                J: function () {
                    return M[Hc]
                },
                S: function () {
                    return 30
                },
                R: function () {
                    return {
                        Sf: a,
                        ka: b,
                        fd: c,
                        Tf: Od,
                        bg: e
                    }
                }
            };
        return h
    };
    var Ff = function (a, b) {
        var c, e, g, f, h;
        (function () {
            c = xe();
            r(c, "gsq_a");
            var a = we();
            c[s](a);
            e = a[Kc](-1);
            a = e[Rc](-1);
            Da(a[v], "100%");
            g = oe("span");
            a[s](g)
        })();
        return {
            Ba: function () {
                return c
            },
            J: function () {
                return 40
            },
            se: function () {
                return !0
            },
            ka: function (c, m, n) {
                Va(g, c);
                h = m;
                n && !f && (f = Le(e), fb(f, function (c) {
                    a.Si();
                    a.Kg(h);
                    b[w](h, 9);
                    return Je(c)
                }));
                n ? (Va(f, n + " &raquo;"), Qa(f[v], "")) : f && Qa(f[v], "none")
            }
        }
    };
    var Hf = function () {
        function a(a) {
            var b = a.Uh();
            return c && "input" == b && c.Mu() == a.Db() ? (c.Lu(), 3) : 1
        }

        function b() {
            return 22
        }
        var c, e = {
                ca: function (a) {
                    c = a.get(M.xf, e)
                },
                J: function () {
                    return M.sc
                },
                S: function () {
                    return 465
                },
                R: function () {
                    return {
                        jf: a,
                        Va: b
                    }
                }
            };
        return e
    };
    var If = function () {
        function a() {
            return 1
        }

        function b(a) {
            var b = null;
            c && (b = c.$u(a));
            return b
        }
        var c, e = {
                J: function () {
                    return M.oe
                },
                ca: function (a) {
                    c = a.get(M.xf, e)
                },
                S: function () {
                    return 100
                },
                R: function () {
                    return {
                        Va: a,
                        update: Od,
                        get: b,
                        reset: Od
                    }
                }
            };
        return e
    };
    var Jf = function (a) {
        function b() {
            g.Am() || g.Oa() ? c() : a && !f && (g.Zg(a), f = !0)
        }

        function c() {
            if (f || void 0 == f) g.Zg("#fff"), f = !1
        }
        var e, g, f, h, l = {
                Sa: function (a) {
                    h = a.Oi()
                },
                ca: function (a) {
                    e = a.get(M.hb, l);
                    g = a.get(M.Fa, l)
                },
                ib: function () {
                    e.ob(h, "focus", c);
                    e.ob(h, "blur", b);
                    e.Ib(4, b);
                    e.Ib(5, b)
                },
                Y: function () {
                    b()
                },
                J: function () {
                    return M.ed
                },
                S: function () {
                    return 166
                },
                ub: function () {
                    c()
                }
            };
        return l
    };
    var Kf = function (a) {
        function b(b) {
            var c = e.DONT_CARE;
            if (g) {
                var l = b.Uh();
                "focus" == l || "blur" == l || "mousedown" == l ? c = e.Nm : (b.Gh("partnerid", a), b.setParameter("types", "t"))
            }
            return c
        }

        function c() {
            return 10
        }
        var e = jf,
            g;
        return {
            Y: function (a) {
                g = !! a.$d[66]
            },
            J: function () {
                return M.sc
            },
            S: function () {
                return 66
            },
            R: function () {
                return {
                    jf: b,
                    Va: c
                }
            }
        }
    };
    var Mf = function (a) {
        function b() {
            return Lf(a, g)
        }

        function c(a, b) {
            b.ka(a)
        }

        function e() {
            return 505
        }
        var g;
        return {
            Sa: function (a) {
                g = a.Zd()
            },
            J: function () {
                return M[Hc]
            },
            S: function () {
                return 182
            },
            R: function () {
                return {
                    Sf: b,
                    ka: c,
                    fd: Od,
                    Tf: Od,
                    bg: e
                }
            }
        }
    }, Lf = function (a, b) {
            var c, e = {
                    J: function () {
                        return 505
                    },
                    Ba: function () {
                        return c
                    },
                    ka: Od
                };
            (function () {
                c = xe();
                var e = c[v];
                e.backgroundImage = "url(" + a + ")";
                e.backgroundRepeat = "no-repeat";
                Sa(e, "18px");
                e.marginBottom = "2px";
                e.backgroundPosition = "bottom " + ("ltr" == b ? "right" : "left")
            })();
            return e
        };
    rf.ia(M.Cd, 181, function () {
        function a() {
            return 5
        }

        function b(a, b, g) {
            g[D]({
                J: function () {
                    return 505
                },
                position: 1
            })
        }
        return {
            J: function () {
                return M.Cd
            },
            S: function () {
                return 181
            },
            R: function () {
                return {
                    Va: a,
                    Wm: b
                }
            }
        }
    });
    var Of = function (a, b) {
        function c() {
            C = null;
            q && Va(q.Ba(), "")
        }

        function e(a, b) {
            var c = F[H];
            switch (a[zb]) {
            case K.cn:
                var e = h(b);
                if (0 > e) break;
                Ie(a);
                F[(e + 1) % c][xb]();
                break;
            case K.dn:
                e = h(b);
                if (0 > e) break;
                Ie(a);
                F[(e - 1 + c) % c][xb]();
                break;
            case K.Dh:
                G = !1;
                n[xb]();
                break;
            case K.wf:
                if (Ie(a), G = !1, a[jd]) n[xb]();
                else n.sk(), N && N[xb]()
            }
        }

        function g() {
            k[Tb](function () {
                G && 0 > h(p.activeElement) && (G = !1, n.Cg() || n.sk())
            }, 10)
        }

        function f() {
            var a = q.Ba();
            if (a[Lc]) return a[Lc]("cse-sayt-accessibility");
            for (var a = a[Pb]("a"), b = /\bcse-sayt-accessibility\b/,
                    c = [], e = 0; e < a[H]; e++) b[sc](a[e][Tc]) && c[D](a[e]);
            return c
        }

        function h(a) {
            for (var b = 0; b < F[H]; b++)
                if (F[b] == a) return b;
            return -1
        }

        function l(a, b, c, e) {
            b = null;
            a && (b = a[0], z.put(e ? c + e : c, b));
            c != y || e && e != u || (C = b, m())
        }

        function m() {
            q && C ? Va(q.Ba(), C) : c();
            b && b()
        }
        var n, q, y, u, C, z, E, G = !1,
            F, N, K = qf,
            A = {
                ca: function (a) {
                    n = a
                },
                bv: function (a) {
                    q = a;
                    m()
                },
                Eo: function () {
                    var b;
                    t: {
                        if (n) {
                            b = null;
                            if (n.Td()) b = n.Sd();
                            else if (n.Pc()) {
                                var e = n.Oc();
                                e && (b = Jd(e).zb()[0])
                            }
                            if (b) {
                                b = b.Za();
                                break t
                            }
                        }
                        b = null
                    }
                    e = E && E.restrictBy ? E.restrictBy : "";
                    if (y !=
                        b || e != u)
                        if (y = b, u = e, b) {
                            var f = z.get(e ? b + e : b);
                            f ? b != y || e && e != u || (C = f, m()) : (c(), a(b, l, A))
                        } else c()
                },
                ak: c,
                Ju: function () {
                    var a = f();
                    F = [];
                    for (var b = 0; b < a[H]; b++) {
                        var c = a[b];
                        c[Mc] ? (F[D](c), c[Mc]("keydown", function (a) {
                            e(a, a[Gc] ? a[Gc] : this)
                        }, !0), c[Mc]("blur", function () {
                            g()
                        }, !0)) : c[Mb] && (F[D](c), c[Mb]("onkeydown", function (a) {
                            e(a, a[Gc] ? a[Gc] : this)
                        }), c[Mb]("onblur", function () {
                            g()
                        }))
                    }
                    F[H] && (G = !0, k[Tb](function () {
                        N = p.activeElement;
                        F[0][xb]()
                    }, 10))
                },
                Hu: function () {
                    k[Tb](function () {
                        G || n.sk()
                    }, 20)
                },
                Iu: function (a) {
                    E = a
                }
            };
        z = Nf(36E5);
        return A
    };
    var Qf = function (a) {
        function b() {
            return Pf(g)
        }

        function c(b, c) {
            a.bv(c)
        }

        function e() {
            return 503
        }
        var g, f = {
                ca: function (a) {
                    g = a.get(M.Fb, f)
                },
                J: function () {
                    return M[Hc]
                },
                S: function () {
                    return 68
                },
                R: function () {
                    return {
                        Sf: b,
                        ka: c,
                        fd: Od,
                        Tf: Od,
                        bg: e
                    }
                }
            };
        return f
    }, Pf = function () {
            var a, b = {
                    J: function () {
                        return 503
                    },
                    Ba: function () {
                        return a
                    },
                    ka: Od
                };
            a = xe("cse-sayt-container");
            return b
        };
    rf.ia(M.Cd, 67, function () {
        function a() {
            return 4
        }

        function b(a, b, g) {
            g[D]({
                J: function () {
                    return 503
                },
                position: 1
            })
        }
        return {
            J: function () {
                return M.Cd
            },
            S: function () {
                return 67
            },
            R: function () {
                return {
                    Va: a,
                    Wm: b
                }
            }
        }
    });
    var Rf = function (a, b) {
        function c() {
            return 2
        }

        function e(c) {
            for (var e = [], h = [], l = c.zb(), m = !1, n = 0, q; q = l[n++];) 34 == q.J() ? h[H] < b && (h[D](q), q.ta().Ya("c") && (m = !0)) : e[H] < a && e[D](he(q, e[H]));
            for (n = 0; l = h[n++];) {
                q = l.ta();
                var y = {};
                y.a = q.Ya("a");
                y.b = q.Ya("b");
                y.c = q.Ya("c");
                y.d = q.Ya("d");
                y.e = m;
                e[D](wf("", "", e[H], l.J(), l.Ee(), xf(y)))
            }
            return vf(c.Fc(), e, c.ta(), c.Vj(), c.Ph(), !0)
        }
        return {
            J: function () {
                return M.gh
            },
            S: function () {
                return 171
            },
            R: function () {
                return {
                    Va: c,
                    Du: e
                }
            }
        }
    };
    rf.ia(M.oe, 98, function () {
        function a() {
            return 3
        }

        function b(a) {
            if (g) {
                var b = a.Fc(),
                    c = a.zb();
                if (c[H]) {
                    var e = b.Gd();
                    t: for (var b = Number.MAX_VALUE, l, m = 0; l = c[m++];) {
                        if (!f[l.J()]) {
                            b = -1;
                            break t
                        }
                        l = l.Za();
                        b = ma.min(l[H], b)
                    }
                    if (-1 != b) {
                        var n = c[0].Za();
                        if (ce(n, e, !0))
                            for (m = e[H] + 1; m <= b;) {
                                e = null;
                                for (l = 0; n = c[l++];) {
                                    n = n.Za();
                                    if (m > n[H]) return;
                                    n = n[Qb](0, m);
                                    if (!e) e = n;
                                    else if (e != n) return
                                }
                                h[e] = a;
                                ++m
                            }
                    }
                }
            }
        }

        function c(a) {
            if (g) {
                var b = h[a.Gd()];
                if (b) {
                    var c = a.wo(),
                        e = a.Gd();
                    b.Fc().Gd();
                    for (var f = b.ta(), n = m || !f.gn("k"), G = [], F, N, K = b.zb(),
                            A = 0, B; B = K[A++];) N = B.Za(), F = n ? l.bold(c, N) : Yd(N), G[D](wf(F, N, B.Ed(), B.J(), B.Ee(), B.ta()));
                    delete h[e];
                    return vf(a, G, f, !0, b.Ph(), !1)
                }
            }
            return null
        }

        function e() {
            h = {}
        }
        var g = !0,
            f, h = {}, l, m, n = {
                ca: function (a) {
                    l = a.get(M.Rh, n)
                },
                ib: function () {
                    f = Hd([0])
                },
                Y: function (a) {
                    m = a.lj;
                    g = a.lm
                },
                J: function () {
                    return M.oe
                },
                S: function () {
                    return 98
                },
                R: function () {
                    return {
                        Va: a,
                        update: b,
                        get: c,
                        reset: e
                    }
                },
                ub: function () {
                    g = !1
                }
            };
        return n
    });
    rf.ia(M[Hc], 169, function () {
        function a() {
            return Sf()
        }

        function b(a, b) {
            var c = a.ta();
            b.ka(c.Ya("a"), c.Ya("c"), c.Ya("d"), c.zv("e"))
        }

        function c(a, b) {
            return b
        }

        function e(a, b, c) {
            a = b.ta().Ya("b");
            (ce(a, "http://") || ce(a, "https://")) && c.Ge(a)
        }

        function g(a, b, c) {
            a = b.ta().Ya("b");
            (ce(a, "http://") || ce(a, "https://")) && c.Ge(a);
            return !0
        }

        function f() {
            return 34
        }
        return {
            Sa: function (a, b) {
                b[x](".gscsep_a", "display:none")
            },
            J: function () {
                return M[Hc]
            },
            S: function () {
                return 169
            },
            R: function () {
                return {
                    Sf: a,
                    ka: b,
                    ih: c,
                    fd: e,
                    Tf: g,
                    bg: f
                }
            }
        }
    });
    var Sf = function () {
        var a, b, c, e, g;
        (function () {
            a = xe();
            var f = we();
            r(f, "gsc-completion-promotion-table");
            a[s](f);
            var h = f[Kc](-1),
                f = function () {
                    var a = h[Rc](-1);
                    a[Cb]("valign", "top");
                    return a
                };
            c = f();
            e = oe("img");
            r(e, "gsc-completion-icon");
            b = xe();
            r(b, "gsc-completion-title");
            g = xe();
            r(g, "gsc-completion-snippet");
            f = f();
            f[s](b);
            f[s](g)
        })();
        return {
            Ba: function () {
                return a
            },
            J: function () {
                return 34
            },
            se: function () {
                return !0
            },
            ka: function (a, h, l, m) {
                h && (ce(h, "http://") || ce(h, "https://") || ce(h, "//")) ? (e.src = h, c[cc]() || c[s](e)) :
                    c[cc]() && c[Zc](e);
                r(c, m ? "gsc-completion-icon-cell" : "gscsep_a");
                Va(b, a);
                Va(g, l)
            }
        }
    };
    rf.ia(M[Hc], 20, function () {
        function a(a) {
            return Tf(g, a)
        }

        function b(a, b) {
            b.ka(a.Zf(), a.Za(), f)
        }

        function c(a, b, c) {
            c[w](b.Za(), 1)
        }

        function e() {
            return 0
        }
        var g, f, h = {
                Sa: function (a, b) {
                    b[x](".gsq_a", "padding:0")
                },
                ca: function (a) {
                    g = a.get(M.Fa, h)
                },
                Y: function (a) {
                    f = a.Li ? a.ij : ""
                },
                J: function () {
                    return M[Hc]
                },
                S: function () {
                    return 20
                },
                R: function () {
                    return {
                        Sf: a,
                        ka: b,
                        fd: c,
                        Tf: Od,
                        bg: e
                    }
                }
            };
        return h
    });
    var Tf = function (a, b) {
        var c, e, g, f, h;
        (function () {
            c = xe();
            r(c, "gsq_a");
            var a = we();
            c[s](a);
            e = a[Kc](-1);
            a = e[Rc](-1);
            Da(a[v], "100%");
            g = oe("span");
            a[s](g)
        })();
        return {
            Ba: function () {
                return c
            },
            J: function () {
                return 0
            },
            se: function () {
                return !0
            },
            ka: function (c, m, n) {
                Va(g, c);
                h = m;
                n && !f && (f = Le(e), fb(f, function (c) {
                    a.Si();
                    a.Kg(h);
                    b[w](h, 9);
                    return Je(c)
                }));
                n ? (Va(f, n + " &raquo;"), Qa(f[v], "")) : f && Qa(f[v], "none")
            }
        }
    };
    rf.ia(M.ke, 77, function () {
        function a() {
            return q
        }

        function b() {
            return 77
        }

        function c() {
            return 5
        }

        function e() {
            return C
        }

        function g() {
            return {
                ju: !y
            }
        }

        function f() {
            l[Gb](!0)
        }

        function h() {
            u && ((y = !! l.Oa()) && q ? n.ku(77) : n.iu(77))
        }
        var l, m, n, q, y, u, C, z, E = {
                Sa: function (a, b) {
                    z = a;
                    a.Hg() || (b[x](".gscb_a", "display:inline-block;font:27px/13px arial,sans-serif"), b[x](".gsst_a .gscb_a", "color:#a1b9ed;cursor:pointer"), b[x](".gsst_a:hover .gscb_a,.gsst_a:focus .gscb_a", "color:#36c"))
                },
                ca: function (a) {
                    l = a.get(M.Fa, E);
                    m = a.get(M.hb,
                        E);
                    n = a.get(M.ce, E)
                },
                ib: function (a) {
                    q = !! a.qh;
                    u = a.$m;
                    y = !u || !! l.Oa();
                    C = z.get("gs_cb");
                    C || (C = oe("span", "gscb_a"), C.id = z.jb("gs_cb"), Va(C, "&times;"));
                    m.Ib(4, h);
                    m.Ib(5, h);
                    m.Ib(1, h)
                },
                Y: function (a) {
                    a.Ci && (q = !! a.qh);
                    u = a.$m;
                    y = !u || !! l.Oa()
                },
                J: function () {
                    return M.ke
                },
                S: function () {
                    return 77
                },
                R: function () {
                    return {
                        isEnabled: a,
                        po: b,
                        Va: c,
                        Ba: e,
                        oo: g,
                        fd: f
                    }
                }
            };
        return E
    });
    rf.ia(M.ce, 174, function () {
        function a() {
            return 174
        }

        function b(a) {
            ca != a && (ia.dir = ca = a, f())
        }

        function c() {
            return ia
        }

        function e(a) {
            (a = fa[a]) && a[v] && Qa(a[v], "")
        }

        function g(a) {
            (a = fa[a]) && a[v] && Qa(a[v], "none")
        }

        function f() {
            V && (r(fa[V], "gsst_a"), K.zf(), V = null)
        }

        function h(a, b) {
            V = a;
            var c = fa[a];
            r(c, "gsst_a gsst_g");
            var e = ha.lastChild;
            e != b && (e == wa ? ha[s](b) : ha[tc](b, e));
            K.eh(174);
            K.show();
            c = c[Uc];
            Da(wa[v], c + "px");
            Xa(wa[v], "rtl" == ca ? "0" : ha[Uc] - c + "px")
        }

        function l(a, b) {
            V == a ? f() : h(a, b)
        }

        function m(a) {
            a.Zi = "rtl" == ca ?
                "left" : "right";
            a.Xn = !1
        }

        function n() {
            return ha
        }

        function q() {
            return Q.Ol || pa == ca ? va : null
        }

        function y() {
            f()
        }

        function u() {
            return 174
        }

        function C(a, b) {
            return b.Va() - a.Va()
        }

        function z() {
            na != V && f()
        }

        function E() {
            for (var a, b = 0, c; c = U[b++];)
                if (c[ec]()) {
                    a = !0;
                    var e = oe("a", "gsst_a");
                    N(e, c);
                    e[s](c.Ba());
                    ia[s](e)
                }
            Qa(ia[v], a ? "" : "none")
        }

        function G() {
            na = null
        }

        function F() {
            fa = {};
            for (var a = 0, b; b = U[a++];)
                if (b[ec]()) {
                    var c = b.po(),
                        e = b.Ba()[kd];
                    fb(e, b.fd);
                    e.onmouseover = function () {
                        na = c
                    };
                    e.onmouseout = G;
                    fa[c] = e;
                    b.oo && (b = b.oo(),
                        b.ju && g(c), (b = b.ly) && !aa.ek(e, b) && db(e, b))
                }
        }

        function N(a, b) {
            Oa(a, "javascript:void(0)");
            Ue(a);
            a.onkeydown = function (a) {
                a = a || k[pd];
                var c = a[zb];
                if (13 == c || 32 == c) b.fd(a), B.xr(), Je(a)
            }
        }
        var K, A, B, U, aa, Q, ia, Y, fa = {}, V, ha, wa, na, pa, ca, va, ra, R = {
                Sa: function (a, b) {
                    Y = a;
                    pa = a.Zd();
                    a.Hg() || (b[x](".gsst_a", "display:inline-block"), b[x](".gsst_a", "cursor:pointer;padding:0 4px"), b[x](".gsst_a:hover", "text-decoration:none!important"), b[x](".gsst_b", "font-size:16px;padding:0 2px;position:relative;" + b.prefix("user-select:none;") +
                        "white-space:nowrap"), b[x](".gsst_e", Qe(0.55)), b[x](".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e", Qe(0.72)), b[x](".gsst_a:active .gsst_e", Qe(1)), b[x](".gsst_f", "background:white;text-align:left"), b[x](".gsst_g", "background-color:white;border:1px solid #ccc;border-top-color:#d9d9d9;" + b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);") + "margin:-1px -3px;padding:0 6px"), b[x](".gsst_h", "background-color:white;height:1px;margin-bottom:-1px;position:relative;top:-1px"))
                },
                ca: function (a) {
                    K = a.get(M.Vc, R);
                    A =
                        a.get(M.hb, R);
                    B = a.get(M.Fa, R);
                    U = a.tb(M.ke, R);
                    aa = a.Pd()
                },
                ib: function (a) {
                    ra = a.Ci;
                    U[ed](C);
                    ia = Y.get("gs_st");
                    if (!ia) {
                        ia = xe("gsst_b");
                        ia.id = Y.jb("gs_st");
                        if (a = a.Ml) ia[v].lineHeight = a + "px";
                        E()
                    }
                    F()
                },
                Y: function (a) {
                    Q = a;
                    (a = a.Pl) && (va = Y.Eg(a));
                    if (ra) {
                        a = 0;
                        for (var b; b = U[a++];) {
                            var c = !! fa[b.po()];
                            if (b[ec]() != c) {
                                for (; ia[cc]();) ia[Zc](ia.lastChild);
                                E();
                                F();
                                break
                            }
                        }
                    }
                    wa = xe("gsst_h");
                    ha = xe("gsst_f");
                    ha.dir = "ltr";
                    ha[s](wa);
                    A.Ib(13, z)
                },
                J: function () {
                    return M.ce
                },
                S: a,
                R: function () {
                    return {
                        Ii: b,
                        Ba: c,
                        ku: e,
                        iu: g,
                        iy: f,
                        jy: h,
                        ky: l
                    }
                },
                tf: function () {
                    var b = {
                        jm: m,
                        Ba: n,
                        Qg: q,
                        km: y,
                        qf: Od,
                        kj: u
                    };
                    return [{
                        Sa: Od,
                        ca: Od,
                        ib: Od,
                        Y: Od,
                        J: function () {
                            return M.Pg
                        },
                        S: a,
                        R: function () {
                            return b
                        },
                        tf: Od,
                        ub: Od
                    }]
                }
            };
        return R
    });
    $e = function () {
        var a = k.navigator[Wb],
            b = function (b) {
                return 0 <= a[Jc](b)
            }, c = {};
        k.opera ? c[2] = !0 : b("MSIE") || b("Trident") ? c[0] = !0 : b("WebKit") ? (c[5] = !0, b("Chrome") ? c[3] = !0 : b("Android") ? c[7] = !0 : b("Safari") && (c[4] = !0), b("iPad") && (c[6] = !0)) : b("Gecko") && (c[1] = !0);
        return c
    };
    var Nf = function (a) {
        function b(a) {
            delete e[a];
            delete g[a]
        }

        function c(c) {
            if (a) {
                var e = Ld(),
                    l = g[c];
                l && l < e && b(c)
            }
        }
        var e = {}, g = {};
        return {
            put: function (b, c) {
                e[b] = c;
                if (null != a) {
                    var l = Ld() + a;
                    g[b] = l
                }
            },
            get: function (a) {
                c(a);
                return e[a] || null
            },
            contains: function (a) {
                c(a);
                return a in e
            },
            remove: b,
            reset: function () {
                e = {};
                g = {}
            }
        }
    };
    var Uf = function () {
        function a(a) {
            return {
                api: a,
                Qj: a.a,
                Y: a.b,
                ub: a.c,
                Zy: a.d,
                yu: a.e,
                ic: a.f,
                Oa: a.g,
                Pc: a.h,
                Td: a.i,
                bk: a.j,
                Au: a.k,
                Bu: a.l,
                dz: a.m,
                zu: a.n,
                Ug: a.o,
                sk: a.p,
                Ll: a.q,
                Yy: a.r,
                Wy: a.s,
                Vg: a.t,
                Kl: a.u,
                focus: a.v,
                blur: a.w,
                $l: a.x,
                Oc: a.y,
                qc: a.z,
                ez: a.aa,
                Yc: a.ab,
                search: a.ad,
                fz: a.ae,
                iz: a.af,
                Bg: a.ag,
                Sd: a.ah,
                jz: a.ai,
                Jl: a.al,
                Ul: a.am,
                ut: a.an,
                Ad: a.ao,
                st: a.ap,
                $y: a.aq,
                Bi: a.ar,
                jb: a.as,
                Xy: a.at,
                Ei: a.au,
                hz: a.av,
                Cg: a.aw,
                bm: a.ax,
                dh: a.ay,
                tt: a.az,
                Bh: a.ba,
                gz: a.bb,
                cz: a.bc,
                Wg: a.bd,
                bz: a.be,
                Em: a.bf
            }
        }
        return {
            kf: function (b, c, e, g) {
                try {
                    var f =
                        k.google.sbox(b, c, e, g);
                    return a(f)
                } catch (h) {
                    return null
                }
            },
            translate: function (b) {
                return a(b.api || b)
            }
        }
    };
    rf.ia(M.Sj, 170, function () {
        function a(a) {
            if (1 < a[H] && 34 != a[0].J())
                for (var c = 1, e; e = a[c]; ++c)
                    if (34 == e.J()) {
                        a[md](c, 0, 3);
                        break
                    }
        }
        return {
            J: function () {
                return M.Sj
            },
            S: function () {
                return 170
            },
            R: function () {
                return {
                    Ss: a
                }
            }
        }
    });
    k.google || (k.google = {});
    k.google.sbox = function (a, b, c, e) {
        function g() {
            B.ub()
        }

        function f(a) {
            fa.qc(a || "")
        }

        function h() {
            return Pa
        }

        function l() {
            return ba
        }

        function m() {
            return fa.Oa()
        }

        function n() {
            return R.Sd()
        }

        function q() {
            ia.lb(8)
        }

        function y(a) {
            return wa.ta(a)
        }

        function u() {
            return hb || !! aa && aa.Ad()
        }

        function C() {
            return ha.lt()
        }

        function z(a) {
            a = a.zm || fe();
            a = Te(a);
            void 0 == a.nextSearchboxId && (a.nextSearchboxId = 50);
            return a.nextSearchboxId++
        }

        function E() {
            if (a)
                for (var b = a; b = b[kd];) {
                    var c = b.dir;
                    if (c) return c
                }
            return "ltr"
        }

        function G(a) {
            a =
                ke(a);
            a.mf[35] || (a.Vr = "");
            var b = a.tm;
            b ? a.tm = b[od]() : a.Tr = !1;
            a.zi && !a.Li && (a.zi = !1);
            af || (a.yl = !1);
            return a
        }

        function F(a, b) {
            var c = b.exec(a);
            return c && c[1] ? sa(c[1], 10) || 0 : 0
        }

        function N() {
            var b = Te(a),
                c = Ne(b);
            ia.uf(b, "resize", function () {
                var a = Ne(b);
                if (a.bo != c.bo || a.Zn != c.Zn) c = a, q()
            })
        }

        function K(a) {
            var b = a.$d,
                c = b[M.cm],
                e = b[M.dj],
                f = b[M.fm],
                g = b[M.gm],
                h = b[M.ef],
                f = e || g || f;
            b[M.cj] || h || c || f ? (a.$d[M.cj] = !0, a.$d[M.dm] = !0, f ? (a = Kd(a.Xd), !e || Ve && (Ze || a) || qe && a ? (Pa = 3, b[M.dj] = !1, b[M.em] = !1) : Pa = 2) : Pa = 1) : Pa = 0
        }
        var A, B,
            U, aa, Q, ia, Y, fa, V, ha, wa, na, pa, ca, va, ra, R, Fa, $, ba, Pa, P = !1,
            hb, ja = {
                a: function (c) {
                    if (!P) {
                        c = G(c);
                        ba = null == e ? z(c) : e;
                        var f = Se(a),
                            g = E(),
                            h = !! f[Ec]("gs_id" + ba),
                            l = ["gssb_c", "gssb_k"];
                        c.Di && l[D](c.Di);
                        l = yf(c.zm, c.Ur, c.Sr, ba, l);
                        K(c);
                        hb = c.Ad;
                        B = sf(A, c.Pi || {}, {
                            Hg: function () {
                                return h
                            },
                            get: function (a) {
                                return f[Ec](a + ba)
                            },
                            Eg: function (a) {
                                return f[Ec](a)
                            },
                            Im: function () {
                                return b
                            },
                            Zd: function () {
                                return g
                            },
                            jb: function (a) {
                                return a + ba
                            },
                            Oi: function () {
                                return a
                            }
                        }, l, ja, c);
                        U = B.get(M.zh, ja);
                        aa = B.get(M.Rd, ja);
                        Q = B.get(M.Vc, ja);
                        ia = B.get(M.hb,
                            ja);
                        Y = B.get(M.Ub, ja);
                        fa = B.get(M.Fa, ja);
                        V = B.get(M.Yd, ja);
                        ha = B.get(M.Uc, ja);
                        wa = B.get(M.Zc, ja);
                        na = B.get(M.Nt, ja);
                        pa = B.get(M.Ot, ja);
                        ca = B.get(M.le, ja);
                        va = B.get(M.xf, ja);
                        ra = B.get(M.gc, ja);
                        R = B.get(M.Fb, ja);
                        Fa = B.get(M.ef, ja);
                        $ = B.get(M.Qc, ja);
                        N();
                        P = !0
                    }
                },
                b: function (a) {
                    g();
                    a = G(a);
                    K(a);
                    hb = a.Ad;
                    B.Y(a)
                },
                c: g,
                d: function () {
                    return b
                },
                e: function (a, b) {
                    return De(a, b)
                },
                f: function () {
                    return fa.ic()
                },
                g: m,
                h: function () {
                    return R.Pc()
                },
                i: function () {
                    return R.Td()
                },
                j: y,
                k: function (a, b) {
                    a || (a = wa.ta(b));
                    return Sd(a)
                },
                l: function () {
                    return R.Ze()
                },
                m: function () {
                    return R.hr()
                },
                n: function (a, b) {
                    ia.uf(a, "click", function (a) {
                        $[w](m(), b);
                        return Ie(a)
                    })
                },
                o: function () {
                    Y.Ug()
                },
                p: function () {
                    R.Ai()
                },
                q: function (a) {
                    fa.Ll(a || "")
                },
                r: function () {
                    return Q.Wc()
                },
                s: function () {
                    fa[Gb]()
                },
                t: function (a) {
                    return Y.Vg(a)
                },
                u: function () {
                    fa.Kl()
                },
                v: function () {
                    V[xb]()
                },
                w: function () {
                    V.blur()
                },
                x: function () {
                    return Y.$l()
                },
                y: function () {
                    var a = ra.Oc();
                    return a ? Id(a.Qn()) : null
                },
                z: f,
                aa: function (a) {
                    a = ca.bj(a);
                    return Id(a.Qn())
                },
                ab: function () {
                    wa[lc]()
                },
                ad: function (a, b) {
                    $[w](a, b)
                },
                ae: function () {
                    Fa &&
                        Fa[Ib]()
                },
                af: function (a) {
                    R.rl(a)
                },
                ag: function () {
                    R.Bg()
                },
                ah: n,
                ai: q,
                al: function () {
                    fa.Jl()
                },
                am: function () {
                    return B && B.Ul()
                },
                an: function (a) {
                    aa && aa.ut(a)
                },
                ao: u,
                ap: function () {
                    return u() && aa ? aa.st() : ""
                },
                aq: function (a, b) {
                    return Ee(a, b)
                },
                ar: h,
                as: l,
                at: function () {
                    Fa && Fa[Gb]()
                },
                au: function (a, b) {
                    f(a);
                    R[ec]() && R.Ei(a, b, !1)
                },
                av: function (a) {
                    ia.lb(15, {
                        Mg: a
                    })
                },
                aw: function () {
                    return V.Cg()
                },
                ax: function (a) {
                    Y.bm(a)
                },
                ay: function (a) {
                    Q.dh(a)
                },
                az: function (a) {
                    return !!pa && pa.tt(a)
                },
                ba: function () {
                    var a, b = ra.Oc();
                    if (b) {
                        var c =
                            b.xi();
                        c && ((a = c.Bh()) || (a = b.ta().Ya("o")))
                    }
                    return a || ""
                },
                bb: function (a, b) {
                    return na ? (na.cy(a, b), !0) : !1
                },
                bc: function (a, b) {
                    switch (a) {
                    case "oq":
                    case "gs_l":
                        return y(b)[a] || null;
                    case "gs_ssp":
                        var c;
                        t: {
                            if ((c = n()) && 46 == c.J() && (c = c.ta().Ya("g"))) break t;
                            c = null
                        }
                        return c;
                    default:
                        return null
                    }
                },
                bd: function (a) {
                    U && U.Wg(a)
                },
                be: C,
                bf: function (a) {
                    return 6 == C() && !! va && va.Em(a)
                },
                jb: l,
                Bi: h
            };
        A = zf(c);
        (function (a) {
            var b = A.Uj(),
                c = F(a, /Version\/(\d+)/);
            c || (c = F(a, /(?:Android|Chrome|Firefox|Opera|MSIE)[\s\/](\d+)/));
            c || (c =
                F(a, /Trident[^)]*rv:(\d+)/));
            a = c;
            ne = (qe = b[0]) && 8 >= a;
            me = qe && 7 >= a;
            Ve = b[1];
            pe = b[2];
            We = b[5];
            Xe = b[4];
            af = b[3];
            Ye = b[7]
        })(k.navigator[Wb]);
        Ze = /Mac/ [sc](qa && (qa.platform || qa.appVersion) || "");
        return ja
    };
    var Vf = function () {
        function a(a) {
            var b = !0;
            void 0 != a && (b = a == u.$g, u.$g = a);
            q ? b || q.Y(u) : (q = Uf().kf(G, z, ca), q.Qj(u), K && K.ca(q))
        }

        function b(a) {
            q.qc(a)
        }

        function c(a) {
            return a + (0 <= a[Jc]("?") ? "&" : "?") + q.Au()
        }

        function e() {
            ha && ha()
        }

        function g(b, c, e, g) {
            z = b;
            G = c;
            wa = e;
            var m = g.onRenderCallback;
            m && (ha = function () {
                try {
                    m()
                } catch (a) {}
            });
            u = f();
            l(u, g);
            h(e, u);
            a();
            g.searchButton && q.zu(g.searchButton, 12)
        }

        function f() {
            var a = y.kf();
            a.Ui = "partner";
            a.Vi = "partner";
            a.Xl = "cse";
            a.hu = !0;
            a.Zm = {
                partnerid: wa
            };
            a.Nl = !0;
            a.Mi = "gsc-input";
            a.Wl = "gsc-completion-container";
            a.Vl = "gsc-completion-selected";
            Q && (a.Ij = G.id, a.Kj = "gsc-input-hover", a.Jj = "gsc-input-focus");
            a.re = [-1, 0, 0];
            a.lj = !0;
            a.Ad = !0;
            a.qh = !1;
            a.spellcheck = !1;
            a.mf = Hd([0, 34]);
            a.$d[66] = !0;
            return a
        }

        function h(a, b) {
            var c = {}, e = c[M.ed] = [162];
            if (N || A) c[M[Hc]] = [N ? Qf(K) : Mf(A), 162];
            le(c, M.sc, Kf(a));
            le(c, M.ed, Bf());
            le(c, M.sc, Df());
            le(c, M.fh, Cf());
            B && e[D](Jf(B));
            le(c, M.gh, Rf(U, aa));
            b.Pi = c;
            Y && (c = b.Pi, c[M.xf] = Ef(), le(c, M.sc, Hf()), le(c, M.oe, If()), le(c, M[Hc], Gf()))
        }

        function l(a, b) {
            if (ia = !! b.useKennedyLookAndFeel) Q &&
                (a.Ij = G[kd].id, a.Kj = "gsc-input-box-hover", a.Jj = "gsc-input-box-focus"), a.re = [3, -1, 2], a.qh = !0;
            b.interfaceLanguage && (a.Xd = b.interfaceLanguage);
            b.disableAutoCompletions && (a.$g = !0);
            U = sa(b.maxSuggestions, 10);
            var c = b.saytSubmit;
            c && (K = Of(c, ha), b.saytExtraParameters && K.Iu(b.saytExtraParameters), a.mf[503] = !0, a.mf[34] = !1, b.saytKeyboardNavigationEnabled && (a.Lg = 4, a.vi = !1, pa = !0), N = !0);
            0 <= U || (U = c ? 5 : 10);
            aa = sa(b.maxPromotions, 10);
            0 <= aa || (aa = 3);
            a.Wi = "gsnos,n=" + (U + 3);
            (A = b.brandingImageUrl) && (B = b.brandingImageStyle +
                " url(" + A + ")");
            if (c = b.styleOptions) {
                var e = c.xOffset || 0,
                    f = c.yOffset || 0,
                    g = c.widthOffset || 0,
                    h = c.fixedWidth;
                fa = !! c.allowWordWrapping;
                var l = a.re;
                l[0] += f;
                l[1] += e;
                l[2] += g;
                a.im = h;
                a.Hl = c.xAlign;
                c.positionFixed && (a.Cf = "fixed")
            }
            Y = !! b.enableSpeech
        }

        function m() {
            q.Wg(V)
        }
        var n = {
            iv: "oq",
            jv: "gs_l"
        }, q, y, u, C, z, E, G, F, N = !1,
            K, A, B, U, aa, Q, ia, Y, fa = !1,
            V, ha, wa, na = !1,
            pa = !1,
            ca = {
                Y: a,
                Qj: function (a, b, c, e) {
                    g(a, b, c, e);
                    if (e.isLoggingWithHiddenFormFields) {
                        F = {};
                        for (var f in n) a = n[f], F[a] = q.yu(z, a)
                    } else na = !0, z && (z[Mc] ? z[Mc]("submit",
                        m, !1) : z[Mb] && z[Mb]("onsubmit", m))
                },
                br: function (a, b, c, e) {
                    Q = c;
                    g(a, b, Q.Yh() || "", e);
                    e.enableAsynchronousLogging && (na = !0)
                },
                $t: function (a, b, c, e) {
                    g(null, b, c, e);
                    na = !0;
                    E = a
                },
                qc: b,
                Oa: function () {
                    return q.Oa()
                },
                a: function () {
                    return C
                },
                b: function (a, c) {
                    a != G[Ic] && (Q && k[jc] && k[jc].log && k[jc].log("Programmatically setting input.value? Please consider using prefillQuery() or execute() from google.search.SearchControl instead."), a = G[Ic], b(a));
                    if (Xd(a)) {
                        V = c;
                        na && (Q || E) && m();
                        var e = q.bk(V);
                        if (F) {
                            var f = n.iv;
                            F[f] && Wa(F[f],
                                e[f]);
                            f = n.jv;
                            F[f] && Wa(F[f], e[f])
                        }
                        Q ? (a != q.Oa() && q.qc(a), na ? Q[wc]() : Q.kv(e)) : E ? E(e) : z && (z.fireEvent && p.createEventObject ? (e = p.createEventObject(), z.fireEvent("onsubmit", e) && z[wc]()) : z.dispatchEvent && p.createEvent ? (e = p.createEvent("HTMLEvents"), e.initEvent("submit", !0, !0), z.dispatchEvent(e) && z[wc]()) : z.onsubmit && !1 == z.onsubmit() || z[wc]());
                        V = null
                    }
                },
                c: function (a) {
                    k.location = a
                },
                d: function (a) {
                    k.location = c(a)
                },
                e: c,
                j: function () {
                    K && K.Eo()
                },
                o: e,
                p: e,
                r: function (a) {
                    if (Q)
                        if (ia) a[x](".gssb_a", "padding:0 9px"), a[x](".gsib_a",
                            "padding-right:8px;padding-left:8px"), a[x](".gsst_a", "padding-top:3px");
                        else a[x](".gssb_a", "padding:0 7px");
                        else a[x](".gssb_a", "padding:0 2px");
                    a[x](".gssb_e", "border:0");
                    a[x](".gssb_l", "margin:5px 0");
                    a[x](".gssb_c .gsc-completion-container", "position:static");
                    a[x](".gssb_c", "z-index:5000");
                    a[x](".gsc-completion-container table", "background:transparent;font-size:inherit;font-family:inherit");
                    a[x](".gssb_c > tbody > tr,.gssb_c > tbody > tr > td,.gssb_d,.gssb_d > tbody > tr,.gssb_d > tbody > tr > td,.gssb_e,.gssb_e > tbody > tr,.gssb_e > tbody > tr > td",
                        "padding:0;margin:0;border:0");
                    a[x](".gssb_a table,.gssb_a table tr,.gssb_a table tr td", "padding:0;margin:0;border:0");
                    N && a[x](".cse-sayt div", "white-space:normal");
                    fa && a[x](".gssb_a,.gssb_a td", "white-space:normal")
                },
                w: function () {
                    K && K.Eo()
                },
                x: function () {
                    Q && Q.vc()
                },
                y: function () {
                    K && pa && K.Hu()
                },
                ab: function () {
                    K && pa && q.Bu() && K.Ju()
                }
            };
        C = $e();
        y = of();
        return ca
    };
    google[w].T = {};
    google[w].T.Ww = "ar" == ya || "iw" == ya || "fa" == ya;
    google[w].T.Iq = google[w].T.Ww ? -1 : 1;
    google[w].T.Kc = new Gd(google[w].T.Iq);
    google[w].T.wh = google[w].T.Kc.Hq(google[w].T.Iq);
    google[w].T.qq = google[w].T.Kc.Px();
    google[w].T.Oz = google[w].T.Kc.mx();
    google[w].T.df = function (a, b) {
        return google[w].T.Kc.wq(a, !1, b)
    };
    google[w].T.bl = function (a, b) {
        return google[w].T.Kc.wq(a, !0, b)
    };
    google[w].T.pw = function (a) {
        return a ? google[w].T.Kc.tq(a, !1) : google[w].T.wh
    };
    google[w].T.Dk = function (a) {
        return a ? google[w].T.Kc.tq(a, !0) : google[w].T.wh
    };
    google[w].T.rw = function (a) {
        return a ? google[w].T.Kc.uq(a, !1) : ""
    };
    google[w].T.qw = function (a) {
        return a ? google[w].T.Kc.uq(a, !0) : ""
    };
    google[w].NoOldNames || (ea("UDS_ServiceBase", google[fd][Pc]), ea("UDS_ApiKey", google[fd].ApiKey), ea("UDS_KeyVerified", google[fd].KeyVerified), ea("UDS_LoadFailure", google[fd].LoadFailure), ea("UDS_CurrentLocale", ya), ea("UDS_ShortDatePattern", ka), ea("UDS_Version", google[w][Vc]), ea("UDS_JSHash", google[w].JSHash));
    var O = {
        blank: "&nbsp;"
    };
    O.image = _UDS_MSG_SEARCHER_IMAGE;
    O.web = _UDS_MSG_SEARCHER_WEB;
    O.blog = _UDS_MSG_SEARCHER_BLOG;
    O.video = _UDS_MSG_SEARCHER_VIDEO;
    O.local = _UDS_MSG_SEARCHER_LOCAL;
    O.news = _UDS_MSG_SEARCHER_NEWS;
    O.book = _UDS_MSG_SEARCHER_BOOK;
    O.patent = _UDS_MSG_SEARCHER_PATENT;
    O["ads-by-google"] = _UDS_MSG_ADS_BY_GOOGLE;
    O.save = _UDS_MSG_SEARCHCONTROL_SAVE;
    O.keep = _UDS_MSG_SEARCHCONTROL_KEEP;
    O.include = _UDS_MSG_SEARCHCONTROL_INCLUDE;
    O.copy = _UDS_MSG_SEARCHCONTROL_COPY;
    O.close = _UDS_MSG_SEARCHCONTROL_CLOSE;
    O["sponsored-links"] = _UDS_MSG_SEARCHCONTROL_SPONSORED_LINKS;
    O["see-more"] = _UDS_MSG_SEARCHCONTROL_SEE_MORE;
    O.watermark = _UDS_MSG_SEARCHCONTROL_WATERMARK;
    O["search-location"] = _UDS_MSG_SEARCHER_CONFIG_SET_LOCATION;
    O["disable-address-lookup"] = _UDS_MSG_SEARCHER_CONFIG_DISABLE_ADDRESS_LOOKUP;
    O["sort-by-date"] = _UDS_MSG_SORT_BY_DATE;
    O.pbg = _UDS_MSG_BRANDING_STRING;
    O["n-minutes-ago"] = _UDS_MSG_MINUTES_AGO;
    O["n-hours-ago"] = _UDS_MSG_HOURS_AGO;
    O["one-hour-ago"] = _UDS_MSG_ONE_HOUR_AGO;
    O["all-n-related"] = _UDS_MSG_NEWS_ALL_N_RELATED;
    O["related-articles"] = _UDS_MSG_NEWS_RELATED;
    O["page-count"] = _UDS_MSG_TOTAL_PAGE_COUNT;
    var Wf = [];
    Wf[0] = _UDS_MSG_MONTH_ABBR_JAN;
    Wf[1] = _UDS_MSG_MONTH_ABBR_FEB;
    Wf[2] = _UDS_MSG_MONTH_ABBR_MAR;
    Wf[3] = _UDS_MSG_MONTH_ABBR_APR;
    Wf[4] = _UDS_MSG_MONTH_ABBR_MAY;
    Wf[5] = _UDS_MSG_MONTH_ABBR_JUN;
    Wf[6] = _UDS_MSG_MONTH_ABBR_JUL;
    Wf[7] = _UDS_MSG_MONTH_ABBR_AUG;
    Wf[8] = _UDS_MSG_MONTH_ABBR_SEP;
    Wf[9] = _UDS_MSG_MONTH_ABBR_OCT;
    Wf[10] = _UDS_MSG_MONTH_ABBR_NOV;
    Wf[11] = _UDS_MSG_MONTH_ABBR_DEC;
    O["month-abbr"] = Wf;
    O.directions = _UDS_MSG_DIRECTIONS;
    O["clear-results"] = _UDS_MSG_CLEAR_RESULTS;
    O["show-one-result"] = _UDS_MSG_SHOW_ONE_RESULT;
    O["show-more-results"] = _UDS_MSG_SHOW_MORE_RESULTS;
    O["show-all-results"] = _UDS_MSG_SHOW_ALL_RESULTS;
    O.settings = _UDS_MSG_SETTINGS;
    O.search = _UDS_MSG_SEARCH;
    O["search-uc"] = _UDS_MSG_SEARCH_UC;
    O["powered-by"] = _UDS_MSG_POWERED_BY;
    O.sa = _UDS_MSG_SEARCHER_GSA;
    O.by = _UDS_MSG_SEARCHER_BY;
    O.code = _UDS_MSG_SEARCHER_CODE;
    O["unknown-license"] = _UDS_MSG_UNKNOWN_LICENSE;
    O["more-results"] = _UDS_MSG_SEARCHCONTROL_MORERESULTS;
    O.previous = _UDS_MSG_SEARCHCONTROL_PREVIOUS;
    O.next = _UDS_MSG_SEARCHCONTROL_NEXT;
    O["get-directions"] = _UDS_MSG_GET_DIRECTIONS;
    O["to-here"] = _UDS_MSG_GET_DIRECTIONS_TO_HERE;
    O["from-here"] = _UDS_MSG_GET_DIRECTIONS_FROM_HERE;
    O["clear-results-uc"] = _UDS_MSG_CLEAR_RESULTS_UC;
    O["search-the-map"] = _UDS_MSG_SEARCH_THE_MAP;
    O["scroll-results"] = _UDS_MSG_SCROLL_THROUGH_RESULTS;
    O["edit-tags"] = _UDS_MSG_EDIT_TAGS;
    O["tag-search"] = _UDS_MSG_TAG_THIS_SEARCH;
    O["search-string"] = _UDS_MSG_SEARCH_STRING;
    O["optional-label"] = _UDS_MSG_OPTIONAL_LABEL;
    O["delete"] = _UDS_MSG_DELETE;
    O.deleted = _UDS_MSG_DELETED;
    O.cancel = _UDS_MSG_CANCEL;
    O["upload-video"] = _UDS_MSG_UPLOAD_YOUR_VIDEOS;
    O["im-done"] = _UDS_MSG_IM_DONE_WATCHING;
    O["close-player"] = _UDS_MSG_CLOSE_VIDEO_PLAYER;
    O["no-results"] = _UDS_MSG_NO_RESULTS;
    O["linked-cse-error-results"] = _UDS_MSG_LINKEDCSE_ERROR_RESULTS;
    O.back = _UDS_MSG_BACK;
    O.subscribe = _UDS_MSG_SUBSCRIBE;
    O["us-pat"] = _UDS_MSG_USPAT;
    O["us-pat-app"] = _UDS_MSG_USPAT_APP;
    O["us-pat-filed"] = _UDS_MSG_PATENT_FILED;
    O.dym = _UDS_MSG_DID_YOU_MEAN;
    O["showing-results-for"] = _UDS_MSG_SHOWING_RESULTS_FOR;
    O["search-instead-for"] = _UDS_MSG_SEARCH_INSTEAD_FOR;
    O["custom-search"] = _UDS_MSG_CUSTOM_SEARCH;
    O.labeled = _UDS_MSG_LABELED;
    O.loading = _UDS_MSG_LOADING;
    O["all-results-short"] = _UDS_MSG_ALL_RESULTS_SHORT;
    O["all-results-long"] = _UDS_MSG_ALL_RESULTS_LONG;
    O["refine-results"] = _UDS_MSG_REFINE_RESULTS;
    O["result-info"] = _UDS_MSG_RESULT_INFO;
    O["file-format"] = _UDS_MSG_FILE_FORMAT;
    O["order-results-by"] = _UDS_MSG_ORDER_BY;
    O["order-by-relevance"] = _UDS_MSG_ORDER_BY_RELEVANCE;
    O["order-by-date"] = _UDS_MSG_ORDER_BY_DATE;

    function Xf(a, b) {
        var c = function () {};
        c.prototype = b[I];
        a.prototype = new c;
        a[I].WA = function (b, c, f, h) {
            var l = oa[I][md][kc](arguments, [1, arguments[H]]);
            return b[kc](a, l)
        }
    }
    var _json_cache_defeater_ = (new Date)[Ob](),
        _json_request_require_prep = !0;

    function Zf(a, b) {
        $f("msie") && ("msie 6.0" in ag ? ag["msie 6.0"] : ag["msie 6.0"] = -1 != qa.appVersion[od]()[Jc]("msie 6.0")) ? k[Tb](bg(this, cg, [a, b]), 0) : cg(a, b)
    }

    function dg(a) {
        _json_request_require_prep = !1;
        Zf(a, null);
        _json_request_require_prep = !0
    }

    function cg(a, b) {
        var c = p[Pb]("head")[0];
        c || (c = p[Xc][kd][s](p[yb]("head")));
        var e = p[yb]("script");
        Ya(e, "text/javascript");
        e.charset = "utf-8";
        var g = _json_request_require_prep ? a + "&key=" + google[fd].ApiKey + "&v=" + b : a;
        if (eg() || $f("safari") || $f("konqueror")) g = g + "&nocache=" + _json_cache_defeater_++;
        e.src = g;
        var f = function () {
            Ca(e, null);
            e[kd][Zc](e)
        }, g = function (a) {
                a = (a ? a : k[pd])[$c] ? (a ? a : k[pd])[$c] : (a ? a : k[pd])[Gc];
                if ("loaded" == a.readyState || "complete" == a.readyState) a.onreadystatechange = null, f()
            };
        "Gecko" == qa.product ?
            Ca(e, f) : e.onreadystatechange = g;
        c[s](e)
    }

    function fg(a, b) {
        return function () {
            return b[kc](a, arguments)
        }
    }

    function bg(a, b, c) {
        return function () {
            return b[kc](a, c || [])
        }
    }

    function gg(a) {
        for (; a[Ab];) a[Zc](a[Ab])
    }

    function hg(a, b) {
        if (a) try {
            gg(a), a[s](b)
        } catch (c) {}
        return b
    }

    function T(a, b) {
        try {
            a[s](b)
        } catch (c) {}
        return b
    }

    function ig(a) {
        return p[tb](a ? a : "")
    }

    function W(a, b) {
        var c = p[yb]("div");
        a && Va(c, a);
        b && r(c, b);
        return c
    }

    function jg(a, b) {
        var c = p[yb]("div");
        a && T(c, ig(a));
        b && r(c, b);
        return c
    }

    function X(a) {
        var b = p[yb]("div");
        a && r(b, a);
        return b
    }

    function kg(a, b) {
        var c = p[yb]("span");
        a && T(c, ig(a));
        b && r(c, b);
        return c
    }

    function lg(a, b, c) {
        var e = p[yb]("table");
        e[Cb]("cellSpacing", a ? a : 0);
        e[Cb]("cellPadding", b ? b : 0);
        c && r(e, c);
        return e
    }

    function mg(a, b, c) {
        (a = a[Kc](-1)) || alert(a);
        for (var e = 0; e < b; e++) ng(a, c);
        return a
    }

    function ng(a, b) {
        var c = a[Rc](-1);
        b && r(c, b);
        return c
    }

    function og(a, b, c, e) {
        var g = p[yb]("img");
        g.src = a;
        b && Da(g, b);
        c && Sa(g, c);
        e && r(g, e);
        return g
    }

    function pg(a, b, c, e, g) {
        var f = p[yb]("a");
        Oa(f, a);
        b && (e ? T(f, kg(b, e)) : T(f, ig(b)));
        c && eb(f, c);
        g && db(f, g);
        return f
    }

    function qg(a, b, c, e, g, f) {
        var h = W(null, e),
            l = p[yb]("a");
        Oa(l, a);
        Va(l, b);
        e && r(l, e);
        c && eb(l, c);
        g && db(l, g);
        if (f)
            for (var m in f) l[Cb](m, f[m]);
        h[s](l);
        return h
    }

    function rg(a) {
        var b = p[yb]("form");
        a && r(b, a);
        return b
    }

    function sg(a, b) {
        var c = p[yb]("input");
        Ya(c, "submit");
        Wa(c, a);
        b && r(c, b);
        return c
    }

    function tg(a, b, c) {
        var e = p[yb]("input");
        e[Cb]("autoComplete", "off");
        Ya(e, "text"); - 1 == a ? Z(e, "util-css-expand") : e.size = 0 < a ? a : 10;
        b && Z(e, b);
        c && Wa(e, c);
        return e
    }

    function ug(a, b, c, e) {
        var g = p[yb]("input");
        Ya(g, "checkbox");
        g.name = a;
        Wa(g, b);
        e && r(g, e);
        c && Ia(g, c);
        return g
    }

    function vg(a, b) {
        b ? (a.tabIndex = 0, fb(a, b), a.onkeypress = function (c) {
            c = c || k[pd];
            c[zb] && 13 == c[zb] && b[ad](a, c)
        }) : (a.tabIndex = -1, a[mc]("tabIndex"), fb(a, null), a.onkeypress = null)
    }

    function wg(a, b) {
        if (null == a || null == a[Tc]) return !1;
        for (var c = a[Tc][Ub](" "), e = 0; e < c[H]; e++)
            if (c[e] == b) return !0;
        return !1
    }

    function Z(a, b) {
        wg(a, b) || r(a, a[Tc] + (" " + b))
    }

    function xg(a, b) {
        if (null != a[Tc]) {
            for (var c = a[Tc][Ub](" "), e = [], g = !1, f = 0; f < c[H]; f++) c[f] != b ? c[f] && e[D](c[f]) : g = !0;
            g && r(a, e[nd](" "))
        }
    }
    var yg = "",
        zg = {
            fx: {
                dB: 1,
                fB: 1,
                nB: 1,
                id: 1,
                oB: 1,
                "in": 1,
                pB: 1,
                rB: 1,
                sB: 1,
                tB: 1,
                uB: 1,
                DB: 1,
                OB: 1,
                SB: 1,
                TB: 1,
                WB: 1,
                XB: 1,
                ZB: 1
            },
            eB: {
                XA: 1,
                ZA: 1,
                $A: 1,
                aB: 1,
                bB: 1,
                cB: 1,
                fx: 1,
                gB: 1,
                "do": 1,
                hB: 1,
                iB: 1,
                jB: 1,
                kB: 1,
                lB: 1,
                mB: 1,
                qB: 1,
                vB: 1,
                wB: 1,
                xB: 1,
                yB: 1,
                zB: 1,
                AB: 1,
                BB: 1,
                CB: 1,
                FB: 1,
                GB: 1,
                HB: 1,
                IB: 1,
                JB: 1,
                KB: 1,
                LB: 1,
                MB: 1,
                NB: 1,
                PB: 1,
                QB: 1,
                RB: 1,
                UB: 1,
                VB: 1,
                YB: 1
            },
            EB: {
                YA: 1
            }
        };

    function $f(a) {
        return a in Ag ? Ag[a] : Ag[a] = -1 != qa[Wb][od]()[Jc](a)
    }
    var Ag = {}, ag = {};

    function eg() {
        return $f("msie")
    }
    var Bg, Cg;
    k.ActiveXObject && (Bg = !0, k.XMLHttpRequest && (Cg = !0));

    function Dg(a) {
        this.cl = a + "branding";
        this.pi = a + "branding-vertical";
        this.yq = a + "branding-img-noclear";
        this.Fw = a + "branding-clickable";
        this.text = a + "branding-text";
        this.Gw = a + "branding-text-name"
    }

    function Eg(a, b, c, e, g) {
        var f = new Dg(a);
        a = X(f.cl);
        var h = lg(null, null, f.cl);
        T(a, h);
        var l = !c;
        l || (Z(a, f.pi), Z(h, f.pi));
        var m = mg(h, 0),
            n;
        l ? n = m : (n = m, m = mg(h, 0));
        var q = "/css/small-logo.png",
            y = 51,
            u = 15;
        e && "string" == typeof e && e[wb](/^http:\/\/www\.youtube\.com/) && (q = "/css/youtube-logo-55x24.png", y = 55, u = 24, Z(a, f.cl + "-youtube"), l || (Z(a, f.pi + "-youtube"), Z(h, f.pi + "-youtube")));
        n = ng(n, f[xc]);
        var l = ng(m, f.yq),
            C = W(O["powered-by"], f[xc]),
            q = google[fd][Pc] + q,
            z = f.yq;
        Bg && !Cg ? (z = X(z), z[v].filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' +
            q + '")', Da(z[v], y + "px"), Sa(z[v], u + "px")) : z = og(q, null, null, z);
        u = z;
        T(n, C);
        e ? (n = "http://www.google.com", "string" == typeof e && (e[wb](/^http:\/\/[a-z]*\.google\.com/) || e[wb](/^http:\/\/www\.youtube\.com/)) && (n = e), e = pg(n, null, "_BLANK"), r(e, f.Fw), T(e, u), T(l, e)) : T(l, u);
        g && (e = m, c && (e = mg(h, 0)), c = f[xc] + " " + f.Gw, f = ng(e, c), T(f, jg(g, c)));
        b && (b = "string" == typeof b ? p[Ec](b) : b, gg(b), T(b, a));
        return a
    }
    var Fg = function (a, b, c) {
        b = b && "*" != b ? b.toUpperCase() : "";
        if (c && a[Lc]) {
            a = a[Lc](c);
            if (b) {
                for (var e = {}, g = 0, f = 0, h; h = a[f]; f++) b == h.nodeName && (e[g++] = h);
                e.length = g;
                return e
            }
            return a
        }
        a = a[Pb](b || "*");
        if (c) {
            e = {};
            for (f = g = 0; h = a[f]; f++) wg(h, c) && (e[g++] = h);
            e.length = g;
            return e
        }
        return a
    };

    function Gg(a) {
        var b = [];
        if (a)
            for (var c in a) null != a[c] && b[D](d(c) + "=" + d(a[c]));
        return b[nd]("&")
    }

    function Hg(a, b) {
        for (var c = a[Ub]("?"), e = c[1][Ub]("&"), g = b + "=", f = e[H]; 0 < f--;) - 1 != e[f].lastIndexOf(g, 0) && e[md](f, 1);
        return 0 < e[H] ? c[0] + "?" + e[nd]("&") : c[0]
    }

    function Ig(a, b) {
        b || (b = p[Pb]("body")[0]);
        for (var c = 0; a != b;) c += a.offsetLeft, a = a.offsetParent;
        return c
    }

    function Jg(a, b) {
        b || (b = p[Xc]);
        for (var c = 0; a != b;) c += a.offsetTop, a = a.offsetParent;
        return c
    }

    function Kg(a) {
        try {
            return a instanceof HTMLFormElement
        } catch (b) {
            return !!a && "object" === typeof a && 1 === a[Dc] && "object" === typeof a[v] && "object" === typeof a.ownerDocument && "form" === a.tagName[od]()
        }
    }

    function Lg(a) {
        "string" == typeof a && (a = p[Ec](a));
        return a
    }

    function Mg(a) {
        if (a) {
            var b = p[yb]("div"),
                c = p[yb]("a");
            Oa(c, a);
            b[s](c);
            Va(b, b[Fc]);
            return b[Ab][ic]
        }
        return null
    }

    function Ng(a) {
        return !!a && /https?:\/\/([^/.:]+\.)*google(\.[^/.:]+)*(\:[0-9]+)?\/cse/ [sc](a)
    }

    function Og(a, b) {
        for (; b && b != a;) b = b[kd];
        return b == a
    }

    function Pg(a) {
        k[jc] && k[jc].warn(a)
    };
    google[w].K = function (a, b) {
        this.Lk = google[w].K.Vp();
        this.Mk = google[w].K.Wp();
        this.Qk = this.Lk || this.Mk;
        var c = k[Yb][ic];
        this.kw = 0 <= c[Jc]("#") ? c[hd](0, c[Jc]("#")) : c;
        this.Pk = !1;
        this.lw = b;
        c = google[w].K.Nk(google[w].K.Ok());
        this.Kk = c.Tp;
        this.Md = c[dc];
        if (this.Qk) {
            c = fg(this, google[w].K[I].mw);
            this.Lk && k[Mc] ? (k[Mc]("popstate", c, !1), k[Mc]("hashchange", c, !1)) : this.Mk && (k[Mc] ? k[Mc]("hashchange", c, !1) : k[Mb] && k[Mb]("onhashchange", c));
            var c = !1,
                e;
            for (e in this.Md) {
                c = !0;
                break
            }
            c ? this.Up() : this.Xp(a, !0)
        }
    };
    google[w].K.xg = "gsc.";
    google[w].K.Mf = google[w].K.xg + "q";
    google[w].K.fi = google[w].K.xg + "tab";
    google[w].K.ei = google[w].K.xg + "ref";
    google[w].K.xc = google[w].K.xg + "page";
    google[w].K.Hh = google[w].K.xg + "sort";
    var Qg = {};
    Qg[google[w].K.Mf] = !0;
    Qg[google[w].K.fi] = !0;
    Qg[google[w].K.xc] = !0;
    Qg[google[w].K.ei] = !0;
    Qg[google[w].K.Hh] = !0;
    google[w].K.Cw = Qg;
    var Rg = {};
    Rg[google[w].K.fi] = !0;
    Rg[google[w].K.xc] = !0;
    google[w].K.Aw = Rg;
    google[w].K.Vp = function () {
        return !(!k[Yc] || !k[Yc][kb])
    };
    google[w].K.Wp = function () {
        return "onhashchange" in k && (!eg() || 8 <= p.documentMode)
    };
    google[w].K.isSupported = function () {
        return google[w].K.Vp() || google[w].K.Wp()
    };
    google[w].K.Uu = function () {
        var a = google[w].K.Nk(google[w].K.Ok())[dc],
            b;
        for (b in a) return !0;
        return !1
    };
    L = google[w].K[I];
    L.isEnabled = function () {
        return this.Qk
    };
    L.pushState = function (a) {
        this.Qk && !this.Pk && this.Xp(a, !1)
    };
    L.Xp = function (a, b) {
        a = google[w].K.sw(a);
        if (!google[w].K.cq(this.Md, a)) {
            this.Md = a;
            var c = google[w].K.tw(a);
            this.Kk && (c = this.Kk + "&" + c);
            if (this.Lk) {
                var e = p[Sc] || "",
                    c = "#" + c;
                b ? k[Yc].replaceState(null, e, c) : k[Yc][kb](null, e, c)
            } else this.Mk && (c = this.kw + "#" + c, b ? k[Yb][t](c) : Oa(k[Yb], c))
        }
    };
    L.yf = function () {
        var a = {}, b;
        for (b in this.Md) a[b] = this.Md[b];
        return a
    };
    L.mw = function () {
        var a = google[w].K.Nk(google[w].K.Ok());
        this.Kk = a.Tp;
        google[w].K.cq(this.Md, a[dc]) || (this.Md = a[dc], this.Up())
    };
    L.Up = function () {
        this.Pk = !0;
        this.lw(this.yf());
        this.Pk = !1
    };
    google[w].K.Ok = function () {
        var a = k[Yb][ic],
            b = a[Jc]("#");
        return 0 > b ? "" : a[hd](b + 1)
    };
    google[w].K.Vk = function (a) {
        return !!google[w].K.Cw[a]
    };
    google[w].K.cq = function (a, b) {
        for (var c in a)
            if (a[c] !== b[c]) return !1;
        for (c in b)
            if (!a[$b](c)) return !1;
        return !0
    };
    google[w].K.sw = function (a) {
        var b = {}, c;
        for (c in a) google[w].K.Vk(c) && (b[c] = a[c]);
        return b
    };
    google[w].K.tw = function (a) {
        var b = [],
            c;
        for (c in a) null != a[c] && google[w].K.Vk(c) && b[D](d(c) + "=" + d(a[c]));
        return b[nd]("&")
    };
    google[w].K.Nk = function (a) {
        var b = {};
        a = a[Ub]("&");
        for (var c = [], e = 0; e < a[H]; e++) {
            var g = a[e],
                f = g[Jc]("="),
                h = !1;
            if (-1 != f) {
                var l = za(g[Qb](0, f));
                google[w].K.Vk(l) && (f = za(g[Qb](f + 1)), google[w].K.Aw[l] ? (f = sa(f, 10), la(f) || (b[l] = f)) : b[l] = f, h = !0)
            }
            h || c[D](g)
        }
        return {
            state: b,
            Tp: c[nd]("&")
        }
    };
    google[w].wg = function (a, b) {
        this.size = b || google[w].wg.Nw;
        this[lc]()
    };
    google[w].wg.Nw = 20;
    google[w].wg[I].reset = function () {
        this.oi = null;
        for (var a = 0; a < this.size; a++) this.Iw(new google[w].Dq);
        this.Aq = {};
        this.Cq = null
    };
    google[w].wg[I].Iw = function (a) {
        a.next = this.oi;
        a.Fq = null;
        null == this.oi || (this.oi.Fq = a);
        this.oi = a
    };
    google[w].wg[I].put = function (a, b) {
        var c;
        a in this.Aq && (c = this.Aq[a], c.set(a, b), this.Cq == c && (this.Cq = null))
    };
    google[w].Dq = function () {
        this.Fq = this.next = null
    };
    google[w].Dq[I].set = function () {};
    google[w].A = function () {
        this.Qs = google[w].A.mk;
        google[w].A.mk += 1;
        this.kc = null;
        this.Kh = !0;
        this.Aa = {
            width: 100,
            height: 75
        };
        this.tc = google[w].A.ff;
        this.kl = 1;
        this.Ra(google[w].A.Nb);
        this.ak();
        this.gwsUrl = this.Ia = this.Wa = this.va = this.We = this.Mb = this.kk = this.Ch = this.lk = this.Yf = null;
        this.Bc = [];
        this.Vf = {};
        this.od = this.te = "";
        var a;
        if ("object" === typeof k && k[Yb] && k[Yb].hostname && "" != k[Yb].hostname) {
            if ("" == yg) {
                var b = k[Yb].hostname[od]()[Ub](".");
                2 > b[H] && (yg = ".com");
                a = b.pop();
                b = b.pop();
                yg = 2 == a[H] ? zg[b] && 1 == zg[b][a] ?
                    "." + b + "." + a : "." + a : ".com"
            }
            a = yg
        } else a = ".com";
        this.no = a;
        this.ud = this.Ve = null;
        this.Z = !1
    };
    rd("google.search.Search", google[w].A, void 0);
    google[w].A.mk = 0;
    google[w].A.No = google[fd][Pc];
    google[w].A.BASE = google[w].A.No;
    google[w].A.sv = /style=([^&]*)/;
    google[w].A.Zb = "large";
    google[w].A.LARGE_RESULTSET = google[w].A.Zb;
    google[w].A.Nb = "small";
    google[w].A.SMALL_RESULTSET = google[w].A.Nb;
    google[w].A.gd = "filtered_cse";
    google[w].A.FILTERED_CSE_RESULTSET = google[w].A.gd;
    google[w].A.Zo = 8;
    google[w].A.LARGE_RESULTS = google[w].A.Zo;
    google[w].A.uk = 4;
    google[w].A.SMALL_RESULTS = google[w].A.uk;
    google[w].A.Yo = 10;
    google[w].A.FILTERED_CSE_RESULTS = google[w].A.Yo;
    google[w].A.Yw = "_top";
    google[w].A.LINK_TARGET_TOP = google[w].A.Yw;
    google[w].A.om = "_self";
    google[w].A.LINK_TARGET_SELF = google[w].A.om;
    google[w].A.Xw = "_parent";
    google[w].A.LINK_TARGET_PARENT = google[w].A.Xw;
    google[w].A.ff = "_blank";
    google[w].A.LINK_TARGET_BLANK = google[w].A.ff;
    google[w].A.eg = "order-by-relevance";
    google[w].A.ORDER_BY_RELEVANCE = google[w].A.eg;
    google[w].A.Hc = "order-by-date";
    google[w].A.ORDER_BY_DATE = google[w].A.Hc;
    google[w].A.ip = "order-by-ascending-date";
    google[w].A.ORDER_BY_ASCENDING_DATE = google[w].A.ip;
    google[w].A.Qh = "restrict-type";
    google[w].A.RESTRICT_TYPE = google[w].A.Qh;
    google[w].A.$a = "restrict-safesearch";
    google[w].A.RESTRICT_SAFESEARCH = google[w].A.$a;
    google[w].A.Oj = "active";
    google[w].A.SAFESEARCH_STRICT = google[w].A.Oj;
    google[w].A.Nj = "off";
    google[w].A.SAFESEARCH_OFF = google[w].A.Nj;
    google[w].A.Bo = "moderate";
    google[w].A.SAFESEARCH_MODERATE = google[w].A.Bo;
    google[w].A.Ga = "restrict-extended";
    google[w].A.RESTRICT_EXTENDED_ARGS = google[w].A.Ga;
    google[w].A.Ku = 5E3;
    google[w].A.Wu = google[fd].ApiaryBase ? google[fd].ApiaryBase : "https://www.googleapis.com/customsearch/v1element";
    google[w].A.Xu = "AIzaSyCVAXiUzRYsML1Pv6RwSG1gunmMikTzQqY";
    google[w].A.Fo = !1;
    google[w].A.Qx = O;
    google[w].A.strings = google[w].A.Qx;
    google[w].A[I].dl = function () {};
    google[w].A.zj = function () {
        if (google[w].LoadArgs) {
            var a = za(google[w].LoadArgs)[wb](google[w].A.sv);
            if (a && a[1]) return a[1]
        }
        return null
    };
    google[w].A.Ns = function (a) {
        a = !! a || /\/v2\/default\.css$/ [sc](google[w].A.zj() || "");
        return {
            qk: a,
            uo: a,
            nf: a,
            zl: a,
            fp: a
        }
    };
    google[w].A[I].Go = function (a) {
        a.Wa = this.Wa;
        a.Ce = this.Ce;
        a.tc = this.tc;
        a.La = this.La;
        a.Mb = this.Mb;
        a.Kh = this.Kh;
        this.Aa && (a.Aa = {}, Da(a.Aa, this.Aa[mb]), Sa(a.Aa, this.Aa[pc]));
        a.Gg = this.Gg;
        a.xb = this.xb
    };
    google[w].A[I].dv = function () {
        var a = this.yc + "?hl=" + google[w][ld] + "&source=uds",
            a = this.Ia ? a + this.Ia : a + "&q=";
        return this.Id && "" != this.Id ? this.Id : a
    };
    google[w].A[I].Dc = function (a) {
        this.Wa = null == a || "" == a ? null : a
    };
    google[w].A[I].setQueryAddition = google[w].A[I].Dc;
    google[w].A[I].qd = function (a, b) {
        var c = google[w].A.No + this.cd + "?callback=" + a + "&rsz=" + this.La + "&hl=" + google[w][ld];
        this.xb && this.Z && (c = google[w].A.Wu + "?key=" + google[w].A.Xu + "&rsz=" + this.La + "&num=" + this.Ke() + "&hl=" + google[w][ld] + "&prettyPrint=false");
        this.Ce && (c += "&source=" + d(this.Ce));
        this.no && (c += "&gss=" + this.no);
        google[w].JSHash && (c += "&sig=" + google[w].JSHash);
        b && (c += "&start=" + b);
        return c
    };
    google[w].A[I].Jx = function (a) {
        this.Ce = a
    };
    google[w].A[I].setSearcherSrc = google[w].A[I].Jx;
    google[w].A[I].vb = function (a) {
        this.tc = a
    };
    google[w].A[I].setLinkTarget = google[w].A[I].vb;
    google[w].A[I].Ea = function () {
        return this.tc && "" != this.tc ? this.tc : null
    };
    google[w].A[I].fe = function () {
        null == this.Yf && (this.Yf = "gsc-" + this.va + "Result");
        return this.Yf
    };
    google[w].A[I].pd = function () {
        null == this.lk && (this.lk = "gs-" + this.va + "Result");
        return this.lk
    };
    google[w].A[I].nk = function () {
        null == this.Ch && (this.Ch = O[this.va]);
        return this.Mb ? this.Mb : this.Ch
    };
    google[w].A[I].getTabLabel = google[w].A[I].nk;
    google[w].A[I].tu = function () {
        null == this.kk && (this.kk = O[this.va]);
        return this.Mb ? this.Mb : this.kk
    };
    google[w].A[I].tx = function () {
        return this.La
    };
    google[w].A[I].getResultSetSize = google[w].A[I].tx;
    google[w].A[I].Ra = function (a) {
        la(sa(a, 10)) || (a = sa(a, 10));
        if (0 < a && 8 >= a) this.La = a;
        else switch (a) {
        case google[w].A.Zb:
            this.La = google[w].A.Zb;
            break;
        default:
        case google[w].A.Nb:
            this.La = google[w].A.Nb
        }
    };
    google[w].A[I].setResultSetSize = google[w].A[I].Ra;
    Ra(google[w].A[I], function (a, b, c) {
        var e = void 0;
        if (c && 0 < c)
            if (this[Rb] && this[Rb].pages && this[Rb].pages[c - 1] && this[Rb].pages[c - 1].start) e = this[Rb].pages[c - 1].start;
            else {
                var g = this.Ke();
                g && (e = g * (c - 1))
            }
        c = this.pc(a, void 0, e);
        (b = Gg(b)) && (c += "&" + b);
        k._googleudsextrastuff && (c += k._googleudsextrastuff);
        b = this.Vf[$b](c);
        if (c == this.od && !b) return this.xo(), !1;
        e = (new Date)[Ob]();
        if (b && e - this.Vf[c] < google[w].A.Ku) return !1;
        b && (e = -1);
        this.Vf[c] = e;
        this.cursor = null;
        this.te = a;
        this.od = c;
        this.yd = this.Jo ? this.Jo() : null;
        this.xb && this.Z ? dg(google[w].A.Ho(this, c)) : Zf(this.Io(a, c), google[w][Vc]);
        if (this.Bc && 0 < this.Bc[H])
            for (b = 0; b < this.Bc[H]; b++) this.Bc[b][oc](a);
        return !0
    });
    Ra(google[w].A[I], google[w].A[I][oc]);
    google[w].A.Ho = function (a, b) {
        var c = "apiary" + ma[nb](2E4 * ma[fc]());
        google[w].A[c] = function (e) {
            var g = 200,
                f = null;
            e.error && (g = e.error.code, f = e.error.message);
            a.Ab(e, g, f, g, b);
            delete google[w].A[c]
        };
        return b + "&callback=google.search.Search." + c
    };
    google[w].A[I].Io = function (a, b) {
        var c;
        c = b + (this.yd ? "&" + this.yd : "");
        var e = this.Lc(a, b);
        return c += "&context=" + e
    };
    google[w].A[I].vo = function (a) {
        this[Rb] && a < this[Rb].pages[H] && (a = this.pc(this.te, void 0, this[Rb].pages[a].start), this.cursor = null, this.od = a, this.xb && this.Z ? dg(google[w].A.Ho(this, a)) : Zf(this.Io(this.te, a), google[w][Vc]))
    };
    google[w].A[I].gotoPage = google[w].A[I].vo;
    google[w].A[I].Wh = function () {
        return this[Rb] && null != this[Rb].currentPageIndex ? this[Rb].currentPageIndex + 1 : null
    };
    google[w].A[I].Ke = function () {
        return la(sa(this.La, 10)) ? this.La == google[w].A.Nb ? google[w].A.uk : this.La == google[w].A.Zb ? google[w].A.Zo : this.La == google[w].A.gd ? google[w].A.Yo : google[w].A.uk : this.La
    };
    google[w].A[I].getNumResultsPerPage = google[w].A[I].Ke;
    google[w].A[I].bx = function (a) {
        this.Bc && this.Bc[D](a)
    };
    google[w].A[I].addRelatedSearcher = google[w].A[I].bx;
    google[w].A[I].ox = function (a, b, c) {
        b = this.pc(a, b);
        if (null == c || void 0 == c) c = this.Lc(a, b);
        return b + ("&context=" + c) + "&key=" + google[fd].ApiKey + "&v=" + google[w][Vc]
    };
    google[w].A[I].getExecuteUrl = google[w].A[I].ox;
    google[w].A[I].md = function (a) {
        var b = qg("http://code.google.com/apis/ajaxsearch/faq.html", O.watermark + " - " + this.gx(), "_blank", "gs-watermark");
        T(a, b)
    };
    google[w].A[I].gx = function () {
        var a = new Date;
        return a.getMonth() + 1 + "/" + a.getFullYear()
    };
    google[w].A[I].Me = function (a) {
        var b;
        b = a.getFullYear();
        var c = a.getMonth(),
            e = O["month-abbr"][c];
        a = a.getDate();
        10 > a && (a = "0" + a);
        switch (google[w].ShortDatePattern) {
        case "MDY":
            b = e + " " + a + ", " + b;
            break;
        case "YMD":
            "zh-CN" == google[w][ld] || "zh-TW" == google[w][ld] || "ja" == google[w][ld] || "ko" == google[w][ld] ? (e = Sg[google[w][ld]], b = b + e.year + (c + 1) + e.month + a + e.day) : b = b + " " + e + " " + a;
            break;
        default:
        case "DMY":
            b = a + " " + e + " " + b
        }
        return b
    };
    google[w].A[I].formatToShortDate = google[w].A[I].Me;
    var Sg = {
        "zh-CN": {
            month: " \u6708 ",
            year: " \u5e74 ",
            day: " \u65e5 "
        },
        "zh-TW": {
            month: " \u6708 ",
            year: " \u5e74 ",
            day: " \u65e5 "
        },
        ja: {
            month: "\u6708",
            year: "\u5e74",
            day: "\u65e5"
        },
        ko: {
            month: " \uc6d4 ",
            year: " \ub144 ",
            day: " \uc77c "
        }
    };
    google[w].A.jp = 36E5;
    google[w].A.qv = 6E4;
    google[w].A.pv = 864E5;
    google[w].A[I].Tk = function (a) {
        var b = (new Date)[Ob](),
            c = a[Ob]();
        if (b < c) return O["n-minutes-ago"](2);
        b -= c;
        return b < google[w].A.jp ? (a = ma[nb](b / google[w].A.qv), O["n-minutes-ago"](1 >= a ? 2 : a)) : b < google[w].A.pv ? (a = ma[nb](b / google[w].A.jp), 1 >= a ? O["one-hour-ago"] : O["n-hours-ago"](a)) : this.Me(a)
    };
    google[w].A[I].formatToRelativeDate = google[w].A[I].Tk;
    google[w].A[I].ak = function () {
        this.gwsUrl = null;
        this.results = []
    };
    google[w].A[I].clearResults = google[w].A[I].ak;
    google[w].A[I].xo = function () {
        this.Kq && this.Kq()
    };
    google[w].A[I].ev = function (a, b) {
        if (a && 0 <= a) {
            var c = (new Date)[Ob](),
                e = c - a,
                g = b - a,
                f = [];
            if (1 == c % 100)
                if (this.Z) f[D]("asa_" + this.va + "_cse"), this.xb && (google[w].A.Fo ? f[D]("asa_" + this.va + "_cse_apiary_sub") : f[D]("asa_" + this.va + "_cse_apiary_first"));
                else f[D]("asa_" + this.va);
            0 < f[H] && google[fd].recordCsiStat(f, ["req." + e, "req2." + g])
        }
    };
    google[w].A[I].Ab = function (a, b, c, e, g) {
        c = (new Date)[Ob]();
        var f;
        g && (f = this.Vf[g], delete this.Vf[g]);
        if (!g || !this.od || g == this.od) {
            this.gwsUrl = null;
            if (this.results && 0 < this.results[H])
                for (g = 0; g < this.results[H]; g++) this.results[g].html && Tg(this.results[g].html);
            a && a.results && 0 < a.results[H] ? (this.results = a.results, a[Rb] && a[Rb].moreResultsUrl ? this.gwsUrl = this.Id && "" != this.Id ? this.Id : a[Rb].moreResultsUrl : this.Ia && this.yc && (this.gwsUrl = this.dv())) : this.results = [];
            this.completionStatus = b;
            this.hashStatus = e;
            this.So = a && a.resultAttribution && null != a.resultAttribution && "" != a.resultAttribution ? a.resultAttribution : null;
            a && a[Rb] && a[Rb].pages && 0 < a[Rb].pages[H] ? this.cursor = a[Rb] : "undefined" != typeof this[Rb] && delete this[Rb];
            if (a && a.context) {
                this.context = a.context;
                b = [];
                if (a.context.facets && 0 < sa(a.context.total_results, 10)) {
                    for (g = 0; g < a.context.facets[H]; g++)
                        if (a.context.facets[g].facet_search_label) {
                            e = a.context.facets[g];
                            var h = sa(e[Zb], 10);
                            0 < h && (e.count = h, Da(e, ma.ceil(100 * h / sa(a.context.total_results, 10))), b[D](e))
                        }
                    0 <
                        b[H] && b[ed](function (a, b) {
                            return b[Zb] - a[Zb]
                        })
                }
                this.context.display_facets = b
            } else "undefined" != typeof this.context && delete this.context;
            a && a.promotions ? this.promotions = a.promotions : "undefined" != typeof this.promotions && delete this.promotions;
            a && a.omittedResults ? this.omittedResults = a.omittedResults : "undefined" != typeof this.omittedResults && delete this.omittedResults;
            a && a.spelling ? this.spelling = a.spelling : "undefined" != typeof this.spelling && delete this.spelling;
            this.Kh && this.cv();
            this.xo();
            this.ev(f, c);
            this.xb && (google[w].A.Fo = !0)
        }
    };
    google[w].A[I].onSearchComplete = google[w].A[I].Ab;
    google[w].A[I].Dl = function () {
        var a = null;
        this.So && (a = W(this.So, "gs-results-attribution"));
        return a
    };
    google[w].A[I].getAttribution = google[w].A[I].Dl;
    google[w].A[I].Sp = function (a) {
        this.Gg = a
    };
    google[w].A[I].cv = function () {
        var a, b;
        for (a = 0; a < this.results[H]; a++) b = this.results[a], this.cb(b);
        this.dl(this.context)
    };
    google[w].A[I].Uf = function (a, b, c) {
        c || (c = [null]);
        this.Kq = bg(a, b, c)
    };
    google[w].A[I].setSearchCompleteCallback = google[w].A[I].Uf;
    google[w].A[I].gu = function (a, b) {
        this.Jo = bg(a, b)
    };
    google[w].A.kd = function (a, b, c) {
        return 3 == a[b][H] ? new google[w].Jq(a[b][1] || c && c.prefetchQuery, a[b][2], a[b][0], c) : new google[w].Jq("", "", a[b], c)
    };
    google[w].A.nc = function (a, b) {
        var c;
        if (a[H])
            for (var e = 0; e < a[H]; e++)
                if (null == a[e]) {
                    a[e] = b;
                    c = e;
                    break
                }
        c || (c = a[H], a[D](b));
        return c
    };
    google[w].A.AllocateCompletionMapContext = google[w].A.nc;
    google[w].A[I].Vb = function (a) {
        this.Mb = a
    };
    google[w].A[I].setUserDefinedLabel = google[w].A[I].Vb;
    google[w].A[I].Lx = function (a) {
        this.We = a
    };
    google[w].A[I].setUserDefinedClassSuffix = google[w].A[I].Lx;
    google[w].A[I].Ex = function () {
        this.Kh = !1
    };
    google[w].A[I].setNoHtmlGeneration = google[w].A[I].Ex;
    google[w].A.Rc = function (a, b, c, e, g) {
        var f = ma.min(c[mb] / a, c[pc] / b),
            f = ma.min(f, 1),
            h = {};
        Da(h, ma[yc](a * f));
        Sa(h, ma[yc](b * f));
        e && (Da(e, h[mb]), Sa(e, h[pc]), g && Xa(e[v], (c[mb] - h[mb]) / 2 + "px"));
        return h
    };
    google[w].A.scaleImage = google[w].A.Rc;
    google[w].A.mp = 1;
    google[w].A.VERTICAL_BRANDING = google[w].A.mp;
    google[w].A.Rw = 2;
    google[w].A.HORIZONTAL_BRANDING = google[w].A.Rw;
    google[w].A.nx = function (a, b, c) {
        return Eg("gsc-", a, b && b == google[w].A.mp, c)
    };
    google[w].A.getBranding = google[w].A.nx;
    google[w].A.setOnLoadCallback = function (a, b) {
        google.setOnLoadCallback(a, b)
    };
    google[w].A.setOnLoadCallback = google[w].A.setOnLoadCallback;
    var Ug;

    function Tg(a) {
        Ug || (Ug = p[yb]("DIV"));
        Ug[s](a);
        Va(Ug, "")
    }
    google[w].A[I].Rq = function (a) {
        var b = this.Ve;
        a && (b = a);
        a = {};
        var c = X(this.pd());
        Z(c, "gs-result");
        Z(c, "gs-error-result");
        b = W(b, "gs-snippet");
        T(c, b);
        a.html = c;
        return a
    };
    google[w].A[I].Sq = function (a) {
        var b = this.ud;
        a && (b = a);
        a = {};
        var c = X(this.pd());
        Z(c, "gs-result");
        Z(c, "gs-no-results-result");
        b = W(b, "gs-snippet");
        T(c, b);
        a.html = c;
        return a
    };
    google[w].A[I].Xo = function (a) {
        this.Aa = a
    };
    google[w].A[I].qx = function () {
        return this.od
    };
    google[w].A[I].getLastQueryUrl = google[w].A[I].qx;
    google[w].Jq = function (a, b, c) {
        this.Mg = a;
        this.hd = b;
        this.jd = c
    };
    ea("google.search.CurrentLocale", ya);
    ea("google.search.ShortDatePattern", ka);
    google[w].ra = function () {
        google[w].A[ad](this);
        this.va = "blog";
        this.cd = "/GblogSearch";
        this.yc = "http://blogsearch.google.com/blogsearch";
        this.Qb = null;
        this.Eb = !1;
        this.Fe = !0;
        this.kc = fg(this, google[w].ra[I].Gc);
        this.ne = "gsc-blogConfig";
        this.ha = null
    };
    rd("google.search.BlogSearch", google[w].ra, void 0);
    Xf(google[w].ra, google[w].A);
    google[w].ra.mb = "GblogSearch";
    google[w].ra.RESULT_CLASS = google[w].ra.mb;
    google[w].ra.ga = [];
    google[w].ra.qb = function (a, b, c, e, g) {
        var f = 0;
        a && (f = sa(a, 10));
        a = google[w].A.kd(google[w].ra.ga, f, b);
        google[w].ra.ga[f] = null;
        a.jd.Ab(b, c, e, g, a.hd)
    };
    google[w].ra.RawCompletion = google[w].ra.qb;
    google[w].ra[I].Lc = function (a, b) {
        return google[w].A.nc(google[w].ra.ga, [this, a, b])
    };
    google[w].ra[I].pc = function (a, b, c) {
        b = this.qd(null == b ? "google.search.BlogSearch.RawCompletion" : b, c);
        this.Wa && (a = a + " " + this.Wa);
        this.Qb && (a = a + " blogurl:" + this.Qb);
        a = "&q=" + d(a);
        this.Eb && (a += "&scoring=d");
        this.Ia = a;
        return b + a
    };
    google[w].ra[I].cb = function (a) {
        a.html && delete a.html;
        var b = X(this.pd());
        Z(b, "gs-result");
        var c;
        c = qg(a.postUrl, a[Sc], this.Ea(), "gs-title");
        T(b, c);
        c = new Date(a.publishedDate);
        c = W(this.Me(c), "gs-publishedDate");
        T(b, c);
        c = new Date(a.publishedDate);
        c = W(this.Tk(c), "gs-relativePublishedDate");
        T(b, c);
        c = W(a[ob], "gs-snippet");
        T(b, c);
        c = qg(a.blogUrl, a.blogUrl, this.Ea(), "gs-visibleUrl");
        T(b, c);
        a.html = b;
        this.md(a.html)
    };
    google[w].ra[I].createResultHtml = google[w].ra[I].cb;
    google[w].ra[I].Ec = function (a) {
        this.Qb = null == a || "" == a ? null : a
    };
    google[w].ra[I].setSiteRestriction = google[w].ra[I].Ec;
    google[w].ra[I].Bb = function (a) {
        this.Eb = a == google[w].A.Hc ? !0 : !1
    };
    google[w].ra[I].setResultOrder = google[w].ra[I].Bb;
    google[w].ra[I].Gc = function (a, b) {
        if (b) {
            if (null == this.ha) {
                var c = X("gsc-configSetting");
                this.ha = ug(null, "0", this.Eb, "gsc-configSettingCheckbox");
                T(c, this.ha);
                T(c, W(O["sort-by-date"], "gsc-configSettingCheckboxLabel"));
                var e = X("gsc-configSettingSubmit");
                T(e, sg(O[bc], "gsc-configSettingSubmit"));
                T(c, e);
                T(a, c)
            } else Ia(this.ha, this.Eb);
            this.ha[xb]()
        } else this.ha && (this.ha[Sb] ? this.Bb(google[w].A.Hc) : this.Bb(google[w].A.eg))
    };
    google[w].da = function () {
        google[w].A[ad](this);
        this.va = "book";
        this.cd = "/GbookSearch";
        this.yc = "http://books.google.com/books";
        this.Sh = !1;
        this.Th = null
    };
    rd("google.search.BookSearch", google[w].da, void 0);
    Xf(google[w].da, google[w].A);
    google[w].da.mb = "GbookSearch";
    google[w].da.RESULT_CLASS = google[w].da.mb;
    google[w].da.Wo = "user-list";
    google[w].da.USER_LIST = google[w].da.Wo;
    google[w].da.Uo = 1;
    google[w].da.TYPE_ALL_BOOKS = google[w].da.Uo;
    google[w].da.Vo = 2;
    google[w].da.TYPE_FULL_VIEW_BOOKS = google[w].da.Vo;
    google[w].da.ga = [];
    google[w].da.qb = function (a, b, c, e, g) {
        var f = 0;
        a && (f = sa(a, 10));
        a = google[w].A.kd(google[w].da.ga, f, b);
        google[w].da.ga[f] = null;
        a.jd.Ab(b, c, e, g, a.hd)
    };
    google[w].da.RawCompletion = google[w].da.qb;
    google[w].da[I].Lc = function (a, b) {
        return google[w].A.nc(google[w].da.ga, [this, a, b])
    };
    google[w].da[I].pc = function (a, b, c) {
        b = this.qd(null == b ? "google.search.BookSearch.RawCompletion" : b, c);
        this.Wa && (a = a + " " + this.Wa);
        a = "&q=" + d(a);
        this.Sh && (a += "&as_brr=1");
        this.Th && (a = a + "&as_list=" + this.Th);
        this.Ia = a;
        return b + a
    };
    google[w].da[I].cb = function (a) {
        a.html && delete a.html;
        a.thumbnailHtml = this.$k(a);
        var b = X(this.pd());
        Z(b, "gs-result");
        var c = X("gs-text-box"),
            e = lg(),
            g = mg(e, 0),
            f = ng(g, "gs-image-box"),
            g = ng(g, "gs-text-box");
        T(f, a.thumbnailHtml[Fb](!0));
        T(g, c);
        T(b, e);
        e = qg(a.unescapedUrl, a[Sc], this.Ea(), "gs-title");
        T(c, e);
        e = W(O.by + "&nbsp;" + a.authors, "gs-author");
        T(c, e);
        e = X("gs-spacer");
        T(c, e);
        a.publishedYear && (e = W(a.publishedYear, "gs-publishedDate"), T(c, e));
        0 < sa(a.pageCount, 10) && (e = W("-&nbsp;" + O["page-count"](a.pageCount),
            "gs-pageCount"), T(c, e));
        e = qg("http://books.google.com", "books.google.com", this.Ea(), "gs-visibleUrl");
        T(c, e);
        a.html = b;
        this.md(a.html)
    };
    google[w].da[I].createResultHtml = google[w].da[I].cb;
    google[w].da[I].$k = function (a) {
        var b = X("gs-image-box gs-book-image-box"),
            c = X("gs-row-1"),
            e = og("http://books.google.com/googlebooks/pages-trans.gif", null, null, "gs-pages");
        T(c, e);
        e = og("http://books.google.com/googlebooks/p_edge-trans.gif", null, null, "gs-page-edge");
        T(c, e);
        T(b, c);
        c = X("gs-row-2");
        e = google[w].A.Rc(a.tbWidth, a.tbHeight, this.Aa);
        e = og(a.tbUrl, e[mb], e[pc], "gs-image");
        a = pg(a.unescapedUrl, null, this.Ea(), "gs-image");
        r(a, "gs-image");
        T(a, e);
        T(c, a);
        T(b, c);
        return b
    };
    google[w].da[I].eb = function (a, b) {
        a == google[w].A.Qh ? b ? b == google[w].da.Uo ? this.Sh = !1 : b == google[w].da.Vo ? this.Sh = !0 : this.eb(a, null) : this.Sh = !1 : a == google[w].da.Wo && (b && b[wb](/^[a-zA-Z0-9\-_]*$/) ? this.Th = b : this.Th = null)
    };
    google[w].da[I].setRestriction = google[w].da[I].eb;
    google[w].C = function () {
        google[w].A[ad](this);
        this.kl = 2;
        this.va = "image";
        this.cd = "/GimageSearch";
        this.yc = "http://images.google.com/images";
        this.$b = null;
        this.Ca = {};
        this.If = this.Df = this.Hf = this.Ff = this.Ef = this.Gf = null;
        this.Ae = google[w].C.Jh;
        this.la = new google[w].Cc;
        this.Aa = {
            width: 112,
            height: 84
        }
    };
    rd("google.search.ImageSearch", google[w].C, void 0);
    Xf(google[w].C, google[w].A);
    google[w].C.mb = "GimageSearch";
    google[w].C.RESULT_CLASS = google[w].C.mb;
    google[w].C.Jn = "restrict-imagesize";
    google[w].C.RESTRICT_IMAGESIZE = google[w].C.Jn;
    google[w].C.Vw = ["icon"];
    google[w].C.IMAGESIZE_SMALL = google[w].C.Vw;
    google[w].C.Uw = ["small", "medium", "large", "xlarge"];
    google[w].C.IMAGESIZE_MEDIUM = google[w].C.Uw;
    google[w].C.Tw = ["xxlarge"];
    google[w].C.IMAGESIZE_LARGE = google[w].C.Tw;
    google[w].C.Sw = ["huge"];
    google[w].C.IMAGESIZE_EXTRA_LARGE = google[w].C.Sw;
    google[w].C.Hn = "restrict-coloration";
    google[w].C.RESTRICT_COLORIZATION = google[w].C.Hn;
    google[w].C.hn = "mono";
    google[w].C.COLORIZATION_BLACK_AND_WHITE = google[w].C.hn;
    google[w].C.kn = "gray";
    google[w].C.COLORIZATION_GRAYSCALE = google[w].C.kn;
    google[w].C.jn = "color";
    google[w].C.COLORIZATION_COLOR = google[w].C.jn;
    google[w].C.Gn = "restrict-colorfilter";
    google[w].C.RESTRICT_COLORFILTER = google[w].C.Gn;
    google[w].C.tn = "red";
    google[w].C.COLOR_RED = google[w].C.tn;
    google[w].C.qn = "orange";
    google[w].C.COLOR_ORANGE = google[w].C.qn;
    google[w].C.wn = "yellow";
    google[w].C.COLOR_YELLOW = google[w].C.wn;
    google[w].C.pn = "green";
    google[w].C.COLOR_GREEN = google[w].C.pn;
    google[w].C.un = "teal";
    google[w].C.COLOR_TEAL = google[w].C.un;
    google[w].C.mn = "blue";
    google[w].C.COLOR_BLUE = google[w].C.mn;
    google[w].C.sn = "purple";
    google[w].C.COLOR_PURPLE = google[w].C.sn;
    google[w].C.rn = "pink";
    google[w].C.COLOR_PINK = google[w].C.rn;
    google[w].C.vn = "white";
    google[w].C.COLOR_WHITE = google[w].C.vn;
    google[w].C.on = "gray";
    google[w].C.COLOR_GRAY = google[w].C.on;
    google[w].C.ln = "black";
    google[w].C.COLOR_BLACK = google[w].C.ln;
    google[w].C.nn = "brown";
    google[w].C.COLOR_BROWN = google[w].C.nn;
    google[w].C.In = "restrict-filetype";
    google[w].C.RESTRICT_FILETYPE = google[w].C.In;
    google[w].C.zn = "jpg";
    google[w].C.FILETYPE_JPG = google[w].C.zn;
    google[w].C.An = "png";
    google[w].C.FILETYPE_PNG = google[w].C.An;
    google[w].C.yn = "gif";
    google[w].C.FILETYPE_GIF = google[w].C.yn;
    google[w].C.xn = "bmp";
    google[w].C.FILETYPE_BMP = google[w].C.xn;
    google[w].C.Kn = "restrict-imagetype";
    google[w].C.RESTRICT_IMAGETYPE = google[w].C.Kn;
    google[w].C.Cn = "face";
    google[w].C.IMAGETYPE_FACES = google[w].C.Cn;
    google[w].C.Bn = "clipart";
    google[w].C.IMAGETYPE_CLIPART = google[w].C.Bn;
    google[w].C.Dn = "lineart";
    google[w].C.IMAGETYPE_LINEART = google[w].C.Dn;
    google[w].C.En = "news";
    google[w].C.IMAGETYPE_NEWS = google[w].C.En;
    google[w].C.Fn = "photo";
    google[w].C.IMAGETYPE_PHOTO = google[w].C.Fn;
    google[w].C.Ln = "restrict-rights";
    google[w].C.RESTRICT_RIGHTS = google[w].C.Ln;
    google[w].C.Pn = "(cc_publicdomain|cc_attribute|cc_sharealike|cc_noncommercial|cc_nonderived)";
    google[w].C.RIGHTS_REUSE = google[w].C.Pn;
    google[w].C.Nn = "(cc_publicdomain|cc_attribute|cc_sharealike|cc_nonderived).-(cc_noncommercial)";
    google[w].C.RIGHTS_COMMERCIAL_REUSE = google[w].C.Nn;
    google[w].C.On = "(cc_publicdomain|cc_attribute|cc_sharealike|cc_noncommercial).-(cc_nonderived)";
    google[w].C.RIGHTS_MODIFICATION = google[w].C.On;
    google[w].C.Mn = "(cc_publicdomain|cc_attribute|cc_sharealike).-(cc_noncommercial|cc_nonderived)";
    google[w].C.RIGHTS_COMMERCIAL_MODIFICATION = google[w].C.Mn;
    google[w].C.qo = 20;
    google[w].C.CSE_LARGE_RESULTSET = google[w].C.qo;
    google[w].C.Ih = "popup";
    google[w].C.LAYOUT_POPUP = google[w].C.Ih;
    google[w].C.Ek = "column";
    google[w].C.LAYOUT_COLUMN = google[w].C.Ek;
    google[w].C.Jh = "classic";
    google[w].C.LAYOUT_CLASSIC = google[w].C.Jh;
    google[w].C.ga = [];
    google[w].C.Mj = {
        as_dt: !0,
        as_epq: !0,
        as_eq: !0,
        as_lq: !0,
        as_nlo: !0,
        as_nhi: !0,
        as_oq: !0,
        as_q: !0,
        as_qdr: !0,
        as_rq: !0,
        as_sitesearch: !0,
        cr: !0,
        c2coff: !0,
        filter: !0,
        gl: !0,
        hq: !0,
        lr: !0,
        query: !0,
        sort: !0
    };
    L = google[w].C[I];
    L.sp = function () {
        var a = new google[w].C;
        this.Go(a);
        a.$b = this.$b;
        a.Ca = this.Ca;
        a.Gf = this.Gf;
        a.Ef = this.Ef;
        a.Ff = this.Ff;
        a.Hf = this.Hf;
        a.Df = this.Df;
        a.If = this.If;
        a.Tj(this.Ae);
        a.la = this.la.cg();
        a.Z = this.Z;
        return a
    };
    L.lg = function (a) {
        a = a[t](/\s+$/, "")[t](/^\s+/, "");
        return a[t](/\s+/g, "_")[od]()
    };
    L.hf = function (a) {
        return this.Z ? this.la.rb == this.lg(a) : !1
    };
    L.Oe = function (a) {
        return this.Z && this.la.rb ? a[t](Aa(" more:" + this.la.rb + "$"), "") : a
    };
    L.fe = function () {
        return this.Yf = ["gsc-" + this.va + "Result", "gsc-" + this.va + "Result-" + this.Ae][nd](" ")
    };
    google[w].C.qb = function (a, b, c, e, g) {
        var f = 0;
        a && (f = sa(a, 10));
        a = google[w].A.kd(google[w].C.ga, f, b);
        google[w].C.ga[f] = null;
        a.jd.Ab(b, c, e, g, a.hd)
    };
    google[w].C.RawCompletion = google[w].C.qb;
    google[w].C[I].Lc = function (a, b) {
        return google[w].A.nc(google[w].C.ga, [this, a, b])
    };
    google[w].C[I].pc = function (a, b, c) {
        b = this.qd(null == b ? "google.search.ImageSearch.RawCompletion" : b, c);
        this.xb && this.Z && (b += "&searchtype=image");
        a = [a];
        this.Wa && a[D](this.Wa);
        a = a[rb](this.la.sg())[nd](" ");
        var e = this.la.rg(),
            g = [],
            f;
        for (f in e) g[D](f + "=" + e[f]);
        f = "&" + g[nd]("&");
        f = f + "&q=" + d(a);
        this.$b && (f = f + "&safe=" + this.$b);
        this.Gf && (f = f + "&imgsz=" + d(this.Gf));
        this.Ef && (f = f + "&imgc=" + d(this.Ef));
        this.Ff && (f = f + "&imgcolor=" + d(this.Ff));
        this.Hf && (f = f + "&imgtype=" + d(this.Hf));
        this.Df && (f = f + "&as_filetype=" + d(this.Df));
        this.If && (f = f + "&as_rights=" + d(this.If));
        this.Qb && (f = f + "&as_sitesearch=" + d(this.Qb));
        this.Ca && (a = Gg(this.Ca)) && (f += "&" + a);
        b += f;
        this.Ia = f;
        c && 0 != c && (this.Ia = this.Ia + "&start=" + c);
        k.google[fd].GoogleLocale && this.xb && this.Z && (b += "&googlehost=" + d(k.google[fd].GoogleLocale));
        return b
    };
    google[w].C[I].cb = function (a) {
        a.html && delete a.html;
        eb(a, this.Ea() || void 0);
        a.html = google[w].fa.ka("imageResult_" + this.Ae, a);
        for (var b = google[w].C.Rc(a.tbWidth, a.tbHeight, this.Aa), c = a.html[Ab]; c; c = c[Nb])
            if (1 == c[Dc]) {
                for (var e = c[Pb]("img"), g = [], f = 0, h = e[0]; h = e[f]; ++f) g[f] = h;
                "IMG" == c.tagName.toUpperCase() && g[D](c);
                for (e = 0; h = g[e]; ++e) wg(h, "gs-image-scalable") && (Da(h[v], b[mb] + "px"), Sa(h[v], b[pc] + "px"))
            }
        this.md(a.html)
    };
    google[w].C[I].createResultHtml = google[w].C[I].cb;
    google[w].C[I].rx = function () {
        return this.Ae
    };
    google[w].C[I].getLayout = google[w].C[I].rx;
    google[w].C[I].Tj = function (a) {
        if (a == google[w].C.Jh || a == google[w].C.Ek || a == google[w].C.Ih) {
            var b = this.results;
            if (this.Ae != a && b)
                for (var c = 0; c < b[H]; c++) {
                    var e = b[c];
                    e.html && delete e.html
                }
            this.Ae = a;
            a == google[w].C.Jh ? this.Aa = {
                width: 112,
                height: 84
            } : a == google[w].C.Ek ? this.Aa = {
                width: 112,
                height: 168
            } : a == google[w].C.Ih && (this.Aa = {
                width: 224,
                height: 84
            })
        }
    };
    google[w].C[I].setLayout = google[w].C[I].Tj;
    google[w].C[I].Ec = function (a, b) {
        this.la = google[w].Jc.Np(a, b);
        this.la instanceof google[w].sd && (this.Z = !0, this.la[Nc]() == google[w].F.Ne && (this.Ve = O["linked-cse-error-results"]))
    };
    google[w].C[I].setSiteRestriction = google[w].C[I].Ec;
    L = google[w].C[I];
    L.Ak = function () {
        return this.Z ? this.la[Nc]() : null
    };
    L.Bk = function () {
        return this.Z ? this.la.ki : null
    };
    L.uc = function () {
        return this.Z ? this.la.rb : null
    };
    L.tp = function (a) {
        this.Z && a && this.la.sq(a)
    };
    L.Ra = function (a) {
        la(sa(a, 10)) || (a = sa(a, 10));
        this.Z && (0 < a && a <= google[w].C.qo || google[w].A.gd == a) ? this.La = a : google[w].A[I].Ra[ad](this, a)
    };
    google[w].C[I].setResultSetSize = google[w].C[I].Ra;
    google[w].C[I].Ke = function () {
        var a = google[w].A[I].Ke[ad](this);
        return this.Z && a && "number" != typeof this.La ? 2 * a : a
    };
    google[w].C[I].getNumResultsPerPage = google[w].C[I].Ke;
    google[w].C[I].eb = function (a, b) {
        a == google[w].A.$a ? this.$b = b ? b == google[w].A.Oj || b == google[w].A.Nj ? b : null : null : a == google[w].C.Jn ? this.Gf = b ? b[nd]("|") : null : a == google[w].C.Hn ? this.Ef = b ? b == google[w].C.hn || b == google[w].C.kn || b == google[w].C.jn ? b : null : null : a == google[w].C.Gn ? this.Ff = b ? b == google[w].C.tn || b == google[w].C.qn || b == google[w].C.wn || b == google[w].C.pn || b == google[w].C.un || b == google[w].C.mn || b == google[w].C.sn || b == google[w].C.rn || b == google[w].C.vn || b == google[w].C.on || b == google[w].C.ln || b == google[w].C.nn ?
            b : null : null : a == google[w].C.In ? this.Df = b ? b == google[w].C.zn || b == google[w].C.An || b == google[w].C.yn || b == google[w].C.xn ? b : null : null : a == google[w].C.Kn ? this.Hf = b ? b == google[w].C.Cn || b == google[w].C.Bn || b == google[w].C.Dn || b == google[w].C.En || b == google[w].C.Fn ? b : null : null : a == google[w].C.Ln && (this.If = b ? b == google[w].C.Pn || b == google[w].C.Nn || b == google[w].C.On || b == google[w].C.Mn ? b : null : null);
        if (a == google[w].A.Ga)
            if (b)
                for (var c in b) {
                    var e = b[c];
                    google[w].C.Mj[c] && (this.Ca[c] = e)
                } else this.Ca = {}
    };
    google[w].C[I].setRestriction = google[w].C[I].eb;
    google[w].C.Rc = function (a, b, c, e, g) {
        var f = ma.min(c[mb] / a, c[pc] / b),
            h = {};
        Da(h, ma[yc](a * f));
        Sa(h, ma[yc](b * f));
        e && (Da(e, h[mb]), Sa(e, h[pc]), g && Xa(e[v], (c[mb] - h[mb]) / 2 + "px"));
        return h
    };
    google[w].C.scaleImage = google[w].C.Rc;
    google[w].C.Nx = function (a) {
        var b = a[Hb][0],
            c = a[Hb][1];
        if ("block" == c[v].display) return !1;
        Qa(c[v], "block");
        a[v].zIndex = 4E3;
        var e = c[Hb][0],
            g = c[Hb][1],
            f = b[Pb]("img")[0],
            h = c[Pb]("img")[0],
            l = {
                width: h[qb],
                height: h[rc]
            };
        h[qb] < f[qb] ? l = {
            width: f[qb],
            height: 2 * f[rc]
        } : h[rc] < f[rc] && (l = {
            width: f[qb],
            height: f[rc]
        });
        google[w].C.Rc(h[qb], h[rc], l, h);
        Da(c[v], c[qb] > 2 * b[qb] ? 2 * b[qb] + "px" : ma.max(e[qb], g[qb]));
        b = Ig(f, a) + f[qb] / 2;
        a = Jg(f, a) + f[rc] / 2;
        f = Ig(h, c) + h[qb] / 2;
        h = Jg(h, c) + h[rc] / 2;
        0 === qa.appName[Jc]("Microsoft") ? (Xa(c.getBoundingClientRect(),
            b - f + "px"), c.getBoundingClientRect().top = a - h + "px") : (c.offsetLeft = b - f + "px", c.offsetTop = a - h + "px");
        return !1
    };
    google[w].C.showPopup = google[w].C.Nx;
    google[w].C.vx = function (a) {
        a = a[Hb][1];
        if ("none" == a[v].display) return !1;
        Qa(a[v], "none");
        a[kd][v].zIndex = 0;
        return !1
    };
    google[w].C.hidePopup = google[w].C.vx;
    google[w].C[I].vb = function (a) {
        google[w].A[I].vb[ad](this, a)
    };
    google[w].C[I].setLinkTarget = google[w].C[I].vb;
    google[w].C[I].Dc = function (a) {
        google[w].A[I].Dc[ad](this, a)
    };
    google[w].C[I].setQueryAddition = google[w].C[I].Dc;
    google[w].H = function () {
        google[w].A[ad](this);
        this.ec = null;
        this.dc = "San Francisco, CA";
        this.oc = {
            y: 37.77916,
            x: -122.42009
        };
        this.He = null;
        this.Xf = !0;
        this.Wf = !1;
        this.Ie = null;
        this.Fe = !0;
        this.kc = fg(this, this.Gc);
        this.ne = "gsc-locationConfig";
        this.va = "local";
        this.cd = "/GlocalSearch";
        this.yc = "http://www.google.com/local";
        this.Le = this.pb = null
    };
    rd("google.search.LocalSearch", google[w].H, void 0);
    Xf(google[w].H, google[w].A);
    google[w].H.mb = "GlocalSearch";
    google[w].H.RESULT_CLASS = google[w].H.mb;
    google[w].H.Po = "blended";
    google[w].H.TYPE_BLENDED_RESULTS = google[w].H.Po;
    google[w].H.Qo = "kmlonly";
    google[w].H.TYPE_KMLONLY_RESULTS = google[w].H.Qo;
    google[w].H.Ro = "localonly";
    google[w].H.TYPE_LOCALONLY_RESULTS = google[w].H.Ro;
    google[w].H.fq = "disabled";
    google[w].H.ADDRESS_LOOKUP_DISABLED = google[w].H.fq;
    google[w].H.gq = "enabled";
    google[w].H.ADDRESS_LOOKUP_ENABLED = google[w].H.gq;
    google[w].H.mq = 0;
    google[w].H.STATIC_MAP_ZOOM_FARTHEST = google[w].H.mq;
    google[w].H.Zw = 13;
    google[w].H.STATIC_MAP_ZOOM_DEFAULT = google[w].H.Zw;
    google[w].H.lq = 21;
    google[w].H.STATIC_MAP_ZOOM_CLOSEST = google[w].H.lq;
    google[w].H.Uk = 8;
    google[w].H.STATIC_MAP_MAX_POINTS = google[w].H.Uk;
    google[w].H.xw = 3.141592653589;
    google[w].H.ww = 6367E3;
    google[w].H.yw = 16093;
    google[w].H.ga = [];
    google[w].H.qb = function (a, b, c, e, g) {
        var f = 0;
        a && (f = sa(a, 10));
        a = google[w].A.kd(google[w].H.ga, f, b);
        google[w].H.ga[f] = null;
        a.jd.Ab(b, c, e, g, a.hd)
    };
    google[w].H.RawCompletion = google[w].H.qb;
    google[w].H[I].Ab = function (a, b, c, e, g) {
        g && this.od && g != this.od || (this.resultViewport = a && a.viewport ? a.viewport : null, google[w].A[I].Ab[ad](this, a, b, c, e, g))
    };
    google[w].H[I].Lc = function (a, b) {
        return google[w].A.nc(google[w].H.ga, [this, a, b])
    };
    google[w].H[I].pc = function (a, b, c) {
        b = this.qd(null == b ? "google.search.LocalSearch.RawCompletion" : b, c);
        c = "";
        c = "&q=" + d(a);
        b += c;
        this.viewport = null;
        if (this.ec) {
            var e, g;
            this.Xf ? (e = this.ec.getCenterLatLng(), g = this.ec.getSpanLatLng(), a = "&sll=" + e.y + "," + e.x, a += "&sspn=" + g[pc] + "," + g[mb]) : (e = this.ec.getCenter(), g = this.ec.getBounds().toSpan().toUrlValue(), a = "&sll=" + e.y + "," + e.x, a += "&sspn=" + g);
            a += google[w].H.Jk(e.y, e.x);
            b += a;
            c += a
        } else this.oc ? (a = "&sll=" + this.oc.y + "," + this.oc.x, this.He && (a = a + "&sspn=" + this.He.lat + "," +
            this.He.lng), a += google[w].H.Jk(this.oc.y, this.oc.x), b += a, c += a) : this.dc && (a = "&near=" + d(this.dc), b += a, c += a);
        this.Wf && (b += "&nogeocode=t", c += "&nogeocode=t");
        this.Ie && (b += "&mrt=" + d(this.Ie), c += "&mrt=" + d(this.Ie));
        c && (this.Ia = c);
        return b
    };
    google[w].H.Jk = function (a, b) {
        var c = google[w].H.yw / google[w].H.ww * 4 * google[w].H.xw;
        return "&gll=" + ma[nb](1E6 * (a - c)) + "," + ma[nb](1E6 * (b - c)) + "," + ma[nb](1E6 * (a + c)) + "," + ma[nb](1E6 * (b + c)) + "&llsep=500,500"
    };
    google[w].H.centerToGll = google[w].H.Jk;
    google[w].H[I].cb = function (a) {
        a.html && delete a.html;
        var b = X(this.pd());
        Z(b, "gs-result");
        var c;
        c = qg(a.url, a[Sc], this.Ea(), "gs-title");
        T(b, c);
        "kml" == a.listingType && a[ob] && "" != a[ob] && (c = W(a[ob], "gs-snippet"), T(b, c));
        var e = X("gs-address");
        if (a.addressLines && 0 < a.addressLines[H])
            for (var g = 0; g < a.addressLines[H]; g++) {
                c = a.addressLines[g];
                var f = "gs-addressLine";
                0 == g ? f = "gs-street gs-addressLine" : 1 == g && (f = "gs-city gs-addressLine");
                c = W(c, f);
                T(e, c)
            } else c = W(a.streetAddress, "gs-street"), T(e, c), g = "", "" != a.city &&
                (g = a.city, "" != a.region && (g += ", ")), c = W(g, "gs-city"), T(e, c), c = W(a.region, "gs-region"), T(e, c);
        c = W(a.country, "gs-country");
        T(e, c);
        T(b, e);
        if (a.phoneNumbers && a.phoneNumbers[H]) {
            g = e = null;
            c = a.phoneNumbers[0];
            for (var h = 0; h < a.phoneNumbers[H]; h++) {
                f = a.phoneNumbers[h];
                if ("main" == f[Nc]) {
                    e = f;
                    break
                }
                if ("" == f[Nc] || "mobile" == f[Nc] && null == g) g = f
            }
            c = W((e ? e : g ? g : c).number, "gs-phone");
            T(b, c)
        }
        a.ddUrl && "" != a.ddUrl && (c = qg(a.ddUrl, O.directions, this.Ea(), "gs-directions"), T(b, c));
        a.ddUrlToHere && "" != a.ddUrlToHere && a.ddUrlFromHere &&
            "" != a.ddUrlFromHere && (c = X("gs-directions-to-from"), e = W(O["get-directions"] + ":", "gs-label"), c[s](e), e = qg(a.ddUrlToHere, O["to-here"], this.Ea(), "gs-secondary-link"), c[s](e), e = W("-", "gs-spacer"), c[s](e), e = qg(a.ddUrlFromHere, O["from-here"], this.Ea(), "gs-secondary-link"), c[s](e), T(b, c));
        a.html = b;
        this.md(a.html)
    };
    google[w].H[I].createResultHtml = google[w].H[I].cb;
    google[w].H[I].vq = function (a) {
        if (a.centerAndZoom) this.Xf = !0, this.ec = a, this.oc = null, this.dc = "", this.pb && (this.pb = null);
        else if (a.setCenter) this.Xf = !1, this.ec = a, this.He = this.oc = null, this.dc = "", this.pb && (this.pb = null);
        else if (a.x && a.y) this.Xf = !0, this.oc = a, this.ec = this.He = null, this.dc = "", this.pb && (this.pb = null);
        else if (null != a && "" != a) {
            this.Xf = !0;
            this.ec = null;
            this.dc = a;
            this.oc = null;
            this.pb && (this.pb = null);
            var b = new google[w].H;
            b.Uf(this, this.iw, [b, a]);
            b[oc](a)
        }
    };
    google[w].H[I].setCenterPoint = google[w].H[I].vq;
    google[w].H[I].iw = function (a, b) {
        if (a.results && a.results[H]) {
            var c = {};
            c.y = ta(a.results[0].lat);
            c.x = ta(a.results[0].lng);
            this.oc = c;
            this.dc = b;
            this.Fe = !0;
            this.ec = null;
            a.resultViewport && (c = {}, c.nz = ta(a.resultViewport.span.lat) / 2, c.oz = ta(a.resultViewport.span.lng) / 2, this.He = c)
        }
    };
    google[w].H[I].Gc = function (a, b) {
        if (b) {
            if (null == this.pb) {
                var c = null;
                if (null == this.ec) {
                    var e = X("gsc-configSetting");
                    this.pb = tg(null, "gsc-configSettingInput", "" == this.dc ? null : this.dc);
                    T(e, W(O["search-location"], "gsc-configSettingInputLabel"));
                    T(e, this.pb);
                    T(a, e);
                    c = this.pb
                }
                e = X("gsc-configSetting");
                this.Le = ug(null, "0", this.Wf, "gsc-configSettingCheckbox");
                T(e, this.Le);
                T(e, W(O["disable-address-lookup"], "gsc-configSettingCheckboxLabel"));
                null == c && (c = this.Le);
                var g = W(null, "gsc-configSettingSubmit");
                T(g, sg(O[bc],
                    "gsc-configSettingSubmit"));
                T(e, g);
                T(a, e);
                c[xb]()
            }
        } else this.pb && (this.pb[Ic] && (this.dc = this.pb[Ic], this.vq(this.dc)), this.pb = null), this.Le && (this.Wf = this.Le[Sb], this.Le = null), gg(a)
    };
    google[w].H[I].zx = function (a) {
        a == google[w].H.fq ? this.Wf = !0 : a == google[w].H.gq && (this.Wf = !1)
    };
    google[w].H[I].setAddressLookupMode = google[w].H[I].zx;
    google[w].H.jq = function (a, b, c, e) {
        var g = a.staticMapUrl,
            g = g[t](/&size=\d*x\d*/, "&size=" + c + "x" + b);
        e && e <= google[w].H.lq && e >= google[w].H.mq && (g = g[t](/&zoom=\d*/, "&zoom=" + e));
        return a.staticMapUrl = g
    };
    google[w].H.resizeStaticMapUrl = google[w].H.jq;
    google[w].H.hx = function (a, b, c, e) {
        var g = "",
            f = {
                staticMapUrl: "http://maps.google.com/maps/api/staticmap?maptype=roadmap&size=150x100&zoom=13&format=gif&sensor=false"
            };
        b = google[w].H.jq(f, b, c, e);
        null == e && (b = b[t](/&zoom=\d*/, ""));
        e = a[H];
        e > google[w].H.Uk && (e = google[w].H.Uk);
        for (c = 0; c < e; c++) {
            var h;
            h = a[c];
            if (h.lat && h.lng) "string" == typeof h.lat ? (f = ta(h.lat), h = ta(h.lng)) : (f = h.lat, h = h.lng);
            else if (h.x && h.y) f = h.y, h = h.x;
            else return null;
            f = "&markers=__ICONID____LAT__,__LNG__" [t](/__LAT__/, f);
            f = f[t](/__LNG__/, h);
            h = 65 + c;
            f = 1 < e ? f[t](/__ICONID__/, "label:" + ua.fromCharCode(h) + "|") : f[t](/__ICONID__/, "");
            g += f
        }
        return b + g
    };
    google[w].H.computeStaticMapUrl = google[w].H.hx;
    google[w].H[I].eb = function (a, b) {
        a == google[w].A.Qh && (b ? (this.Ie = null, this.Ie = b == google[w].H.Po || b == google[w].H.Qo || b == google[w].H.Ro ? b : null) : this.Ie = null)
    };
    google[w].H[I].setRestriction = google[w].H[I].eb;
    google[w].ea = function () {
        google[w].A[ad](this);
        this.va = "news";
        this.cd = "/GnewsSearch";
        this.yc = "http://news.google.com/nwshp";
        this.Je = "site:";
        this.Eb = !1;
        this.Fe = !0;
        this.kc = fg(this, this.Gc);
        this.ne = "gsc-newsConfig";
        this.Ca = this.ha = null
    };
    rd("google.search.NewsSearch", google[w].ea, void 0);
    Xf(google[w].ea, google[w].A);
    google[w].ea.mb = "GnewsSearch";
    google[w].ea.RESULT_CLASS = google[w].ea.mb;
    google[w].ea.kq = "GnewsSearch.quote";
    google[w].ea.QUOTE_RESULT_CLASS = google[w].ea.kq;
    google[w].ea.ga = [];
    google[w].ea.qb = function (a, b, c, e, g) {
        var f = 0;
        a && (f = sa(a, 10));
        a = google[w].A.kd(google[w].ea.ga, f, b);
        google[w].ea.ga[f] = null;
        a.jd.Ab(b, c, e, g, a.hd)
    };
    google[w].ea.RawCompletion = google[w].ea.qb;
    google[w].ea[I].Lc = function (a, b) {
        return google[w].A.nc(google[w].ea.ga, [this, a, b])
    };
    google[w].ea[I].pc = function (a, b, c) {
        b = this.qd(null == b ? "google.search.NewsSearch.RawCompletion" : b, c);
        var e = null;
        a && (e = a);
        this.Wa && (e = null == e ? this.Wa : e + " " + this.Wa);
        this.Qb && (e = null == e ? this.Je + this.Qb : e + " " + this.Je + this.Qb);
        a = e ? "&q=" + d(e) : "";
        this.Eb && (a += "&scoring=d");
        if (this.Ca) {
            var e = "",
                g;
            for (g in this.Ca) ":" == g[sb](0) && (e += "&" + this.Ca[g]);
            a += e
        }
        this.Qb && "source:" == this.Je && (b = b[t](/&hl=.*&/, "&hl=en&"));
        this.Ia = a;
        c && 0 != c && (this.Ia = this.Ia + "&start=" + c);
        return b + a
    };
    google[w].ea[I].cb = function (a) {
        a.html && delete a.html;
        if (a.GsearchResultClass != google[w].ea.kq) {
            var b = X(this.pd());
            Z(b, "gs-result");
            var c;
            c = qg(a.unescapedUrl, a[Sc], this.Ea(), "gs-title");
            T(b, c);
            c = W(a.publisher, "gs-publisher");
            T(b, c);
            c = a[Yb][Ub](",");
            1 < c[H] && (c = W(", " + c[c[H] - 1], "gs-location"), T(b, c));
            c = new Date(a.publishedDate);
            c = W(" - " + this.Me(c), "gs-publishedDate");
            T(b, c);
            c = new Date(a.publishedDate);
            c = W(" - " + this.Tk(c), "gs-relativePublishedDate");
            T(b, c);
            c = W(a[ob], "gs-snippet");
            T(b, c);
            a.clusterUrl &&
                "" != a.clusterUrl && (c = qg(a.clusterUrl, O["related-articles"] + "&nbsp;&raquo;", this.Ea(), "gs-clusterUrl"), T(b, c));
            a.html = b;
            this.md(a.html)
        }
    };
    google[w].ea[I].createResultHtml = google[w].ea[I].cb;
    google[w].ea[I].Ec = function (a) {
        null == a || "" == a ? (this.Qb = null, this.Je = "site:") : a[wb]("[./:]") ? (this.Je = "site:", this.Qb = a) : (this.Je = "source:", this.Qb = a[t](/\s/g, "_"))
    };
    google[w].ea[I].setSiteRestriction = google[w].ea[I].Ec;
    google[w].ea[I].Bb = function (a) {
        this.Eb = a == google[w].A.Hc ? !0 : !1
    };
    google[w].ea[I].setResultOrder = google[w].ea[I].Bb;
    google[w].ea[I].Gc = function (a, b) {
        if (b) {
            if (null == this.ha) {
                var c = X("gsc-configSetting");
                this.ha = ug(null, "0", this.Eb, "gsc-configSettingCheckbox");
                T(c, this.ha);
                T(c, W(O["sort-by-date"], "gsc-configSettingCheckboxLabel"));
                var e = X("gsc-configSettingSubmit");
                T(e, sg(O[bc], "gsc-configSettingSubmit"));
                T(c, e);
                T(a, c)
            } else Ia(this.ha, this.Eb);
            this.ha[xb]()
        } else this.ha && (this.ha[Sb] ? this.Bb(google[w].A.Hc) : this.Bb(google[w].A.eg))
    };
    google[w].ea[I].hv = {
        geo: !0,
        qsid: !0,
        quotesearch: !0,
        topic: !0,
        ned: !0,
        scoring: !0,
        as_mind: !0,
        as_minm: !0,
        as_miny: !0,
        as_maxd: !0,
        as_maxm: !0,
        as_maxy: !0
    };
    google[w].ea[I].eb = function (a, b) {
        if (a == google[w].A.Ga)
            if (b)
                for (var c in b) {
                    var e = b[c];
                    "undefined" != typeof this.hv[c] && (this.Ca = this.Ca || {}, this.Ca[":" + c] = c + "=" + d(e))
                } else this.Ca = null
    };
    google[w].ea[I].setRestriction = google[w].ea[I].eb;
    google[w].X = function () {
        google[w].A[ad](this);
        this.va = "patent";
        this.cd = "/GpatentSearch";
        this.yc = "http://www.google.com/patents";
        this.to = "";
        this.$f = null;
        this.Fe = !0;
        this.kc = fg(this, this.Gc);
        this.ne = "gsc-patentConfig";
        this.ha = null
    };
    rd("google.search.PatentSearch", google[w].X, void 0);
    Xf(google[w].X, google[w].A);
    google[w].X.mb = "GpatentSearch";
    google[w].X.RESULT_CLASS = google[w].X.mb;
    google[w].X.$o = 1;
    google[w].X.TYPE_ANY_STATUS = google[w].X.$o;
    google[w].X.cp = 2;
    google[w].X.TYPE_ISSUED_PATENTS = google[w].X.cp;
    google[w].X.bp = 3;
    google[w].X.TYPE_APPLICATIONS = google[w].X.bp;
    google[w].X.ga = [];
    google[w].X.qb = function (a, b, c, e, g) {
        var f = 0;
        a && (f = sa(a, 10));
        a = google[w].A.kd(google[w].X.ga, f, b);
        google[w].X.ga[f] = null;
        a.jd.Ab(b, c, e, g, a.hd)
    };
    google[w].X.RawCompletion = google[w].X.qb;
    google[w].X[I].Lc = function (a, b) {
        return google[w].A.nc(google[w].X.ga, [this, a, b])
    };
    google[w].X[I].pc = function (a, b, c) {
        b = this.qd(null == b ? "google.search.PatentSearch.RawCompletion" : b, c);
        this.Wa && (a = a + " " + this.Wa);
        a = "&q=" + d(a) + this.to;
        this.$f && (a += this.$f);
        this.Ia = a;
        return b + a
    };
    google[w].X[I].cb = function (a) {
        a.html && delete a.html;
        a.thumbnailHtml = this.$k(a);
        var b = X(this.pd());
        Z(b, "gs-result");
        var c = X("gs-text-box"),
            e = lg(),
            g = mg(e, 0),
            f = ng(g, "gs-image-box"),
            g = ng(g, "gs-text-box");
        T(f, a.thumbnailHtml[Fb](!0));
        T(g, c);
        T(b, e);
        f = qg(a.unescapedUrl, a[Sc], this.Ea(), "gs-title");
        T(c, f);
        e = X("gs-patent-info gs-metadata");
        T(c, e);
        f = null;
        f = a.patentNumber ? "issued" == a.patentStatus ? O["us-pat"] + "&nbsp;" + a.patentNumber : O["us-pat-app"] + "&nbsp;" + a.patentNumber : O["us-pat-app"] + "&nbsp; N/A";
        f = W(f, "gs-patent-number");
        T(e, f);
        a.applicationDate && (f = W(" - " + this.Me(new Date(a.applicationDate)), "gs-publishedDate"), T(e, f));
        a.assignee && (f = W(" - " + a.assignee, "gs-author"), T(e, f));
        f = W(a[ob], "gs-snippet");
        T(c, f);
        T(c, f);
        a.html = b;
        this.md(a.html)
    };
    google[w].X[I].createResultHtml = google[w].X[I].cb;
    google[w].X[I].$k = function (a) {
        var b = X("gs-patent-image"),
            c = og(a.tbUrl, 75, 100, "gs-image");
        a = pg(a.unescapedUrl, null, this.Ea(), "gs-image");
        r(a, "gs-image");
        T(a, c);
        T(b, a);
        return b
    };
    google[w].X[I].Bb = function (a) {
        this.$f = a == google[w].A.Hc ? "&scoring=d" : a == google[w].A.ip ? "&scoring=ad" : null
    };
    google[w].X[I].setResultOrder = google[w].X[I].Bb;
    google[w].X[I].eb = function (a, b) {
        a == google[w].A.Qh && (this.to = b ? b == google[w].X.$o ? "" : b == google[w].X.cp ? "&as_psrg=1" : b == google[w].X.bp ? "&as_psra=1" : "" : "")
    };
    google[w].X[I].setRestriction = google[w].X[I].eb;
    google[w].X[I].Gc = function (a, b) {
        if (b) {
            var c = !1;
            this.$f && "&scoring=d" == this.$f && (c = !0);
            if (null == this.ha) {
                var e = X("gsc-configSetting");
                this.ha = ug(null, "0", c, "gsc-configSettingCheckbox");
                T(e, this.ha);
                T(e, W(O["sort-by-date"], "gsc-configSettingCheckboxLabel"));
                c = X("gsc-configSettingSubmit");
                T(c, sg(O[bc], "gsc-configSettingSubmit"));
                T(e, c);
                T(a, e)
            } else Ia(this.ha, c);
            this.ha[xb]()
        } else this.ha && (this.ha[Sb] ? this.Bb(google[w].A.Hc) : this.Bb(google[w].A.eg))
    };
    google[w].Na = function () {
        this.xl = this.Xb = google[w].B.zd;
        Ta(this, null);
        this.Aa = {
            width: 112,
            height: 84
        };
        this.Ig = {
            width: 100,
            height: 75
        };
        this.ud = null
    };
    rd("google.search.SearcherOptions", google[w].Na, void 0);
    google[w].Na[I].so = function (a) {
        switch (a) {
        case google[w].B.vp:
        case google[w].B.Ud:
        case google[w].B.zd:
            this.Xb = a;
            break;
        default:
            this.Xb = google[w].B.zd
        }
        this.xl = this.Xb
    };
    google[w].Na[I].setExpandMode = google[w].Na[I].so;
    google[w].Na[I].Hx = function (a) {
        gg(a);
        Ta(this, a)
    };
    google[w].Na[I].setRoot = google[w].Na[I].Hx;
    google[w].Na[I].he = function (a) {
        this.ud = a
    };
    google[w].Na[I].setNoResultsString = google[w].Na[I].he;
    google[w].Na[I].Bx = function (a) {
        100 < a && (a = 100);
        Sa(this.Aa, a);
        Da(this.Aa, ma[yc](1.33 * a))
    };
    google[w].Na[I].setImageResultsTbHeight = google[w].Na[I].Bx;
    google[w].Na[I].Mx = function (a) {
        100 < a && (a = 100);
        Sa(this.Ig, a);
        Da(this.Ig, ma[yc](1.33 * a))
    };
    google[w].Na[I].setVideoResultsTbHeight = google[w].Na[I].Mx;
    google[w].ma = function () {
        Ua(this, null);
        this.Om = null;
        this.Pa = google[w].B.jc;
        this.xh = !1;
        this.za = null;
        this.Sb = google[w].B.fj;
        this.yh = !1
    };
    rd("google.search.DrawOptions", google[w].ma, void 0);
    google[w].ma[I].Cx = function (a) {
        Ua(this, a)
    };
    google[w].ma[I].setInput = google[w].ma[I].Cx;
    google[w].ma[I].vm = function (a) {
        this.Om = Lg(a)
    };
    google[w].ma[I].setSearchFormRoot = google[w].ma[I].vm;
    google[w].ma[I].Ao = function (a) {
        this.Pa = a == google[w].B.jc || a == google[w].B.Tb ? a : google[w].B.jc
    };
    google[w].ma[I].setDrawMode = google[w].ma[I].Ao;
    google[w].ma[I].um = function (a) {
        this.xh = a
    };
    google[w].ma[I].setAutoComplete = google[w].ma[I].um;
    google[w].ma[I].wm = function (a) {
        this.yh = a
    };
    google[w].ma[I].setSpeech = google[w].ma[I].wm;
    google[w].ma[I].xm = function (a) {
        this.Te = a
    };
    google[w].ma[I].setTopRefinementsWanted = google[w].ma[I].xm;
    google[w].ma[I].rm = function (a, b, c, e) {
        this.Sb = google[w].B.pf;
        this.za = {};
        this.za.Bj = a;
        this.za.Iv = b || "q";
        this.za.Gv = c || !1;
        this.za.Hv = e || "?"
    };
    google[w].ma[I].enableSearchboxOnly = google[w].ma[I].rm;
    google[w].ma[I].qm = function () {
        this.Sb = google[w].B.Se
    };
    google[w].ma[I].enableSearchResultsOnly = google[w].ma[I].qm;
    google[w].Qa = function (a, b, c) {
        this.Xa = c;
        this.fk = this.hk = !1;
        this.G = a;
        this.pa = null;
        this.ot = bg(b, google[w].B[I].fu, [this]);
        this.rt = bg(b, google[w].B[I].ik, [this, google[w].Qa.hj]);
        this.qt = bg(b, google[w].B[I].ik, [this, google[w].Qa.gj]);
        this.pt = bg(b, google[w].B[I].ik, [this, google[w].Qa.nm]);
        this.nt = bg(b, google[w].B[I].eu, [this]);
        this.mt = bg(b, google[w].B[I].du, [this]);
        this.G.Uf(b, b.Ab, [this]);
        this.G.gu(b, google[w].B[I].cu);
        this.G.Ra(b.ge);
        this.G.vb(b.tc);
        Ta(this, null);
        this.Ua = this.De = this.nd = this.Ti = this.Ye =
            this.Fh = null;
        this.Pj = !0;
        this.Ka = [];
        this.Qf = this.Pf = this.lc = this.xa = null;
        this.Gb = 0;
        this.Vd = !1
    };
    google[w].Qa.wi = 0;
    google[w].Qa.hj = 1;
    google[w].Qa.gj = 2;
    google[w].Qa.nm = 3;
    google[w].Qa[I].ui = function (a) {
        var b = "gsc-results-selector ",
            b = a == google[w].Qa.wi ? this.Xa.Xb == google[w].B.zd ? b + "gsc-one-result-active" : this.G.La == google[w].A.Nb ? b + "gsc-more-results-active" : b + "gsc-all-results-active" : a == google[w].Qa.hj ? b + "gsc-one-result-active" : a == google[w].Qa.gj ? b + "gsc-more-results-active" : b + "gsc-all-results-active";
        r(this.Ti, b)
    };
    google[w].B = function (a) {
        if (!google[fd].KeyVerified)
            if (google[w].B.Bm()) google[fd].KeyVerified = !0;
            else return;
        this.Qi = this.ge = google[w].A.Nb;
        this.Pa = google[w].B.jc;
        Ta(this, null);
        Ua(this, null);
        this.de = null;
        this.kh = google[w].B.mh;
        this.Mq = bg(this, google[w].B[I].Wr, [null]);
        this.Nq = bg(this, google[w].B[I].Xr, [null]);
        this.Ue = this.Xi = this.Yi = this.zg = null;
        this.ve = 0;
        this.Re = !1;
        this.tc = google[w].A.ff;
        this.Sb = google[w].B.fj;
        this.ri = O.copy;
        this.wd = this.Ta = null;
        this.wl = 0;
        this.Mc = {};
        this.Cb = this.dd = this.jh = this.Lb =
            this.Qe = null;
        this.ml = !1;
        this.rc = null;
        this.Qd = this.vd = 0;
        this.Nc = null;
        this.Pe = !1;
        this.wc = null;
        this.Ha = {};
        this.Ha[google[w].ya.Wb] = {
            enabled: !0,
            className: "gsc-adBlock",
            Ob: "",
            bh: {
                lines: 2
            }
        };
        this.Ha[google[w].ya.Hb] = {
            enabled: !1,
            className: "gsc-adBlockVertical",
            Ob: "gsc-thinWrapper",
            bh: {}
        };
        this.Ha[google[w].ya.wb] = {
            enabled: !1,
            className: "gsc-adBlockBottom",
            Ob: "",
            bh: {}
        };
        this.V = [];
        var b;
        if (a)
            for (var c = 0; c < a[H]; c++) b = new google[w].Qa(a[c], this, !1), this.V[D](b);
        this.yg(google[w].B.jj);
        this.Zl = {};
        this.Xe = !1;
        this.xd = !0
    };
    rd("google.search.SearchControl", google[w].B, void 0);
    google[w].B[I].Gj = !1;
    google[w].ya = {
        Wb: "top",
        Hb: "right",
        wb: "bottom"
    };
    google[w].B.yo = O["no-results"];
    google[w].B.NO_RESULTS_DEFAULT_STRING = google[w].B.yo;
    google[w].B.Dp = 350;
    google[w].B.TIMEOUT_SHORT = google[w].B.Dp;
    google[w].B.mh = 500;
    google[w].B.TIMEOUT_MEDIUM = google[w].B.mh;
    google[w].B.Cp = 700;
    google[w].B.TIMEOUT_LONG = google[w].B.Cp;
    google[w].B.vp = 1;
    google[w].B.EXPAND_MODE_CLOSED = google[w].B.vp;
    google[w].B.Ud = 2;
    google[w].B.EXPAND_MODE_OPEN = google[w].B.Ud;
    google[w].B.zd = 3;
    google[w].B.EXPAND_MODE_PARTIAL = google[w].B.zd;
    google[w].B.jc = 1;
    google[w].B.DRAW_MODE_LINEAR = google[w].B.jc;
    google[w].B.Tb = 2;
    google[w].B.DRAW_MODE_TABBED = google[w].B.Tb;
    google[w].B.Bp = "save";
    google[w].B.KEEP_LABEL_SAVE = google[w].B.Bp;
    google[w].B.Ap = "keep";
    google[w].B.KEEP_LABEL_KEEP = google[w].B.Ap;
    google[w].B.zp = "include";
    google[w].B.KEEP_LABEL_INCLUDE = google[w].B.zp;
    google[w].B.yp = "copy";
    google[w].B.KEEP_LABEL_COPY = google[w].B.yp;
    google[w].B.xp = "blank";
    google[w].B.KEEP_LABEL_BLANK = google[w].B.xp;
    google[w].B.jj = "tab";
    google[w].B.REFINEMENT_AS_TAB = google[w].B.jj;
    google[w].B.yj = "link";
    google[w].B.REFINEMENT_AS_LINK = google[w].B.yj;
    google[w].B.fj = "standard";
    google[w].B.MODE_STANDARD = google[w].B.fj;
    google[w].B.pf = "searchbox-only";
    google[w].B.MODE_SEARCHBOX_ONLY = google[w].B.pf;
    google[w].B.Se = "searchresults-only";
    google[w].B.MODE_RESULTS_ONLY = google[w].B.Se;
    var Vg = google[fd][id].BUBBLEGUM,
        Wg = google[fd][id].GREENSKY,
        Xg = google[fd][id].ESPRESSO,
        Yg = google[fd][id].SHINY,
        Zg = google[fd][id].MINIMALIST,
        $g = google[fd][id].V2_DEFAULT;
    google[w].B.ld = {};
    google[w].B.ld[Vg] = {
        colorBackground: "#FDE5FF",
        colorTitleLink: "#0568CD",
        colorText: "#000",
        colorDomainLink: "#CC7A9F",
        fontFamily: "Arial"
    };
    google[w].B.ld[Wg] = {
        colorBackground: "#EEFFE5",
        colorBorder: "#A9DA92",
        colorTitleLink: "#06C",
        colorText: "#454545",
        colorDomainLink: "#8D5FA7",
        fontFamily: "Trebuchet MS",
        fontSizeDescription: "14"
    };
    google[w].B.ld[Xg] = {
        colorBackground: "#F2F0E6",
        colorTitleLink: "#950000",
        colorText: "#333",
        colorDomainLink: "#A25B08",
        fontFamily: "Georgia",
        fontSizeDescription: "14",
        fontSizeDomainLink: "12"
    };
    google[w].B.ld[Yg] = {
        colorBackground: "#F0F0F6",
        colorBorder: "#CCC",
        colorTitleLink: "#06C",
        colorDomainLink: "#008000",
        fontFamily: "Verdana"
    };
    google[w].B.ld[Zg] = {
        colorBackground: "#EEE",
        colorBorder: "#CCC",
        colorTitleLink: "#000",
        colorText: "#444",
        colorDomainLink: "#333",
        fontSizeDescription: "14",
        fontFamily: "Arial"
    };
    google[w].B.ld[$g] = {
        colorBackground: "#fff",
        colorBorder: "#ddd",
        colorTitleLink: "#1155CC",
        colorText: "#222",
        colorDomainLink: "#093",
        fontSizeDescription: "13",
        fontFamily: "Arial, sans-serif"
    };
    google[w].B.Qm = "13";
    google[w].B.rs = "16";
    try {
        google[w].B.appPath = k[Yb][ic]
    } catch (ah) {
        google[w].B.appPath = null
    }
    google[w].B.Bm = function () {
        var a;
        a = k[Yb].host[od]()[Ub](".");
        if (2 > a[H]) a = !1;
        else {
            var b = a.pop(),
                c = a.pop();
            "igoogle" != c && "gmodules" != c && "googlesyndication" != c || "com" != b ? (2 == b[H] && 0 < a[H] && zg[c] && 1 == zg[c][b] && (c = a.pop()), a = "google" == c) : a = !0
        } if (a) return !0;
        google[fd].KeyVerified = !0;
        google[fd].LoadFailure = !1;
        return !0
    };
    google[w].B.keyCheck = google[w].B.Bm;
    google[w].B[I].jw = function () {
        var a = this;
        return function () {
            a.Gj && (a.Pm(), a.Gj = !1)
        }
    };
    google[w].B[I].Kf = function (a, b) {
        google.load("ads.search", "3", {
            callback: this.jw()
        });
        this.Xc = !0;
        this.$c = a;
        if (b) {
            var c = this.Ha[google[w].ya.Wb],
                e = this.Ha[google[w].ya.Hb],
                g = this.Ha[google[w].ya.wb];
            void 0 != b.includeVerticalAds && Na(e, b.includeVerticalAds);
            void 0 != b.includeSideAds && Na(e, b.includeSideAds);
            void 0 != b._includeBottomAds_ && Na(g, b._includeBottomAds_);
            void 0 != b.iframes && (this.Mm = b.iframes);
            b.channel && (this.th = b.channel);
            b.clientIP && (this.Km = b.clientIP);
            b.safe && (this.Aj = b.safe);
            b[Wb] && (this.Lm =
                b[Wb]);
            b.adStyle && (this.Jm = b.adStyle);
            b.cseGoogleHosting && (this.uh = b.cseGoogleHosting);
            if (g = b.adtest || b.debug) this.$i = g;
            void 0 != b.numTopAds && (c.Ac = ma.max(0, ma.min(4, b.numTopAds)), Na(c, c.Ac ? !0 : !1));
            void 0 != b.numSideAds && (e.Ac = ma.max(0, ma.min(8, b.numSideAds)), Na(e, e.Ac ? !0 : !1));
            "noTop" == b.layout && (Na(c, !1), Na(e, !0));
            this.Tn = b.enableSearchCompleteCallback ? !0 : !1
        }
    };
    google[w].B[I].enableAds = google[w].B[I].Kf;
    google[w].B[I].Bd = function (a, b, c) {
        b || (b = new google[w].Na);
        b && b.Aa && a.Xo(b.Aa);
        a.Bc = null;
        b = new google[w].Qa(a, this, b);
        c ? (c.Ka[D](b), b.Qf = c, b.Gb = c.Gb + 1) : (this.V[D](b), b.Gb = 0);
        this.rf(a) && (this.Jr = !0);
        a.Ce = "gsc"
    };
    google[w].B[I].addSearcher = google[w].B[I].Bd;
    google[w].B[I].Yl = function (a) {
        a.Xa[qc] ? (a.Pj = !1, Ta(a, a.Xa[qc]), Z(a[qc], "gsc-resultsRoot"), xg(a[qc], "gsc-resultsbox-visible"), Z(a[qc], "gsc-resultsbox-invisible")) : Ta(a, X("gsc-resultsRoot"));
        a.G.We && Z(a[qc], "gsc-resultsRoot-" + a.G.We);
        this.Pa == google[w].B.Tb && (a.xa.yb = a[qc]);
        var b = lg(null, null, "gsc-resultsHeader"),
            c = mg(b, 0);
        a.Hd = ng(c, "gsc-twiddleRegionCell");
        c = ng(c, "gsc-configLabelCell");
        a.Fh = W("", "gsc-twiddle");
        T(a.Hd, a.Fh);
        var e = jg(a.G.tu(), "gsc-title");
        T(a.Fh, e);
        a.Ye = W("", "gsc-stats");
        T(a.Hd, a.Ye);
        var e = W(),
            g = W(O.blank, "gsc-result-selector gsc-one-result"),
            f = W(O.blank, "gsc-result-selector gsc-more-results"),
            h = W(O.blank, "gsc-result-selector gsc-all-results");
        db(g, O["show-one-result"]);
        db(f, O["show-more-results"]);
        db(h, O["show-all-results"]);
        T(e, g);
        T(e, f);
        T(e, h);
        fb(g, a.rt);
        fb(f, a.qt);
        fb(h, a.pt);
        a.Ti = e;
        a.ui(google[w].Qa.wi);
        T(a.Hd, a.Ti);
        fb(a.Fh, a.ot);
        a.G.kc && (a.Jb = kg("", "gsc-configLabel"), Va(a.Jb, O.blank), Z(a.Jb, "gsc-twiddle-closed"), T(c, a.Jb), fb(a.Jb, a.nt), db(a.Jb, O.settings), a.nd = X("gsc-config"),
            Z(a.nd, a.G.ne), a.De = rg("gsc-config"), Z(a.De, a.G.ne), a.De.onsubmit = a.mt, T(a.nd, a.De), Qa(a.nd[v], "none"));
        a.Ua = X();
        this.sb && (a.Ua.onmousedown = fg(this, google[w].B[I].su), fb(a.Ua, fg(this, google[w].B[I].ru)));
        a.pa = X("gsc-expansionArea");
        T(a.Ua, a.pa);
        a.Pj && T(this.sf, a[qc]);
        T(a[qc], b);
        a.nd && T(a[qc], a.nd);
        T(a[qc], a.Ua)
    };
    google[w].B.rv = /^https?:\/\/www\.google\.com\/url\?/;
    L = google[w].B[I];
    L.su = function (a) {
        this.Xe && this.eq(this.dq(a));
        return !0
    };
    L.ru = function (a) {
        var b = this.dq(a);
        this.Xe || this.eq(b);
        b && k[Tb](function () {
            var a = b[cd](google[w].F.ii);
            a && Oa(b, a)
        }, 0);
        return !0
    };
    L.dq = function (a) {
        a = a || k[pd];
        for (a = a[$c] || a[Gc]; a && !(a[ic] && a[cd](google[w].F.Vh) && a[cd](google[w].F.ii));) a = a[kd];
        return a
    };
    L.eq = function (a) {
        if (a) {
            var b = a[cd](google[w].F.Vh);
            b && google[w].B.rv[sc](b) && Oa(a, b)
        }
    };
    L.sl = function (a) {
        var b = jg();
        Z(b, "gsc-refinementBlockInvisible");
        T(this.mc, b);
        a.lc = b;
        this.Ew(a)
    };
    L.vw = function (a) {
        return this.Mc.fp ? kg(a) : ig(a)
    };
    L.Al = function (a) {
        if (this.Mc.fp) {
            var b = p.createDocumentFragment();
            b[s](kg());
            Va(b[Ab], a);
            return b
        }
        var b = p.createDocumentFragment(),
            c = p[yb]("div");
        for (Va(c, a); c[Ab];) b[s](c[Ab]);
        return b
    };
    L.Ew = function (a) {
        var b = a.xa,
            c = this.Ni(a, a);
        c.Gb += 1;
        "tab" == this.ep ? hg(c.na, ig(O["all-results-short"])) : hg(c.na, this.vw(O["all-results-long"]));
        a.xa = b;
        a.Pf = c;
        a.Pf.yb = a.xa.yb
    };
    L.yg = function (a) {
        a == google[w].B.yj ? (this.ro = "gsc-refinementHeader", this.Oh = "gsc-refinementhInactive", this.yk = "gsc-refinementhActive", this.ep = a, this.aj = "gsc-refinementsAreaInvisible", this.dp = "gsc-refinementsArea") : a == google[w].B.jj && (this.ro = "gsc-tabHeader", this.Oh = "gsc-tabhInactive", this.yk = "gsc-tabhActive", this.ep = a, this.aj = "gsc-tabsAreaInvisible", this.dp = "gsc-tabsArea")
    };
    google[w].B[I].setRefinementStyle = google[w].B[I].yg;
    L = google[w].B[I];
    L.Ni = function (a, b) {
        var c = {}, e = a.G.nk();
        a.xa = c;
        c.Gb = a.Gb;
        c.na = W(google[w].T.df(e));
        c.yb = null;
        c.gb = a.G;
        c.va = a.G.va;
        vg(c.na, bg(this, this.we, [c]));
        c.hc = a;
        var g = "gs-spacer";
        $f("opera") && (g += " gs-spacer-opera");
        b ? (e = b.lc, Z(c.na, this.ro), Z(c.na, this.Oh)) : (e = this.fc, Z(c.na, "gsc-tabHeader"), Z(c.na, "gsc-tabhInactive"));
        Z(c.na, "gsc-inline-block");
        T(e, c.na);
        g = kg(" ", g);
        T(e, g);
        a.Xa.so(google[w].B.Ud);
        return c
    };
    L.El = function (a) {
        if (1 != a.Ka[H]) {
            var b = a.Ka.shift();
            if (b) {
                a.Ka[D](b);
                a = b.xa.na;
                var c = a[Nb];
                T(a[kd], a);
                T(a[kd], c);
                b = b.xa.yb;
                T(b[kd], b)
            }
        }
    };
    L.hm = function (a) {
        for (var b = 0; b < this.rc[H]; ++b)
            if (this.rc[b].key == a) return b;
        return null
    };
    L.Nv = function (a) {
        r(this.Cb, "gsc-option-menu-invisible");
        this.vd != a && (this.ej(a), this.Tg(a, this.U.gb), this[oc]())
    };
    L.Ov = function (a) {
        a = a || k[pd];
        r(this.Cb, "gsc-option-menu");
        this.Cb[v].top = Jg(this.Cb, this.dd) + Jg(this.jh, this.dd) - Jg(Fg(this.Cb, "div", "gsc-option-menu-item-highlighted")[0], this.dd) + "px";
        Ha(a, !0);
        a[Vb] && a[Vb]()
    };
    L.Lv = function (a) {
        a = a || k[pd];
        this.Cb && !Og(this.Cb, a[$c] || a[Gc]) && r(this.Cb, "gsc-option-menu-invisible")
    };
    google[w].B.Mv = function (a) {
        a = a || k[pd];
        Ha(a, !0);
        a[Vb] && a[Vb]()
    };
    L = google[w].B[I];
    L.ys = function () {
        var a = X("gsc-orderby-invisible"),
            b = jg(O["order-results-by"], "gsc-orderby-label");
        Z(b, "gsc-inline-block");
        T(a, b);
        this.dd = X("gsc-option-menu-container");
        Z(this.dd, "gsc-inline-block");
        T(a, this.dd);
        b = X("gsc-selected-option-container");
        Z(b, "gsc-inline-block");
        this.jh = X("gsc-selected-option");
        var c = X("gsc-option-selector");
        T(b, this.jh);
        T(b, c);
        fb(b, fg(this, this.Ov));
        T(this.dd, b);
        this.Cb = X("gsc-option-menu-invisible");
        for (b = 0; b < this.rc[H]; ++b) {
            var e = this.rc[b][nc],
                c = X("gsc-option-menu-item"),
                e = jg(e, "gsc-option");
            T(c, e);
            T(this.Cb, c);
            fb(e, bg(this, google[w].B[I].Nv, [b]))
        }
        T(this.dd, this.Cb);
        fb(this.Cb, google[w].B.Mv);
        b = fg(this, this.Lv);
        this[qc][Mb] ? (this[qc][Mb]("onmousedown", b), p[Mb]("onmousedown", b)) : p[Mc] && p[Mc]("mousedown", b, !0);
        return a
    };
    L.Lw = function (a) {
        a = a || k[pd];
        this.Nc && !Og(this.Nc, a[$c] || a[Gc]) && r(this.wc, "gsc-getlink-text-invisible")
    };
    L.Kw = function (a) {
        a = a || k[pd];
        this.wc && Og(this.wc, a[$c] || a[Gc]) || (r(this.wc, wg(this.wc, "gsc-getlink-text-visible") ? "gsc-getlink-text-invisible" : "gsc-getlink-text-visible"), Ha(a, !0), a[Vb] && a[Vb]())
    };
    L.xs = function () {
        var a = X("gsc-getlink-invisible"),
            b = X("gsc-getlink-box");
        Z(b, "gsc-inline-block");
        var c = og(google[fd][Pc] + "/css/link.png", null, null, "gsc-getlink-image");
        this.wc = X("gsc-getlink-text-invisible");
        var e = X("gsc-getlink-textbox"),
            g = W("Share this page:", "gsc-getlink-label"),
            f = tg(null, "gsc-getlink-inputbox");
        f.readOnly = !0;
        fb(f, f[Bb]);
        T(b, c);
        T(a, b);
        T(a, this.wc);
        T(this.wc, e);
        T(e, g);
        T(e, f);
        vg(a, fg(this, this.Kw));
        b = fg(this, this.Lw);
        this[qc][Mb] ? (this[qc][Mb]("onclick", b), p[Mb]("onclick", b)) : p[Mc] &&
            p[Mc]("click", b, !0);
        return a
    };
    L.lf = function (a, b) {
        var c = null,
            e = null;
        b ? b.Pa ? (this.Pa = b.Pa, c = b[uc], e = b.Om, this.Sb = b.Sb, this.xh = b.xh, this.yh = b.yh, this.Te = b.Te, this.Sb == google[w].B.pf && (this.za = b.za)) : this.Pa = google[w].B.jc : this.Pa = google[w].B.jc;
        Ta(this, X(this.za ? "gsc-control-searchbox-only" : "gsc-control"));
        this[qc].dir = google[w].T.wh;
        (a = Lg(a)) && hg(a, this[qc]);
        this.sb && this.As();
        if (null != c) Ua(this, c), this[uc].onkeyup = this.Mq, this[uc].onpaste = this.Nq, this.xd = !1;
        else {
            this.xd = !0;
            null == e ? e = this[qc] : e.dir = google[w].T.wh;
            this.de = new google[w].ua(!0,
                e, {
                    vh: !0,
                    ns: this.Xe,
                    nf: this.Mc.nf
                });
            this.de.Rm(this, this.vc);
            Ua(this, this.de[uc]);
            var e = this.de.sh,
                g = this.de.rh,
                f = {
                    interfaceLanguage: google[w][ld]
                };
            this.Xe && (f.brandingImageUrl = google[w].ua.Fj, f.brandingImageStyle = google[w].ua.ws);
            this.xh ? this.Fg && (f.maxSuggestions = this.Fg.maxCompletions, f.maxPromotions = this.Fg.maxPromotions) : f.disableAutoCompletions = !0;
            this.za && (f.enableAsynchronousLogging = !Ng(Mg(this.za.Bj)));
            f.useKennedyLookAndFeel = this.Mc.nf;
            f.searchButton = e;
            f.enableSpeech = b ? b.yh : !1;
            this.wd = Vf();
            this.wd.br(g, this[uc], this, f);
            f.useKennedyLookAndFeel && Z(g, "gsc-search-box-tools")
        }
        c || this.Sb != google[w].B.Se || (Qa(this.de.rh[v], "none"), bb(this[qc][v], "hidden"));
        if (!this.za) {
            this.sf = X("gsc-resultsbox-invisible");
            this.kb = this.ul ? X("gsc-results-wrapper-overlay") : X("gsc-results-wrapper-nooverlay");
            T(this[qc], this.kb);
            this.ul && (this.xe = X("gsc-modal-background-image"), T(this[qc], this.xe), vg(this.xe, bg(this, google[w].B[I].vc)), this.ye = X("gsc-results-close-btn"), T(this.kb, this.ye), vg(this.ye, bg(this, google[w].B[I].vc)));
            if (this.Pa == google[w].B.Tb)
                for (this.fc = X("gsc-tabsAreaInvisible"), T(this.kb, this.fc), this.sb && (1 < this.V[H] && this.yg(google[w].B.yj), this.mc = X(this.aj), T(this.kb, this.mc)), c = 0; c < this.V[H]; c++) this.Ni(this.V[c]);
            this.Qe = X("gsc-above-wrapper-area-invisible");
            T(this.kb, this.Qe);
            c = lg(0, 0, "gsc-above-wrapper-area-container");
            T(this.Qe, c);
            c = mg(c, 0);
            e = ng(c, "gsc-result-info-container");
            this.ze = X("gsc-result-info-invisible");
            T(e, this.ze);
            this.sb && this.ml && this.Pa == google[w].B.Tb && (e = ng(c, "gsc-orderby-container"),
                this.Lb = this.ys(), T(e, this.Lb), r(this.Lb, "gsc-orderby-invisible"));
            this.Pe && (c = ng(c, "gsc-getlink-container"), this.Nc = this.xs(), T(c, this.Nc), r(this.Nc, "gsc-getlink-invisible"));
            this.Yb = this.kb;
            this.Xc && (this.Yb = X("gsc-wrapper"), this.Tc(function (a, b) {
                b.oa = X("gsc-adBlockInvisible");
                a == google[w].ya.Wb ? T(this.Yb, b.oa) : a == google[w].ya.Hb && T(this.kb, b.oa)
            }), T(this.kb, this.Yb));
            T(this.Yb, this.sf);
            for (c = 0; c < this.V[H]; c++) this.Yl(this.V[c]), this.Pa == google[w].B.Tb && (Z(this.V[c].xa.yb, "gsc-tabData"), Z(this.V[c].xa.yb,
                "gsc-tabdInactive"));
            this.Pa == google[w].B.Tb && 0 < this.V[H] && (this.U = this.V[0].xa, this.me(this.U), xg(this.V[0].xa.yb, "gsc-tabdInactive"), Z(this.V[0].xa.yb, "gsc-tabdActive"), this.Lb && (this.ej(this.Qd), this.Tg(this.Qd, this.U.gb)))
        }
        a && (c = this.zs()) && 300 > c && Z(this[qc], "gsc-narrow")
    };
    google[w].B[I].draw = google[w].B[I].lf;
    google[w].B[I].ej = function (a) {
        if (this.Lb) {
            var b = Fg(this.Cb, "div", "gsc-option-menu-item-highlighted")[0];
            b && xg(b, "gsc-option-menu-item-highlighted");
            this.vd = a;
            Z(Fg(this.Cb, "div", "gsc-option")[this.vd][kd], "gsc-option-menu-item-highlighted");
            a = this.jh;
            b = this.rc[this.vd][nc];
            void 0 != a.textContent ? a.textContent = b : a.innerText = b
        }
    };
    google[w].B[I].Tg = function (a, b) {
        b instanceof google[w].F && b.eb(google[w].A.Ga, {
            sort: this.rc[a].key
        })
    };
    google[w].B[I].xj = function (a) {
        var b = Fg(Fg(this.wc, "div", "gsc-getlink-textbox")[0], "input", null)[0],
            c = {}, e = k[Yb][ic];
        var g = e[Ub]("#");
        if (1 != g[H]) {
            for (var e = g[1][Ub]("&"), f = e[H]; 0 < f--;) - 1 != e[f].lastIndexOf("gsc.", 0) && e[md](f, 1);
            e = 0 < e[H] ? g[0] + "#" + e[nd]("&") : g[0]
        }
        if (-1 != e[Jc]("?gcse-bookmark=") || -1 != e[Jc]("&gcse-bookmark=")) g = e[Ub]("#"), e = 1 == g[H] ? Hg(g[0], "gcse-bookmark") : Hg(g[0], "gcse-bookmark") + "#" + g[1];
        c.query = this.ie;
        this.U.gb.Mb != O.web && this.U.gb.Mb != O.image && (c.refine = this.U.gb.Mb);
        this.U.gb instanceof
        google[w].C && (c.image = "1");
        this.Lb && this.U.gb instanceof google[w].F && (c.sortBy = this.rc[this.vd].key);
        a && (c.page = a);
        a = e;
        g = [];
        if (c)
            for (var h in c) null != c[h] && g[D]("gcse-bookmark=" + d(h + ":" + c[h]));
        c = g[nd]("&");
        h = -1 !== a[Jc]("?") ? "&" : "?";
        g = ""; - 1 !== a[Jc]("#") && (g = a[t](/.*#/, "#"), a = a[t](/#.*/, ""));
        e = a + h + c + g;
        Wa(b, e);
        c = e;
        void 0 != b.textContent ? b.textContent = c : b.innerText = c
    };
    google[w].B[I].Kx = function (a) {
        switch (a) {
        case google[w].B.Dp:
        case google[w].B.mh:
        case google[w].B.Cp:
            this.kh = a;
            break;
        default:
            this.kh = google[w].B.mh
        }
    };
    google[w].B[I].setTimeoutInterval = google[w].B[I].Kx;
    google[w].B[I].Fx = function (a, b, c) {
        if (c) switch (c) {
        case google[w].B.Bp:
        case google[w].B.Ap:
        case google[w].B.zp:
        case google[w].B.yp:
        case google[w].B.xp:
            this.ri = O[c];
            break;
        default:
            this.ri = c
        }
        this.zg = fg(a, b)
    };
    google[w].B[I].setOnKeepCallback = google[w].B[I].Fx;
    L = google[w].B[I];
    L.rf = function (a) {
        var b = a.va;
        return this.sb ? "web" == b && a.Z ? !1 : !0 : "blog" == b || "image" == b ? !0 : !1
    };
    L.me = function (a) {
        1 == a.Gb ? a.na.onclick ? (vg(a.na, null), xg(a.na, this.Oh), Z(a.na, this.yk)) : (vg(a.na, bg(this, this.we, [a])), xg(a.na, this.yk), Z(a.na, this.Oh)) : a.na.onclick ? (vg(a.na, null), xg(a.na, "gsc-tabhInactive"), Z(a.na, "gsc-tabhActive")) : (vg(a.na, bg(this, this.we, [a])), xg(a.na, "gsc-tabhActive"), Z(a.na, "gsc-tabhInactive"))
    };
    L.we = function (a, b) {
        if (this.U != a) {
            this.si(!0);
            xg(this.U.yb, "gsc-tabdActive");
            Z(this.U.yb, "gsc-tabdInactive");
            this.me(this.U);
            var c = this.Sc(this.U.hc),
                e = this.Sc(a.hc);
            1 == this.U.Gb && c != e && (Z(c.lc, "gsc-refinementBlockInvisible"), this.me(c.xa));
            this.U = a;
            c = this.U.gb;
            this.me(this.U);
            this.Lb && this.Tg(this.vd, this.U.gb);
            this.Pe && this.xj();
            1 == this.U.Gb && e.xa.na.onclick && this.me(e.xa);
            this.Xm();
            e = null;
            !b && this.Ta && this.Ta[ec]() && (e = this.Ta.yf(), this.ho(a, e));
            Z(this.U.yb, "gsc-tabdActive");
            xg(this.U.yb, "gsc-tabdInactive");
            var g = b ? b.Mg : this.ie,
                f = g && g == c.te;
            b && (f = f && b.page == c.Wh());
            this.Nc && this.pl();
            if (f) {
                e && (e[google[w].K.xc] = c.Wh(), this.Ta[kb](e));
                if (!this.Ym(c.te, c.Wh()) || $f("opera") && b) this.yd = c.yd, this.wj(c.te, c.Wh());
                this.U.hc.Lo || (this.ol(this.U.hc), this.nl(c), this.Lb && this.ql())
            } else g && this.To(g, b && b.page, null, e)
        }
    };
    L.Ym = function (a, b) {
        var c = this.Ha[google[w].ya.wb];
        return !!this.Da && this.Da.query == a && (this.Da.adPage || 1) == (b || 1) && !(c[hc] && this.U && this.U.hc.pa != c.oa[kd])
    };
    L.nl = function (a) {
        var b = a.results,
            c = a[Rb];
        this.Pa != google[w].B.jc && (this.ze.id = "resInfo-" + a.Qs);
        this.Pa != google[w].B.jc && 0 < b[H] && c && c.resultCount && c.searchResultTime ? (a = ig(O["result-info"](c.resultCount, c.searchResultTime)), hg(this.ze, a), r(this.ze, "gsc-result-info")) : (r(this.ze, "gsc-result-info-invisible"), gg(this.ze))
    };
    L.up = function (a, b) {
        if (a.G.Z)
            for (var c = 0; c < a.Ka[H]; c++) {
                var e = a.Ka[c];
                if (e.G.hf(b)) return e.xa
            }
        return null
    };
    L.Fl = function (a, b) {
        var c = this.up(a, b),
            e = !0;
        c || (c = a.xa, e = !1);
        this.we(c);
        return e
    };
    L.Ag = function (a, b) {
        b ? (Z(this[qc], "gsc-loading-fade"), a.Lo = !0, Z(a.Ua, "gsc-loading-resultsRoot"), 0 == a.Gb && this.mc && Z(this.mc, "gsc-loading-refinementsArea")) : (xg(this[qc], "gsc-loading-fade"), a.Lo = !1, xg(a.Ua, "gsc-loading-resultsRoot"), this.mc && xg(this.mc, "gsc-loading-refinementsArea"))
    };
    L.Xm = function () {
        this.Xc && (this.rf(this.U.gb) ? this.Af() : this.Rk())
    };
    L.ew = function (a) {
        var b = this.Ha[google[w].ya.wb];
        if (b.oa[kd] != a.pa) {
            var c = Fg(a.pa, "div", "gsc-cursor-box")[0];
            c && c[kd] == a.pa ? a.pa[vb](b.oa, c) : T(a.pa, b.oa)
        }
    };
    L.Af = function () {
        this.Xc && this.Tc(function (a, b) {
            r(b.oa, "gsc-adBlockInvisible");
            b[hc] && b.Ob && xg(this.Yb, b.Ob)
        })
    };
    L.Rk = function () {
        this.Xc && this.Tc(function (a, b) {
            0 < b.Fd ? (r(b.oa, b[Tc]), b.Ob && Z(this.Yb, b.Ob)) : (r(b.oa, "gsc-adBlockInvisible"), b.Ob && xg(this.Yb, b.Ob))
        })
    };
    L.submit = function () {
        return this.Lq(null)
    };
    google[w].B[I].submit = google[w].B[I][wc];
    L = google[w].B[I];
    L.Lq = function (a, b) {
        this[uc][Ic][H] ? this.za ? this.Ko(b) : this[oc](void 0, void 0, b) : this.vc();
        return !1
    };
    L.kv = function (a) {
        return this.Lq(null, a)
    };
    L.Ko = function (a) {
        var b = this.za.Hv,
            b = this.za.Bj + (0 <= this.za.Bj[Jc](b) ? "&" : b) + d(this.za.Iv) + "=" + d(this[uc][Ic]);
        (a = Gg(a)) && (b += "&" + a);
        this.za.Gv ? k.open(b) : k.location = b
    };
    L.ti = function () {
        this.fc && !this.xu && (!this.sb || 1 < this.V[H]) && r(this.fc, "gsc-tabsArea");
        !this.mc || 1 == this.V[H] && 0 == this.V[0].Ka[H] || r(this.mc, this.dp)
    };
    L.dw = function (a) {
        var b = this;
        return function (c, e) {
            if (e) {
                b.Ha[a].Fd = 1;
                var g = 0,
                    f = 0;
                b.Tc(function (a, b) {
                    b[hc] && b.Lp && (g++, b.Fd && f++)
                });
                g == f ? (k[lb](b.Dw), b.Rk()) : 1 == f && (b.Dw = k[Tb](function () {
                    b.Rk()
                }, 200))
            }
        }
    };
    L.Yh = function () {
        return null
    };
    google[w].B[I].getPartnerId = google[w].B[I].Yh;
    google[w].B[I].As = function () {
        var a = jg("", "gsc-input"),
            b = tg(null, "gsc-input", null);
        Qa(b[v], "none");
        b[v].background = google[w].ua.hw();
        T(a, b);
        T(this[qc], a);
        var c = "";
        p[Oc] && p[Oc][ac] ? (b = p[Oc][ac](b, null)) && (c = b.backgroundImage || "") : b[gd] && (c = b[gd].backgroundImage || ""); - 1 != c[w](google[w].I.gw) && (this.Xe = !0, this.Ja && this.Ja.Sp(Eg("gcsc-", void 0, !1, "http://www.google.com/cse/?hl=" + google[w][ld], O["custom-search"])), this.Ma && this.Ma.Sp(Eg("gcsc-", void 0, !1, "http://www.google.com/cse/?hl=" + google[w][ld], O["custom-search"])));
        this[qc][Zc](a)
    };
    google[w].B[I].Xh = function (a) {
        if (this.xd) this.wd.qc(a);
        else if (Wa(this[uc], a), this[uc].onfocus) this[uc].onfocus(null)
    };
    google[w].B[I].prefillQuery = google[w].B[I].Xh;
    google[w].B[I].Ow = function (a) {
        a ? this.Xh(a) : a = this.xd ? this.wd.Oa() : this[uc][Ic];
        return a
    };
    google[w].B[I].pq = function () {
        return this.xd ? this.wd.Oa() : this[uc][Ic]
    };
    google[w].B[I].getInputQuery = google[w].B[I].pq;
    Ra(google[w].B[I], function (a, b, c) {
        this.To(a, b, c)
    });
    Ra(google[w].B[I], google[w].B[I][oc]);
    L = google[w].B[I];
    L.To = function (a, b, c, e, g) {
        a = this.Ow(a);
        this.rk(a, b, c, e, g)
    };
    L.rk = function (a, b, c, e, g) {
        if (a[H]) {
            this.Re = !1;
            this.ie = a;
            this.Jf = b || 1;
            this.Pe && this.xj();
            this.Ta && this.Ta[ec]() && (e = e || this.Ta.yf(), e[google[w].K.Mf] = a, null == b ? delete e[google[w].K.xc] : e[google[w].K.xc] = b, this.Lb && this.U.gb instanceof google[w].F && (e[google[w].K.Hh] = this.rc[this.vd].key), this.Ta[kb](e));
            this.yd = google[fd].createGuidArg_();
            e = !1;
            if (this.Pa == google[w].B.Tb) e = this.io(this.U.hc, this.U.yb, a, g, b, c) || e;
            else
                for (var f = 0; f < this.V[H]; f++) e = this.io(this.V[f], this.V[f][qc], a, g, b, c) || e;
            c = this.Ym(a,
                b);
            e || !c ? this.wj(a, b) : this.Xm()
        }
    };
    L.cu = function () {
        return this.yd
    };
    L.wj = function (a, b) {
        var c = this.Xc;
        c && (this.Jr && this.Pa == google[w].B.jc || this.Pa == google[w].B.Tb && this.rf(this.U.gb)) && (c = !1);
        var e = this.ts(),
            g = this.ss();
        void 0 != e || this.$c || this.Mm || (c = !1);
        this.Pa != google[w].B.Tb && Na(this.Ha[google[w].ya.wb], !1);
        if (c)
            if (this.vs(), this.Mm) {
                this.Af();
                this.Tc(function (a, b) {
                    Va(b.oa, "")
                });
                this.Da = {};
                this.Da.pubId = this.$c || "google-coop";
                this.Da.gcsc = !0;
                e ? this.Da.cx = e : g && (this.Da.cref = g);
                this.Da.hl = google[w][ld] ? d(google[w][ld]) : null;
                this.Da.adtest = this.$i ? "on" : null;
                this.Da.channel =
                    this.th ? this.th : null;
                this.Da.adsafe = this.Aj || null;
                this.Da.query = a;
                this.Da.adstyle = this.Jm ? this.Jm : null;
                b && (this.Da.adPage = b);
                this.Da.containerWidth = this.wl || this.kb[qb];
                this.sb && (this.Da.cseGoogleHosting = "full" == this.uh || "iframe" == this.uh || "partner" == this.uh ? this.uh : "partner", this.Da.fontSizeDescription = google[w].B.Qm, this.Da.fontSizeDomainLink = google[w].B.Qm, this.Da.fontSizeTitle = google[w].B.rs);
                if ((e = google[w].A.zj()) && e in google[w].B.ld) {
                    var e = google[w].B.ld[e],
                        f;
                    for (f in e) this.Da[f] = e[f]
                }
                google &&
                    google.ads && google.ads[w] && google.ads[w].Ads ? this.Pm() : this.Gj = !0
            } else {
                f = "";
                this.Ha[google[w].ya.Wb][hc] && (f = f + "w" + this.Ha[google[w].ya.Wb].Ac);
                this.Ha[google[w].ya.Hb][hc] && (f = f + "n" + this.Ha[google[w].ya.Hb].Ac);
                f = "http://www.google.com/" + (e ? "cse" : "search") + "?output=js&num=0&ie=utf8&oe=utf8&q=" + d(a) + "&hl=" + d(google[w][ld]) + "&ad=" + d(f) + "&js=uds&" + this.yd;
                e && (f += "&cx=" + e);
                this.$c && (f += "&client=" + d(this.$c));
                this.th && (f += "&channel=" + d(this.th));
                this.$i && (f += "&adtest=on");
                this.Km && (f += "&ip=" + d(this.Km));
                this.Aj && (f += "&adsafe=" + d(this.Aj));
                this.Lm && (f += "&useragent=" + d(this.Lm));
                b && (f += "&adpage=" + d(b + ""));
                var h = this;
                k.google_afs_request_done = function (a) {
                    h.us(a)
                };
                dg(f)
            }
    };
    L.Tc = function (a) {
        for (var b in google[w].ya) {
            var c = google[w].ya[b];
            a[ad](this, c, this.Ha[c])
        }
    };
    L.Pm = function () {
        var a = [];
        this.Tc(function (b, c) {
            c.Fd = 0;
            if (c[hc] && 0 < c.Ac) {
                c.Lp = !0;
                c.Ik = {
                    container: c.oa,
                    number: c.Ac,
                    callback: this.dw(b),
                    position: b
                };
                for (var e in c.bh) null != c.Ik[e] && (c.Ik[e] = c.bh);
                a[D](c.Ik)
            } else c.Lp = !1;
            b == google[w].ya.wb && this.ew(this.U.hc);
            r(c.oa, "gsc-adBlockNoHeight");
            Sa(c.oa[v], "0px")
        });
        0 < a[H] && new google.ads[w].Ads(this.Da, a)
    };
    L.io = function (a, b, c, e, g, f) {
        b = a.G;
        this.Yi && this.Yi(this, b, c);
        this.Xi && this.Xi(this, b, c);
        b.Bc && (b.Bc = null);
        var h = !1;
        if (e) b.Yp(e);
        else {
            e = {};
            if (f)
                for (var l in f) e[l] = f[l];
            for (l in this.Zl) e[l] || (e[l] = this.Zl[l]);
            this.sb && this.$c && (e.cseclient = this.$c);
            h = b[oc](c, e, g)
        }
        this.Ag(a, h);
        return h
    };
    L.ts = function () {
        for (var a = 0; a < this.V[H]; a++) {
            var b = this.V[a].G;
            if ("web" == b.va && b.Z && b.Ak() == google[w].F.bi) return b.Bk()
        }
        return null
    };
    L.ss = function () {
        for (var a = 0; a < this.V[H]; a++) {
            var b = this.V[a].G;
            if ("web" == b.va && b.Z && b.Ak() == google[w].F.Ne) return b.Bk()
        }
        return null
    };
    L.us = function (a) {
        k.google_afs_request_done = null;
        var b = this.Ha[google[w].ya.Wb],
            c = this.Ha[google[w].ya.Hb];
        if (b.oa)
            if (Va(b.oa, ""), Va(c.oa, ""), b.Fd = c.Fd = 0, !a || 1 > a[H]) this.Af();
            else {
                if (!this.fc)
                    for (var e = 0; e < this.V[H]; e++) {
                        var g = this.V[e].G;
                        if (this.rf(g)) {
                            this.Af();
                            return
                        }
                    }
                r(b.oa, b[Tc]);
                var g = !1,
                    f = p[yb]("h2"),
                    e = "";
                this.$i && (e = "*DEBUG* ");
                e += O["ads-by-google"];
                Va(f, e);
                T(b.oa, f);
                for (var h = a[H], e = 0; e < h; e++) {
                    var l = a[e];
                    if ("text/wide" == l[Nc]) {
                        b.Fd++;
                        var m = X("gsc-ad"),
                            n = qg(l.url, l.line1, google[w].A.ff);
                        T(m,
                            n);
                        n = p[yb]("cite");
                        Va(n, l.visible_url);
                        T(m, n);
                        n = kg();
                        Va(n, l.line2);
                        T(m, n);
                        T(b.oa, m)
                    } else c[hc] && (c.Fd++, g || (g = !0, Z(this.Yb, c.Ob), T(c.oa, f[Fb](!0)), r(c.oa, c[Tc])), m = X("gsc-ad"), n = qg(l.url, l.line1, google[w].A.ff), T(m, n), n = kg(), Va(n, l.line2 + "<br/>" + l.line3), T(m, n), n = p[yb]("cite"), Va(n, l.visible_url), T(m, n), T(c.oa, m))
                }
                c[hc] && !g && xg(this.Yb, c.Ob);
                this.fc && (g = this.U.gb, this.rf(g) && this.Af());
                this.Ue && this.Tn && this.Ue(this, "ads")
            }
    };
    L.Wr = function () {
        var a = this[uc][Ic];
        a && "" != a && (this.ve && k[lb](this.ve), this.ve = k[Tb](bg(this, google[w].B[I][oc], [null]), this.kh))
    };
    L.Xr = function () {
        this.ve && k[lb](this.ve);
        this.ve = k[Tb](bg(this, google[w].B[I][oc], [null]), this.kh)
    };
    L.vs = function () {
        var a = google[w].ya,
            b = {};
        if (this.Ha[a.Wb][hc]) switch (this.Qi) {
        case google[w].A.gd:
            b[a.Wb] = 3;
            b[a.Hb] = 5;
            b[a.wb] = 3;
            break;
        case google[w].A.Zb:
            b[a.Wb] = 2;
            b[a.Hb] = 4;
            b[a.wb] = 2;
            break;
        default:
            b[a.Wb] = 1, b[a.Hb] = 2, b[a.wb] = 1
        } else switch (b[a.Wb] = 0, this.Qi) {
        case google[w].A.gd:
            b[a.Hb] = 8;
            b[a.wb] = 3;
            break;
        case google[w].A.Zb:
            b[a.Hb] = 6;
            b[a.wb] = 2;
            break;
        case google[w].A.Nb:
            b[a.Hb] = 3;
            b[a.wb] = 1;
            break;
        default:
            b[a.Hb] = 6, b[a.wb] = 2
        }
        this.Tc(function (a, e) {
            void 0 == e.Ac && (e.Ac = b[a])
        })
    };
    L.Ra = function (a) {
        if (0 < a && 8 >= a) this.ge = a;
        else switch (a) {
        case google[w].A.Zb:
            this.ge = google[w].A.Zb;
            break;
        case google[w].A.gd:
            this.ge = google[w].A.gd;
            break;
        default:
        case google[w].A.Nb:
            this.ge = google[w].A.Nb
        }
        for (var b = 0; b < this.V[H]; b++) this.V[b].G.Ra(a);
        this.Qi = a
    };
    google[w].B[I].setResultSetSize = google[w].B[I].Ra;
    google[w].B[I].vb = function (a) {
        this.tc = a;
        for (var b = 0; b < this.V[H]; b++) this.V[b].G.vb(a)
    };
    google[w].B[I].setLinkTarget = google[w].B[I].vb;
    google[w].B[I].he = function (a) {
        for (var b = 0; b < this.V[H]; b++) this.V[b].Xa.he(a)
    };
    google[w].B[I].setNoResultsString = google[w].B[I].he;
    L = google[w].B[I];
    L.fu = function (a) {
        a.hk ? this.ee(a, !1) : this.ee(a, !0)
    };
    L.ee = function (a, b, c) {
        b ? (xg(a.Hd, "gsc-twiddle-closed"), Z(a.Hd, "gsc-twiddle-opened"), a.hk = !0, Qa(a.Ua[v], "block")) : (xg(a.Hd, "gsc-twiddle-opened"), Z(a.Hd, "gsc-twiddle-closed"), a.hk = !1, Qa(a.Ua[v], "none"), hg(a.Ye, c ? ig("(0)") : ig("(" + a.G.results[H] + ")")))
    };
    L.du = function (a) {
        this.Jg(a, !1, !0);
        return !1
    };
    L.eu = function (a) {
        a.G.Fe && (a.fk ? this.Jg(a, !1, !0) : this.Jg(a, !0, !0))
    };
    L.Jg = function (a, b, c) {
        b ? a.Jb && a.G.kc && (Z(a.Jb, "gsc-twiddle-opened"), xg(a.Jb, "gsc-twiddle-closed"), Va(a.Jb, O[bc]), a.fk = !0, Qa(a.nd[v], "block"), a.G.kc(a.De, !0)) : a.Jb && a.G.kc && (xg(a.Jb, "gsc-twiddle-opened"), Z(a.Jb, "gsc-twiddle-closed"), Va(a.Jb, O.blank), a.fk = !1, a.G.kc(a.De, !1), Qa(a.nd[v], "none"), c && this[oc]())
    };
    L.Uq = function (a) {
        this.zg && this.zg(a)
    };
    L.ex = function () {
        this.Re = !0
    };
    google[w].B[I].cancelSearch = google[w].B[I].ex;
    google[w].B[I].si = function (a) {
        if (a) {
            if (r(this.sf, "gsc-resultsbox-visible"), Z(this.kb, "gsc-results-wrapper-visible"), this.ye && Z(this.ye, "gsc-results-close-btn-visible"), this.xe) {
                Z(this.xe, "gsc-modal-background-image-visible");
                var b = p[Pb]("body")[0];
                Z(b, "gsc-overflow-hidden")
            }
        } else r(this.sf, "gsc-resultsbox-invisible"), xg(this.kb, "gsc-results-wrapper-visible"), this.ye && xg(this.ye, "gsc-results-close-btn-visible"), this.xe && (xg(this.xe, "gsc-modal-background-image-visible"), b = p[Pb]("body")[0], xg(b, "gsc-overflow-hidden"));
        for (b = 0; b < this.V[H]; b++) this.V[b].Pj || (a ? (xg(this.V[b][qc], "gsc-resultsbox-invisible"), Z(this.V[b][qc], "gsc-resultsbox-visible")) : (xg(this.V[b][qc], "gsc-resultsbox-visible"), Z(this.V[b][qc], "gsc-resultsbox-invisible")))
    };
    google[w].B[I].vc = function () {
        this.xd ? this.wd.qc("") : Wa(this[uc], "");
        this.Jf = this.ie = null;
        if (this.Sb != google[w].B.pf && (this.Sb == google[w].B.Se && bb(this[qc][v], "hidden"), this.si(!1), this.fc && r(this.fc, "gsc-tabsAreaInvisible"), this.mc && r(this.mc, this.aj), this.Tc(function (a, c) {
            c.oa && (r(c.oa, "gsc-adBlockInvisible"), c.Ob && xg(this.Yb, c.Ob))
        }), r(this.Qe, "gsc-above-wrapper-area-invisible"), this.Ta && this.Ta[ec]())) {
            var a = this.Ta.yf();
            delete a[google[w].K.xc];
            delete a[google[w].K.Mf];
            this.Ta[kb](a)
        }
    };
    google[w].B[I].clearAllResults = google[w].B[I].vc;
    L = google[w].B[I];
    L.Gi = function (a, b, c, e, g) {
        a = a.Oe ? a.Oe(b) : b;
        e ? (b = {}, b[e] = g, e = bg(this, this[oc], [a, void 0, b])) : e = bg(this, this[oc], [a]);
        vg(c, e)
    };
    L.ql = function () {
        r(this.Lb, this.sb && this.U.hc.G instanceof google[w].F ? "gsc-orderby" : "gsc-orderby-invisible")
    };
    L.pl = function () {
        r(this.Nc, this.sb ? "gsc-getlink" : "gsc-getlink-invisible")
    };
    L.Bl = function (a) {
        var b = function (a, b) {
            for (var g = a[Ab]; g;) {
                var f = g[Nb];
                g != b && a[Zc](g);
                g = f
            }
        };
        b(a.pa, this.Ha[google[w].ya.wb].oa);
        b(a.Ua, a.pa)
    };
    L.Ab = function (a) {
        this.Sb == google[w].B.Se && bb(this[qc][v], "visible");
        this.Ag(a, !1);
        this.si(!0);
        var b, c, e = !1,
            g;
        if (!this.Re) {
            this.Bl(a);
            var f = ["gsc-results", a.G.fe()][nd](" ");
            r(a.Ua, f);
            this.ee(a, !1, !0);
            this.Jg(a, !1, !1);
            a.ui(google[w].Qa.wi);
            this.Mc.zl && (c = a.G.Gg) && a.Ua[vb](c[Fb](!0), a.pa);
            if (f = a.G.spelling)
                if (!f.html && a.G.Fi && a.G.Fi(f), f.html) {
                    var h = f.html[Fb](!0),
                        l = h[Pb]("a");
                    f[Nc] && "SPELL_CORRECTED_RESULTS" == f[Nc] ? l && 1 < l[H] && (this.Gi(a.G, f.correctedQuery, l[0], f.correctedParamName, f.correctedParamValue),
                        this.Gi(a.G, f.originalQuery, l[1], f.originalParamName, f.originalParamValue)) : l && 0 < l[H] && this.Gi(a.G, f.correctedQuery, l[0]);
                    g = X(a.G.fe());
                    Z(g, "gsc-result");
                    T(g, h);
                    a.Ua[vb](g, a.pa)
                }
            f = a.G.context;
            l = this.fc && f;
            this.sb && !this.Oq && l && (c = f[Sc], g = this.Sc(a), c && !g.G.Mb && hg(g.xa.na, this.Al(google[w].T.df(c))), this.Oq = !0);
            var m = a.G.promotions;
            if (m && 0 < m[H])
                for (c = 0; c < m[H]; c++) h = m[c], h.html || a.G.Cl(h, this.Mc), h.html && (g = X(a.G.fe()), Z(g, "gsc-result"), Z(g, "gsc-promotion"), h = h.html[Fb](!0), T(g, h), a.Ua[vb](g, a.pa));
            m = a.G.results;
            a.G.Ve && 400 <= a.G.completionStatus ? (m = [], m[D](a.G.Rq())) : 0 == m[H] && a.Xa.ud && 200 == a.G.completionStatus && (m = [], m[D](a.G.Sq(a.Xa.ud)));
            r(this.Qe, "gsc-above-wrapper-area");
            this.nl(a.G);
            this.Lb && this.ql();
            this.Nc && this.pl();
            c = "Web" == this.U.gb.Mb && 0 < a.G.results[H] && 0 === a.G[Rb].currentPageIndex;
            if (f.html && c) {
                g = X(a.G.fe());
                Z(g, "gsc-result");
                h = f.html[Fb](!0);
                T(g, h);
                c = Fg(g, "div", "gsc-facet-label");
                for (var n = 0; n < c[H]; n++)
                    if (h = c[n]) {
                        var q = h[Pb]("a"),
                            h = this.Sc(a);
                        b = 0;
                        for (var y; y = q[b]; b++) {
                            var u = y[cd]("data-refinementLabel");
                            if (u != a.G.uc()) {
                                var C = y[cd]("label-with-op");
                                C || (C = u);
                                vg(y, bg(this, this.Fl, [h, C]))
                            } else Z(y, "gs-labelActive")
                        }
                    }
                a.Ua[vb](g, a.pa)
            }
            for (c = 0; c < m[H]; c++)
                if (b = m[c], b.html || a.G.cb(b), b.html) {
                    e = !0;
                    g = X(a.G.fe());
                    Z(g, "gsc-result");
                    a.G.We && Z(g, "gsc-result-" + a.G.We);
                    h = b.html[Fb](!0);
                    if (b.GsearchResultClass == google[w].qa.mb && a.Xa.Ig)
                        for (n = h[Pb]("img"), q = 0; q < n[H]; q++) google[w].A.Rc(b.tbWidth, b.tbHeight, a.Xa.Ig, n[q]);
                    T(g, h);
                    if (b.perResultLabels && this.sb && (h = Fg(g, "div", "gs-per-result-labels")[0]))
                        for (q = h[Pb]("a"),
                            h = this.Sc(a), n = 0; y = q[n]; n++) u = y[cd]("data-refinementLabel"), u != a.G.uc() ? ((C = y[cd]("label-with-op")) || (C = u), vg(y, bg(this, this.Fl, [h, C]))) : Z(y, "gs-labelActive");
                    this.zg && (h = this.ri, n = W("", "gsc-keeper"), Va(n, h), T(g, n), fb(n, bg(this, google[w].B[I].Uq, [b, a])));
                    if (c >= a.G.kl) 0 == c && a.Xa.Xb == google[w].B.zd && Qa(a.pa[v], "none"), (h = this.Ha[google[w].ya.wb].oa) && h[kd] == a.pa ? a.pa[vb](g, h) : T(a.pa, g);
                    else a.Ua[vb](g, a.pa)
                }
            a.G.Ia && a.G.gwsUrl && a.G[Rb] && (c = X("gsc-cursor-box gs-bidi-start-align"), c.dir = "ltr", g = this.Qq(a),
                c[s](g), T(a.pa, c));
            e ? (hg(a.Ye, ig("(" + a.G.results[H] + ")")), a.Xa.Xb == google[w].B.zd || a.Xa.Xb == google[w].B.Ud ? this.ee(a, !0) : this.ee(a, !1), (e = a.G.Dl()) && T(a.Ua, e)) : (hg(a.Ye, ig("(0)")), this.Bl(a), this.ee(a, !1));
            a.Xa.Xb = a.Xa.xl;
            this.Mc.zl || (c = a.G.Gg) && T(a.Ua, c[Fb](!0));
            if (this.sb && l && (0 == a.Gb || a.Vd)) {
                h = this.Sc(a);
                e = 0 == a.Gb && this.Tq(a);
                l = a.Vd && 1 == h.Ka[H];
                if (e || l) {
                    if (e && this.Pq(a), f.facets && 0 < f.facets[H]) {
                        e && this.sl(a);
                        g = !1;
                        m = f.facets;
                        if (m[H] > this.Te && 0 < f.display_facets[H] && -1 !== this.Te)
                            for (m[ed](function (a,
                                b) {
                                return b[Zb] - a[Zb]
                            }), c = m[H]; c > this.Te; c--) m.pop();
                        for (c = 0; c < m[H]; c++) {
                            f = m[c];
                            b = f.label_with_op;
                            if (!b || this.ll) b = f[nc];
                            e || l && !a.G.hf(b) ? this.tl(h, b, f[bd]) : (a.G.Vb(f[bd]), this.El(h), g = !0)
                        }
                        l && !g && this.El(h)
                    }
                } else if (a.Vd && f.facets && 0 < f.facets[H])
                    for (m = f.facets, c = 0; c < m[H]; c++) f = m[c], a.G.hf(f[nc]) && a.G.Vb(f[bd]);
                a.Vd && (a.Vd = !1)
            }
            this.sb && this.fc && this.U && a == this.U.hc && this.ol(a);
            this.sb && this.Vq(a);
            this.ti();
            this.Ue && this.Ue(this, a.G)
        }
    };
    google[w].B[I].onSearchComplete = google[w].B[I].Ab;
    L = google[w].B[I];
    L.tl = function (a, b, c) {
        var e = a.G,
            g = e.sp();
        g.tp(b);
        g.Vb(c);
        b = new google[w].Na;
        b.ud = a.Xa.ud;
        this.Bd(g, b, a);
        g.Ra(e.La);
        e.Aa && g.Xo(e.Aa);
        e = a.Ka[a.Ka[H] - 1];
        this.Ni(e, a);
        this.Yl(e);
        Z(e.xa.yb, "gsc-tabData");
        Z(e.xa.yb, "gsc-tabdInactive");
        return e
    };
    L.Vq = function (a) {
        var b = this[uc][Ic];
        a = this.Sc(a);
        if (a.Ka)
            for (var c = 0; c < a.Ka[H]; c++) {
                var e = a.Ka[c];
                hg(e.xa.na, this.Al(google[w].T.df(e.G.nk()[t](/\$q/g, b))))
            }
    };
    L.Sc = function (a) {
        return a.Qf || a
    };
    L.ol = function (a) {
        a.lc ? (xg(a.lc, "gsc-refinementBlockInvisible"), this.U != a.Pf && (this.U = a.Pf, this.me(this.U))) : a.Qf && a.Qf.lc && xg(a.Qf.lc, "gsc-refinementBlockInvisible")
    };
    L.Tq = function (a) {
        var b = a.G.context.facets;
        if (!b) return 0 < a.Ka[H];
        if (b[H] != a.Ka[H]) return !0;
        for (var c = 0; c < b[H]; c++) {
            var e = b[c].label_with_op;
            e || (e = b[c][nc]);
            if (!a.Ka[c].G.hf(e)) return !0
        }
        return !1
    };
    L.Pq = function (a) {
        if (0 != a.Ka[H]) {
            var b = a.lc;
            gg(b);
            b[kd][Zc](b);
            for (a.lc = null; 0 < a.Ka[H];) b = a.Ka.pop(), gg(b[qc]), this.sf[Zc](b[qc])
        }
    };
    L.Qq = function (a) {
        for (var b = X("gsc-cursor"), c = a.G[Rb], e = 0; e < c.pages[H]; e++) {
            var g = "gsc-cursor-page";
            e == c.currentPageIndex && (g += " gsc-cursor-current-page");
            g = W(c.pages[e][nc], g);
            vg(g, bg(this, google[w].B[I].tv, [a, e]));
            b[s](g)
        }
        return b
    };
    google[w].B.Fp = {
        border: "border",
        borderColor: "border-color",
        borderStyle: "border-style",
        borderWidth: "border-width",
        borderTop: "border-top",
        borderTopColor: "border-top-color",
        borderTopStyle: "border-top-style",
        borderTopWidth: "border-top-width",
        borderRight: "border-right",
        borderRightColor: "border-right-color",
        borderRightStyle: "border-right-style",
        borderRightWidth: "border-right-width",
        borderBottom: "border-bottom",
        borderBottomColor: "border-bottom-color",
        borderBottomStyle: "border-bottom-style",
        borderBottomWidth: "border-bottom-width",
        borderLeft: "border-left",
        borderLeftColor: "border-left-color",
        borderLeftStyle: "border-left-style",
        borderLeftWidth: "border-left-width",
        color: "color",
        cssFloat: "float",
        styleFloat: "float",
        clear: "clear",
        cursor: "cursor",
        display: "display",
        font: "font",
        fontFamily: "font-family",
        fontSize: "font-size",
        fontStyle: "font-style",
        fontWeight: "font-weight",
        height: "height",
        margin: "margin",
        marginTop: "margin-top",
        marginRight: "margin-right",
        marginBottom: "margin-bottom",
        marginLeft: "margin-left",
        overflow: "overflow",
        padding: "padding",
        paddingTop: "padding-top",
        paddingRight: "padding-right",
        paddingBottom: "padding-bottom",
        paddingLeft: "padding-left",
        textAlign: "text-align",
        textDecoration: "text-decoration",
        textTransform: "text-transform",
        verticalAlign: "vertical-align",
        visibility: "visibility",
        width: "width"
    };
    google[w].B.Gp = function (a, b) {
        if ($f("safari") || $f("konqueror")) alert("google.search.SearchControl.inlineCurrentStyle is not supported on Safari");
        else {
            var c = !0;
            b && (c = b);
            if (c)
                for (c = 0; c < a[Hb][H]; c++) google[w].B.Gp(a[Hb][c], !0);
            if (1 == a[Dc]) {
                var e, g, f = !1,
                    c = !1;
                k[ac] ? (e = k[ac](a, null), f = g = !0) : a[gd] && (e = a[gd], g = !1, f = !0);
                if (f) {
                    for (var h in e)
                        if (google[w].B.Fp[h]) {
                            var f = google[w].B.Fp[h],
                                l = e[h];
                            "display" == h && "none" == l && (Va(a, ""), c = !0);
                            "" != e[h] && (g ? a[v].setProperty(f, l) : a[v][Cb](f, l))
                        }
                    c && !g && (a.outerHTML = '<div style="display:none"/>')
                }
            }
        }
    };
    google[w].B.inlineCurrentStyle = google[w].B.Gp;
    google[w].B[I].zs = function (a) {
        a = a ? a : this[qc];
        var b = null;
        k[ac] ? b = k[ac](a, null) : a[gd] ? b = a[gd] : p[Oc][ac] && (b = p[Oc][ac](a, null));
        return b ? sa(b[mb], 10) : 300
    };
    google[w].B[I].Uf = function (a, b) {
        this.Ue = fg(a, b)
    };
    google[w].B[I].setSearchCompleteCallback = google[w].B[I].Uf;
    google[w].B[I].Ix = function (a, b) {
        this.Xi = fg(a, b)
    };
    google[w].B[I].setSearchStartingCallback = google[w].B[I].Ix;
    google[w].B[I].Vm = function (a, b) {
        this.Yi = fg(a, b)
    };
    google[w].B[I].setTrackingCallback = google[w].B[I].Vm;
    google[w].B[I].ik = function (a, b) {
        a.ui(b);
        var c = !1;
        switch (b) {
            default:
        case google[w].Qa.hj:
            a.pa && Qa(a.pa[v], "none");
            break;
        case google[w].Qa.gj:
            a.pa && Qa(a.pa[v], "block");
            a.G.La != google[w].A.Nb && (c = !0);
            a.G.Ra(google[w].A.Nb);
            break;
        case google[w].Qa.nm:
            a.pa && Qa(a.pa[v], "block"), a.G.La != google[w].A.Zb && (c = !0), a.G.Ra(google[w].A.Zb)
        }
        c && (c = this[uc][Ic], c[H] && (this.Re = !1, this.ti(), a.Xa.Xb = google[w].B.Ud, this.Ag(a, !0), a.G[oc](c)))
    };
    google[w].B[I].tv = function (a, b) {
        this.Re = !1;
        this.ti();
        this.Ag(a, !0);
        a.Xa.Xb = google[w].B.Ud;
        this.Jf = b + 1;
        if (this.Ta && this.Ta[ec]()) {
            var c = this.Ta.yf();
            c[google[w].K.xc] = b + 1;
            this.Ta[kb](c)
        }
        this.wj(this.ie, b + 1);
        a.G.vo(b);
        this.Pe && this.xj(this.Jf);
        this.kb.scrollIntoView()
    };
    google[w].B[I].ym = function (a) {
        !a || google[w].K.isSupported() && google[w].K.Uu() || a(this);
        a = {};
        this.za || this.ho(this.U, a);
        this.ie && (a[google[w].K.Mf] = this.ie);
        this.Jf && (a[google[w].K.xc] = this.Jf);
        this.Ta = new google[w].K(a, fg(this, google[w].B[I].Tu));
        return this.Ta[ec]()
    };
    google[w].B[I].startHistoryManagement = google[w].B[I].ym;
    google[w].B[I].eo = function (a, b) {
        var c = null;
        if (null == a || 0 > a || a >= this.V[H]) c = this.U;
        else {
            var e = this.V[a];
            if (e.G.Z && b) {
                var g = b;
                e.G.lg && (g = e.G.lg(b));
                c = this.up(e, g);
                c || (e.lc || this.sl(e), c = this.tl(e, g, b), c.Vd = !0, c = c.xa)
            } else c = e.Pf || e.xa
        }
        return c
    };
    google[w].B[I].Tu = function (a) {
        var b = this.eo(a[google[w].K.fi], a[google[w].K.ei]);
        if (b) {
            if (this.Lb) {
                var c;
                null != a[google[w].K.Hh] && (c = this.hm(a[google[w].K.Hh]));
                null == c && (c = this.Qd);
                this.ej(c);
                this.Tg(c, b.gb)
            }
            c = a[google[w].K.Mf] || "";
            a = a[google[w].K.xc];
            if (null == a || 0 >= a) a = 1;
            this.U == b ? c ? this[oc](c, a) : this.vc() : (this.we(b, {
                Mg: c,
                page: a
            }), c || this.vc())
        }
    };
    google[w].B[I].ho = function (a, b) {
        for (var c = this.Sc(a.hc), e = 0; e < this.V[H]; e++)
            if (this.V[e] == c) {
                b[google[w].K.fi] = e;
                break
            }
        c = a.gb;
        c.uc && null != c.uc() ? b[google[w].K.ei] = c.uc() : delete b[google[w].K.ei]
    };
    google[w].ua = function (a, b, c) {
        google[w].ua.Zk++;
        var e = rg("gsc-search-box");
        e.acceptCharset = "utf-8";
        var g = null,
            f = O["search-uc"],
            h = O[w];
        c && c.vh && c.nf && (f = "");
        c && (c.buttonText && (h = f = c.buttonText), c.clickableBrandingUrl && (g = "http://www.google.com", "string" == typeof c.clickableBrandingUrl && c.clickableBrandingUrl[wb](/^http:\/\/[a-z]*\.google\.com/) && (g = c.clickableBrandingUrl), g = pg(g, null, "_BLANK"), r(g, "gsc-branding-clickable")));
        if (c && c.vh) {
            if ("" == f) {
                var f = google[fd][Pc] + "/css/v2/search_box_icon.png",
                    l =
                        p[yb]("input");
                Ya(l, "image");
                l.src = f;
                r(l, "gsc-search-button gsc-search-button-v2")
            } else l = p[yb]("input"), Ya(l, "button"), Wa(l, f), r(l, "gsc-search-button");
            f = l
        } else f = sg(f, "gsc-search-button");
        this.sh = f;
        db(this.sh, h);
        Ua(this, tg(null, "gsc-input", null));
        this[uc].name = "search";
        db(this[uc], h);
        f = this[uc];
        c && c.vh && c.nf && (r(this[uc], ""), Da(this[uc][v], "100%"), Ea(this[uc][v], "0 2px 0 0"), this.Yk = X("gsc-input-box"), this.Yk.id = "gsc-iw-id" + google[w].ua.Zk, T(this.Yk, this[uc]), f = this.Yk);
        c && c.vh && (this[uc].id = "gsc-i-id" +
            google[w].ua.Zk);
        h = lg(null, null, "gsc-search-box");
        T(e, h);
        h = mg(h, 0);
        this.rq = ng(h, "gsc-input");
        l = ng(h, "gsc-search-button");
        T(this.rq, f);
        T(l, this.sh);
        f = lg(null, null, "gsc-branding");
        T(e, f);
        var l = "gsc-branding-img-noclear",
            m = mg(f, 0);
        this.userDefinedCell = ng(m, "gsc-branding-user-defined");
        var n = ng(m, "gsc-branding-text"),
            f = ng(m, l),
            q = W(O["powered-by"], "gsc-branding-text"),
            y;
        y = google[fd][Pc] + "/css/small-logo.png";
        eg() ? (l = X(l), l[v].filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + y + '")', Da(l[v],
            "51px"), Sa(l[v], "15px")) : l = og(y, null, null, l);
        y = l;
        T(n, q);
        g ? (T(g, y), T(f, g)) : T(f, y);
        c && c.ns || Qa(m[v], "none");
        this.rh = e;
        gg(b);
        T(b, this.rh);
        a && (l = "gsc-branding-img", this.Xk = W(O.blank, "gsc-clear-button"), db(this.Xk, O["clear-results"]), a = ng(h, "gsc-clear-button"), T(a, this.Xk), r(f, l), r(y, l))
    };
    rd("google.search.SearchForm", google[w].ua, void 0);
    google[w].ua.Fj = ("https:" == p[Yb][gc] ? "https:" : "http:") + "//www.google.com/cse/intl/" + google[w][ld] + "/images/google_custom_search_watermark.gif";
    google[w].ua.ws = "#FFFFFF " + google[w].T.qq + " no-repeat";
    google[w].ua.hw = function () {
        return "#FFFFFF url(" + google[w].ua.Fj + ") " + google[w].T.qq + " no-repeat"
    };
    google[w].ua.Zk = 0;
    google[w].ua[I].Gx = function (a, b) {
        this.zq = bg(this, this.Hw, [this]);
        this.ni = bg(a, b, [this]);
        this.rh.onsubmit = this.zq;
        fb(this.sh, this.zq)
    };
    google[w].ua[I].setOnSubmitCallback = google[w].ua[I].Gx;
    google[w].ua[I].Rm = function (a, b) {
        fb(this.Xk, bg(a, b, [this]))
    };
    google[w].ua[I].setOnClearCallback = google[w].ua[I].Rm;
    google[w].ua[I].Hw = function () {
        var a = this.rq[qb],
            b = this[uc][Ic];
        this.ni && this.ni();
        if (eg()) {
            var c = this,
                e;
            e = 8 * b[H] >= a ? a - 6 : "99%";
            k[Tb](function () {
                Da(c[uc][v], e)
            }, 1)
        }
        return !1
    };
    Ra(google[w].ua[I], function (a) {
        a && Wa(this[uc], a);
        this.ni && this.ni()
    });
    Ra(google[w].ua[I], google[w].ua[I][oc]);
    google[w].I = function (a, b) {
        this.Fm = (new Date)[Ob]();
        google[w].B[ad](this);
        b = b || {};
        this.Mc = google[w].A.Ns(b.forceV2LookAndFeel);
        this.sb = !0;
        this.xb = null != b._enableApiary_ ? !! b._enableApiary_ : !0;
        this.Ra(b.resultSetSize || google[w].A.Zb);
        var c = {};
        if (b.adoptions)
            for (var e in b.adoptions) b.adoptions[$b](e) && (c[e] = b.adoptions[e]);
        c.iframes = !0;
        c.adtest = b.adtest || null;
        c.channel = b.adchannel || null;
        this.Kf(b.adclient || "", c);
        this.Fg = b.autoCompleteOptions;
        this.Um = google[w].I.Sm(a, this.Fg);
        this.Rg = a;
        this.Rg || (this.Rg = {
            crefUrl: "http://www.google.com/coop/tools/autocse?referer=" + k[Yb]
        }, this.Lr = !0);
        this.mm = google[w].I.Ks;
        this.ll = b.defaultToRefinement;
        this.Pe = (this.Tm = b.bookmarkOptions) ? this.Tm.showBookmarkLink || !1 : !1;
        this.Ja = null;
        if (!b.disableWebSearch || !b.enableImageSearch) {
            var g = {};
            b[google[w].A.Ga] && (g[google[w].A.Ga] = b[google[w].A.Ga]);
            b[google[w].A.$a] && (g[google[w].A.$a] = b[google[w].A.$a]);
            if (b.webSearchOptions)
                for (e in b.webSearchOptions) g[e] = b.webSearchOptions[e];
            this.Ms(g)
        }
        this.Ma = null;
        if (b.enableImageSearch) {
            c = {};
            b[google[w].A.$a] && (c[google[w].A.$a] = b[google[w].A.$a]);
            if (b.imageSearchOptions)
                for (e in b.imageSearchOptions) c[e] = b.imageSearchOptions[e];
            this.Ls(c);
            b.defaultToImageSearch && this.Ja && (this.mm = google[w].I.Js)
        }
        this.Ja && this.Ma && this.Vb({
            web: O.web,
            image: O.image
        });
        b.googleAnalyticsOptions && b.googleAnalyticsOptions.queryParameter && (this.Lj = b.googleAnalyticsOptions, this.Vm(null, google[w].I.Os));
        b.enableOrderBy && (this.ml = !0, this.rc = b.orderByOptions && b.orderByOptions.keys && 0 < b.orderByOptions.keys[H] ?
            b.orderByOptions.keys : [{
                key: "",
                label: O["order-by-relevance"]
            }, {
                key: "date",
                label: O["order-by-date"]
            }], void 0 !== g && b.orderByOptions && g["restrict-extended"] && void 0 !== g["restrict-extended"][ed] && (this.Qd = this.hm(g["restrict-extended"][ed]) || 0), void 0 == this.Qd && (this.Qd = 0));
        this.ul = b.overlayResults ? !0 : !1;
        this.Gm = !0
    };
    rd("google.search.CustomSearchControl", google[w].I, void 0);
    Xf(google[w].I, google[w].B);
    google[w].I.Ck = (new Date)[Ob]();
    google[w].I.Od = null;
    google[w].I.iq = !1;
    google[w].I.zo = function () {
        var a = google[w].I;
        a.iq || (a.Od = new Image, Ca(a.Od, a.Od.onerror = a.Od.onabort = a.Od.ontimeout = function () {
            a.Od = null
        }), a.Od.src = "https://www.googleapis.com/generate_204", a.iq = !0)
    };
    google[w].A.zj() && google[w].I.zo();
    google[w].I[I].Ms = function (a) {
        this.Ja || (this.Ja = new google[w].F, this.Ja.Ec(this.Rg), this.Ja.Ch = O["custom-search"], this.Ja.xb = this.xb, this.Bd(this.Ja), a && (a.resultSetSize && this.Ja.Ra(a.resultSetSize), a[google[w].A.Ga] && this.Ja.eb(google[w].A.Ga, a[google[w].A.Ga]), a[google[w].A.$a] && this.Ja.eb(google[w].A.$a, a[google[w].A.$a]), a.linkTarget && this.Ja.vb(a.linkTarget), a.queryAddition && this.Ja.Dc(a.queryAddition)))
    };
    google[w].I[I].Ls = function (a) {
        this.Ma || (this.Ma = new google[w].C, this.Ma.Ec(this.Rg), this.Ma.xb = this.xb, this.Bd(this.Ma), a && (a.resultSetSize && this.Ma.Ra(a.resultSetSize), this.Ma.Tj(a.layout || google[w].C.Ih), a[google[w].A.$a] && this.Ma.eb(google[w].A.$a, a[google[w].A.$a]), a[google[w].A.Ga] && this.Ma.eb(google[w].A.Ga, a[google[w].A.Ga]), a.linkTarget && this.Ma.vb(a.linkTarget), a.queryAddition && this.Ma.Dc(a.queryAddition)))
    };
    google[w].I[I].Ax = function (a) {
        this.Um = "string" == typeof a ? a : null
    };
    google[w].I[I].setAutoCompletionId = google[w].I[I].Ax;
    google[w].I.Sm = function (a, b) {
        var c = "string" == typeof a ? a : null;
        if (b) {
            var e = {
                prefix: 0,
                ordered: 3,
                any: 1
            }, g = b.matchType;
            g && e[g] && (c = c + "+qptype:" + e[g]);
            if (e = b.validLanguages)
                for (e = e[Ub](","), g = 0; g < e[H]; ++g) e[g] && (c = c + "+lang:" + e[g])
        }
        return c
    };
    google[w].I[I].Yh = function () {
        return this.Um
    };
    google[w].I[I].getPartnerId = google[w].I[I].Yh;
    google[w].I.dx = function (a, b, c, e, g, f, h, l) {
        return google[w].I.nq(a, b, c, {
            saytActor: e,
            callback: g,
            maxCompletions: f,
            styleOptions: l
        })
    };
    google[w].I.attachAutoCompletion = google[w].I.dx;
    google[w].I.nq = function (a, b, c, e) {
        if (c instanceof google[w].B && k[jc]) return k[jc].log("We no longer support attachAutoCompletionWithOptions for SearchControl object"), {};
        a = google[w].I.Sm(a, e);
        e = e || {};
        var g = "string" == typeof c ? Lg(c) : c;
        b = Lg(b);
        if (!g)
            for (var f = b; f;) f = f[kd], Kg(f) && (g = f);
        var f = Vf(),
            h = {
                interfaceLanguage: google[w][ld],
                saytSubmit: e.saytActor,
                maxSuggestions: e.maxCompletions,
                maxPromotions: e.maxPromotions,
                styleOptions: e.styleOptions,
                isLoggingWithHiddenFormFields: e.isLoggingWithHiddenFormFields,
                saytKeyboardNavigationEnabled: e.saytKeyboardNavigationEnabled,
                saytExtraParameters: e.saytExtraParameters
            };
        (e = e.searchButton ? Lg(e.searchButton) : null) && ("submit" != e[Nc] ? h.searchButton = e : k[jc] && k[jc].warn("Cannot associate searchButton with a button of type submit."));
        if (h.isLoggingWithHiddenFormFields && !h.searchButton) return k[jc] && k[jc].warn('The "searchButton" option is required when "isLoggingWithHiddenFormFields" is true.'), {};
        e = c && (c[oc] || c[wc]);
        Kg(g) ? (h.isLoggingWithHiddenFormFields = h.isLoggingWithHiddenFormFields || Ng(Mg(g.action)), f.Qj(g, b, a, h)) : f.$t(e ?
            fg(c, e) : function () {}, b, a, h);
        return {
            getInputQuery: f.Oa,
            prefillQuery: f.qc
        }
    };
    google[w].I.attachAutoCompletionWithOptions = google[w].I.nq;
    google[w].I[I].lx = function (a) {
        if (this.xd) {
            if (a) throw "Please use constructor of CustomSearchControl to pass in additional options.";
            this.wd.Y(!1)
        }
    };
    google[w].I[I].enableAutoCompletion = google[w].I[I].lx;
    google[w].I[I].Fu = function () {
        var a = (new Date)[Ob]();
        if (k.googleLT_ && 1 == k.googleLT_ % 100) {
            var b = google[w].I.Ck - k.googleLT_,
                c = this.Fm - k.googleLT_,
                a = a - k.googleLT_;
            0 < b && 0 < c && 0 < a && google[fd].recordCsiStat(["asa_cse"], ["cl." + b, "cc." + c, "cd." + a])
        }
    };
    google[w].I[I].lf = function (a, b) {
        var c = b;
        c || (c = new google[w].ma);
        c.Ao(google[w].B.Tb);
        this.Lr && 1 == this.V[H] && (this.xu = !0);
        this.he(google[w].B.yo);
        c.Sb != google[w].B.pf && this.xb && google[w].I.zo();
        google[w].B[I].lf[ad](this, a, c);
        this.za || (c = this.eo(this.mm, this.ll)) && this.we(c);
        var c = this.za ? "gsc-control-searchbox-only" : "gsc-control-cse",
            e = this[qc];
        this.za || (e = X(), this[qc][kd] && this[qc][kd][vb](e, this[qc]), T(e, this[qc]), r(this[qc], "gsc-control-wrapper-cse"));
        r(e, c);
        Z(e, c + "-" + google[w][ld]);
        this.Fu()
    };
    google[w].I[I].draw = google[w].I[I].lf;
    google[w].I[I].rk = function (a, b, c, e, g) {
        if (this.za) this.Ko();
        else {
            var f = this.kb[qb];
            xg(this.Yb, "gsc-thinWrapper");
            this.Gm && (f = this.Su(), this.Gm = !1);
            this.wl = f;
            f < google[w].I.Ou ? this.Xc = !1 : f < google[w].I.Qu ? this.Kf(this.$c, {
                includeVerticalAds: !1
            }) : (f = {
                includeVerticalAds: f >= google[w].I.Pu
            }, this.Mo && (f.numTopAds = google[w].I.Ru), this.Kf(this.$c, f));
            if ((new Date)[Ob]() - this.Fm < google[w].I.Nu && this.Xc) try {
                var h = za(k[Yb][ic])[t](/\+/g, " "),
                    l = za(a)[t](/\+/g, " ");
                this.Xc = -1 != h[Jc](l)
            } catch (m) {}
            google[w].B[I].rk[ad](this,
                a, b, c, e, g)
        }
    };
    google[w].I[I].Su = function () {
        var a = jg(google[w].I.uw());
        a[v].fontFamily = "arial";
        a[v].fontSize = "16px";
        bb(a[v], "hidden");
        T(this.kb, a);
        var b = this.kb[qb];
        this.kb[Zc](a);
        return b
    };
    google[w].I.uw = function () {
        for (var a = "", a = "a a a a a ", b = 5; 80 > b; b *= 2) a += a;
        return a
    };
    google[w].I[I].Vb = function (a) {
        "string" == typeof a ? this.Ja ? this.Ja.Vb(a) : this.Ma && this.Ma.Vb(a) : (a.web && this.Ja && this.Ja.Vb(a.web), a.image && this.Ma && this.Ma.Vb(a.image))
    };
    google[w].I[I].setUserDefinedLabel = google[w].I[I].Vb;
    google[w].I[I].Bd = function (a, b, c) {
        google[w].B[I].Bd[ad](this, a, b, c);
        a.Ce = "gcsc"
    };
    google[w].I[I].addSearcher = google[w].I[I].Bd;
    google[w].I[I].kx = function () {
        this.Kf("", {
            numTopAds: 0,
            numSideAds: 0,
            _includeBottomAds_: !1
        });
        this.Tn = !1
    };
    google[w].I[I].disableAds = google[w].I[I].kx;
    google[w].I[I].Dx = function () {
        this.Mo = !0
    };
    google[w].I[I].setMoreAds = google[w].I[I].Dx;
    google[w].I[I].px = function () {
        return this.Ma
    };
    google[w].I[I].getImageSearcher = google[w].I[I].px;
    google[w].I[I].ux = function () {
        return this.Ja
    };
    google[w].I[I].getWebSearcher = google[w].I[I].ux;
    google[w].I[I].Gq = function (a) {
        var b = a.va;
        "web" == b && (b = "");
        a.Z && a.uc() && (b = b ? b + ":" + a.uc() : a.uc());
        return b
    };
    google[w].I[I].getTrackingCategory = google[w].I[I].Gq;
    google[w].I.Os = function (a, b, c) {
        var e = p[Yb];
        c = [e.pathname, e[w], e[w] ? "&" : "?", d(a.Lj.queryParameter), "=", d(c)];
        a.Lj.categoryParameter && (b = a.Gq(b)) && c[D]("&", d(a.Lj.categoryParameter), "=", d(b));
        k._gaq && "function" == typeof k._gaq[D] ? k._gaq[D](["_trackPageview", c[nd]("")]) : k[jc] && k[jc].log("Google Analytics tracking was not correctly setup.")
    };
    google[w].I.Qw = "";
    google[w].I.AUTO_PUBID = google[w].I.Qw;
    google[w].I.Ks = 0;
    google[w].I.Js = 1;
    google[w].I.Ou = 250;
    google[w].I.Qu = 500;
    google[w].I.Pu = 795;
    google[w].I.Nu = 500;
    google[w].I[I].Mo = !1;
    google[w].I.Ru = 4;
    google[w].I.gw = Aa('^url\\("?' + google[w].ua.Fj + '"?\\)$');
    google[w].qa = function () {
        google[w].A[ad](this);
        this.va = "video";
        this.cd = "/GvideoSearch";
        this.yc = "http://video.google.com/videosearch";
        this.Eb = !1;
        this.Fe = !0;
        this.kc = fg(this, this.Gc);
        this.ne = "gsc-videoConfig";
        this.ha = null
    };
    rd("google.search.VideoSearch", google[w].qa, void 0);
    Xf(google[w].qa, google[w].A);
    google[w].qa.mb = "GvideoSearch";
    google[w].qa.RESULT_CLASS = google[w].qa.mb;
    google[w].qa.ga = [];
    google[w].qa.qb = function (a, b, c, e, g) {
        var f = 0;
        a && (f = sa(a, 10));
        a = google[w].A.kd(google[w].qa.ga, f, b);
        google[w].qa.ga[f] = null;
        a.jd.Ab(b, c, e, g, a.hd)
    };
    google[w].qa.RawCompletion = google[w].qa.qb;
    google[w].qa[I].Lc = function (a, b) {
        return google[w].A.nc(google[w].qa.ga, [this, a, b])
    };
    google[w].qa[I].pc = function (a, b, c) {
        b = this.qd(null == b ? "google.search.VideoSearch.RawCompletion" : b, c);
        this.Wa && (a = a + " " + this.Wa);
        a = "&q=" + d(a);
        this.Eb && (a += "&scoring=d");
        this.Ia = a;
        c && 0 != c && (this.Ia = this.Ia + "&start=" + c);
        return b + a
    };
    google[w].qa[I].cb = function (a) {
        a.html && delete a.html;
        var b = X(this.pd());
        Z(b, "gs-result");
        var c = X("gs-image-box"),
            e = X("gs-text-box"),
            g = lg(),
            f = mg(g, 0),
            h = ng(f, "gs-image-box"),
            f = ng(f, "gs-text-box");
        T(h, c);
        T(f, e);
        T(b, g);
        g = google[w].A.Rc(a.tbWidth, a.tbHeight, this.Aa);
        g = og(a.tbUrl, g[mb], g[pc], "gs-image");
        h = pg(a.url, null, this.Ea(), "gs-image");
        r(h, "gs-image");
        T(h, g);
        T(c, h);
        c = qg(a.url, a[Sc], this.Ea(), "gs-title");
        T(e, c);
        c = W(a[ob], "gs-snippet");
        eg() && Sa(c[v], "2.6em");
        T(e, c);
        c = W(this.Me(new Date(a.published)),
            "gs-publishedDate");
        T(e, c);
        c = qg("http://" + a.publisher, a.publisher, this.Ea(), "gs-publisher");
        T(e, c);
        a.html = b;
        this.md(a.html)
    };
    google[w].qa[I].createResultHtml = google[w].qa[I].cb;
    google[w].qa.ix = function (a, b) {
        var c = null;
        if (a.playUrl && "" != a.playUrl) {
            var c = a.playUrl,
                e = "gsc-video-player";
            b && (e = b);
            if ($f("opera")) {
                var g = p[yb]("object");
                r(g, e);
                g[Cb]("type", "application/x-shockwave-flash");
                g[Cb]("data", c)
            } else g = p[yb]("embed"), r(g, e), g[Cb]("type", "application/x-shockwave-flash"), g[Cb]("src", c), a.videoType ? "Google" == a.videoType ? g[Cb]("bgcolor", "#000000") : g[Cb]("wmode", "transparent") : g[Cb]("bgcolor", "#000000");
            c = X(b);
            c[s](g)
        }
        return c
    };
    google[w].qa.createPlayer = google[w].qa.ix;
    google[w].qa[I].Bb = function (a) {
        this.Eb = a == google[w].A.Hc ? !0 : !1
    };
    google[w].qa[I].setResultOrder = google[w].qa[I].Bb;
    google[w].qa[I].Gc = function (a, b) {
        if (b) {
            if (null == this.ha) {
                var c = X("gsc-configSetting");
                this.ha = ug(null, "0", this.Eb, "gsc-configSettingCheckbox");
                T(c, this.ha);
                T(c, W(O["sort-by-date"], "gsc-configSettingCheckboxLabel"));
                var e = X("gsc-configSettingSubmit");
                T(e, sg(O[bc], "gsc-configSettingSubmit"));
                T(c, e);
                T(a, c)
            } else Ia(this.ha, this.Eb);
            this.ha[xb]()
        } else this.ha && (this.ha[Sb] ? this.Bb(google[w].A.Hc) : this.Bb(google[w].A.eg))
    };
    google[w].F = function () {
        google[w].A[ad](this);
        this.va = "web";
        this.cd = "/GwebSearch";
        this.yc = "http://www.google.com/search";
        this.$b = this.Id = this.gk = null;
        this.Ca = {};
        this.la = new google[w].Cc
    };
    rd("google.search.WebSearch", google[w].F, void 0);
    Xf(google[w].F, google[w].A);
    google[w].F.mb = "GwebSearch";
    google[w].F.RESULT_CLASS = google[w].F.mb;
    google[w].F.bi = "cx";
    google[w].F.cxRestriction_CX = google[w].F.bi;
    google[w].F.Ne = "cref";
    google[w].F.cxRestriction_CREF = google[w].F.Ne;
    google[w].F.jx = "none";
    google[w].F.cxRestriction_NONE = google[w].F.jx;
    google[w].F.ga = [];
    google[w].F.Mj = {
        as_dt: !0,
        as_epq: !0,
        as_eq: !0,
        as_lq: !0,
        as_nlo: !0,
        as_nhi: !0,
        as_oq: !0,
        as_q: !0,
        as_qdr: !0,
        as_rq: !0,
        as_sitesearch: !0,
        cr: !0,
        c2coff: !0,
        filter: !0,
        gl: !0,
        hq: !0,
        lr: !0,
        query: !0,
        richsnippet: !0,
        sort: !0,
        usg: !0
    };
    google[w].F.Gu = 20;
    google[w].F.Vh = "data-cturl";
    google[w].F.ii = "data-ctorig";
    google[w].F.qb = function (a, b, c, e, g) {
        var f = 0;
        a && (f = sa(a, 10));
        a = google[w].A.kd(google[w].F.ga, f, b);
        google[w].F.ga[f] = null;
        a.jd.Ab(b, c, e, g, a.hd)
    };
    google[w].F.RawCompletion = google[w].F.qb;
    google[w].F[I].sp = function () {
        var a = new google[w].F;
        this.Go(a);
        a.$b = this.$b;
        a.Ca = this.Ca;
        a.la = this.la.cg();
        a.Z = this.Z;
        return a
    };
    google[w].F[I].Yp = function (a) {
        var b = google[w].A.nc(google[w].F.ga, [this, null, null]);
        google[w].F.qb(b, a, 200, void 0, 200)
    };
    google[w].F[I].renderJson = google[w].F[I].Yp;
    L = google[w].F[I];
    L.lg = function (a) {
        a = a[t](/\s+$/, "")[t](/^\s+/, "");
        return a[t](/\s+/g, "_")[od]()
    };
    L.hf = function (a) {
        return this.Z ? this.la.rb == this.lg(a) : !1
    };
    L.Oe = function (a) {
        return this.Z && this.la.rb ? a[t](Aa(" more:" + this.la.rb + "$"), "") : a
    };
    L.Lc = function (a, b) {
        return google[w].A.nc(google[w].F.ga, [this, a, b])
    };
    L.pc = function (a, b, c) {
        b = null == b ? "google.search.WebSearch.RawCompletion" : b;
        a = [a];
        this.Wa && a[D](this.Wa);
        a = a[rb](this.la.sg())[nd](" ");
        if (this.Z && this.gk) {
            var e = this.gk,
                e = e[t](/__HL__/, google[w][ld]);
            this.Id = e = e[t](/__QUERY__/, d(a))
        }
        var e = this.la.rg(),
            g = [],
            f;
        for (f in e) g[D](f + "=" + e[f]);
        f = "&" + g[nd]("&");
        f += "&q=" + d(a);
        this.$b && (f += "&safe=" + this.$b);
        this.Ca && (a = Gg(this.Ca)) && (f += "&" + a);
        b = this.qd(b, c);
        b += f;
        this.Ia = f;
        c && 0 != c && (this.Ia = this.Ia + "&start=" + c);
        k.google[fd].GoogleLocale && (b = this.xb && this.Z ? b +
            ("&googlehost=" + d(k.google[fd].GoogleLocale)) : b + ("&gl=" + d(k.google[fd].GoogleLocale)));
        return b
    };
    L.Fi = function (a) {
        a.html && delete a.html;
        var b;
        if (a[Nc] && "SPELL_CORRECTED_RESULTS" == a[Nc]) {
            b = X("gs-result");
            var c = jg(O["showing-results-for"] + " ", "gs-spelling"),
                e = p[yb]("a");
            Va(e, google[w].T.bl(this.Oe(a.correctedAnchor)));
            c[s](e);
            b[s](c);
            c = jg(O["search-instead-for"] + " ", "gs-spelling");
            Z(c, "gs-spelling-original");
            e = p[yb]("a");
            Va(e, google[w].T.bl(this.Oe(a.originalAnchor)));
            c[s](e)
        } else b = jg(O.dym + " ", "gs-spelling"), Z(b, "gs-result"), c = p[yb]("a"), Va(c, google[w].T.bl(this.Oe(a[bd])));
        b[s](c);
        a.html = b
    };
    google[w].F[I].createSpellingHtml = google[w].F[I].Fi;
    google[w].F[I].Qp = function (a, b) {
        var c = W(google[w].T.df(a.visibleUrl), "gs-visibleUrl");
        T(b, c);
        Z(c, "gs-visibleUrl-short");
        c = W(google[w].T.df(a.url), "gs-visibleUrl");
        T(b, c);
        Z(c, "gs-visibleUrl-long")
    };
    google[w].F[I].Pp = function (a, b) {
        var c = ng(a, "gs-promotion-image-cell"),
            e = X("gs-promotion-image-box");
        T(e, b);
        T(c, e)
    };
    google[w].F[I].Cl = function (a, b) {
        a.html && delete a.html;
        var c = X("gs-promotion");
        Z(c, "gs-result");
        var e = lg(0, 1, "gs-promotion-table"),
            g = mg(e, 0),
            f;
        T(c, e);
        var h;
        a.image && (e = a.image.url[t]("resize_w=40", "resize_w=60"), e = e[t]("resize_h=40", "resize_h=60"), e = og(e, null, null, "gs-promotion-image"), a.url && (f = pg(a.url, "", this.Ea()), a.clicktrackUrl && google[w].F.gi(f, a.clicktrackUrl, a.url), T(f, e), e = f), h = e, b.qk || google[w].F[I].Pp(g, h));
        e = null;
        a.clicktrackUrl && (e = {}, e[google[w].F.Vh] = a.clicktrackUrl, e[google[w].F.ii] =
            a.url);
        e = qg(a.url, a[Sc], this.Ea(), "gs-title", void 0, e);
        a.titleRight && (f = kg("", "gs-promotion-title-right"), Va(f, " " + a.titleRight), T(e, f));
        e.dir = google[w].T.Dk(e[Fc]);
        Z(e, "gs-bidi-start-align");
        f = ng(g, b.qk && a.image ? "" : "gs-promotion-text-cell");
        T(f, e);
        b.uo && google[w].F[I].Qp(a, f);
        var l;
        b.qk && a.image ? (e = lg(0, 0, "gs-promotion-table-snippet-with-image"), g = mg(e, 0), T(f, e), google[w].F[I].Pp(g, h), l = ng(g, "gs-promotion-text-cell-with-image")) : a.bodyLines && (l = X(), T(f, l));
        if (a.bodyLines) {
            g = a.bodyLines;
            h = "right" ==
                a.bodyLinkAlignment;
            for (var m = 0; m < g[H]; m++) {
                var n = g[m],
                    q = n[Sc],
                    y = n.url,
                    u = n.visibleUrl,
                    e = X("gs-snippet"),
                    C;
                q && (C = kg(""), Va(C, q));
                var z;
                y && u && (z = pg(y, "", this.Ea()), n.clicktrackUrl && google[w].F.gi(z, n.clicktrackUrl, y), n = kg("", "gs-title"), Va(n, u), T(z, n));
                C && h && (T(e, C), z && T(e, ig(" ")));
                z && T(e, z);
                C && !h && (z && T(e, ig(" ")), T(e, C));
                e.dir = google[w].T.Dk(e[Fc]);
                Z(e, "gs-bidi-start-align");
                T(l, e)
            }
        }
        b.uo || google[w].F[I].Qp(a, f);
        a.html = c
    };
    google[w].F[I].createPromotionHtml = google[w].F[I].Cl;
    google[w].F[I].dl = function (a) {
        a.html && delete a.html;
        0 < a.display_facets[H] && (a.html = google[w].fa.ka("facets", a))
    };
    google[w].F[I].createFacetResultHtml = google[w].F[I].dl;
    google[w].F[I].cb = function (a) {
        a.html && delete a.html;
        eb(a, this.Ea() || void 0);
        a.html = google[w].fa.ka("webResult", a);
        if (a.clicktrackUrl)
            for (var b = a.html[Ab]; b; b = b[Nb])
                if (1 == b[Dc]) {
                    "a" == b.tagName[od]() && b[ic] == a.unescapedUrl && google[w].F.gi(b, a.clicktrackUrl, a.unescapedUrl);
                    for (var c = b[Pb]("a"), e = 0, g; g = c[e]; e++) g[ic] == a.unescapedUrl && google[w].F.gi(g, a.clicktrackUrl, a.unescapedUrl)
                }
        this.md(a.html)
    };
    google[w].F[I].createResultHtml = google[w].F[I].cb;
    google[w].F.gi = function (a, b, c) {
        a[Cb](google[w].F.Vh, b);
        a[Cb](google[w].F.ii, c)
    };
    google[w].F[I].Ec = function (a, b, c) {
        this.Ve = null;
        this.la = google[w].Jc.Np(a, b);
        this.la instanceof google[w].sd && (this.Z = !0, this.la[Nc]() == google[w].F.Ne && (this.Ve = O["linked-cse-error-results"]), c && c[wb](/__HL__/) && c[wb](/__QUERY__/) && (this.gk = c))
    };
    google[w].F[I].setSiteRestriction = google[w].F[I].Ec;
    L = google[w].F[I];
    L.Ak = function () {
        return this.Z ? this.la[Nc]() : null
    };
    L.Bk = function () {
        return this.Z ? this.la.ki : null
    };
    L.uc = function () {
        return this.Z ? this.la.rb : null
    };
    L.tp = function (a) {
        this.Z && a && this.la.sq(a)
    };
    L.eb = function (a, b) {
        a == google[w].A.$a && (this.$b = b ? b == google[w].A.Oj || b == google[w].A.Nj || b == google[w].A.Bo ? b : null : null);
        if (a == google[w].A.Ga)
            if (b)
                for (var c in b) {
                    var e = b[c];
                    google[w].F.Mj[c] && (this.Ca[c] = e)
                } else this.Ca = {}
    };
    google[w].F[I].setRestriction = google[w].F[I].eb;
    google[w].F[I].Ra = function (a) {
        la(sa(a, 10)) || (a = sa(a, 10));
        this.Z && (0 < a && a <= google[w].F.Gu || google[w].A.gd == a) ? this.La = a : google[w].A[I].Ra[ad](this, a)
    };
    google[w].F[I].setResultSetSize = google[w].F[I].Ra;
    google[w].F[I].vb = function (a) {
        google[w].A[I].vb[ad](this, a)
    };
    google[w].F[I].setLinkTarget = google[w].F[I].vb;
    google[w].F[I].Dc = function (a) {
        google[w].A[I].Dc[ad](this, a)
    };
    google[w].F[I].setQueryAddition = google[w].F[I].Dc;
    google[w].Jc = function () {};
    google[w].Jc[I].sg = function () {};
    google[w].Jc[I].rg = function () {};
    google[w].Jc[I].cg = function () {};
    google[w].Jc.Np = function (a, b) {
        var c;
        null == a || "string" == typeof a && "" == a ? c = new google[w].Cc : "string" == typeof a ? c = a[wb](/(^partner-pub-\d*:.*)|(^\d{21}:.*)/) ? new google[w].sd(google[w].F.bi, a, b) : new google[w].Nd(a) : a.siteUrl ? c = new google[w].Nd(a.siteUrl) : a.cseId ? c = new google[w].sd(google[w].F.bi, a.cseId, b) : a.crefUrl && (c = new google[w].sd(google[w].F.Ne, a.crefUrl, b));
        return c || new google[w].Cc
    };
    google[w].Cc = function () {};
    Xf(google[w].Cc, google[w].Jc);
    google[w].Cc[I].sg = function () {
        return []
    };
    google[w].Cc[I].rg = function () {
        return {}
    };
    google[w].Cc[I].cg = function () {
        return new google[w].Cc
    };
    google[w].sd = function (a, b, c) {
        this.li = a;
        this.ki = b;
        this.rb = null;
        c && (this.rb = c)
    };
    Xf(google[w].sd, google[w].Jc);
    L = google[w].sd[I];
    Ya(L, function () {
        return this.li
    });
    L.sq = function (a) {
        this.rb = a
    };
    L.sg = function () {
        var a = [];
        this.rb && (0 == this.rb[Jc]("more:") || 0 == this.rb[Jc]("less:") ? a[D](this.rb) : a[D]("more:" + this.rb));
        return a
    };
    L.rg = function () {
        var a = this.ki;
        this.li == google[w].F.Ne && (a = d(a));
        var b = {};
        b[this.li] = a;
        return b
    };
    L.cg = function () {
        return new google[w].sd(this.li, this.ki, this.rb)
    };
    google[w].Nd = function (a) {
        this.Eq = a
    };
    Xf(google[w].Nd, google[w].Jc);
    google[w].Nd[I].sg = function () {
        var a = [];
        a[D]("site:" + this.Eq);
        return a
    };
    google[w].Nd[I].rg = function () {
        return {}
    };
    google[w].Nd[I].cg = function () {
        return new google[w].Nd(this.Eq)
    };
    google[w].NoOldNames || (ea("GwebSearch", google[w].F), ea("GbookSearch", google[w].da), ea("GblogSearch", google[w].ra), ea("GvideoSearch", google[w].qa), ea("GnewsSearch", google[w].ea), ea("GlocalSearch", google[w].H), ea("GimageSearch", google[w].C), ea("GpatentSearch", google[w].X), ea("GSearch", google[w].A), ea("GSearchControl", google[w].B), ea("GSearchForm", google[w].ua), ea("GsearcherOptions", google[w].Na), ea("GdrawOptions", google[w].ma));
    google[w].fa = {};
    google[w].fa.pm = function (a) {
        google[w].fa.mi.unshift(a);
        return google[w].fa.mi
    };
    rd("google.search.Csedr.addOverride", google[w].fa.pm, void 0);
    google[w].fa.mi = ["base_", ""];
    google[w].fa.Bw = function (a, b) {
        google[w].fa.Sk[a] || (google[w].fa.Sk[a] = eval("[function(Vars,render,html,bidiTextDir,bidiHtmlDir,bidiTextMarkAfter,bidiHtmlMarkAfter, localizedMessages){with(Vars)return(" + a + ")}][0]"));
        return google[w].fa.Sk[a](b, google[w].fa.ka, google[w].fa.vg, google[w].T.pw, google[w].T.Dk, google[w].T.rw, google[w].T.qw, O)
    };
    google[w].fa.Sk = {};
    google[w].fa.vg = function (a) {
        var b = p.createDocumentFragment(),
            c = p[yb]("div");
        for (Va(c, a); c[Ab];) b[s](c[Ab]);
        return b
    };
    google[w].fa.ka = function (a, b) {
        google[w].fa.Wk && (p[Xc][s](google[w].fa.vg(google[w].fa.Wk)), google[w].fa.Wk = 0);
        for (var c = 0; !a[s];) {
            if (c >= google[w].fa.mi[H]) return google[w].fa.vg(a + " not found");
            a = p[Ec](google[w].fa.mi[c++] + a) || a
        }
        for (var e = {}, g = 1; g < arguments[H]; g++)
            for (c in arguments[g]) e[c] = arguments[g][c];
        try {
            for (var f = google[w].fa.vg(""), h, l, m = 0, n, q, y = function (a) {
                    a = "data-" + a;
                    q = (n = u[cd](a)) ? google[w].fa.Bw(n, e) : "";
                    h[mc] && h[mc](a);
                    return n
                }, u = a[Ab]; u; u = l ? u : u[Nb])
                if (h = u[Fb](!1), 1 != u[Dc])(3 != u[Dc] ||
                    u.nodeValue[wb](/\S/)) && f[s](h);
                else {
                    y("foreach");
                    !l && n && (e.Foreach = q && "function" == typeof q[nd] ? q : [q], c = 0, l = 1);
                    if (l)
                        if (c < e.Foreach[H]) e.Cur = e.Foreach[e.Index = c++];
                        else {
                            l = 0;
                            continue
                        }
                    y("if") && (m = 0);
                    if (n || y("elif"))
                        if (m || !q) continue;
                        else m = 1;
                    if (!y("attr") || q) {
                        if (f[s](h), n)
                            for (var C in q) void 0 != q[C] && ("class" == C ? r(h, q[C]) : "style" == C && eg() ? h[v].cssText = q[C] : h[Cb](C, q[C]))
                    } else h = f; if (y("facetgroup"))
                        for (g = 0; g < e.display_facets[H]; g++) {
                            var z = {
                                index: ""
                            };
                            1 == e.display_facets[H] ? z = {
                                index: "sizeone"
                            } : 0 == g ? z = {
                                index: "first"
                            } : g == e.display_facets[H] - 1 && (z = {
                                index: "last"
                            });
                            h[s](google[w].fa.ka("facetGroupEntry", e.display_facets[g], z))
                        }
                    var E = y("body") ? q && q[s] ? q : p[tb](q) : google[w].fa.ka(u, e, y("vars") ? q : {});
                    try {
                        E && h[s](E)
                    } catch (G) {}
                }
            return f
        } catch (F) {
            return google[w].fa.vg(F.toString() + ": " + n)
        }
    };
    rd("google.search.Csedr.render", google[w].fa.ka, void 0);
    google[w].qi = {};
    google[w].qi.yx = function (a) {
        if (!(a && a instanceof oa)) return a;
        for (var b = {}, c = 0; c < a[H]; c++)
            for (var e in a[c]) b[e] = a[c][e];
        return b
    };
    rd("google.search.richsnippets.merge", google[w].qi.yx, void 0);
    google[w].qi.wx = function (a) {
        if (!(a instanceof oa)) return !(!a.description && !a.summary);
        for (var b = 0; b < a[H]; b++)
            if (a[b].description || a[b].summary) return !0;
        return !1
    };
    rd("google.search.richsnippets.hreviewNonEmpty", google[w].qi.wx, void 0);
    google[w].D = {};
    google[w].D.element = {};
    google[w].D[J].wa = {
        Yg: "searchbox+results",
        nb: "searchbox",
        Pb: "results"
    };
    google[w].D[J].zc = {
        fl: "standard",
        ue: "two-column",
        pe: "searchbox-only",
        nh: "searchresults-only"
    };
    google[w].D[J].Rb = function (a) {
        return "string" == typeof a ? "" != a && "0" != a && "false" != a[od]() : !! a
    };
    google[w].D[J].il = function (a) {
        a = sa(a, 10);
        return la(a) ? void 0 : a
    };
    google[w].D[J].W = function (a) {
        return function (b) {
            for (var c = 0; c < a[H]; c++)
                if (typeof b == a[c]) return b
        }
    };
    google[w].D[J].$w = function (a) {
        if ("string" == typeof a && (a = Mg(a)) && (0 == a[Jc]("http://") || 0 == a[Jc]("https://"))) return a
    };
    google[w].D[J].Yv = function (a) {
        var b = {};
        if (1 < a[H]) {
            a = a[Qb](1)[Ub]("&");
            for (var c = 0; c < a[H]; c++) {
                var e = a[c][Ub]("=");
                try {
                    var g = za(e[0])
                } catch (f) {
                    continue
                }
                if (g) {
                    try {
                        var h = e[1] ? za(e[1][t](/\+/g, " ")) : e[1]
                    } catch (l) {}
                    b[g] = h
                }
            }
        }
        return b
    };
    google[w].D[J].Xv = function (a) {
        var b = {};
        if (1 < a[H]) {
            a = a[Qb](1)[Ub]("&");
            for (var c = 0; c < a[H]; c++) {
                var e = a[c][Ub]("=");
                try {
                    var g = za(e[0])
                } catch (f) {
                    continue
                }
                if ("gcse-bookmark" === g) try {
                    var h = za(e[1]);
                    b[h[Ub](":")[0]] = h[hd](h[Jc](":") + 1)
                } catch (l) {}
            }
        }
        return b
    };
    google[w].D[J].lp = function (a, b) {
        for (var c = {}, e = 0; e < b[H]; e++) a[$b](b[e]) && (c[b[e]] = a[b[e]]);
        return c
    };
    google[w].D[J].Q = {};
    google[w].D[J].Q.og = "gcse";
    google[w].D[J].Q.lv = "data-";
    google[w].D[J].Q.xk = "div";
    google[w].D[J].Q.mv = "gname";
    google[w].D[J].Q.nv = google[w].D[J].Q.og + ":";
    google[w].D[J].Q.wk = google[w].D[J].Q.og + "-";
    google[w].D[J].Q.$h = {
        REPLACE: 0,
        gp: 1
    };
    google[w].D[J].Q.Pv = function () {
        var a = 0,
            b = "___" + google[w].D[J].Q.og + "_";
        return function () {
            return b + a++
        }
    }();
    google[w].D[J].Q.sx = function (a) {
        var b = 0;
        return function (c) {
            return a == google[w].D[J].zc.ue ? c || a : c || a + b++
        }
    };
    var bh = google[w].D[J].Q,
        ch = google[w].D[J].zc,
        dh = google[w].D[J].wa,
        eh = google[w].D[J].Q.sx,
        fh = {};
    fh[ch.fl] = {
        jg: [dh.Yg],
        getName: eh(ch.fl)
    };
    fh[ch.ue] = {
        jg: [dh.nb, dh.Pb],
        getName: eh(ch.ue)
    };
    fh[ch.pe] = {
        jg: [dh.nb],
        getName: eh(ch.pe)
    };
    fh[ch.nh] = {
        jg: [dh.Pb],
        getName: eh(ch.nh)
    };
    bh.tk = fh;
    google[w].D[J].Q.hg = {
        search: {
            rd: google[w].D[J].zc.fl,
            ig: google[w].D[J].wa.Yg
        },
        searchbox: {
            rd: google[w].D[J].zc.ue,
            ig: google[w].D[J].wa.nb
        },
        searchresults: {
            rd: google[w].D[J].zc.ue,
            ig: google[w].D[J].wa.Pb
        },
        "searchbox-only": {
            rd: google[w].D[J].zc.pe,
            ig: google[w].D[J].wa.nb
        },
        "searchresults-only": {
            rd: google[w].D[J].zc.nh,
            ig: google[w].D[J].wa.Pb
        }
    };
    var gh = google[w].D[J].Q,
        hh = [],
        ih = google[w].D[J].Q.og + "\\:",
        jh;
    for (jh in google[w].D[J].Q.hg) hh[D](ih + jh), hh[D](google[w].D[J].Q.xk + "." + google[w].D[J].Q.wk + jh);
    gh.Qv = hh[nd](", ");
    google[w].D[J].Q.Tv = function (a) {
        var b = [],
            c = google[w].D[J].Q.og + ":",
            e;
        for (e in google[w].D[J].Q.hg) {
            for (var g = a[Pb](c + e), f = 0; f < g[H]; f++) b[D](g[f]);
            g = Fg(a, google[w].D[J].Q.xk, google[w].D[J].Q.wk + e);
            for (f = 0; f < g[H]; f++) b[D](g[f])
        }
        return b
    };
    google[w].D[J].Q.Zv = {
        uA: {
            name: "resultsUrl",
            N: google[w].D[J].$w,
            defaultValue: void 0,
            P: !0,
            M: void 0,
            L: void 0,
            O: google[w].D[J].wa.nb
        },
        hA: {
            name: "newWindow",
            N: google[w].D[J].Rb,
            defaultValue: !1,
            P: !0,
            M: void 0,
            L: void 0,
            O: google[w].D[J].wa.nb
        },
        qA: {
            name: "queryParameterName",
            N: google[w].D[J].W(["string"]),
            defaultValue: "q",
            P: !0,
            M: void 0,
            L: void 0,
            O: void 0
        },
        Cz: {
            name: "autoSearchOnLoad",
            N: google[w].D[J].Rb,
            defaultValue: !0,
            P: !0,
            M: void 0,
            L: void 0,
            O: void 0
        },
        Gz: {
            name: "defaultToRefinement",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: "defaultToRefinement",
            L: void 0,
            O: void 0
        },
        Mz: {
            name: "enableOrderBy",
            N: google[w].D[J].Rb,
            defaultValue: void 0,
            P: !0,
            M: "enableOrderBy",
            L: void 0,
            O: void 0
        },
        lA: {
            name: "orderByOptions",
            N: google[w].D[J].W(["object"]),
            defaultValue: void 0,
            P: !1,
            M: "keys",
            L: "orderByOptions",
            O: void 0
        },
        vA: {
            name: "resultSetSize",
            N: google[w].D[J].W(["string", "number"]),
            defaultValue: void 0,
            P: !0,
            M: "resultSetSize",
            L: void 0,
            O: void 0
        },
        tA: {
            name: "extendedRestricts",
            N: google[w].D[J].W(["object"]),
            defaultValue: void 0,
            P: !1,
            M: google[w].A.Ga,
            L: void 0,
            O: void 0
        },
        wA: {
            name: "safeSearch",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: google[w].A.$a,
            L: void 0,
            O: void 0
        },
        rA: {
            name: "refinementStyle",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: void 0,
            L: void 0,
            O: google[w].D[J].wa.Pb
        },
        Kz: {
            name: "enableHistory",
            N: google[w].D[J].Rb,
            defaultValue: !1,
            P: !0,
            M: void 0,
            L: void 0,
            O: void 0
        },
        fA: {
            name: "linkTarget",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: void 0,
            L: void 0,
            O: google[w].D[J].wa.Pb
        },
        Nz: {
            name: "enableSpeech",
            N: google[w].D[J].Rb,
            defaultValue: !1,
            P: !0,
            M: void 0,
            L: void 0,
            O: google[w].D[J].wa.nb
        },
        Jz: {
            name: "enableAutoComplete",
            N: google[w].D[J].Rb,
            defaultValue: void 0,
            P: !0,
            M: void 0,
            L: void 0,
            O: google[w].D[J].wa.nb
        },
        yz: {
            name: "autoCompleteMatchType",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: "matchType",
            L: "autoCompleteOptions",
            O: google[w].D[J].wa.nb
        },
        Bz: {
            name: "autoCompleteValidLanguages",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: "validLanguages",
            L: "autoCompleteOptions",
            O: google[w].D[J].wa.nb
        },
        zz: {
            name: "autoCompleteMaxCompletions",
            N: google[w].D[J].il,
            defaultValue: void 0,
            P: !0,
            M: "maxCompletions",
            L: "autoCompleteOptions",
            O: google[w].D[J].wa.nb
        },
        Az: {
            name: "autoCompleteMaxPromotions",
            N: google[w].D[J].il,
            defaultValue: void 0,
            P: !0,
            M: "maxPromotions",
            L: "autoCompleteOptions",
            O: google[w].D[J].wa.nb
        },
        iA: {
            name: "noResultsString",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: void 0,
            L: void 0,
            O: google[w].D[J].wa.Pb
        },
        vz: {
            name: "addOverride",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: void 0,
            L: void 0,
            O: void 0
        },
        jA: {
            name: "numTopRefinements",
            N: google[w].D[J].il,
            defaultValue: void 0,
            P: !1,
            M: void 0,
            L: void 0,
            O: void 0
        },
        TA: {
            name: "webSearchResultSetSize",
            N: google[w].D[J].W(["number", "string"]),
            defaultValue: void 0,
            P: !0,
            M: "resultSetSize",
            L: "webSearchOptions",
            O: void 0
        },
        SA: {
            name: "webSearchExtendedRestricts",
            N: google[w].D[J].W(["object"]),
            defaultValue: void 0,
            P: !1,
            M: google[w].A.Ga,
            L: "webSearchOptions",
            O: void 0
        },
        QA: {
            name: "lr",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: "lr",
            L: "webSearchExtendedRestricts",
            O: void 0
        },
        MA: {
            name: "cr",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: "cr",
            L: "webSearchExtendedRestricts",
            O: void 0
        },
        OA: {
            name: "gl",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: "gl",
            L: "webSearchExtendedRestricts",
            O: void 0
        },
        NA: {
            name: "filter",
            N: google[w].D[J].W(["number"]),
            defaultValue: void 0,
            P: !0,
            M: "filter",
            L: "webSearchExtendedRestricts",
            O: void 0
        },
        LA: {
            name: "as_sitesearch",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: "as_sitesearch",
            L: "webSearchExtendedRestricts",
            O: void 0
        },
        KA: {
            name: "as_oq",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: "as_oq",
            L: "webSearchExtendedRestricts",
            O: void 0
        },
        VA: {
            name: "sort_by",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: "sort_by",
            L: "webSearchExtendedRestricts",
            O: void 0
        },
        UA: {
            name: "webSearchSafesearch",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: google[w].A.$a,
            L: "webSearchOptions",
            O: void 0
        },
        PA: {
            name: "webSearchLinkTarget",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: "linkTarget",
            L: "webSearchOptions",
            O: google[w].D[J].wa.Pb
        },
        RA: {
            name: "webSearchQueryAddition",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: "queryAddition",
            L: "webSearchOptions",
            O: void 0
        },
        Lz: {
            name: "enableImageSearch",
            N: google[w].D[J].Rb,
            defaultValue: void 0,
            P: !0,
            M: "enableImageSearch",
            L: void 0,
            O: google[w].D[J].wa.Pb
        },
        Iz: {
            name: "disableWebSearch",
            N: google[w].D[J].Rb,
            defaultValue: void 0,
            P: !0,
            M: "disableWebSearch",
            L: void 0,
            O: void 0
        },
        Fz: {
            name: "defaultToImageSearch",
            N: google[w].D[J].Rb,
            defaultValue: void 0,
            P: !0,
            M: "defaultToImageSearch",
            L: void 0,
            O: void 0
        },
        Yz: {
            name: "imageSearchLayout",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: "layout",
            L: "imageSearchOptions",
            O: google[w].D[J].wa.Pb
        },
        $z: {
            name: "imageSearchExtendedRestricts",
            N: google[w].D[J].W(["object"]),
            defaultValue: void 0,
            P: !1,
            M: google[w].A.Ga,
            L: "imageSearchOptions",
            O: void 0
        },
        Zz: {
            name: "image_lr",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: "lr",
            L: "imageSearchExtendedRestricts",
            O: void 0
        },
        Vz: {
            name: "image_cr",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: "cr",
            L: "imageSearchExtendedRestricts",
            O: void 0
        },
        Xz: {
            name: "image_gl",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: "gl",
            L: "imageSearchExtendedRestricts",
            O: void 0
        },
        Wz: {
            name: "image_filter",
            N: google[w].D[J].W(["number"]),
            defaultValue: void 0,
            P: !0,
            M: "filter",
            L: "imageSearchExtendedRestricts",
            O: void 0
        },
        Uz: {
            name: "image_as_sitesearch",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: "as_sitesearch",
            L: "imageSearchExtendedRestricts",
            O: void 0
        },
        Tz: {
            name: "image_as_oq",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: "as_oq",
            L: "imageSearchExtendedRestricts",
            O: void 0
        },
        bA: {
            name: "image_sort_by",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: "sort_by",
            L: "imageSearchExtendedRestricts",
            O: void 0
        },
        aA: {
            name: "imageSearchResultSetSize",
            N: google[w].D[J].W(["number", "string"]),
            defaultValue: void 0,
            P: !0,
            M: "resultSetSize",
            L: "imageSearchOptions",
            O: void 0
        },
        Rz: {
            name: "gaQueryParameter",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: "queryParameter",
            L: "googleAnalyticsOptions",
            O: google[w].D[J].wa.nb
        },
        Qz: {
            name: "gaCategoryParameter",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: "categoryParameter",
            L: "googleAnalyticsOptions",
            O: google[w].D[J].wa.nb
        },
        tz: {
            name: "adchannel",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: "adchannel",
            L: void 0,
            O: void 0
        },
        uz: {
            name: "adclient",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: "adclient",
            L: void 0,
            O: void 0
        },
        xz: {
            name: "adtest",
            N: google[w].D[J].W(["string"]),
            defaultValue: void 0,
            P: !0,
            M: "adtest",
            L: void 0,
            O: void 0
        },
        wz: {
            name: "adoptions",
            N: google[w].D[J].W(["object"]),
            defaultValue: void 0,
            P: !1,
            M: "adoptions",
            L: void 0,
            O: void 0
        },
        yA: {
            name: "overlayResults",
            N: google[w].D[J].Rb,
            defaultValue: !1,
            P: !0,
            M: "overlayResults",
            L: void 0,
            O: void 0
        },
        xA: {
            name: "showBookmarkLink",
            N: google[w].D[J].Rb,
            defaultValue: !1,
            P: !1,
            M: "showBookmarkLink",
            L: "bookmarkOptions",
            O: void 0
        },
        cA: {
            name: "isSitesearch",
            N: google[w].D[J].Rb,
            defaultValue: !1,
            P: !1,
            M: "isSiteSearch",
            L: "bookmarkOptions",
            O: void 0
        }
    };
    google[w].D[J].Q.Xg = function (a, b) {
        var c = google[w].D[J].Q.Zv,
            e;
        for (e in c) c[$b](e) && a[ad](b, c[e])
    };
    google[w].D[J].Q.kp = ["oq", "gs_204"];
    google[w].D[J].gg = function (a, b) {
        this.Kd = a;
        this.hp = b ? google[w].D[J].Q.$h.gp : google[w].D[J].Q.$h.REPLACE;
        var c, e;
        if (b) c = b.tag || "search", e = b.attributes || {};
        else {
            c = a.nodeName[od]();
            var g = "";
            c == google[w].D[J].Q.xk ? (g = google[w].D[J].Q.lv, c = (a[Tc] || a[cd]("class"))[Qb](google[w].D[J].Q.wk[H])) : c = c[Qb](google[w].D[J].Q.nv[H]);
            e = google[w].D[J].gg.ov(a, g)
        }
        this.attributes = e;
        this.rd = google[w].D[J].Q.hg[c].rd;
        Ya(this, google[w].D[J].Q.hg[c].ig);
        g = b ? b.gname : a[cd](g + google[w].D[J].Q.mv);
        this.Kb = google[w].D[J].Q.tk[this.rd].getName(g)
    };
    google[w].D[J].gg.ov = function (a, b) {
        var c = {};
        google[w].D[J].Q.Xg(function (e) {
            var g = a[cd](b + e[Qc]);
            null != g && (c[e[Qc]] = g)
        }, this);
        return c
    };
    google[w].D[J].gg[I].xv = function () {
        var a = this.Kd,
            b;
        if (this.hp == google[w].D[J].Q.$h.REPLACE) {
            b = p[yb]("div");
            var c = a[kd];
            c[vb](b, a);
            c[Zc](a);
            b.id = a.id;
            this.Kd = b
        } else this.hp == google[w].D[J].Q.$h.gp && (b = p[yb]("div"), a[s](b), this.Kd = b);
        this.Kd.id && 0 !== this.Kd.id[H] || (this.Kd.id = google[w].D[J].Q.Pv())
    };
    google[w].D[J].wp = function (a, b, c, e, g, f) {
        this.Dd = a;
        this.Kb = b;
        Ya(this, c);
        this.fg = {};
        this.$ = this.zw(e);
        this.dg = g;
        this.cc = f
    };
    L = google[w].D[J].wp[I];
    L.kg = 0;
    L.Ic = null;
    L.Uv = function (a) {
        if (a.Kb != this.Kb) return Pg("Name of the component, " + a.Kb + ", should match name of the element, " + this.Kb + "."), this.kg;
        var b = !1;
        this.fg[a[Nc]] && (Pg("Multiple components of the same type " + a[Nc] + " for Element named " + this.Kb + " are detected. Only the last is used."), b = !0);
        for (var c = google[w].D[J].Q.tk[this[Nc]].jg, e = 0; e < c[H]; e++)
            if (c[e] == a[Nc]) return this.fg[a[Nc]] = a, b || this.kg++, this.kg;
        Pg("Component of type " + a[Nc] + " is not allowed for Element named " + this.Kb + " of type " + this[Nc] +
            ".");
        return this.kg
    };
    L.ka = function () {
        var a = google[w].D[J].Q.tk[this[Nc]].jg;
        if (a[H] != this.kg)
            for (var b = 0; b < a[H]; b++)
                if (!this.fg[a[b]]) return Pg("Component of type " + a[b] + " is missing for Element named " + this.Kb + "."), !1;
        var a = {}, c;
        for (c in this.fg) b = this.fg[c], b.xv(), a[c] = b.Kd, this.Av(b.attributes, c);
        this.Ic = this.yv(a);
        return !0
    };
    L.zw = function (a) {
        var b = {}, c;
        for (c in a) a[$b](c) && (b[c] = a[c]);
        return b
    };
    L.Av = function (a, b) {
        var c = google[w].D[J].wa;
        google[w].D[J].Q.Xg(function (e) {
            if (a[$b](e[Qc]) && e.P && (b == c.Yg || void 0 == e.O || e.O == b)) {
                var g = e.N(a[e[Qc]]);
                null != g && ("webSearchExtendedRestricts" === e.L ? (this.$.webSearchExtendedRestricts || (this.$.webSearchExtendedRestricts = {}), this.$.webSearchExtendedRestricts[e[Qc]] = g) : "imageSearchExtendedRestricts" === e.L ? (this.$.imageSearchExtendedRestricts || (this.$.imageSearchExtendedRestricts = {}), this.$.imageSearchExtendedRestricts[e.M] = g) : this.$[e[Qc]] = g)
            }
        }, this)
    };
    L.yv = function (a) {
        var b = {
            imageSearchOptions: {},
            webSearchOptions: {},
            autoCompleteOptions: {},
            googleAnalyticsOptions: {},
            orderByOptions: {},
            bookmarkOptions: {}
        };
        google[w].D[J].Q.Xg(function (a) {
            if (a.M && void 0 != this.$[a[Qc]]) {
                var c = b;
                a.L && (c = b[a.L]);
                c[a.M] = this.$[a[Qc]]
            }
        }, this);
        this.$.isSitesearch && void 0 !== this.cc.sortBy && (b.webSearchOptions || (b.webSearchOptions = {}), b.webSearchOptions[google[w].A.Ga] || (b.webSearchOptions[google[w].A.Ga] = {}), b.webSearchOptions[google[w].A.Ga].sort = this.cc.sortBy);
        this.$.isSitesearch &&
            this.cc.refine && (b.defaultToRefinement = this.cc.refine);
        this.$.isSitesearch && this.cc.image && (b.defaultToImageSearch = "0" != this.cc.image ? !0 : !1);
        var c = new google[w].I(this.Dd, b);
        void 0 != this.$.refinementStyle && c.yg(this.$.refinementStyle);
        void 0 != this.$.addOverride && google[w].fa.pm(this.$.addOverride);
        void 0 != this.$.linkTarget && c.vb(this.$.linkTarget);
        var e = new google[w].ma;
        void 0 != this.$.enableAutoComplete && e.um(this.$.enableAutoComplete);
        void 0 != this.$.enableSpeech && e.wm(this.$.enableSpeech);
        void 0 !=
            this.$.numTopRefinements && e.xm(this.$.numTopRefinements);
        var g = null,
            f = google[w].D[J].zc,
            g = google[w].D[J].wa;
        this[Nc] == f.pe ? (f = this.$.resultsUrl, !f && this.Dd ? f = "http://www.google.com/cse?" + ("string" == typeof this.Dd ? "cx=" + d(this.Dd) : "cref=" + d(this.Dd.crefUrl)) : void 0 == f && (f = k[Yb][ic]), e.rm(f, this.$.queryParameterName, this.$.newWindow), g = a[g.nb]) : this[Nc] == f.nh ? (e.qm(), g = a[g.Pb]) : this[Nc] == f.ue ? (e.vm(a[g.nb]), g = a[g.Pb]) : g = a[g.Yg];
        c.lf(g, e);
        this.$.noResultsString && (a = this.$.noResultsString, a = xd(a), c.he(a));
        this.$.enableHistory ? c.ym(fg(this, this.sm)) && void 0 == this.$.linkTarget && c.vb(google[w].A.om) : this.sm(c);
        return c
    };
    L.sm = function (a) {
        var b = google[w].D[J].zc,
            c = this.dg[this.$.queryParameterName];
        if (this.$.isSitesearch && this.cc.query && this[Nc] != b.pe) {
            c = this.cc.query;
            b = sa(this.cc.page, 10);
            la(b) && (b = 1);
            var e = google[w].D[J].lp(this.dg, google[w].D[J].Q.kp);
            a[oc](c, b, e)
        } else c && this.$.autoSearchOnLoad && (this[Nc] == b.pe ? a.Xh(c) : (e = google[w].D[J].lp(this.dg, google[w].D[J].Q.kp), a[oc](c, void 0, e)))
    };
    google[w].D[J].Kp = function (a) {
        a = a || {};
        this.Dd = a.cx || (a.cref ? {
            crefUrl: a.cref
        } : null);
        this.Kv = this.Wv(a.uiOptions);
        this.Ld = {};
        this.mg = {};
        this.dg = google[w].D[J].Yv(k[Yb][w]);
        this.cc = google[w].D[J].Xv(k[Yb][w]);
        this.Fk = a.rawCss;
        this.Vv()
    };
    L = google[w].D[J].Kp[I];
    L.Wv = function (a) {
        a = a || {};
        var b = {};
        google[w].D[J].Q.Xg(function (c) {
            var e = c[Qc],
                g = null;
            a[$b](e) && (g = c.N(a[e]));
            null != g ? b[e] = g : void 0 != c.defaultValue && (b[e] = c.defaultValue)
        }, this);
        return b
    };
    L.Rv = function () {
        if ("boolean" == typeof this.jl) return this.jl;
        var a = p[yb]("div"),
            b = p[yb]("G:TEST");
        a[s](b);
        return this.jl = !! (a.querySelectorAll && 0 < a.querySelectorAll("G\\:TEST")[H])
    };
    L.go = function (a) {
        a = (a ? Lg(a) : null) || p[Xc];
        a = this.Rv() ? a.querySelectorAll(google[w].D[J].Q.Qv) : google[w].D[J].Q.Tv(a);
        for (var b = 0; b < a[H]; ++b) this.rp(new google[w].D[J].gg(a[b]));
        this.qp()
    };
    L.ka = function (a, b) {
        if (b && "searchbox" != a.tag && "searchresults" != b.tag) return Pg('First and second components must be of tag "searchbox"  and "searchresults" separately.'), null;
        if (b && a.Kb != b.Kb) return Pg("First and second components must be of the same gname."), null;
        var c = [a];
        b && c[D](b);
        for (var e, g = [], f = 0; f < c[H]; f++) {
            if (!c[f].div) return Pg("div required for component."), null;
            c[f].tag || (c[f].tag = "search");
            if (!google[w].D[J].Q.hg[c[f].tag]) return Pg("tag named " + c[f].tag + " is not recognized"), null;
            var h =
                Lg(c[f].div);
            h && 1 === h[Dc] && (h = new google[w].D[J].gg(h, c[f]), e = h.Kb, g[D](h))
        }
        for (f = 0; f < g[H]; f++) this.rp(g[f]);
        this.qp();
        return e ? this.di(e) : null
    };
    L.di = function (a) {
        return this.mg[a] ? new google[w].D[J].Hk(this.mg[a]) : null
    };
    L.Gk = function () {
        var a = {}, b;
        for (b in this.mg) a[b] = new google[w].D[J].Hk(this.mg[b]);
        return a
    };
    L.rp = function (a) {
        var b = a.Kb;
        this.Ld[b] || (this.Ld[b] = new google[w].D[J].wp(this.Dd, b, a.rd, this.Kv, this.dg, this.cc));
        this.Ld[b].Uv(a)
    };
    L.Vv = function () {
        if (this.Fk) {
            var a = p[Pb]("head")[0];
            a || (a = p[Xc][kd][s](p[yb]("head")));
            var b = p[yb]("style");
            Ya(b, "text/css");
            b[vc] ? b[vc].cssText = this.Fk : b[s](p[tb](this.Fk));
            a[s](b)
        }
    };
    L.qp = function () {
        for (var a in this.Ld)
            if (this.Ld[$b](a)) {
                var b = this.Ld[a];
                b.ka() && (this.mg[a] = b);
                delete this.Ld[a]
            }
    };
    google[w].D[J].Hk = function (a) {
        this.gname = a.Kb;
        Ya(this, a[Nc]);
        this.uiOptions = a.$;
        Ra(this, fg(a.Ic, a.Ic[oc]));
        this.prefillQuery = fg(a.Ic, a.Ic.Xh);
        this.getInputQuery = fg(a.Ic, a.Ic.pq);
        this.clearAllResults = fg(a.Ic, a.Ic.vc)
    };
    rd("google.search.cse.element.ElementInterface", google[w].D[J].Hk, void 0);
    google[w].D[J].pg = function () {
        return (new Date)[Ob]()
    };
    google[w].D[J].Ck = google[w].D[J].pg();
    google[w].D[J].Ep = function (a, b) {
        if (!google[w].D[J].Mp && (google[w].D[J].Mp = google[w].D[J].pg(), k.googleLT_ && 1 == k.googleLT_ % 100)) {
            var c = "e",
                e = k.googleLT_;
            k.__gcse && k.__gcse.ct && (e = k.__gcse.ct, c = "c");
            var g = k.googleLT_ - e,
                f = google[w].D[J].Ck - e,
                h = google[w].D[J].$v - e,
                l = b - e,
                e = google[w].D[J].Mp - e;
            if (0 < f && 0 < h && 0 < l) {
                var m = "ex";
                "c" == c && "explicit" != k.__gcse.parsetags && (m = "ol");
                var n = "render" == a ? "r" : "g",
                    q = [];
                "c" == c && q[D]("gl." + g);
                q = q[rb](["el." + f, "mc." + h, n + "s." + l, n + "e." + e]);
                google[fd].recordCsiStat(["element_" +
                    (c + m)
                ], q)
            }
        }
    };
    google[w].D[J].qg = function (a) {
        return google[w].D[J].ng ? !1 : (google[w].D[J].ng = new google[w].D[J].Kp(a), google[w].D[J].$v = google[w].D[J].pg(), !0)
    };
    rd("google.search.cse.element.init", google[w].D[J].qg, void 0);
    google[w].D[J].go = function (a) {
        google[w].D[J].qg();
        var b = google[w].D[J].pg();
        google[w].D[J].ng.go(a);
        google[w].D[J].Ep("go", b)
    };
    rd("google.search.cse.element.go", google[w].D[J].go, void 0);
    google[w].D[J].ka = function (a, b) {
        google[w].D[J].qg();
        var c = google[w].D[J].pg(),
            e = google[w].D[J].ng.ka(a, b);
        google[w].D[J].Ep("render", c);
        return e
    };
    rd("google.search.cse.element.render", google[w].D[J].ka, void 0);
    google[w].D[J].di = function (a) {
        google[w].D[J].qg();
        return google[w].D[J].ng.di(a)
    };
    rd("google.search.cse.element.getElement", google[w].D[J].di, void 0);
    google[w].D[J].Gk = function () {
        google[w].D[J].qg();
        return google[w].D[J].ng.Gk()
    };
    rd("google.search.cse.element.getAllElements", google[w].D[J].Gk, void 0);
    google[w].fa.Wk = ' <div style="display:none"> <span id="private_ratings"> <span class="gsc-snippet-metadata"> <span data-if="Vars.ratingstars"> <span class="gsc-rating-bar"> <span data-attr="{style:\'width:\' + (Vars.ratingstars * 20) + \'%\'}"></span> </span> <span data-if="Vars.ratingcount"> <span data-body="\' \' + Vars.ratingcount"></span> <span> reviews</span> </span> </span> <span data-if="Vars.totaltime"> <span data-if="Vars.ratingstars && Vars.ratingcount"> - </span> <span data-body="Vars.totaltime"></span> </span> <span data-if="Vars.calories"> <span data-if="Vars.ratingstars && Vars.ratingcount || Vars.totaltime"> - </span> <span data-body="Vars.calories"></span> <span> cal</span> </span> <span data-if="Vars.pricerange"> <span data-if="Vars.ratingstars && Vars.ratingcount || Vars.totaltime || Vars.calories"> - </span> <span> Price range: </span> <span data-body="Vars.pricerange"></span> </span> <span data-if="Vars.reviewer" class="gsc-reviewer"> <span data-body="\' \' + Vars.reviewer"></span> </span> </span> </span> <span id="private_hproduct"> <span class="gsc-snippet-metadata"> <span data-if="Vars.availability">Availability: <span data-body="Vars.availability"></span>.</span> <span data-if="Vars.availability && Vars.price">&nbsp;</span> <span data-if="Vars.price"> Price: <span data-body="Vars.price"></span>.</span> </span> </span> <span id="private_hreview_icon"> <span data-if="google.search.richsnippets.hreviewNonEmpty(Vars.hreview)"> <span class="gsc-zippy"></span> </span> </span> <span id="private_hreview_content"> <span data-if="google.search.richsnippets.hreviewNonEmpty(Vars.hreview)" class="gsc-preview-reviews"> <ul> <span data-foreach="Vars.hreview" data-attr="0"> <li data-if="(Cur.description || Cur.summary) && Index == 0" class = "gsc-review-agregate-first-line"> <span data-if="Cur.description" data-body="Cur.description"></span> <span data-elif="Cur.summary" data-body="Cur.summary"></span> </li> <li data-elif="(Cur.description || Cur.summary) && Index < 10" data-attr="{\'class\': Index % 2 == 0 ? \'gsc-review-agregate-even-lines\' : \'gsc-review-agregate-odd-lines\'}"> <span data-if="Cur.description" data-body="Cur.description"></span> <span data-elif="Cur.summary" data-body="Cur.summary"></span> </li> </span> </ul> </span> </span> <span id="private_hrecipe"> <span data-if="Vars.author" class="gsc-author"> <span data-body="\' \' + Vars.author"></span> </span> </span> <span id="private_recipe"> <span data-attr="0" data-body="render(\'private_ratings\',google.search.richsnippets.merge(richSnippet.recipe))"> </span> <span data-if="Vars.richSnippet.hrecipe && Vars.richSnippet.hrecipe.author && !Vars.richSnippet.recipe.reviewer" data-attr="0" data-body="render(\'private_hrecipe\',richSnippet.hrecipe)"> </span> </span> <span id="private_person"> <span data-vars="{vcard:google.search.richsnippets.merge(Vars.richSnippet.vcard)}"> <span data-if="Vars.richSnippet.vcard && vcard.adr"> <span data-if="vcard.adr" class="gs-location"> <span data-body="\' \' + vcard.adr"> </span> </span> </span> <span data-elif="Vars.richSnippet.person"> <span data-if="person.role" class="gsc-role"> <span data-attr="0" data-body="\' \' + person.role"> </span> </span> <span data-if="person.org" class="gsc-org"> <span data-body="\' @\' + person.org"> </span> </span> <span data-if="person.location" class="gsc-location"> <span data-if="person.org || person.role || Vars.richSnippet.review"> - </span> <span data-body="\' \' + person.location"> </span> </span> </span> <span data-if="Vars.richSnippet.vcard && vcard.tel" class="gsc-tel"> <span data-if="(person && (person.org || person.role || Vars.richSnippet.review || person.location)) || (Vars.richSnippet.vcard && vcard.adr) "> - </span> <span data-body="\' Tel: \' + vcard.tel"> </span> </span> </span> </span> <span id="private_metadata" class="gsc-snippet-metadata"> <span data-vars="{person:google.search.richsnippets.merge(Vars.richSnippet.person), product:google.search.richsnippets.merge(Vars.richSnippet.hproduct)}"> <span data-if="Vars.richSnippet.recipe" data-attr="0" data-body="render(\'private_recipe\', Vars)"> </span> <span data-elif="Vars.richSnippet.review" data-attr="0" data-body="render(\'private_ratings\',google.search.richsnippets.merge(richSnippet.review))"> </span> <span data-if="Vars.richSnippet.hproduct && (product.availability || product.price)" data-attr="0" data-body="render(\'private_hproduct\', product)"> </span> <span data-elif="Vars.richSnippet.person || Vars.richSnippet.vcard" data-attr="0" data-body="render(\'private_person\', Vars)"> </span> </span> </span> <div id="base_facets"> <div class="gsc-context-box" data-facetgroup=\'title\'> </div> </div> <div id="base_facetGroupEntry"> <div> <div class="gsc-facet-label gsc-col" style="display:inline-block;"> <a data-attr="{\'data-refinementLabel\': label, \'label-with-op\': label_with_op}" data-body="html(anchor)"></a> </div> <div class="gsc-facet-result gsc-col" data-body="html(width + \'%\')" style="display:inline-block;"> </div> <div data-attr="{\'class\': index == \'first\' ? \'gsc-chart gsc-top gsc-col\' : index == \'last\' ? \'gsc-chart gsc-bottom gsc-col\' : index == \'sizeone\' ? \'gsc-chart gsc-bottom gsc-col gsc-top\' : \'gsc-chart gsc-col\'}" style="display:inline-block;"> <div class="" data-attr="{style:\'width:\' + width + \'%\'}"></div> </div> </div> </div> <div id="base_webResult"> <div class="gs-webResult gs-result" data-vars="{longUrl:function() { var i = unescapedUrl.indexOf(visibleUrl); return i < 1 ? visibleUrl : unescapedUrl.substring(i);}}"> <div class="gsc-thumbnail-inside"> <div class="gs-title"> <a class="gs-title" data-attr="{href:unescapedUrl,target:target,dir:bidiHtmlDir(title)}" data-body="html(title)"> </a> </div> </div> <div class="gsc-url-top"> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-short" data-body="visibleUrl" data-attr="{dir:bidiTextDir(visibleUrl)}"> </div> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-long" data-body="Vars.formattedUrl ? html(Vars.formattedUrl) : longUrl()" data-attr="{dir: Vars.formattedUrl ? bidiHtmlDir(Vars.formattedUrl) : bidiTextDir(longUrl()), style:\'word-break:break-all;\'}"> </div> </div> <table class="gsc-table-result"> <tbody> <tr> <td class="gsc-table-cell-thumbnail gsc-thumbnail" style="display:none"> <div data-if="Vars.richSnippet" data-attr="0" data-body="render(\'thumbnail\',richSnippet,{url:unescapedUrl,target:target})"> </div> </td> <td data-attr="{\'class\': \'gsc-table-cell-snippet-close\' + ((google.search.CurrentLocale == \'en\' && Vars.richSnippet && Vars.richSnippet.hreview && google.search.richsnippets.hreviewNonEmpty(Vars.richSnippet.hreview)) ? \' gsc-collapsable\' : \'\')}" onclick="if (this.className == \'gsc-table-cell-snippet-close gsc-collapsable\') { this.className = \'gsc-table-cell-snippet-open gsc-collapsable\'; } else if (this.className == \'gsc-table-cell-snippet-open gsc-collapsable\') { this.className = \'gsc-table-cell-snippet-close gsc-collapsable\'; };"> <span data-if="google.search.CurrentLocale == \'en\' && Vars.richSnippet && Vars.richSnippet.hreview" data-attr="0" data-body="render(\'private_hreview_icon\',richSnippet)"> </span> <div class="gs-title gsc-table-cell-thumbnail gsc-thumbnail-left"> <a class="gs-title" data-attr="{href:unescapedUrl,target:target,dir:bidiHtmlDir(title)}" data-body="html(title)"> </a> </div> <div class="gs-fileFormat" data-if="Vars.fileFormat"> <span class="gs-fileFormat" data-body="localizedMessages[\'file-format\'] + \' \'"></span> <span class="gs-fileFormatType" data-body="Vars.fileFormat"></span> </div> <div data-if="google.search.CurrentLocale == \'en\' && Vars.richSnippet"> <span data-attr="0" data-body="render(\'private_metadata\', Vars)"> </span> </div> <div class="gs-bidi-start-align gs-snippet" data-body="html(content)" data-attr="{dir:bidiHtmlDir(content)}"> </div> <div class="gsc-url-bottom"> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-short" data-body="visibleUrl" data-attr="{dir:bidiTextDir(visibleUrl)}"> </div> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-long" data-body="Vars.formattedUrl ? html(Vars.formattedUrl) : longUrl()" data-attr="{dir: Vars.formattedUrl ? bidiHtmlDir(Vars.formattedUrl) : bidiTextDir(longUrl()), style:\'word-break:break-all;\'}"> </div> </div> <div data-if="Vars.richSnippet && Vars.richSnippet.action" class="gs-actions" data-body="render(\'action\',richSnippet,{url:unescapedUrl,target:target})"> </div> <span data-if="google.search.CurrentLocale == \'en\' && Vars.richSnippet && Vars.richSnippet.hreview" data-attr="0" data-body="render(\'private_hreview_content\',richSnippet)"> </span> <div class="gs-per-result-labels" data-if="Vars.perResultLabels"> <span data-body="localizedMessages[\'labeled\']"></span> <div data-foreach="Vars.perResultLabels" data-attr="0"> <a class="gs-label" data-attr="{\'data-refinementLabel\': Cur[\'label\'], \'label-with-op\': Cur[\'label_with_op\'], \'dir\' : bidiTextDir(Cur.anchor)}" data-body="Cur.anchor"></a> <span data-body="bidiTextMarkAfter(Cur.anchor)"></span> </div> </div> </td> </tr> </tbody> </table> </div> </div> <div id="base_imageResult_image" ><a data-attr="{ \'href\':originalContextUrl, \'target\':target, \'class\':imageClass }" ><img data-attr="{ \'src\':tbUrl, \'title\':titleNoFormatting, \'class\':imageClass }"/ ></a ></div> <div id="base_imageResult_text" ><div class="gs-title gs-ellipsis" ><a class="gs-title" data-attr="{ href:originalContextUrl, target:target, dir:bidiHtmlDir(title) }" data-body="html(title)"></a ></div ><div class="gs-visibleUrl gs-bidi-start-align gs-ellipsis gsc-url-top" data-attr="{title:visibleUrl, dir:bidiTextDir(visibleUrl)}" data-body="visibleUrl" ></div ><div class="gs-snippet gs-bidi-start-align gs-ellipsis" data-attr="{title:contentNoFormatting, dir:bidiHtmlDir(content)}" data-body="html(content)" ></div ><div class="gs-size gs-ellipsis" data-body="width + \' \u00d7 \' + height" ></div ><div class="gs-visibleUrl gs-bidi-start-align gs-ellipsis gsc-url-bottom" data-attr="{title:visibleUrl, dir:bidiTextDir(visibleUrl)}" data-body="visibleUrl" ></div ></div> <div id="base_imageResult_content" ><div data-body="render(\'base_imageResult_image\', Vars)" class="gs-image-box" ></div ><div data-body="render(\'base_imageResult_text\', Vars)" class="gs-text-box" ></div ></div> <div id="base_imageResult_classic" ><div class="gs-result gs-imageResult gs-imageResult-classic" data-body="render(\'base_imageResult_content\', Vars, { imageClass: \'gs-image gs-image-scalable\' })" ></div ></div> <div id="base_imageResult_column" ><div class="gs-result gs-imageResult gs-imageResult-column" data-body="render(\'base_imageResult_content\', Vars, { imageClass: \'gs-image gs-image-scalable\' })" ></div ></div> <div id="base_imageResult_popup" ><div class="gs-result gs-imageResult gs-imageResult-popup" onmouseover="google.search.ImageSearch.showPopup(this)" onmouseout="google.search.ImageSearch.hidePopup(this)" ><div class="gs-image-thumbnail-box" ><div data-body="render(\'base_imageResult_image\', Vars, { imageClass: \'gs-image gs-image-scalable\' })" class="gs-image-box" ></div ></div ><div data-body="render(\'base_imageResult_content\', Vars, { imageClass: \'gs-image\' })" class="gs-image-popup-box" ></div ></div ></div> <div id="base_thumbnail"> <div data-attr="0" data-vars="{tn:(Vars.cseThumbnail && cseThumbnail.src) ? cseThumbnail : ( (Vars.thumbnail && thumbnail.src) ? thumbnail : {src:Vars.document && document.thumbnailUrl})}"> <div data-if="tn.src"> <a class="gs-image" data-attr="{href:url,target:target}"> <img data-if="!tn.width || !tn.height || tn.width >= tn.height * 7 / 5" class="gs-image" data-attr="{src:tn.src}" onload="if (this.parentNode && this.parentNode.parentNode && this.parentNode.parentNode.parentNode) { this.parentNode.parentNode.parentNode.style.display = \'\'; this.parentNode.parentNode.className = \'gs-image-box gs-web-image-box gs-web-image-box-landscape\'; } "/> <img data-elif="true" class="gs-image" data-attr="{src:tn.src}" onload="if (this.parentNode && this.parentNode.parentNode && this.parentNode.parentNode.parentNode) { this.parentNode.parentNode.parentNode.style.display = \'\'; this.parentNode.parentNode.className = \'gs-image-box gs-web-image-box gs-web-image-box-portrait\'; } "/> </a> </div> </div> </div> <div id="base_action"> <div data-foreach="Vars.action" data-attr="0"> <div data-attr="{\'class\': \'gs-action \' + Cur[\'class\']}" data-if="Cur.url && Cur.label"> <a class="gs-action" data-attr="{href:Cur.url,target:target,dir:bidiTextDir(Cur.label)}" data-body="Cur.label"></a> </div> </div> </div> </div> ';
    google.loader.loaded({
        "module": "search",
        "version": "1.0",
        "components": ["default"]
    });
    google.loader.eval.search = function () {
        eval(arguments[0]);
    };
    if (google.loader.eval.scripts && google.loader.eval.scripts['search']) {
        (function () {
            var scripts = google.loader.eval.scripts['search'];
            for (var i = 0; i < scripts.length; i++) {
                google.loader.eval.search(scripts[i]);
            }
        })();
        google.loader.eval.scripts['search'] = null;
    }
})();