document.addEventListener("DOMContentLoaded", () => {
    const deck = document.querySelector(".deck");
    if (!deck) return;

    const slides = Array.from(deck.querySelectorAll(".deck-slide"));
    const progress = deck.querySelector(".deck-progress");
    const counter = deck.querySelector(".deck-counter");
    const partTag = deck.querySelector(".deck-part-tag");
    const prevBtn = deck.querySelector(".deck-prev");
    const nextBtn = deck.querySelector(".deck-next");

    let current = 0;
    let substep = 0;
    const total = slides.length;

    const hashIndex = parseInt(window.location.hash.replace("#", ""), 10);
    if (Number.isInteger(hashIndex) && hashIndex >= 1 && hashIndex <= total) {
        current = hashIndex - 1;
    }

    function restartLoopAnimations(slide) {
        slide.querySelectorAll("[data-loop]").forEach(el => {
            el.style.animation = "none";
            void el.offsetWidth;
            el.style.animation = "";
        });
    }

    function substepCount(slide) {
        return parseInt(slide.dataset.substeps || "0", 10);
    }

    function applySubstep(slide) {
        slide.querySelectorAll("[data-substep]").forEach(el => {
            const at = parseInt(el.dataset.substep, 10);
            el.classList.toggle("is-revealed", at <= substep);
        });
    }

    function render() {
        slides.forEach((slide, i) => slide.classList.toggle("is-active", i === current));
        const activeSlide = slides[current];
        applySubstep(activeSlide);
        restartLoopAnimations(activeSlide);
        if (progress) progress.style.width = `${((current + 1) / total) * 100}%`;
        if (counter) counter.textContent = `${current + 1} / ${total}`;
        if (partTag) partTag.textContent = activeSlide.dataset.part || "";
        if (prevBtn) prevBtn.disabled = current === 0 && substep === 0;
        if (nextBtn) nextBtn.disabled = current === total - 1 && substep >= substepCount(activeSlide);
        history.replaceState(null, "", `#${current + 1}`);
    }

    function go(delta) {
        const activeSlide = slides[current];
        const steps = substepCount(activeSlide);
        if (delta > 0 && substep < steps) {
            substep += 1;
            applySubstep(activeSlide);
            if (nextBtn) nextBtn.disabled = current === total - 1 && substep >= steps;
            if (prevBtn) prevBtn.disabled = false;
            return;
        }
        if (delta < 0 && substep > 0) {
            substep -= 1;
            applySubstep(activeSlide);
            if (prevBtn) prevBtn.disabled = current === 0 && substep === 0;
            if (nextBtn) nextBtn.disabled = false;
            return;
        }
        const next = current + delta;
        if (next < 0 || next >= total) return;
        current = next;
        substep = 0;
        render();
    }

    prevBtn && prevBtn.addEventListener("click", () => go(-1));
    nextBtn && nextBtn.addEventListener("click", () => go(1));

    window.addEventListener("keydown", (e) => {
        if (["ArrowRight", "PageDown", " "].includes(e.key)) { e.preventDefault(); go(1); }
        if (["ArrowLeft", "PageUp"].includes(e.key)) { e.preventDefault(); go(-1); }
        if (e.key === "Home") { e.preventDefault(); current = 0; substep = 0; render(); }
        if (e.key === "End") { e.preventDefault(); current = total - 1; substep = 0; render(); }
    });

    let touchStartX = null;
    deck.addEventListener("touchstart", (e) => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
    deck.addEventListener("touchend", (e) => {
        if (touchStartX === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1);
        touchStartX = null;
    }, { passive: true });

    deck.querySelectorAll(".deck-nav-zone").forEach(zone => {
        zone.addEventListener("click", () => go(zone.dataset.dir === "prev" ? -1 : 1));
    });

    window.addEventListener("hashchange", () => {
        const i = parseInt(window.location.hash.replace("#", ""), 10);
        if (Number.isInteger(i) && i >= 1 && i <= total && i - 1 !== current) {
            current = i - 1;
            substep = 0;
            render();
        }
    });

    render();
});

/* ---- Finance math shared by the live calculators ---- */
const Fin = {
    monthlyRate(rAnnual) { return Math.pow(1 + rAnnual, 1 / 12) - 1; },
    realRate(rNominal, rInflation) { return (1 + rNominal) / (1 + rInflation) - 1; },
    fvContributions(pm, rAnnual, years) {
        const rm = this.monthlyRate(rAnnual);
        return pm * (Math.pow(1 + rAnnual, years) - 1) / rm;
    },
    fvContributionsReal(pm, rAnnual, rInflation, years) {
        return this.fvContributions(pm, rAnnual, years) / Math.pow(1 + rInflation, years);
    },
    annuityPayment(pot, rAnnual, years) {
        const rm = this.monthlyRate(rAnnual);
        const n = years * 12;
        return pot * rm / (1 - Math.pow(1 + rm, -n));
    },
    perpetuityPayment(pot, rAnnual) {
        return pot * this.monthlyRate(rAnnual);
    },
    formatKc(n) {
        const rounded = Math.round(n);
        return rounded.toLocaleString("cs-CZ").replace(/ /g, " ") + " Kč";
    },
};

/* ---- Generic live calculators: <div data-calc="..."> with data-input / data-output ---- */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-calc]").forEach(box => {
        const kind = box.dataset.calc;
        const inputs = {};
        box.querySelectorAll("[data-input]").forEach(el => { inputs[el.dataset.input] = el; });
        const outputs = {};
        box.querySelectorAll("[data-output]").forEach(el => { outputs[el.dataset.output] = el; });

        function num(key, fallback) {
            const el = inputs[key];
            if (!el) return fallback;
            const v = parseFloat(el.value.replace(",", "."));
            return Number.isFinite(v) ? v : fallback;
        }

        function compute() {
            const years = num("years", 10);
            const rate = num("rate", 8) / 100;
            const inflation = num("inflation", 3.3) / 100;

            if (kind === "contribution") {
                const pm = num("pm", 2000);
                const nominal = Fin.fvContributions(pm, rate, years);
                const real = Fin.fvContributionsReal(pm, rate, inflation, years);
                if (outputs.nominal) outputs.nominal.textContent = Fin.formatKc(nominal);
                if (outputs.real) outputs.real.textContent = Fin.formatKc(real);
            }
            if (kind === "annuity") {
                const pot = num("pot", 5000000);
                const nominal = Fin.annuityPayment(pot, rate, years);
                const real = Fin.annuityPayment(pot, Fin.realRate(rate, inflation), years);
                if (outputs.nominal) outputs.nominal.textContent = Fin.formatKc(nominal);
                if (outputs.real) outputs.real.textContent = Fin.formatKc(real);
            }
            if (kind === "perpetuity") {
                const pot = num("pot", 5000000);
                const nominal = Fin.perpetuityPayment(pot, rate);
                const real = Fin.perpetuityPayment(pot, Fin.realRate(rate, inflation));
                if (outputs.nominal) outputs.nominal.textContent = Fin.formatKc(nominal);
                if (outputs.real) outputs.real.textContent = Fin.formatKc(real);
            }
        }

        Object.values(inputs).forEach(el => el.addEventListener("input", compute));
        compute();
    });
});

/* ---- Smooth exponential-curve chart: draws growth/decay polylines into an SVG ---- */
const ExpChart = {
    points(p0, ratePerYear, years, growing) {
        const pts = [];
        for (let y = 0; y <= years; y += 0.5) {
            const v = growing ? p0 * Math.pow(1 + ratePerYear, y) : p0 / Math.pow(1 + ratePerYear, y);
            pts.push([y, v]);
        }
        return pts;
    },
    toSvgString(pts, years, yMax, w, h, padL, padT, padB) {
        const plotW = w - padL - 10;
        const plotH = h - padT - padB;
        return pts.map(([y, v]) => {
            const x = padL + (y / years) * plotW;
            const yPix = padT + plotH - (v / yMax) * plotH;
            return `${x.toFixed(1)},${yPix.toFixed(1)}`;
        }).join(" ");
    },
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-contrib-chart]").forEach(line => {
        const pm = parseFloat(line.dataset.pm);
        const rate = parseFloat(line.dataset.rate) / 100;
        const years = parseFloat(line.dataset.years);
        const yMax = parseFloat(line.dataset.ymax);
        const w = parseFloat(line.dataset.w), h = parseFloat(line.dataset.h);
        const padL = parseFloat(line.dataset.padl || "10"), padT = parseFloat(line.dataset.padt || "10"), padB = parseFloat(line.dataset.padb || "10");
        const isReal = "real" in line.dataset;
        const inflation = parseFloat(line.dataset.inflation || "0") / 100;
        const pts = [];
        for (let y = 0; y <= years; y += 0.5) {
            const v = y === 0 ? 0 : (isReal ? Fin.fvContributionsReal(pm, rate, inflation, y) : Fin.fvContributions(pm, rate, y));
            pts.push([y, v]);
        }
        line.setAttribute("points", ExpChart.toSvgString(pts, years, yMax, w, h, padL, padT, padB));
    });
    document.querySelectorAll("[data-deposits-chart]").forEach(line => {
        const pm = parseFloat(line.dataset.pm);
        const years = parseFloat(line.dataset.years);
        const yMax = parseFloat(line.dataset.ymax);
        const w = parseFloat(line.dataset.w), h = parseFloat(line.dataset.h);
        const padL = parseFloat(line.dataset.padl || "10"), padT = parseFloat(line.dataset.padt || "10"), padB = parseFloat(line.dataset.padb || "10");
        const pts = [[0, 0], [years, pm * 12 * years]];
        line.setAttribute("points", ExpChart.toSvgString(pts, years, yMax, w, h, padL, padT, padB));
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-static-rate]").forEach(line => {
        const rate = parseFloat(line.dataset.staticRate) / 100;
        const p0 = parseFloat(line.dataset.p0);
        const years = parseFloat(line.dataset.years);
        const yMax = parseFloat(line.dataset.ymax);
        const growing = "growing" in line.dataset;
        const w = parseFloat(line.dataset.w), h = parseFloat(line.dataset.h);
        const padL = parseFloat(line.dataset.padl || "10"), padT = parseFloat(line.dataset.padt || "10"), padB = parseFloat(line.dataset.padb || "10");
        const pts = ExpChart.points(p0, rate, years, growing);
        line.setAttribute("points", ExpChart.toSvgString(pts, years, yMax, w, h, padL, padT, padB));
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-rate-slider]").forEach(slider => {
        const targetSel = slider.dataset.rateSlider;
        const line = document.querySelector(`#${targetSel}`);
        const label = document.querySelector(`#${targetSel}-label`);
        const valueLabel = document.querySelector(`#${targetSel}-value`);
        if (!line) return;
        const p0 = parseFloat(line.dataset.p0);
        const years = parseFloat(line.dataset.years);
        const yMax = parseFloat(line.dataset.ymax);
        const growing = "growing" in line.dataset;
        const w = parseFloat(line.dataset.w), h = parseFloat(line.dataset.h);
        const padL = parseFloat(line.dataset.padl || "10"), padT = parseFloat(line.dataset.padt || "10"), padB = parseFloat(line.dataset.padb || "10");

        function redraw() {
            const rate = parseFloat(slider.value) / 100;
            const pts = ExpChart.points(p0, rate, years, growing);
            line.setAttribute("points", ExpChart.toSvgString(pts, years, yMax, w, h, padL, padT, padB));
            const end = pts[pts.length - 1][1];
            if (valueLabel) valueLabel.textContent = Fin.formatKc(end);
            if (label) label.textContent = slider.value.replace(".", ",") + " %";
        }
        slider.addEventListener("input", redraw);
        redraw();
    });
});

/* ---- Wavy correlation lines: <polyline data-wave data-amp data-cycles data-phase-deg data-noise data-w data-h data-base-y> ---- */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-wave]").forEach(line => {
        const amp = parseFloat(line.dataset.amp);
        const cycles = parseFloat(line.dataset.cycles);
        const phase = (parseFloat(line.dataset.phaseDeg || "0") * Math.PI) / 180;
        const noise = parseFloat(line.dataset.noise || "0");
        const w = parseFloat(line.dataset.w);
        const h = parseFloat(line.dataset.h);
        const baseY = parseFloat(line.dataset.baseY);
        const pts = [];
        const steps = 140;
        let seed = 42;
        const rand = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
        for (let i = 0; i <= steps; i++) {
            const x = (i / steps) * w;
            const t = (i / steps) * cycles * Math.PI * 2 + phase;
            const jitter = noise ? (rand() - 0.5) * 2 * noise : 0;
            const y = baseY - amp * Math.sin(t) + jitter;
            pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
        }
        line.setAttribute("points", pts.join(" "));
    });
});

/* ---- KaTeX rendering: <span class="katex-formula" data-tex="..." data-inline> ---- */
document.addEventListener("DOMContentLoaded", () => {
    if (!window.katex) return;
    document.querySelectorAll(".katex-formula").forEach(el => {
        katex.render(el.dataset.tex || "", el, {
            throwOnError: false,
            displayMode: !("inline" in el.dataset),
        });
    });
});

/* ---- "Síla složeného úroku" chart: redraws live from the contribution calculator's own inputs ---- */
function formatCompactKc(v) {
    if (v >= 1000000) return (Math.round(v / 100000) / 10).toString().replace(".", ",") + "M";
    if (v >= 1000) return Math.round(v / 1000) + "k";
    return Math.round(v).toString();
}
function niceCeil(value) {
    if (value <= 0) return 1;
    const exp = Math.floor(Math.log10(value));
    const magnitude = Math.pow(10, exp);
    const norm = value / magnitude;
    const steps = [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10];
    for (const s of steps) {
        if (s >= norm) return s * magnitude;
    }
    return 10 * magnitude;
}
document.addEventListener("DOMContentLoaded", () => {
    const svg = document.getElementById("compound-svg");
    const calc = document.querySelector('[data-calc="contribution"]');
    if (!svg || !calc) return;

    const pmInput = calc.querySelector('[data-input="pm"]');
    const rateInput = calc.querySelector('[data-input="rate"]');
    const inflationInput = calc.querySelector('[data-input="inflation"]');
    const yearsInput = calc.querySelector('[data-input="years"]');
    const depositsLine = document.getElementById("compound-deposits");
    const nominalLine = document.getElementById("compound-nominal");
    const realLine = document.getElementById("compound-real");
    const grid = document.getElementById("compound-grid");
    const xEnd = document.getElementById("compound-x-end");
    const depositsVal = document.getElementById("compound-deposits-val");
    const nominalVal = document.getElementById("compound-nominal-val");
    const realVal = document.getElementById("compound-real-val");
    const desc = document.getElementById("compound-desc");
    if (!pmInput || !rateInput || !inflationInput || !yearsInput) return;

    const W = 1300, H = 420, padL = 70, padT = 20, padB = 60;
    const svgNS = "http://www.w3.org/2000/svg";

    function render() {
        const pm = parseFloat(pmInput.value) || 0;
        const rate = (parseFloat(rateInput.value) || 0) / 100;
        const inflation = (parseFloat(inflationInput.value) || 0) / 100;
        const years = Math.max(parseFloat(yearsInput.value) || 1, 1);

        const depositsTotal = pm * 12 * years;
        const nominalTotal = Fin.fvContributions(pm, rate, years);
        const realTotal = Fin.fvContributionsReal(pm, rate, inflation, years);
        const yMax = niceCeil(Math.max(nominalTotal, depositsTotal) * 1.1);

        const depositsPts = [[0, 0], [years, depositsTotal]];
        const nominalPts = [];
        const realPts = [];
        const step = years / 60;
        for (let y = 0; y <= years; y += step) {
            nominalPts.push([y, y === 0 ? 0 : Fin.fvContributions(pm, rate, y)]);
            realPts.push([y, y === 0 ? 0 : Fin.fvContributionsReal(pm, rate, inflation, y)]);
        }
        depositsLine.setAttribute("points", ExpChart.toSvgString(depositsPts, years, yMax, W, H, padL, padT, padB));
        nominalLine.setAttribute("points", ExpChart.toSvgString(nominalPts, years, yMax, W, H, padL, padT, padB));
        realLine.setAttribute("points", ExpChart.toSvgString(realPts, years, yMax, W, H, padL, padT, padB));

        grid.innerHTML = "";
        const plotH = H - padT - padB;
        [0, 0.25, 0.5, 0.75, 1].forEach(frac => {
            const yPix = padT + plotH * (1 - frac);
            const line = document.createElementNS(svgNS, "line");
            line.setAttribute("x1", padL); line.setAttribute("x2", W - 10);
            line.setAttribute("y1", yPix); line.setAttribute("y2", yPix);
            line.setAttribute("stroke", frac === 0 ? "#3f3f46" : "#27272a");
            line.setAttribute("stroke-width", "1");
            grid.appendChild(line);
            const text = document.createElementNS(svgNS, "text");
            text.setAttribute("x", 10); text.setAttribute("y", yPix + 4);
            text.setAttribute("fill", "#71717a"); text.setAttribute("font-size", "13");
            text.textContent = formatCompactKc(yMax * frac);
            grid.appendChild(text);
        });

        xEnd.setAttribute("x", W - 70);
        xEnd.textContent = years + " let";
        depositsVal.textContent = Fin.formatKc(depositsTotal);
        nominalVal.textContent = Fin.formatKc(nominalTotal);
        realVal.textContent = Fin.formatKc(realTotal);
        desc.textContent = `${Fin.formatKc(pm)} měsíčně · ${rateInput.value} % p.a. · inflace ${inflationInput.value} % · ${years} let`;
    }

    [pmInput, rateInput, inflationInput, yearsInput].forEach(el => el.addEventListener("input", render));
    render();
});
