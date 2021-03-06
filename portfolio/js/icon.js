var items = [].slice.call(document.querySelectorAll('body > .content'));

// icon 1
var el0 = items[0].querySelector('.icon-location'),
    opacityCurve12 = mojs.easing.path('M0,100 L20,100 L20,1 L100,1'),
    translationCurve12 = mojs.easing.path('M0,100h20V0c0,0,0.2,101,80,101');

    var a0 = new mojs.Tween({
        duration: 500,
        easing: mojs.easing.bounce.out,
        onUpdate: function (progress) {
            var translationProgress = translationCurve12(progress);
            el0.style.WebkitTransform = el0.style.transform = 'translate3d(0,' + -350 * translationProgress + '%,0)';

            var colorProgress = opacityCurve12(progress);
            }
        });
    var a1 = new mojs.Burst({
        parent: el0,
        count: 2,
        radius: { 10: 90 },
        angle: 92,
        top: '90%',
        children: {
            shape: 'line',
            fill: '#99D892',
            scale: 1,
            radius: { 80: 0 },
            stroke: '#99D892',
            strokeWidth: { 4: 1 },
            strokeLinecap: 'round',
            opacity: 0.5,
            duration: 1000,
            delay: 200,
            easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
        }
    });
    var a2 = new mojs.Burst({
        parent: el0,
        count: 3,
        radius: { 10: 40 },
        angle: 182,
        top: '90%',
        children: {
            shape: 'line',
            fill: '#99D892',
            opacity: 0.8,
            scale: 1,
            radius: { 30: 0 },
            stroke: '#99D892',
            strokeWidth: { 4: 1 },
            strokeLinecap: 'round',
            duration: 1000,
            delay: 200,
            easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
        }
    });
    var a3 = new mojs.Shape({
        parent: el0,
        radius: { 25: 0 },
        radiusY: { 20: 0 },
        fill: '#99D892',
        stroke: '#99D892',
        strokeWidth: 1,
        opacity: 0.5,
        top: '90%',
        duration: 1000,
        delay: 100,
        easing: 'bounce.out'
    });    
    var timeline = new mojs.Timeline;

    el0.addEventListener('click', function (e) {
        timeline.add(a0, a1, a2, a3).replay();
    });

// icon 2
var el1 = items[1].querySelector('.icon-paper-plane'),
    translateCurve = mojs.easing.path('M0,100 L25,99.9999983 C34.6815219,20.073713 40.852195,-3.12132897e-09 100,0'),
    squashCurve = mojs.easing.path('M0,100.004963 C0,100.004963 25,147.596355 25,100.004961 C25,70.7741867 32.2461944,85.3230873 58.484375,94.8579105 C68.9280825,98.6531013 83.2611815,99.9999999 100,100');

    var b0 = new mojs.Tween({
        delay: 0,
        duration: 1000,
        onUpdate: function (progress) {
            var translateProgress = translateCurve(progress),
                squashProgress = squashCurve(progress),
                scaleX = 1 - 2 * squashProgress,
                scaleY = 1 + 2 * squashProgress;

            el1.style.transform =
                'translateY(' + -30 * translateProgress + 'px) ' +
                'scaleX(' + scaleX + ') ' + 'scaleY(' + scaleY + ')';
        }
    });
    var b1 = new mojs.Burst({
        parent: el1,
        radius: { 50: 120 },
        count: 18,
        children: {
            fill: '#988ADE',
            opacity: 0.6,
            scale: 1,
            radius: { 'rand(5,20)': 0 },
            swirlSize: 15,
            direction: [1, 1, -1, -1, 1, 1, -1, -1, -1],
            duration: 1200,
            delay: 200,
            easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
            isSwirl: true

        }
    });
    var b2 = new mojs.Shape({
        parent: el1,
        radius: { 10: 60 },
        fill: 'transparent',
        stroke: '#988ADE',
        strokeWidth: { 30: 0 },
        opacity: 0.6,
        duration: 1500,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    });
    var b3 = new mojs.Shape({
        parent: el1,
        radius: { 20: 50 },
        fill: 'transparent',
        stroke: '#988ADE',
        strokeWidth: { 20: 0 },
        opacity: 0.3,
        duration: 1600,
        delay: 320,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    });
    var timeline1 = new mojs.Timeline;

    el1.addEventListener('click', function (e) {
        timeline1.add(b0, b1, b2, b3).replay();
    });

// icon2    
var el2 = items[2].querySelector('.icon-mic'),
    opacityCurve11 = mojs.easing.path('M0,0 C0,87 27,100 40,100 L40,0 L100,0'),
    scaleCurve11 = mojs.easing.path('M0,0c0,80,39.2,100,39.2,100L40-100c0,0-0.7,106,60,106');

    var c0 = new mojs.Tween({
        duration: 1300,
        easing: mojs.easing.ease.out,
        onUpdate: function (progress) {
            var opacityProgress = opacityCurve11(progress);
            el2.style.opacity = opacityProgress;

            var scaleProgress = scaleCurve11(progress);
            el2.style.WebkitTransform = el2.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';

            var colorProgress = opacityCurve11(progress);
            el2.style.color = colorProgress >= 1 ? '#E87171' : '#C0C1C3';
        }
    });
    var c1 = new mojs.Shape({
        parent: el2,
        radius: { 0: 50 },
        fill: 'transparent',
        stroke: '#E87171',
        strokeWidth: { 50: 0 },
        opacity: 0.4,
        duration: 1000,
        delay: 100,
        easing: mojs.easing.bezier(0, 1, 0.5, 1)
    });

    var c2 = new mojs.Shape({
        parent: el2,
        radius: { 0: 30 },
        fill: 'transparent',
        stroke: '#E87171',
        strokeWidth: { 40: 0 },
        opacity: 0.2,
        duration: 1800,
        delay: 300,
        easing: mojs.easing.bezier(0, 1, 0.5, 1)
    });

    var timeline2 = new mojs.Timeline;

    el2.addEventListener('click', function (e) {
        timeline2.add(c0, c1, c2).replay();
    });

// icon3
var el3 = items[3].querySelector('.icon-thumbs-up-alt'),
    scaleCurve6 = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');

    var d0 = new mojs.Tween({
        duration: 800,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
        onUpdate: function (progress) {
            var scaleProgress = scaleCurve6(progress);
            el3.style.WebkitTransform = el3.style.transform = 'scale3d(' + progress + ',' + progress + ',1)';
        }
    });
    var d1 = new mojs.Burst({
        parent: el3,
        radius: { 4: 100 },
        angle: 45,
        count: 20,
        children: {
            radius: 2.5,
            fill: '#6F97F7',
            scale: { 1.5: 0, easing: 'quad.in' },
            pathScale: [.8, null],
            degreeShift: [13, null],
            duration: [500, 700],
            easing: 'quint.out'
        }
    });
    var d2 = new mojs.Shape({
        parent: el3,
        radius: { 10: 60 },
        fill: 'transparent',
        stroke: '#988ADE',
        strokeWidth: { 30: 0 },
        duration: 800,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    });

    var timeline3 = new mojs.Timeline;

    el3.addEventListener('click', function (e) {
        timeline3.add(d0, d1, d2).replay();
    });

// icon4
var el4 = items[4].querySelector('.icon-instagram'),
    extremeInElasticOutEasing = mojs.easing.path('M0,100 C50,100 50,100 50,50 C50,-15.815625 53.7148438,-19.1218754 60.4981394,0 C62.2625924,4.97393188 66.4286578,6.07928485 68.3303467,0 C71.3633751,-6.23011049 74.5489919,-1.10166123 75.7012545,0 C79.6946191,3.60945678 84.2063904,-0.104182975 84.2063905,0 C87.5409362,-2.25875668 90.4589294,-0.0327241098 93.4950242,0 C97.3271182,0.20445262 100,-0.104182352 100,0');

    var e0 = new mojs.Tween({
        delay: 0,
        duration: 1000,
        onUpdate: function (progress) {
            var extremeInElasticOutProgress = extremeInElasticOutEasing(progress);
            el4.style.transform = 'scale(' + (1 - (-1.2 * extremeInElasticOutProgress)) + ')';
        }
    });
    var e1 = new mojs.Burst({
        parent: el4,
        count: 6,
        radius: { 0: 50 },
        degree: 100,
        angle: -50,
        opacity: 0.8,
        children: {
            fill: '#E1C553',
            scale: 1,
            radius: { 10: 0 },
            duration: 1000,
            delay: 300,
            easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
        }
    });
    var e2 = new mojs.Burst({
        parent: el4,
        count: 5,
        degree: 0,
        radius: { 10: 60 },
        angle: 180,
        children: {
            top: [10, 0, 10],
            left: [-5, 0, 5],
            shape: 'line',
            radius: { 30: 0 },
            scale: 0.8,
            stroke: '#E1C553',
            opacity: 0.8,
            duration: 1000,
            delay: 300,
            easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
        },
    });

    var timeline4 = new mojs.Timeline;

    el4.addEventListener('click', function (e) {
        timeline4.add(e0, e1, e2).replay();
    });

// icon5
var el5 = items[5].querySelector('.icon-heart'),
    scaleCurve = mojs.easing.path('M0,100 C0,100 6.86480761,99.9633906 16.3642461,100 C18.3420122,101.411963 17.7461573,102.36117 21.4635541,99.9500056 C22.4315542,99.9500056 22.0894527,103.409477 24.4702692,99.9525771 C25.7707024,99.9987332 28.6047459,41.7039778 30.7671486,99.9709197 C32.779686,125.226467 34.3119125,102.507133 34.7164192,100 C34.7164192,97.5342804 37.8332109,52.8763829 38.867691,100 C40.0878906,115.457523 40.570773,101.899073 42.8020554,100 L100,100');

    var f0 = new mojs.Tween({
        delay: 0,
        duration: 3000,
        onUpdate: function (progress) {
            var scaleProgress = scaleCurve(progress);
            el5.style.transform =
                'scaleX(' + (1 - scaleProgress) + ') ' + 'scaleY(' + (1 + scaleProgress) + ')';
        }
    });
    var f1 = new mojs.Shape({
        parent: el5,
        shape: 'circle',
        radius: { 10: 60 },
        fill: 'none',
        stroke: '#FC1F25',
        strokeWidth: { 15: 0 },
        opacity: 0.8,
        duration: 400,
        delay: 100,
    });

    class Heart extends mojs.CustomShape {
        getShape() { return '<path d="M92.5939814,7.35914503 C82.6692916,-2.45304834 66.6322927,-2.45304834 56.7076029,7.35914503 L52.3452392,11.6965095 C51.0327802,12.9714696 48.9328458,12.9839693 47.6203869,11.6715103 L47.6203869,11.6715103 L43.2705228,7.35914503 C33.3833318,-2.45304834 17.3213337,-2.45304834 7.43414268,7.35914503 C-2.47804756,17.1963376 -2.47804756,33.12084 7.43414268,42.9205337 L29.7959439,65.11984 C29.7959439,65.1323396 29.8084435,65.1323396 29.8084435,65.1448392 L43.2580232,78.4819224 C46.9704072,82.1818068 52.9952189,82.1818068 56.7076029,78.4819224 L70.1696822,65.1448392 C70.1696822,65.1448392 70.1696822,65.1323396 70.1821818,65.1323396 L92.5939814,42.9205337 C102.468673,33.12084 102.468673,17.1963376 92.5939814,7.35914503 L92.5939814,7.35914503 Z"></path>'; }
        getLength() { return 292.110107421875; } // optional
    }
    mojs.addShape('heart', Heart); // passing name and Bubble class
    var f2 = new mojs.Shape({
        parent: el5,
        shape: 'heart',
        fill: 'none',
        stroke: '#FC1F25',
        scale: { 0.5: 1 },
        strokeWidth: { 10: 0 },
        strokeDasharray: '100%',
        strokeDashoffset: { '-100%': '100%' },
        duration: 1000,
        y: 10,
    });

    var timeline5 = new mojs.Timeline;

    el5.addEventListener('click', function (e) {
        timeline5.add(f0, f1, f2).replay();
    });

// icon6
var el6 = items[6].querySelector('.icon-flight'),
    opacityCurve15 = mojs.easing.path('M1,0 C1,0 26,100 51,100 C76,100 101,0 101,0'),
    translationCurve15 = mojs.easing.path('M0,100 C0,0 50,0 50,0 L50,100 L50,200 C50,200 50,100 100,100');

    var g0 = new mojs.Tween({
        duration: 400,
        easing: mojs.easing.ease.inout,
        onUpdate: function (progress) {
            var opacityProgress = opacityCurve15(progress);
            el6.style.opacity = opacityProgress;

            var translationProgress = translationCurve15(progress);
            el6.style.WebkitTransform = el6.style.transform = 'translate3d(' + 200 * translationProgress + '%,0,0)';
        }
    });
    var BUST_OPTS = {
        x: { 50: 0 },
        y: { 0: -10 },
        radius: { 30: 60 },
        angle: { 0: -60 },
        degree: 200,
        isForce3d: true
    }
    var CHILD_OPTS = {
        shape: ['circle', 'rect'],
        fill: ['#9BBADC', 'yellowgreen'],
        radius: 'rand(5, 8)',
        opacity: 0.75,
        isSwirl: true,
        pathScale: 'rand(.3, 1)',
        degreeShift: 'rand(-30, 30)',
        swirlFrequency: 7,
        duration: 1000,
        easing: 'linear.none',
        isForce3d: true,
    }
    var g1 = new mojs.Burst({
        ...BUST_OPTS,
        parent: el6,
        width: 80,
        height: 80,
        children: {
            ...CHILD_OPTS
        }
    });
    var g2 = new mojs.Burst({
        ...BUST_OPTS,
        parent: el6,
        radius: { 30: 60 },
        count: 3,
        width: 60,
        height: 60,
        timeline: { delay: 585 },
        children: {
            ...CHILD_OPTS
        }
    });
    var g3 = new mojs.Burst({
        ...BUST_OPTS,
        parent: el6,
        x: { 0: 100 },
        radius: { 15: 30 },
        count: 2,
        width: 40,
        height: 40,
        timeline: { delay: 900 },
        children: {
            ...CHILD_OPTS
        }
    });
    var g4 = new mojs.Burst({
        ...BUST_OPTS,
        parent: el6,
        x: { 0: 80 },
        y: { 0: -15 },
        radius: { 5: 12 },
        count: 1,
        width: 28,
        height: 28,
        timeline: { delay: 960 },
        children: {
            ...CHILD_OPTS
        }
    });
    var g5 = new mojs.Burst({
        ...BUST_OPTS,
        parent: el6,
        x: { 0: 60 },
        y: { 0: -10 },
        radius: { 5: 12 },
        count: 1,
        width: 20,
        height: 20,
        timeline: { delay: 1000 },
        children: {
            ...CHILD_OPTS,
            radius: 3
        }
    });
    var timeline6 = new mojs.Timeline;

    el6.addEventListener('click', function (e) {
        timeline6.add(g0, g1, g2, g3, g4, g5).replay();
    });

// icon7
var el7 = items[7].querySelector('.icon-search'),
    opacityCurve10 = mojs.easing.path('M1,0 C1,0 26,100 51,100 C76,100 101,0 101,0'),
    translationCurve10 = mojs.easing.path('M0,100 C0,0 50,0 50,0 L50,100 L50,200 C50,200 50,100 100,100');

    var h0 = new mojs.Tween({
        duration: 400,
        easing: mojs.easing.ease.out,
        onUpdate: function (progress) {
            var opacityProgress = opacityCurve10(progress);
            el7.style.opacity = opacityProgress;

            var translationProgress = translationCurve10(progress);
            el7.style.WebkitTransform = el7.style.transform = 'translate3d(0,' + -80 * translationProgress + '%,0)';
        }
    });
    var h1 = new mojs.Burst({
        parent: el7,
        x: 8,
        y: 16,
        degree: 180,
        angle: 60,
        radius: { 0: 60 },
        count: 5,
        children: {
            shape: 'line',
            radius: 7,
            radiusY: 0,
            scale: 1,
            strokeDasharray: '100%',
            strokeDashoffset: { '-100%': '100%' },
            stroke: '#9B56DC',
            easing: 'linear.none',
            duration: 600
        }
    });
    var h2 = new mojs.Burst({
        parent: el7,
        y: -40,
        count: 1,
        radius: { 0: 80 },
        degree: 0,
        children: {
            shape: 'line',
            stroke: '#9B56DC',
            duration: 400,
            radius: 30,
            strokeWidth: 8,
            isForce3d: true
        }
    });
    var timeline7 = new mojs.Timeline;

    el7.addEventListener('click', function (e) {
        timeline7.add(h0, h1, h2).replay();
    });
   