import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, p as create_component, r as claim_component, u as mount_component, w as transition_in, x as transition_out, y as destroy_component, a as space, c as claim_space, m as insert_dev, b as detach_dev, e as element, t as text, f as claim_element, g as children, h as claim_text, k as add_location, n as append_dev, j as attr_dev } from './client.8ed6cd36.js';

/* src/routes/podcast/index.svelte generated by Svelte v3.22.3 */

const file = "src/routes/podcast/index.svelte";

// (9:10) <img slot="media" src="https://cdn.framework7.io/placeholder/fashion-88x88-4.jpg" width="44"/>
function create_media_slot_2(ctx) {
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { slot: true, src: true, width: true });
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "slot", "media");
			if (img.src !== (img_src_value = "https://cdn.framework7.io/placeholder/fashion-88x88-4.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "width", "44");
			add_location(img, file, 8, 10, 199);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_media_slot_2.name,
		type: "slot",
		source: "(9:10) <img slot=\\\"media\\\" src=\\\"https://cdn.framework7.io/placeholder/fashion-88x88-4.jpg\\\" width=\\\"44\\\"/>",
		ctx
	});

	return block;
}

// (15:10) <img slot="media" src="https://cdn.framework7.io/placeholder/fashion-88x88-5.jpg" width="44"/>
function create_media_slot_1(ctx) {
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { slot: true, src: true, width: true });
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "slot", "media");
			if (img.src !== (img_src_value = "https://cdn.framework7.io/placeholder/fashion-88x88-5.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "width", "44");
			add_location(img, file, 14, 10, 415);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_media_slot_1.name,
		type: "slot",
		source: "(15:10) <img slot=\\\"media\\\" src=\\\"https://cdn.framework7.io/placeholder/fashion-88x88-5.jpg\\\" width=\\\"44\\\"/>",
		ctx
	});

	return block;
}

// (21:10) <img slot="media" src="https://cdn.framework7.io/placeholder/fashion-88x88-6.jpg" width="44"/>
function create_media_slot(ctx) {
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { slot: true, src: true, width: true });
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "slot", "media");
			if (img.src !== (img_src_value = "https://cdn.framework7.io/placeholder/fashion-88x88-6.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "width", "44");
			add_location(img, file, 20, 10, 635);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_media_slot.name,
		type: "slot",
		source: "(21:10) <img slot=\\\"media\\\" src=\\\"https://cdn.framework7.io/placeholder/fashion-88x88-6.jpg\\\" width=\\\"44\\\"/>",
		ctx
	});

	return block;
}

// (4:6) <List medial-list>
function create_default_slot_4(ctx) {
	let t0;
	let t1;
	let current;

	const listitem0 = new ListItem({
			props: {
				title: "Yellow Submarine",
				subtitle: "Beatles",
				$$slots: { media: [create_media_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const listitem1 = new ListItem({
			props: {
				title: "Don't Stop Me Now",
				subtitle: "Queen",
				$$slots: { media: [create_media_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const listitem2 = new ListItem({
			props: {
				title: "Billie Jean",
				subtitle: "Michael Jackson",
				$$slots: { media: [create_media_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(listitem0.$$.fragment);
			t0 = space();
			create_component(listitem1.$$.fragment);
			t1 = space();
			create_component(listitem2.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(listitem0.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(listitem1.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(listitem2.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(listitem0, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(listitem1, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(listitem2, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const listitem0_changes = {};

			if (dirty & /*$$scope*/ 1) {
				listitem0_changes.$$scope = { dirty, ctx };
			}

			listitem0.$set(listitem0_changes);
			const listitem1_changes = {};

			if (dirty & /*$$scope*/ 1) {
				listitem1_changes.$$scope = { dirty, ctx };
			}

			listitem1.$set(listitem1_changes);
			const listitem2_changes = {};

			if (dirty & /*$$scope*/ 1) {
				listitem2_changes.$$scope = { dirty, ctx };
			}

			listitem2.$set(listitem2_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(listitem0.$$.fragment, local);
			transition_in(listitem1.$$.fragment, local);
			transition_in(listitem2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(listitem0.$$.fragment, local);
			transition_out(listitem1.$$.fragment, local);
			transition_out(listitem2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(listitem0, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(listitem1, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(listitem2, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4.name,
		type: "slot",
		source: "(4:6) <List medial-list>",
		ctx
	});

	return block;
}

// (3:4) <CardContent padding={false}>
function create_default_slot_3(ctx) {
	let current;

	const list = new List({
			props: {
				"medial-list": true,
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(list.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(list.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(list, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const list_changes = {};

			if (dirty & /*$$scope*/ 1) {
				list_changes.$$scope = { dirty, ctx };
			}

			list.$set(list_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(list.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(list.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(list, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3.name,
		type: "slot",
		source: "(3:4) <CardContent padding={false}>",
		ctx
	});

	return block;
}

// (25:4) <CardFooter>
function create_default_slot_2(ctx) {
	let span0;
	let t0;
	let t1;
	let span1;
	let t2;

	const block = {
		c: function create() {
			span0 = element("span");
			t0 = text("January 20, 2015");
			t1 = space();
			span1 = element("span");
			t2 = text("5 comments");
			this.h();
		},
		l: function claim(nodes) {
			span0 = claim_element(nodes, "SPAN", {});
			var span0_nodes = children(span0);
			t0 = claim_text(span0_nodes, "January 20, 2015");
			span0_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			span1 = claim_element(nodes, "SPAN", {});
			var span1_nodes = children(span1);
			t2 = claim_text(span1_nodes, "5 comments");
			span1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(span0, file, 25, 6, 806);
			add_location(span1, file, 26, 6, 842);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span0, anchor);
			append_dev(span0, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, span1, anchor);
			append_dev(span1, t2);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(span1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2.name,
		type: "slot",
		source: "(25:4) <CardFooter>",
		ctx
	});

	return block;
}

// (2:2) <Card title="New Releases:">
function create_default_slot_1(ctx) {
	let t;
	let current;

	const cardcontent = new CardContent({
			props: {
				padding: false,
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const cardfooter = new CardFooter({
			props: {
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(cardcontent.$$.fragment);
			t = space();
			create_component(cardfooter.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(cardcontent.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(cardfooter.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(cardcontent, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(cardfooter, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const cardcontent_changes = {};

			if (dirty & /*$$scope*/ 1) {
				cardcontent_changes.$$scope = { dirty, ctx };
			}

			cardcontent.$set(cardcontent_changes);
			const cardfooter_changes = {};

			if (dirty & /*$$scope*/ 1) {
				cardfooter_changes.$$scope = { dirty, ctx };
			}

			cardfooter.$set(cardfooter_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(cardcontent.$$.fragment, local);
			transition_in(cardfooter.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(cardcontent.$$.fragment, local);
			transition_out(cardfooter.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(cardcontent, detaching);
			if (detaching) detach_dev(t);
			destroy_component(cardfooter, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1.name,
		type: "slot",
		source: "(2:2) <Card title=\\\"New Releases:\\\">",
		ctx
	});

	return block;
}

// (1:0) <Page>
function create_default_slot(ctx) {
	let current;

	const card = new Card({
			props: {
				title: "New Releases:",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(card.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(card.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(card, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const card_changes = {};

			if (dirty & /*$$scope*/ 1) {
				card_changes.$$scope = { dirty, ctx };
			}

			card.$set(card_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(card.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(card.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(card, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(1:0) <Page>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let current;

	const page = new Page({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(page.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(page.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(page, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const page_changes = {};

			if (dirty & /*$$scope*/ 1) {
				page_changes.$$scope = { dirty, ctx };
			}

			page.$set(page_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(page.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(page.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(page, detaching);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Podcast> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Podcast", $$slots, []);
	return [];
}

class Podcast extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Podcast",
			options,
			id: create_fragment.name
		});
	}
}

export default Podcast;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYzIxNWY5M2EuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcG9kY2FzdC9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPFBhZ2U+XG4gIDxDYXJkIHRpdGxlPVwiTmV3IFJlbGVhc2VzOlwiPlxuICAgIDxDYXJkQ29udGVudCBwYWRkaW5nPXtmYWxzZX0+XG4gICAgICA8TGlzdCBtZWRpYWwtbGlzdD5cbiAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgdGl0bGU9XCJZZWxsb3cgU3VibWFyaW5lXCJcbiAgICAgICAgICBzdWJ0aXRsZT1cIkJlYXRsZXNcIlxuICAgICAgICA+XG4gICAgICAgICAgPGltZyBzbG90PVwibWVkaWFcIiBzcmM9XCJodHRwczovL2Nkbi5mcmFtZXdvcms3LmlvL3BsYWNlaG9sZGVyL2Zhc2hpb24tODh4ODgtNC5qcGdcIiB3aWR0aD1cIjQ0XCIvPlxuICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICB0aXRsZT1cIkRvbid0IFN0b3AgTWUgTm93XCJcbiAgICAgICAgICBzdWJ0aXRsZT1cIlF1ZWVuXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbWcgc2xvdD1cIm1lZGlhXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZnJhbWV3b3JrNy5pby9wbGFjZWhvbGRlci9mYXNoaW9uLTg4eDg4LTUuanBnXCIgd2lkdGg9XCI0NFwiLz5cbiAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgdGl0bGU9XCJCaWxsaWUgSmVhblwiXG4gICAgICAgICAgc3VidGl0bGU9XCJNaWNoYWVsIEphY2tzb25cIlxuICAgICAgICA+XG4gICAgICAgICAgPGltZyBzbG90PVwibWVkaWFcIiBzcmM9XCJodHRwczovL2Nkbi5mcmFtZXdvcms3LmlvL3BsYWNlaG9sZGVyL2Zhc2hpb24tODh4ODgtNi5qcGdcIiB3aWR0aD1cIjQ0XCIvPlxuICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgPC9MaXN0PlxuICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgPENhcmRGb290ZXI+XG4gICAgICA8c3Bhbj5KYW51YXJ5IDIwLCAyMDE1PC9zcGFuPlxuICAgICAgPHNwYW4+NSBjb21tZW50czwvc3Bhbj5cbiAgICA8L0NhcmRGb290ZXI+XG4gIDwvQ2FyZD5cbjwvUGFnZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBRTBCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
