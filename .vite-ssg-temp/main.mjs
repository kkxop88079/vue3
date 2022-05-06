const import_meta = {};
import { resolveComponent, useSSRContext, createApp, ref, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createElementBlock, createElementVNode, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { createRouter, createWebHistory, useRoute } from "vue-router";
import "@vueuse/head";
import { Swiper, SwiperSlide } from "swiper/vue";
var App_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_router_link = resolveComponent("router-link");
  const _component_router_view = resolveComponent("router-view");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_router_link, { to: { name: "home" } }, null, _parent));
  _push(ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/views/App.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var App = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
var index = "";
const routes = [
  { path: "/", name: "home", component: () => Promise.resolve().then(function() {
    return home;
  }) },
  { path: "/about/:id", name: "info2", component: () => Promise.resolve().then(function() {
    return info2;
  }) }
];
var router = createRouter({
  history: createWebHistory(),
  routes
});
const app = createApp(App);
app.use(router);
app.mount("#app");
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/works.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
var _imports_0 = "./assets/logo.91df2142.png";
var _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQCAYAAAAS7Y8mAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB4SURBVHgB1ZNBDcAgDEU7B5OAE3AySUiYhElCyh/cFtKwttADLwEu5IW8FKLdONoGINTjJg+qPGMd+Ss+6yqYpzRX/+qEeaJHkjxqbU1S0Cdg5JYkkRymRD6qkCdpdwJpgCzJRRZ+kth/6yCJPgEjT8sSMPJHk+AF+v5/KPj8DBUAAAAASUVORK5CYII=";
var _imports_2$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABnSURBVHgB7djBCQAhDAXRZPvvebUAPQjK8GHe0duABJKuB/5p9d5TXfZVOANoBtAMoBlAM4BmAM0AmgE0A2jxAb1bwFP4hWgG0PKnUD3gafGAATQDaAbQDKAZQDOAZgDNAJoBtPiAAUoJDFoPfKOpAAAAAElFTkSuQmCC";
var _imports_3$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAwCAYAAACMuVOlAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHDSURBVHgBzZmNTQIxGIZfLg7gCHUD3QAncATqBjgBOIE6gbgBG3BOgBtwI7jB+X0pH0JS2utd/57kDXB3JE/at7QJANH3vULFNMfXBYkeKPeokObsvaLsSfSztpFtLNc0hUd1jUpoHPdWxwosUJjGc19RNiS6L1kBn6TAC+pQqq9DJQVN2eXua6gko5C5r2MkBQXT1+QVmCIpaCTuawxJQcP0NXoFYkoyCqYCPLJPiERsSUFRtrEqkEpS0DhusZRbjCS1pLCCObyM6msuSUbhv68q5Is5JQWFwJ+sEpKChqnA2vdgSUmGF5N3iy0tKSiYvu5sFahFUpjD0tfaJAUNs8Uu+UOtkoyivHFfa5Y8UbPkL2U9m83ublAn75RXEmRR1CbZwoze9/nFWiQ7ygvJbW03S0vydPLUfsjU2igpuYHpXed7sIRkC0vvXOSU5OlcktwXAskhOah3LlJLtpTnIb1zkWrH+aHMSe5xqiATW1J69xCyMHzEnO6LrSwmMSRbROidiymSHUXHnNZrjOnk6QiVQ5AJHclkvXMxVLJF4FYWE59kB8cRKhfXJCdvZTGxSW4w8AiVi3PJFgV756Wv/K/kP+kF0iFCd5PpAAAAAElFTkSuQmCC";
var _imports_4$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMjSURBVHgB7VrRcdswDIV9/Y83CDeoN6hGyAbxBvEGdidwMoGcCdoNnE7gZgKpE9idAAWO7IWCJFIiKZuX87vD2ZBIECABkgIJcMMNWWAGEwERl/TDdE+krFdnQ+9E9Ww2+w05gwxZED0RHYhOOBwnU+eRSEEuIGUKohLHGeNCeVUDuXGjxFQoYwwMijFqcE0/G6KFoxjH0RtRbehsnnMdZWgJzfiT4HovFIfPMCVQx9He0cvsjhui+xEyl6hjs3LI3XHbMAVQu96xp2F+/g0iQTJWDgOPmDr2jFFVzwg9QWKQzDV2T0ZVMuNQu99x0ka62+3rTNYl3i1JyPNkwv1t93VqCTEwLnEVoywd+oxbQwh6XKG6pFGWLosOXTgGFYwFthffMEFa1gPRD9RbpwcIgOnoU5RLGiESQbNfj6wCAoDdoVGMEVCKyhUEAvWCLbGBQGA73oaNWk8PP0IgUO8qUsorhCx2T3/co179k4yWJfNgyTtAJLAda/4wEUoMqzRMGd4TLiEBsO3e/s7q6I0kyqQEtsPl5KuwTO2GU8E3AHNRXgk+ST7CdNjKUAFp8Cb4rzbzxfUS9IdeCuyICvN/D22lQlALXtmMHLGFp3JOqAWvbMZn2BnyxV/Xyzl8UvgMu/hOfgTuBN/wLmlYLXgF+UIJ3mnYH0/lnKAE31ia5q6X8DFF5wi5I2oMSsMwc0BgDyl/uQ7OEV4KZpehrEdnebjRNXnIUVtBfpA5zNYOqcuwn4IPS5pMC6nTXhboMuwV2u5YQCbg/Sa0J45fslzLMPJVNkqO2g7ygUwr7EnnWhbqW6BfBc+786u7pNFBicffYQwwbfpta77MDxiX7YpLvzkEVZhPwrQK7ejcU9xxuRjsPui79qFE/GSGn/UYydMIx2Dy2RIvcfBnNeY6quUGg7O7VhsFuo+DFUwB1G65w35UqFPag3ORpsO26L4nUuJI94u5DsGzknIUq0FvTmtD/3MUd/BxHaIA/5WKLe0sXuBSwMwvsORm4MnIir5akQzGQM70HjDskhjHZrK1ceprffz1zb8LaMZSbeg9+2t9N9wQh3/3gqRIhqtFNAAAAABJRU5ErkJggg==";
var _imports_5 = "./assets/background.caba2c31.mp4";
var _imports_6 = "./assets/s-1.1f62f66c.png";
var _imports_7 = "./assets/s-2.37196e1f.png";
var _imports_8 = "./assets/s-3.aa61ffbd.png";
var _imports_9 = "./assets/s-4.970e95d5.png";
var _imports_10 = "./assets/s-5.fd8b4937.png";
var swiper_min = "";
var pagination_min = "";
var Swiper_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  __ssrInlineRender: true,
  setup(__props) {
    const formatUrl = (url) => new URL(url, import_meta.url);
    const list = ref([
      { id: 1, url: formatUrl("../assets/r-1.png"), alt: "1" },
      { id: 2, url: formatUrl("../assets/r-2.png"), alt: "22" },
      { id: 3, url: formatUrl("../assets/r-3.png"), alt: "333" },
      { id: 4, url: formatUrl("../assets/r-4.png"), alt: "4444" }
    ]);
    const list_new = ref([
      { id: 1, url: formatUrl("../assets/01.png"), alt: "1" },
      { id: 2, url: formatUrl("../assets/02.png"), alt: "2" },
      { id: 3, url: formatUrl("../assets/03.png"), alt: "3" },
      { id: 4, url: formatUrl("../assets/04.png"), alt: "4" },
      { id: 5, url: formatUrl("../assets/05.png"), alt: "5" },
      { id: 6, url: formatUrl("../assets/06.png"), alt: "6" },
      { id: 7, url: formatUrl("../assets/07.png"), alt: "7" },
      { id: 8, url: formatUrl("../assets/08.png"), alt: "8" }
    ]);
    const list_feature = ref([
      { id: 1, url: formatUrl("../assets/08.png"), alt: "1" },
      { id: 2, url: formatUrl("../assets/07.png"), alt: "2" },
      { id: 3, url: formatUrl("../assets/06.png"), alt: "3" },
      { id: 4, url: formatUrl("../assets/05.png"), alt: "4" },
      { id: 5, url: formatUrl("../assets/04.png"), alt: "5" },
      { id: 6, url: formatUrl("../assets/03.png"), alt: "6" },
      { id: 7, url: formatUrl("../assets/02.png"), alt: "7" },
      { id: 8, url: formatUrl("../assets/01.png"), alt: "8" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<!--[--><div class="h-[70vh] relative mb-3"><div class="absolute bg-gradient-to-b from-black h-24 z-10"><div class="flex w-screen items-center mt-6 mb-4"><div class="w-4/5"><img${ssrRenderAttr("src", _imports_0)} alt="" class="w-12 ml-3"></div><div class="w-1/5 flex mr-4"></div></div><div class="flex w-3/4 text-white justify-between m-auto font-medium"><div>\u6700\u65B0\u4E0A\u67B6</div><div>\u7279\u8272\u904A\u6232</div><div class="flex items-center"><p class="mr-1">\u904A\u6232\u985E\u5225</p><img${ssrRenderAttr("src", _imports_1)} alt="" class="w-3 mr-3"></div></div></div><div class="absolute bg-gradient-to-t from-black h-auto bottom-0 w-screen pl-2"><div class="flex w-screen items-center mt-6 mb-10 flex-col"><div class="w-full"><h1 class="text-white md:text-xl text-5xl font-bold m-0 leading-tight mr-0 tracking-tighter">HUGEWIN88</h1></div><div class="flex flex-row w-full tracking-tighter"><div class="text-white text-2xl font-bold m-0 leading-none md:leading-none mr-1">RELEASE YEAR</div><div class="text-white text-2xl font-bold m-0 leading-none md:leading-none">2022</div></div></div><div class="flex text-white justify-center m-auto mb-6 flex-col items-center w-4/5"><div class="mb-4 text-lg">\u7D93\u5178 \u2022 3D\u98A8\u683C \u2022 \u71B1\u9580\u6392\u884C</div><div class="flex items-center justify-between w-full font-normal text-sm"><div class="flex flex-col items-center justify-center"><div><img${ssrRenderAttr("src", _imports_2$1)} alt="" class="w-5"></div><div>\u52A0\u5165</div></div><div class="flex flex-row px-4 py-2 bg-[#D42F26] items-center rounded-md"><img${ssrRenderAttr("src", _imports_3$1)} alt="" class="w-4 mr-1"><div>\u7ACB\u5373\u904A\u73A9</div></div><div class="flex flex-col items-center justify-center"><div><img${ssrRenderAttr("src", _imports_4$1)} alt="" class="w-6"></div><div>\u8CC7\u8A0A</div></div></div></div></div><div class=""><video${ssrRenderAttr("src", _imports_5)} autoplay muted loop playsinline type="video/mp4" class="object-cover w-full h-[70vh] -z-10"></video></div></div><div class="ml-2 font-medium mb-6"><div class="text-white mb-2">\u6700\u65B0\u4E0A\u67B6</div>`);
      _push(ssrRenderComponent(unref(Swiper), {
        slidesPerView: 4,
        spaceBetween: 6,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          clickable: true
        },
        modules: _ctx.modules,
        class: "mySwiper w-full h-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(list_new.value, (item) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: item.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_router_link, {
                      to: { name: "info2", params: { id: item.id } }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr("src", item.url)}${ssrRenderAttr("alt", item.alt)}${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: item.url,
                              alt: item.alt
                            }, null, 8, ["src", "alt"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_router_link, {
                        to: { name: "info2", params: { id: item.id } }
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: item.url,
                            alt: item.alt
                          }, null, 8, ["src", "alt"])
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(list_new.value, (item) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: item.id
                }, {
                  default: withCtx(() => [
                    createVNode(_component_router_link, {
                      to: { name: "info2", params: { id: item.id } }
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: item.url,
                          alt: item.alt
                        }, null, 8, ["src", "alt"])
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ml-2 font-medium mb-6"><div class="text-white mb-2">\u7279\u8272\u904A\u6232</div>`);
      _push(ssrRenderComponent(unref(Swiper), {
        slidesPerView: 4,
        spaceBetween: 6,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          clickable: true
        },
        modules: _ctx.modules,
        class: "mySwiper w-full h-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(list_feature.value, (item) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: item.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_router_link, {
                      to: { name: "info2", params: { id: item.id } }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr("src", item.url)}${ssrRenderAttr("alt", item.alt)}${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: item.url,
                              alt: item.alt
                            }, null, 8, ["src", "alt"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_router_link, {
                        to: { name: "info2", params: { id: item.id } }
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: item.url,
                            alt: item.alt
                          }, null, 8, ["src", "alt"])
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(list_feature.value, (item) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: item.id
                }, {
                  default: withCtx(() => [
                    createVNode(_component_router_link, {
                      to: { name: "info2", params: { id: item.id } }
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: item.url,
                          alt: item.alt
                        }, null, 8, ["src", "alt"])
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ml-2 font-medium mb-6"><div class="text-white mb-2">\u63A8\u85A6\u904A\u6232</div>`);
      _push(ssrRenderComponent(unref(Swiper), {
        slidesPerView: 3,
        spaceBetween: 6,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          clickable: true
        },
        modules: _ctx.modules,
        class: "mySwiper w-full h-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_6)} alt=""${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_6,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_7)} alt=""${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_7,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_8)} alt=""${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_8,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_9)} alt=""${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_9,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_10)} alt=""${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_10,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_6,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_7,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_8,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_9,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_10,
                    alt: ""
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ml-2 font-medium mb-6"><div class="text-white mb-2">\u71B1\u9580\u6392\u884C</div>`);
      _push(ssrRenderComponent(unref(Swiper), {
        slidesPerView: 3,
        spaceBetween: 6,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          clickable: true
        },
        modules: _ctx.modules,
        class: "mySwiper w-full h-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(list.value, (item) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: item.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_router_link, {
                      to: { name: "info2", params: { id: item.id } }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr("src", item.url)}${ssrRenderAttr("alt", item.alt)}${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: item.url,
                              alt: item.alt
                            }, null, 8, ["src", "alt"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_router_link, {
                        to: { name: "info2", params: { id: item.id } }
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: item.url,
                            alt: item.alt
                          }, null, 8, ["src", "alt"])
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(list.value, (item) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: item.id
                }, {
                  default: withCtx(() => [
                    createVNode(_component_router_link, {
                      to: { name: "info2", params: { id: item.id } }
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: item.url,
                          alt: item.alt
                        }, null, 8, ["src", "alt"])
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><footer class="container mx-auto text-white py-6 md:px-16 px-4"><div class="flex items-center justify-center flex-wrap flex-col"><p class="opacity-75 text-sm md:mb-0 mb-3">\xA9 2022 By HUGEWIN88.</p></div></footer><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Swiper.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _hoisted_1 = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("g", { fill: "none" }, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
var IconHome = { name: "heroicons-outline-globe-alt", render };
var home_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  components: {
    IconHome
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Works = __unplugin_components_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-black" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Works, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/views/home.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var home = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$1
});
var _imports_2 = "./assets/gamelogo.090d3c05.png";
var _imports_3 = "./assets/game.85a22c5e.png";
var _imports_4 = "./assets/gamebanner.03c65fb0.png";
const _sfc_main = {
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    console.log(route.params.id);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<!--[--><div class="h-[100vh] relative bg-black overflow-x-hidden"><div class="bg-infoBG bg-no-repeat bg-cover h-[650px] z-0 text-white absolute top-0 w-screen"></div><div class="absolute bg-gradient-to-b from-black h-24 z-10 top-0"><div class="flex w-screen items-center mt-6 mb-4"><div class="w-4/5">`);
      _push(ssrRenderComponent(_component_router_link, { to: { name: "home" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} class="w-12 ml-3"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                class: "w-12 ml-3"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-1/5 flex mr-4"></div></div><div class="flex w-3/4 text-white justify-between m-auto font-medium"><div>\u6700\u65B0\u4E0A\u67B6</div><div>\u7279\u8272\u904A\u6232</div><div class="flex items-center"><p class="mr-1">\u904A\u6232\u985E\u5225</p><img${ssrRenderAttr("src", _imports_1)} alt="" class="w-3 mr-3"></div></div></div><div class="absolute bg-gradient-to-t from-black h-auto bottom-0 w-screen pl-2"><div class="flex text-white justify-center m-auto mb-6 flex-col items-center w-4/5"><div class="flex items-center w-full font-normal text-sm justify-center"><div class="flex flex-col items-center justify-center"><div class="animate-bounce"><img${ssrRenderAttr("src", _imports_1)} alt="" class="w-5 mb-3"></div><div>\u67E5\u770B\u66F4\u591A</div></div></div></div></div><div class="absolute top-1/2 -translate-y-1/2"><div class="w-3/4 m-auto"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><img${ssrRenderAttr("src", _imports_3)} alt=""></div></div><div class="h-screen bg-slate-500"><img${ssrRenderAttr("src", _imports_4)} alt=""></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/views/info2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var info2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main
});
