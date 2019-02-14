/* jshint asi:true */

/**
 * [fixSidebar description]
 * Add sidebar-wrap to fixed style when the wheel is rolled to a certain position
 * Conversely, cancel the style
 */
(function() {
    if (window.innerWidth > 770) {

        var sidebarWrap = document.querySelector('.right>.wrap')

        //fix After that, the percentage width will be invalid. Here, the width is given by js.
        sidebarWrap.style.width = sidebarWrap.offsetWidth + "px"
        window.onscroll = function() {

            // The distance that the top of the page rolls in
            var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop)


            // The distance that the bottom of the page rolls in
            var htmlHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
                // console.log(htmlHeight);
            var scrollBottom = htmlHeight - window.innerHeight - scrollTop

            if (scrollTop < 53) {
                sidebarWrap.classList.remove('fixed')
                sidebarWrap.classList.remove('scroll-bottom')
            } else if (scrollBottom >= (190 - 38)) {
                sidebarWrap.classList.remove('scroll-bottom')
                sidebarWrap.classList.add('fixed')
            } else if (isMaxHeight()) { //content acheive maxHeight
                sidebarWrap.classList.remove('fixed')
                sidebarWrap.classList.add('scroll-bottom')
            }
        }
        setContentMaxHeightInPC() // Set the maximum height of the directory (PC side)
    }
    moveTOC() // Transfer Content content
}());

/**
 * Set the maximum height of the directory
 */
function setContentMaxHeightInPC() {
    var windowHeight = window.innerHeight
    var contentUl = document.querySelector('.content-ul')
    var contentMaxHeight = windowHeight - 77 - 60
    contentUl.style.maxHeight = contentMaxHeight + 'px'
}

/**
 * Maximum height
 * @return {Boolean} [description]
 */
function isMaxHeight() {
    var windowHeight = window.innerHeight
    var contentUl = document.querySelector('.content-ul')
    var contentMaxHeight = windowHeight - 77 - 60
    var contentHeight = contentUl.offsetHeight
    return contentMaxHeight === contentHeight
        // console.log(contentMaxHeight);
        // console.log(contentHeight);
}


//-------------mobile--------------
/**
 * When the screen width is less than 770px, click the anchor button to pop up the directory box.
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {
    if (window.innerWidth <= 770) {
        var anchorBtn = document.querySelector('.anchor')
        var rightDiv = document.querySelector('.right')

        /**
         * Listening anchor button
         */
        anchorBtn.onclick = function(e) {
            e.stopPropagation()
            rightDiv.classList.add('right-show')
            anchorBtn.classList.add('anchor-hide')
        }

        // monitor body. click body，Hide Content
        document.querySelector('body').addEventListener('click', function() {
            rightDiv.classList.remove('right-show')
            anchorBtn.classList.remove('anchor-hide')
        })

        ancherPostion(anchorBtn, rightDiv) // The location of the directory anchor is fixed
        setContentMaxHeight() // Set the maximum height of the directory
    }
}());

/**
 * The location of the directory anchor is fixed
 */
function ancherPostion(anchorBtn, rightDiv) {
    window.addEventListener('scroll', function() {
        // console.log('scroll');
        var top = anchorBtn.getBoundingClientRect().top
            // console.log(top);
        var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop)
        if (scrollTop > 50) {
            anchorBtn.style.top = '20px'
            rightDiv.style.top = '20px'
        } else {
            anchorBtn.style.top = '76px'
            rightDiv.style.top = '76px'
        }
    })
}

/**
 * Set the maximum height of the directory
 */
function setContentMaxHeight() {
    var windowHeight = window.innerHeight
    var contentUl = document.querySelector('.content-ul')
    var contentMaxHeight = windowHeight - 180
    contentUl.style.maxHeight = contentMaxHeight + 'px'
}

//-------------post Content----------------------
// transfer Content
function moveTOC() {
    if (document.querySelector('#markdown-toc') !== null) {
        var TOCString = document.querySelector('#markdown-toc').innerHTML
        var contentUl = document.querySelector('#content-side')
        contentUl.insertAdjacentHTML('afterbegin', TOCString) // Insert string

        // if (!isAndroidWechatBrowser()) {

            // Add scroll style for smooth scrolling
            //add class "scroll", for smooth scroll
            var aTags = document.querySelectorAll('#content-side a')

            //add class for everyone
            // aTags.forEach(function () {
            //     console.log(this);
            // })
            for (var i = 0; i < aTags.length; i++) {
                // if (!aTags[i].classList.contains('scroll')) {
                //     aTags[i].classList.add('scroll')
                // }
                if (!aTags[i].hasAttribute('data-scroll')) {
                  aTags[i].setAttribute('data-scroll','');
                }

            }
        // }

    }
}

/**
 * Judge the Android version of WeChat browser
 * @return {Boolean} [description]
 */
function isAndroidWechatBrowser() {
    var ua = navigator.userAgent.toLowerCase()
    return /micromessenger/.test(ua) && /android/.test(ua2)
}
