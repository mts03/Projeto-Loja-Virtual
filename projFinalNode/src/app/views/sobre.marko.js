// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projnode$1.0.0/src/app/views/sobre.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>Sobre</title><link rel=stylesheet href=/estatico/css/estilosobre.css><link rel=\"sortcut icon\" href=/estatico/imagens/ff.png type=image/x-icon>;</head><body id=corpo><div id=freefire><h1>SOBRE A BOOYAH</h1><br><h1 id=titulos>QUEM SOMOS</h1><br><br><p>A Booyah! é uma loja especializada na venda de jogos. A mais de 1 semana no mercado, estamos vindo conquistando nosso espaço sempre trazendo os melhores preços e atendimento aos nossos clientes. Não se preocupe, sua compra em nosso site é 100% segura e garantimos que seu produto chegará em até 24 horas após a confirmação do pagamento. A partir do momento em que o pagamento é confirmado, nossa equipe irá entrar em contado com o e-mail fornecido por você e irá realizar a entrega de uma cópia digital do jogo comprado. Após isso, é só começar a jogar e aproveitar seu jogo!</p><br><br><h1 id=titulos>GARANTIA</h1><br><br><p>Se algo der errado com seu jogo ou ele não for entregue, você tem até 7 dias para enviar uma mensagem via e-mail (contato@booyah.com) nos dizendo sobre o ocorrido. Nossa equipe irá ir atrás de solucionar o problema o mais rápido possível para você, garantindo com que seu jogo funcione da melhor forma e da forma prometida por nós, não se preocupe, vamos sempre resolver!</p></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "19");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/projnode$1.0.0/src/app/views/sobre.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
