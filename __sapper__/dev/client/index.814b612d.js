import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as set_style, m as insert_dev, n as append_dev, o as noop } from './client.bd921ee2.js';

/* src/routes/index.svelte generated by Svelte v3.22.3 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let p0;
	let t3;
	let t4;
	let p1;
	let t5;
	let t6;
	let body;
	let div;
	let t7;
	let script;
	let script_src_value;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("CURRENTLY UNDER CONSTRUCTION");
			t2 = space();
			p0 = element("p");
			t3 = text("New look coming soon 👀");
			t4 = space();
			p1 = element("p");
			t5 = text("But you can still check out my resume or schedule a ☕️ chat!");
			t6 = space();
			body = element("body");
			div = element("div");
			t7 = space();
			script = element("script");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1aem0xo\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "CURRENTLY UNDER CONSTRUCTION");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			p0 = claim_element(nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "New look coming soon 👀");
			p0_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			p1 = claim_element(nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t5 = claim_text(p1_nodes, "But you can still check out my resume or schedule a ☕️ chat!");
			p1_nodes.forEach(detach_dev);
			t6 = claim_space(nodes);
			body = claim_element(nodes, "BODY", {});
			var body_nodes = children(body);

			div = claim_element(body_nodes, "DIV", {
				class: true,
				"data-url": true,
				style: true
			});

			children(div).forEach(detach_dev);
			t7 = claim_space(body_nodes);
			script = claim_element(body_nodes, "SCRIPT", { type: true, src: true });
			var script_nodes = children(script);
			script_nodes.forEach(detach_dev);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "fuad ali";
			attr_dev(h1, "class", "svelte-1kk9opm");
			add_location(h1, file, 38, 0, 429);
			attr_dev(p0, "class", "svelte-1kk9opm");
			add_location(p0, file, 39, 0, 468);
			attr_dev(p1, "class", "svelte-1kk9opm");
			add_location(p1, file, 41, 0, 500);
			attr_dev(div, "class", "calendly-inline-widget");
			attr_dev(div, "data-url", "https://calendly.com/tofuadmiral");
			set_style(div, "min-width", "320px");
			set_style(div, "height", "630px");
			add_location(div, file, 45, 0, 614);
			attr_dev(script, "type", "text/javascript");
			if (script.src !== (script_src_value = "https://assets.calendly.com/assets/external/widget.js")) attr_dev(script, "src", script_src_value);
			add_location(script, file, 46, 0, 739);
			add_location(body, file, 43, 0, 569);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, p0, anchor);
			append_dev(p0, t3);
			insert_dev(target, t4, anchor);
			insert_dev(target, p1, anchor);
			append_dev(p1, t5);
			insert_dev(target, t6, anchor);
			insert_dev(target, body, anchor);
			append_dev(body, div);
			append_dev(body, t7);
			append_dev(body, script);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(p1);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(body);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguODE0YjYxMmQuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
