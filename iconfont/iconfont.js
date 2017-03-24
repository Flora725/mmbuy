;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-pinglun" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M286.3134 376.940978c-31.017434 0-56.165184 26.079982-56.165184 58.262962 0 32.184003 25.14775 58.263985 56.165184 58.263985 31.017434 0 56.165184-26.079982 56.165184-58.263985C342.478584 403.021983 317.330834 376.940978 286.3134 376.940978zM510.976182 376.940978c-31.017434 0-56.165184 26.079982-56.165184 58.262962 0 32.184003 25.148773 58.263985 56.165184 58.263985s56.165184-26.079982 56.165184-58.263985C567.141366 403.021983 541.992593 376.940978 510.976182 376.940978zM735.638965 376.940978c-31.017434 0-56.166207 26.079982-56.166207 58.262962 0 32.184003 25.148773 58.263985 56.166207 58.263985s56.165184-26.079982 56.165184-58.263985C791.804149 403.021983 766.655376 376.940978 735.638965 376.940978zM847.968309 85.637426 173.982008 85.637426c-62.034868 0-112.330368 52.175313-112.330368 116.526947l0 436.95584c0 64.352657 51.421136 123.670647 114.88147 123.670647l171.183777 0c29.837562 31.785937 153.332201 159.63986 153.332201 159.63986 5.483898 5.703909 14.370289 5.703909 19.854187 0 0 0 90.418312-102.513792 149.328004-159.63986L845.41823 762.79086c63.461357 0 114.882494-59.319014 114.882494-123.670647L960.300724 202.164373C960.300724 137.812739 910.004201 85.637426 847.968309 85.637426zM904.13554 639.120212c0 32.1707-26.986631 65.929572-58.71731 65.929572L673.137469 705.049784c-20.869307 0-39.628556 21.459754-39.628556 21.459754L512.538771 851.977112l-120.942513-125.467573c0 0-23.037692-21.459754-42.782386-21.459754L176.533111 705.049784c-31.730679 0-58.716286-33.758871-58.716286-65.929572L117.816824 202.164373c0-32.18298 25.14775-58.265008 56.165184-58.265008l673.986301 0c31.017434 0 56.167231 26.082028 56.167231 58.265008L904.13554 639.120212z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-huidaodingbu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M79.598384 621.093651 512.995165 168.019715l413.664368 453.073936L709.981608 621.093651l0 236.392942L315.992349 857.486592 315.992349 621.093651 79.598384 621.093651z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiaosanjiaoup" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M288.864 636.032 511.968 405.312 735.136 636Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantouxiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M376.4992 212.3008 340.3008 248.4992 603.8016 512 340.3008 775.5008 376.4992 811.6992 676.1984 512Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantou-copy-copy-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M96.196 671.807l415.804-415.632 415.803 415.632-63.616 63.445-352.209-352.017-352.102 352.017z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantou-down" viewBox="0 0 1102 1024">' +
    '' +
    '<path d="M921.196-213.33v0 0 0 0 0 0 0z"  ></path>' +
    '' +
    '<path d="M1009.813 373.108l-60.049-60.049-394.316 394.317-396.548-396.548-60.715 60.715 456.595 456.595z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-left" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M591.552 1019.072 54.72 512.96 591.488 4.864 624.512 39.744 124.608 512.896 624.448 984.192Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M432.448 4.928l536.832 506.112-536.768 508.096-33.024-34.879 499.904-473.151-499.84-471.296z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chevron-copy-copy-copy-copy-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M728.422 493.518l-394.783-394.813c-11.489-11.459-30.058-11.459-41.547 0-11.489 11.489-11.489 30.087 0 41.576l375.51 375.539-369.309 369.339c-11.167 11.137-11.166 29.207 0 40.343 11.136 11.195 29.207 11.196 40.372 0l383.56-383.53c1.498-1.498 2.233-3.321 3.321-5.054 0.909-0.676 2.028-1.028 2.88-1.88 11.459-11.459 11.459-30.059 0-41.518z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo-liebiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M954.2 817.3L814 635.7c50.7-49.9 82.2-119.4 82.2-196.2 0-152.1-123.3-275.3-275.3-275.3S345.5 287.5 345.5 439.5s123.3 275.3 275.3 275.3c52.2 0 101.1-14.5 142.7-39.8l140 181.3c6.3 8.2 15.8 12.4 25.4 12.4 6.8 0 13.7-2.2 19.5-6.7 14-10.6 16.6-30.7 5.8-44.7zM471.4 588.9c-39.9-39.9-61.9-93-61.9-149.4s22-109.5 61.9-149.4 93-61.9 149.4-61.9 109.5 22 149.4 61.9c39.9 39.9 61.9 93 61.9 149.4s-22 109.5-61.9 149.4c-39.9 39.9-93 61.9-149.4 61.9s-109.5-21.9-149.4-61.9zM95.6 549h128.5c17.7 0 32-14.3 32-32s-14.3-32-32-32H95.6c-17.7 0-32 14.3-32 32 0 17.6 14.3 32 32 32zM416.1 741H95.6c-17.7 0-32 14.3-32 32s14.3 32 32 32h320.5c17.7 0 32-14.3 32-32s-14.3-32-32-32zM95.6 293h192.5c17.7 0 32-14.3 32-32s-14.3-32-32-32H95.6c-17.7 0-32 14.3-32 32s14.3 32 32 32z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantou-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.525 63.918c247.271 0 447.746 200.58 447.746 448.027 0 247.431-200.474 447.99-447.746 447.99-247.311 0-447.748-200.556-447.748-447.99 0.001-247.442 200.436-448.027 447.748-448.027zM512.864 109.061c-221.843 0-403.213 180.736-403.213 402.884 0 222.159 181.366 402.909 403.211 402.909 221.842 0 402.326-180.75 402.326-402.909 0-222.147-180.483-402.884-402.325-402.884h0.001zM313.286 446.571l198.629-179.841 197.226 182.629c8.738 8.769 8.738 22.946 0 31.668-8.733 8.748-22.909 8.748-31.643 0l-142.734-133.172v365.75c0 12.357-10.017 22.412-22.378 22.413-12.357 0-22.388-10.058-22.388-22.413v-367.155l-145.068 131.766c-8.749 8.772-22.898 8.772-31.649 0-4.040-4.032-6.541-9.607-6.541-15.766 0-0.010 0-0.020 0-0.031 0-5.718 2.179-11.485 6.541-15.847h0.003v-0.001z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)