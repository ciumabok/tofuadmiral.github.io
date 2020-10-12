import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, t as text, c as claim_element, a as children, b as claim_text, f as detach_dev, g as attr_dev, h as add_location, j as insert_dev, k as append_dev, l as space, q as query_selector_all, m as claim_space, n as set_style, o as noop } from './client.931c3236.js';

/* src/routes/index.svelte generated by Svelte v3.22.3 */

const file = "src/routes/index.svelte";

// (56:0) {#if space}
function create_if_block(ctx) {
	let p;
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text("there is space");
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t = claim_text(p_nodes, "there is space");
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "svelte-kufzvf");
			add_location(p, file, 56, 1, 965);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(56:0) {#if space}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let body;
	let img;
	let img_src_value;
	let t1;
	let p;
	let t2;
	let t3;
	let div;
	let t4;
	let script;
	let script_src_value;
	let t5;
	let a;
	let t6;
	let t7;
	let if_block = /*space*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			t0 = space();
			body = element("body");
			img = element("img");
			t1 = space();
			p = element("p");
			t2 = text("Schedule a ☕️ chat!");
			t3 = space();
			div = element("div");
			t4 = space();
			script = element("script");
			t5 = space();
			a = element("a");
			t6 = text("Image from pngtree.com");
			t7 = space();
			if (if_block) if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1aem0xo\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			body = claim_element(nodes, "BODY", {});
			var body_nodes = children(body);
			img = claim_element(body_nodes, "IMG", { src: true, alt: true, class: true });
			t1 = claim_space(body_nodes);
			p = claim_element(body_nodes, "P", { class: true });
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "Schedule a ☕️ chat!");
			p_nodes.forEach(detach_dev);
			t3 = claim_space(body_nodes);

			div = claim_element(body_nodes, "DIV", {
				class: true,
				"data-url": true,
				style: true
			});

			children(div).forEach(detach_dev);
			t4 = claim_space(body_nodes);
			script = claim_element(body_nodes, "SCRIPT", { type: true, src: true });
			var script_nodes = children(script);
			script_nodes.forEach(detach_dev);
			t5 = claim_space(body_nodes);
			a = claim_element(body_nodes, "A", { href: true });
			var a_nodes = children(a);
			t6 = claim_text(a_nodes, "Image from pngtree.com");
			a_nodes.forEach(detach_dev);
			t7 = claim_space(body_nodes);
			if (if_block) if_block.l(body_nodes);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "fuad ali";
			if (img.src !== (img_src_value = "abstractHeader.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "Site Header");
			attr_dev(img, "class", "svelte-kufzvf");
			add_location(img, file, 42, 10, 452);
			attr_dev(p, "class", "svelte-kufzvf");
			add_location(p, file, 48, 1, 520);
			attr_dev(div, "class", "calendly-inline-widget");
			attr_dev(div, "data-url", "https://calendly.com/tofuadmiral");
			set_style(div, "min-width", "320px");
			set_style(div, "height", "630px");
			add_location(div, file, 50, 0, 585);
			attr_dev(script, "type", "text/javascript");
			if (script.src !== (script_src_value = "https://assets.calendly.com/assets/external/widget.js")) attr_dev(script, "src", script_src_value);
			add_location(script, file, 51, 0, 710);
			attr_dev(a, "href", "https://pngtree.com/so/abstract");
			add_location(a, file, 53, 0, 882);
			add_location(body, file, 42, 0, 442);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, body, anchor);
			append_dev(body, img);
			append_dev(body, t1);
			append_dev(body, p);
			append_dev(p, t2);
			append_dev(body, t3);
			append_dev(body, div);
			append_dev(body, t4);
			append_dev(body, script);
			append_dev(body, t5);
			append_dev(body, a);
			append_dev(a, t6);
			append_dev(body, t7);
			if (if_block) if_block.m(body, null);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(body);
			if (if_block) if_block.d();
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

function instance($$self, $$props, $$invalidate) {
	let space = false;
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	$$self.$capture_state = () => ({ space });

	$$self.$inject_state = $$props => {
		if ("space" in $$props) $$invalidate(0, space = $$props.space);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [space];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNDEwMzExNzcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzdHlsZT5cblx0aDEsIGZpZ3VyZSwgcCB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHR9XG5cblx0aDEge1xuXHRcdGZvbnQtc2l6ZTogMi44ZW07XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdG1hcmdpbjogMCAwIDAuNWVtIDA7XG5cdH1cblxuXHRmaWd1cmUge1xuXHRcdG1hcmdpbjogMCAwIDFlbSAwO1xuXHR9XG5cblx0aW1nIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXJnaW46IDA7XG5cdH1cblxuXHRwIHtcblx0XHRtYXJnaW46IDFlbSBhdXRvO1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG5cdFx0aDEge1xuXHRcdFx0Zm9udC1zaXplOiA0ZW07XG5cdFx0fVxuXHR9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuXHRsZXQgc3BhY2UgPSBmYWxzZTtcblxuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPmZ1YWQgYWxpPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxib2R5PiAgICA8aW1nXG5cdCAgICBzcmM9XCJhYnN0cmFjdEhlYWRlci5wbmdcIlxuICAgICAgICBhbHQ9XCJTaXRlIEhlYWRlclwiIC8+XG5cblxuXG4gPHA+U2NoZWR1bGUgYSDimJXvuI8gY2hhdCE8L3A+XG48IS0tIENhbGVuZGx5IGlubGluZSB3aWRnZXQgYmVnaW4gLS0+XG48ZGl2IGNsYXNzPVwiY2FsZW5kbHktaW5saW5lLXdpZGdldFwiIGRhdGEtdXJsPVwiaHR0cHM6Ly9jYWxlbmRseS5jb20vdG9mdWFkbWlyYWxcIiBzdHlsZT1cIm1pbi13aWR0aDozMjBweDtoZWlnaHQ6NjMwcHg7XCI+PC9kaXY+XG48c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJodHRwczovL2Fzc2V0cy5jYWxlbmRseS5jb20vYXNzZXRzL2V4dGVybmFsL3dpZGdldC5qc1wiPjwvc2NyaXB0PlxuPCEtLSBDYWxlbmRseSBpbmxpbmUgd2lkZ2V0IGVuZCAtLT48IS0tIENhbGVuZGx5IGlubGluZSB3aWRnZXQgZW5kIC0tPlxuPGEgaHJlZj0naHR0cHM6Ly9wbmd0cmVlLmNvbS9zby9hYnN0cmFjdCc+SW1hZ2UgZnJvbSBwbmd0cmVlLmNvbTwvYT5cblxueyNpZiBzcGFjZX1cblx0PHA+dGhlcmUgaXMgc3BhY2U8L3A+XG57L2lmfVxuXG48L2JvZHk+XG5cblxuXG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkF1REssR0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXJCTCxLQUFLLEdBQUcsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
