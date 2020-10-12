import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as set_style, m as insert_dev, n as append_dev, o as noop } from './client.90066552.js';

/* src/routes/index.svelte generated by Svelte v3.22.3 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let body;
	let div0;
	let img;
	let img_src_value;
	let t1;
	let p;
	let t2;
	let t3;
	let div1;
	let t4;
	let script;
	let script_src_value;
	let t5;
	let a;
	let t6;

	const block = {
		c: function create() {
			t0 = space();
			body = element("body");
			div0 = element("div");
			img = element("img");
			t1 = space();
			p = element("p");
			t2 = text("Schedule a ☕️ chat!");
			t3 = space();
			div1 = element("div");
			t4 = space();
			script = element("script");
			t5 = space();
			a = element("a");
			t6 = text("Image from pngtree.com");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1aem0xo\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			body = claim_element(nodes, "BODY", {});
			var body_nodes = children(body);
			div0 = claim_element(body_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			img = claim_element(div0_nodes, "IMG", {
				id: true,
				src: true,
				alt: true,
				class: true
			});

			div0_nodes.forEach(detach_dev);
			t1 = claim_space(body_nodes);
			p = claim_element(body_nodes, "P", { class: true });
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "Schedule a ☕️ chat!");
			p_nodes.forEach(detach_dev);
			t3 = claim_space(body_nodes);

			div1 = claim_element(body_nodes, "DIV", {
				class: true,
				"data-url": true,
				style: true
			});

			children(div1).forEach(detach_dev);
			t4 = claim_space(body_nodes);
			script = claim_element(body_nodes, "SCRIPT", { type: true, src: true });
			var script_nodes = children(script);
			script_nodes.forEach(detach_dev);
			t5 = claim_space(body_nodes);
			a = claim_element(body_nodes, "A", { href: true });
			var a_nodes = children(a);
			t6 = claim_text(a_nodes, "Image from pngtree.com");
			a_nodes.forEach(detach_dev);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "fuad ali";
			attr_dev(img, "id", "banner_image");
			if (img.src !== (img_src_value = "abstractHeader.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "Site Header");
			attr_dev(img, "class", "svelte-1kk9opm");
			add_location(img, file, 42, 4, 469);
			attr_dev(div0, "class", "banner_image");
			add_location(div0, file, 41, 0, 438);
			attr_dev(p, "class", "svelte-1kk9opm");
			add_location(p, file, 49, 1, 562);
			attr_dev(div1, "class", "calendly-inline-widget");
			attr_dev(div1, "data-url", "https://calendly.com/tofuadmiral");
			set_style(div1, "min-width", "320px");
			set_style(div1, "height", "630px");
			add_location(div1, file, 51, 0, 627);
			attr_dev(script, "type", "text/javascript");
			if (script.src !== (script_src_value = "https://assets.calendly.com/assets/external/widget.js")) attr_dev(script, "src", script_src_value);
			add_location(script, file, 52, 0, 752);
			attr_dev(a, "href", "https://pngtree.com/so/abstract");
			add_location(a, file, 54, 0, 924);
			add_location(body, file, 39, 0, 430);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, body, anchor);
			append_dev(body, div0);
			append_dev(div0, img);
			append_dev(body, t1);
			append_dev(body, p);
			append_dev(p, t2);
			append_dev(body, t3);
			append_dev(body, div1);
			append_dev(body, t4);
			append_dev(body, script);
			append_dev(body, t5);
			append_dev(body, a);
			append_dev(a, t6);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNjhjNjllNGQuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
