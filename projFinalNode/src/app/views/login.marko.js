// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projnode$1.0.0/src/app/views/login.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>Cadastro</title><link rel=stylesheet href=/estatico/css/estilologin.css><link rel=\"sortcut icon\" href=/estatico/imagens/ff.png type=image/x-icon>;</head><body id=corpo><div id=freefire><form action=/validaBDUsuarios method=post><h1>BEM VINDO AO BOOYAH</h1><br><h1 id=titulos>SE JÁ ESTIVER CADASTRADO, FAÇA O LOGIN</h1><label for=cpf>CPF:</label> <input type=number name=cpf id=cpf size=11><br><br><label for=senha>Senha:</label> <input type=password name=senha id=senha size=40><br><br><input type=submit value=Login class=logbtn id=botao href=/ ><br><br><h1 id=titulos>CASO NÃO TENHA UM CADASTRO, VOLTE PARA A PÁGINA INICIAL E VÁ PARA A ABA DE CADASTRO.</h1></form></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "23");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/projnode$1.0.0/src/app/views/login.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
