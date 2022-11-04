// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projnode$1.0.0/src/app/views/cadastro.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>Cadastro</title><link rel=stylesheet href=/estatico/css/estilologin.css><link rel=\"sortcut icon\" href=/estatico/imagens/ff.png type=image/x-icon>;</head><body id=corpo><div id=freefire><form action=/insertBDClientes method=post><h1>BEM VINDO AO BOOYAH</h1><br><h1 id=titulos href=/login>FAÇA SEU CADASTRO</h1><label for=nome>Nome Completo:</label> <input type=text name=nome class=campo id=espacos size=40><br><br><label for=cpf>CPF:</label> <input type=text name=cpf class=campo id=espacos size=11><br><br><label for=email>E-Mail:</label> <input type=text name=email class=campo id=espacos size=60><br><br><label for=senha>Senha:</label> <input type=password name=senha class=campo id=espacos size=40><br><br><input type=submit value=Cadastrar class=cadbtn id=botao href=/ ></form></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "28");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/projnode$1.0.0/src/app/views/cadastro.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
