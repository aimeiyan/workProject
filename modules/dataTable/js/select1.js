
(function (e) {
    "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (i) {
        return e(i, window, document)
    }) : "object" === typeof exports ? module.exports = function (i, l) {
        i || (i = window);
        if (!l || !l.fn.dataTable)l = require("datatables.net")(i, l).$;
        return e(l, i, i.document)
    } : e(jQuery, window, document)
})(function (e, i, l, j) {
    function q(c) {
        var a = c.settings()[0]._select.selector;
        e(c.table().body()).off("mousedown.dtSelect", a).off("mouseup.dtSelect", a).off("click.dtSelect", a);
        e("body").off("click.dtSelect")
    }

    function t(c) {
        var a = e(c.table().body()), b = c.settings()[0], d = b._select.selector;
        a.on("mousedown.dtSelect", d, function (b) {
            if (b.shiftKey)a.css("-moz-user-select", "none").one("selectstart.dtSelect", d, function () {
                return!1
            })
        }).on("mouseup.dtSelect", d, function () {
            a.css("-moz-user-select", "")
        }).on("click.dtSelect", d, function (b) {
            var d = c.select.items(), f = c.settings()[0];
            if (e(b.target).closest("tbody")[0] == a[0]) {
                var p = e(b.target).closest("td, th"), g = c.cell(p).index();
                c.cell(p).any() && ("row" === d ? (d = g.row, s(b, c,
                    f, "row", d)) : "column" === d ? (d = c.cell(p).index().column, s(b, c, f, "column", d)) : "cell" === d && (d = c.cell(p).index(), s(b, c, f, "cell", d)), f._select_lastCell = g)
            }
        });
        e("body").on("click.dtSelect", function (a) {
            b._select.blurable && !e(a.target).parents().filter(c.table().container()).length && (e(a.target).parents("div.DTE").length || n(b, !0))
        })
    }

    function k(c, a, b, d) {
        if (!d || c.flatten().length)b.unshift(c), e(c.table().node()).triggerHandler(a + ".dt", b)
    }

    function u(c) {
        var a = c.settings()[0];
        if (a._select.info && a.aanFeatures.i) {
            var b =
                e('<span class="select-info"/>'), d = function (a, d) {
                b.append(e('<span class="select-item"/>').append(c.i18n("select." + a + "s", {_: "%d " + a + "s selected", "0": "", 1: "1 " + a + " selected"}, d)))
            };
            d("row", c.rows({selected: !0}).flatten().length);
            d("column", c.columns({selected: !0}).flatten().length);
            d("cell", c.cells({selected: !0}).flatten().length);
            e.each(a.aanFeatures.i, function (a, d) {
                var d = e(d), c = d.children("span.select-info");
                c.length && c.remove();
                "" !== b.text() && d.append(b)
            })
        }
    }

    function n(c, a) {
        if (a || "single" === c._select.style) {
            var b =
                new g.Api(c);
            b.rows({selected: !0}).deselect();
            b.columns({selected: !0}).deselect();
            b.cells({selected: !0}).deselect()
        }
    }

    function s(c, a, b, d, h) {
        var r = a.select.style(), f = a[d](h, {selected: !0}).any();
        "os" === r ? c.ctrlKey || c.metaKey ? a[d](h).select(!f) : c.shiftKey ? "cell" === d ? (d = b._select_lastCell || null, f = function (b, d) {
            if (b > d)var c = d, d = b, b = c;
            var f = !1;
            return a.columns(":visible").indexes().filter(function (a) {
                a === b && (f = !0);
                return a === d ? (f = !1, !0) : f
            })
        }, c = function (b, d) {
            var c = a.rows({search: "applied"}).indexes();
            if (c.indexOf(b) >
                c.indexOf(d))var f = d, d = b, b = f;
            var h = !1;
            return c.filter(function (a) {
                a === b && (h = !0);
                return a === d ? (h = !1, !0) : h
            })
        }, !a.cells({selected: !0}).any() && !d ? (f = f(0, h.column), d = c(0, h.row)) : (f = f(d.column, h.column), d = c(d.row, h.row)), d = a.cells(d, f).flatten(), a.cells(h, {selected: !0}).any() ? a.cells(d).deselect() : a.cells(d).select()) : (c = b._select_lastCell ? b._select_lastCell[d] : null, f = a[d + "s"]({search: "applied"}).indexes(), c = e.inArray(c, f), b = e.inArray(h, f), !a[d + "s"]({selected: !0}).any() && -1 === c ? f.splice(e.inArray(h, f) +
            1, f.length) : (c > b && (r = b, b = c, c = r), f.splice(b + 1, f.length), f.splice(0, c)), a[d](h, {selected: !0}).any()) ? (f.splice(e.inArray(h, f), 1), a[d + "s"](f).deselect()) : a[d + "s"](f).select() : (c = a[d + "s"]({selected: !0}), f && 1 === c.flatten().length ? a[d](h).deselect() : (c.deselect(), a[d](h).select())) : a[d](h).select(!f)
    }

    function o(c, a) {
        return function (b) {
            return b.i18n("buttons." + c, a)
        }
    }

    var g = e.fn.dataTable;
    g.select = {};
    g.select.version = "1.1.0";
    e.each([
        {type: "row", prop: "aoData"},
        {type: "column", prop: "aoColumns"}
    ], function (c, a) {
        g.ext.selector[a.type].push(function (b, d, c) {
            var d = d.selected, e, f = [];
            if (d === j)return c;
            for (var g = 0, i = c.length; g < i; g++)e = b[a.prop][c[g]], (!0 === d && !0 === e._select_selected || !1 === d && !e._select_selected) && f.push(c[g]);
            return f
        })
    });
    g.ext.selector.cell.push(function (c, a, b) {
        var a = a.selected, d, h = [];
        if (a === j)return b;
        for (var e = 0, f = b.length; e < f; e++)d = c.aoData[b[e].row], (!0 === a && d._selected_cells && !0 === d._selected_cells[b[e].column] || !1 === a && (!d._selected_cells || !d._selected_cells[b[e].column])) && h.push(b[e]);
        return h
    });
    var i = g.Api.register, m = g.Api.registerPlural;
    i("select()", function () {
    });
    i("select.blurable()", function (c) {
        return c === j ? this.context[0]._select.blurable : this.iterator("table", function (a) {
            a._select.blurable = c
        })
    });
    i("select.info()", function (c) {
        return u === j ? this.context[0]._select.info : this.iterator("table", function (a) {
            a._select.info = c
        })
    });
    i("select.items()", function (c) {
        return c === j ? this.context[0]._select.items : this.iterator("table", function (a) {
            a._select.items = c;
            k(new g.Api(a), "selectItems", [c])
        })
    });
    i("select.style()", function (c) {
        return c === j ?
            this.context[0]._select.style : this.iterator("table", function (a) {
            a._select.style = c;
            if (!a._select_init) {
                var b = new g.Api(a);
                a.aoRowCreatedCallback.push({fn: function (b, d, c) {
                    d = a.aoData[c];
                    d._select_selected && e(b).addClass(a._select.className);
                    b = 0;
                    for (c = a.aoColumns.length; b < c; b++)(a.aoColumns[b]._select_selected || d._selected_cells && d._selected_cells[b]) && e(d.anCells[b]).addClass(a._select.className)
                }, sName: "select-deferRender"});
                b.on("preXhr.dt.dtSelect", function () {
                    var a = b.rows({selected: !0}).ids(!0).filter(function (b) {
                        return b !==
                            j
                    }), d = b.cells({selected: !0}).eq(0).map(function (a) {
                        var d = b.row(a.row).id(!0);
                        return d ? {row: d, column: a.column} : j
                    }).filter(function (b) {
                        return b !== j
                    });
                    b.one("draw.dt.dtSelect", function () {
                        b.rows(a).select();
                        d.any() && d.each(function (a) {
                            b.cells(a.row, a.column).select()
                        })
                    })
                });
                b.on("draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt", function () {
                    u(b)
                });
                b.on("destroy.dtSelect", function () {
                    q(b);
                    b.off(".dtSelect")
                })
            }
            var d = new g.Api(a);
            q(d);
            "api" !== c && t(d);
            k(new g.Api(a), "selectStyle", [c])
        })
    });
    i("select.selector()",
        function (c) {
            return c === j ? this.context[0]._select.selector : this.iterator("table", function (a) {
                q(new g.Api(a));
                a._select.selector = c;
                "api" !== a._select.style && t(new g.Api(a))
            })
        });
    m("rows().select()", "row().select()", function (c) {
        var a = this;
        if (!1 === c)return this.deselect();
        this.iterator("row", function (b, a) {
            n(b);
            b.aoData[a]._select_selected = !0;
            e(b.aoData[a].nTr).addClass(b._select.className)
        });
        this.iterator("table", function (b, d) {
            k(a, "select", ["row", a[d]], !0)
        });
        return this
    });
    m("columns().select()", "column().select()",
        function (c) {
            var a = this;
            if (!1 === c)return this.deselect();
            this.iterator("column", function (b, a) {
                n(b);
                b.aoColumns[a]._select_selected = !0;
                var c = (new g.Api(b)).column(a);
                e(c.header()).addClass(b._select.className);
                e(c.footer()).addClass(b._select.className);
                c.nodes().to$().addClass(b._select.className)
            });
            this.iterator("table", function (b, d) {
                k(a, "select", ["column", a[d]], !0)
            });
            return this
        });
    m("cells().select()", "cell().select()", function (c) {
        var a = this;
        if (!1 === c)return this.deselect();
        this.iterator("cell",
            function (a, d, c) {
                n(a);
                d = a.aoData[d];
                d._selected_cells === j && (d._selected_cells = []);
                d._selected_cells[c] = !0;
                d.anCells && e(d.anCells[c]).addClass(a._select.className)
            });
        this.iterator("table", function (b, d) {
            k(a, "select", ["cell", a[d]], !0)
        });
        return this
    });
    m("rows().deselect()", "row().deselect()", function () {
        var c = this;
        this.iterator("row", function (a, b) {
            a.aoData[b]._select_selected = !1;
            e(a.aoData[b].nTr).removeClass(a._select.className)
        });
        this.iterator("table", function (a, b) {
            k(c, "deselect", ["row", c[b]], !0)
        });
        return this
    });
    m("columns().deselect()", "column().deselect()", function () {
        var c = this;
        this.iterator("column", function (a, b) {
            a.aoColumns[b]._select_selected = !1;
            var d = new g.Api(a), c = d.column(b);
            e(c.header()).removeClass(a._select.className);
            e(c.footer()).removeClass(a._select.className);
            d.cells(null, b).indexes().each(function (b) {
                var c = a.aoData[b.row], d = c._selected_cells;
                c.anCells && (!d || !d[b.column]) && e(c.anCells[b.column]).removeClass(a._select.className)
            })
        });
        this.iterator("table", function (a, b) {
            k(c, "deselect", ["column",
                c[b]], !0)
        });
        return this
    });
    m("cells().deselect()", "cell().deselect()", function () {
        var c = this;
        this.iterator("cell", function (a, b, c) {
            b = a.aoData[b];
            b._selected_cells[c] = !1;
            b.anCells && !a.aoColumns[c]._select_selected && e(b.anCells[c]).removeClass(a._select.className)
        });
        this.iterator("table", function (a, b) {
            k(c, "deselect", ["cell", c[b]], !0)
        });
        return this
    });
    e.extend(g.ext.buttons, {selected: {text: o("selected", "Selected"), className: "buttons-selected", init: function (c) {
        var a = this;
        c.on("draw.dt.DT select.dt.DT deselect.dt.DT",
            function () {
                var b = a.rows({selected: !0}).any() || a.columns({selected: !0}).any() || a.cells({selected: !0}).any();
                a.enable(b)
            });
        this.disable()
    }}, selectedSingle: {text: o("selectedSingle", "Selected single"), className: "buttons-selected-single", init: function (c) {
        var a = this;
        c.on("draw.dt.DT select.dt.DT deselect.dt.DT", function () {
            var b = c.rows({selected: !0}).flatten().length + c.columns({selected: !0}).flatten().length + c.cells({selected: !0}).flatten().length;
            a.enable(1 === b)
        });
        this.disable()
    }}, selectAll: {text: o("selectAll",
        "Select all"), className: "buttons-select-all", action: function () {
        this[this.select.items() + "s"]().select()
    }}, selectNone: {text: o("selectNone", "Deselect all"), className: "buttons-select-none", action: function () {
        n(this.settings()[0], !0)
    }}});
    e.each(["Row", "Column", "Cell"], function (c, a) {
        var b = a.toLowerCase();
        g.ext.buttons["select" + a + "s"] = {text: o("select" + a + "s", "Select " + b + "s"), className: "buttons-select-" + b + "s", action: function () {
            this.select.items(b)
        }, init: function (a) {
            var c = this;
            a.on("selectItems.dt.DT", function (a, d, e) {
                c.active(e === b)
            })
        }}
    });
    e(l).on("preInit.dt.dtSelect", function (c, a) {
        if ("dt" === c.namespace) {
            var b = a.oInit.select || g.defaults.select, d = new g.Api(a), h = "row", i = "api", f = !1, k = !0, l = "td, th", m = "selected";
            a._select = {};
            if (!0 === b)i = "os"; else if ("string" === typeof b)i = b; else if (e.isPlainObject(b) && (b.blurable !== j && (f = b.blurable), b.info !== j && (k = b.info), b.items !== j && (h = b.items), b.style !== j && (i = b.style), b.selector !== j && (l = b.selector), b.className !== j))m = b.className;
            d.select.selector(l);
            d.select.items(h);
            d.select.style(i);
            d.select.blurable(f);
            d.select.info(k);
            a._select.className = m;
            e(d.table().node()).hasClass("selectable") && d.select.style("os")
        }
    });
    return g.select
});