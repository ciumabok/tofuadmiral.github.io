import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as set_style, m as insert_dev, n as append_dev, o as noop } from './client.f75d54f6.js';

/* src/routes/index.svelte generated by Svelte v3.22.3 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let p;
	let t1;
	let t2;
	let body;
	let div;
	let t3;
	let script;
	let script_src_value;
	let t4;
	let a;
	let t5;

	const block = {
		c: function create() {
			t0 = space();
			p = element("p");
			t1 = text("Schedule a ☕️ chat!");
			t2 = space();
			body = element("body");
			div = element("div");
			t3 = space();
			script = element("script");
			t4 = space();
			a = element("a");
			t5 = text("Image from pngtree.com");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1aem0xo\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t1 = claim_text(p_nodes, "Schedule a ☕️ chat!");
			p_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			body = claim_element(nodes, "BODY", {});
			var body_nodes = children(body);

			div = claim_element(body_nodes, "DIV", {
				class: true,
				"data-url": true,
				style: true
			});

			children(div).forEach(detach_dev);
			t3 = claim_space(body_nodes);
			script = claim_element(body_nodes, "SCRIPT", { type: true, src: true });
			var script_nodes = children(script);
			script_nodes.forEach(detach_dev);
			t4 = claim_space(body_nodes);
			a = claim_element(body_nodes, "A", { href: true });
			var a_nodes = children(a);
			t5 = claim_text(a_nodes, "Image from pngtree.com");
			a_nodes.forEach(detach_dev);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "fuad ali";
			attr_dev(p, "class", "svelte-1kk9opm");
			add_location(p, file, 39, 0, 430);
			attr_dev(div, "class", "calendly-inline-widget");
			attr_dev(div, "data-url", "https://calendly.com/tofuadmiral");
			set_style(div, "min-width", "320px");
			set_style(div, "height", "630px");
			add_location(div, file, 43, 0, 503);
			attr_dev(script, "type", "text/javascript");
			if (script.src !== (script_src_value = "https://assets.calendly.com/assets/external/widget.js")) attr_dev(script, "src", script_src_value);
			add_location(script, file, 44, 0, 628);
			attr_dev(a, "href", "https://pngtree.com/so/abstract");
			add_location(a, file, 46, 0, 800);
			add_location(body, file, 41, 0, 458);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, body, anchor);
			append_dev(body, div);
			append_dev(body, t3);
			append_dev(body, script);
			append_dev(body, t4);
			append_dev(body, a);
			append_dev(a, t5);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(p);
			if (detaching) detach_dev(t2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNTRiZDkzMjEuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
