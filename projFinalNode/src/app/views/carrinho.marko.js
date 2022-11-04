// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projnode$1.0.0/src/app/views/carrinho.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>Carrinho</title><link rel=stylesheet href=/estatico/css/estilocarrinho.css><link rel=stylesheet href=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css integrity=sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO crossorigin=anonymous><link rel=\"sortcut icon\" href=/estatico/imagens/ff.png type=image/x-icon>;</head><body id=corpo><script src=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js integrity=sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy crossorigin=anonymous></script><script src=https://code.jquery.com/jquery-3.5.1.js integrity=sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc= crossorigin=anonymous></script><header><nav class=\"navbar navbar-light bg-dark\"> <div><img class=\"rounded-circle mr-3\" src=/estatico/imagens/FFlogo.png width=60 alt=\"Logo da Loja\"><a class=\"navbar-brand text-white\" href=/ >Booyah!</a></div><ul class=nav><li class=nav-item><a class=\"nav-link text-danger\" href=/sobre>Sobre</a></li><li class=nav-item><a class=\"nav-link text-danger\" href=/carrinho>Carrinho</a></li><li class=nav-item><a class=\"nav-link text-danger\" href=/login>Login</a></li><li class=nav-item><a class=\"nav-link text-danger\" href=/cadastro>Cadastro</a></li></ul></nav></header><h1 id=titulo>Carrinho</h1><table class=table><thead class=thead-dark><tr><th>Código</th><th>Descrição</th><th>Quantidade</th><th>Valor Unitário</th></tr></thead>");

  var $for$0 = 0;

  marko_forOf(data.produtos, function(produto) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(produto.idProduto) +
      "</td><td>" +
      marko_escapeXml(produto.descricaoProduto) +
      "</td><td></td><td>" +
      marko_escapeXml(produto.precoProduto) +
      "</td></tr>");
  });

  out.w("</table><input type=submit value=\"Finalizar Compra\" class=finalbtn id=botao>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "35");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/projnode$1.0.0/src/app/views/carrinho.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
