importScripts('/innovaciondocente/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "innovaciondocente",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/innovaciondocente/_nuxt/app.0224536514a43778184b625e535200ab.css",
    "revision": "0224536514a43778184b625e535200ab"
  },
  {
    "url": "/innovaciondocente/_nuxt/app.da99921e6f231ccbec57.js",
    "revision": "53de86392b1efb552828b1dd31b62bec"
  },
  {
    "url": "/innovaciondocente/_nuxt/layouts/default.10ae851673aeb703d86b.js",
    "revision": "f30d3160f1c5a42b10c7747700ed1d84"
  },
  {
    "url": "/innovaciondocente/_nuxt/layouts/empty.1cd962d4187137ab8fae.js",
    "revision": "f9b8f02017ffa76a6908777e40359be7"
  },
  {
    "url": "/innovaciondocente/_nuxt/manifest.87bf2d08cf35a2dea67d.js",
    "revision": "775dda97cf8cbc3a0b45850b7501a1de"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/acerca-nosotros/index.fd6348c49968d6f60de6.js",
    "revision": "b7a73e6f3218e84a4a3a976f5c40bfac"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/acerca-nosotros/nuestro-equipo.8d0209e488e9c61b1202.js",
    "revision": "87e8ca532d2aadd213fce193d84082f8"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/acerca-nosotros/nuestros-servicios.afaa4ad284aa38aaf72d.js",
    "revision": "de97aaa4c9cbda95ab5c4a3eda181bb4"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/cafe-cientifico/_id.b4702cfbd0dd6eb8aa09.js",
    "revision": "1109cd5a43789c5c4c2ca986298750f4"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/cafe-cientifico/index.aeb5a180a2f1ae5f152a.js",
    "revision": "67ffde24dd6f8f48e5ad06acd5111762"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/cafe-cientifico/inscripcion.2b3d2aad102b7d418a6a.js",
    "revision": "8eba95fcaf73e4e1e7a869d8a2b3c7a0"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/desarrollo-asignatura/asesoramiento.4744e0da89544319eed6.js",
    "revision": "580209e40047e62fd743ee021660fb8c"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/desarrollo-asignatura/elaborar.26efd7d2c6c75f7809fb.js",
    "revision": "f2678ba4313381255a18beb44dd0765d"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/desarrollo-asignatura/index.1cf9cfcd996f80787fd6.js",
    "revision": "896f84630703393f10802b0fc8dad573"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/desarrollo-asignatura/recursos.d66dfde72da7f79ffe5f.js",
    "revision": "ea66b2420a12ff29778081a1290db78e"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/desarrollo-asignatura/repositorio.eb7eb22bd55c91bbb9fe.js",
    "revision": "6e7fc14336c3b20fcf16838e34bda7c7"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/jornadas-de-reflexion/index.d0d8e636f30c25baa37c.js",
    "revision": "d8c065ad6c5e2291a8e3b8fcbe6bb227"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/jornadas-de-reflexion/jornadas-anteriores.3661681522f889dae692.js",
    "revision": "cbbdcf499d079c8c25b0b7e3b4f9cc66"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/jornadas-de-reflexion/jornadas-anteriores/_id.e767ddb5fe397048a2a8.js",
    "revision": "97c886b3f2855d39d5fd90b1cda907d6"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/jornadas-de-reflexion/jornadas-anteriores/index.7d048e3b16a7cbd589d2.js",
    "revision": "8743cdf4d952426cd523113818cbf7f9"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/programa-formacion/_id.ecf0a84574be75997ea7.js",
    "revision": "5fe6b1d62d28c8b0a798ec8ad1450bf8"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/programa-formacion/cursos-especificos.ffc8219a3cb59258852a.js",
    "revision": "e9fd8831d19ab85c477c91fd73789bac"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/programa-formacion/cursos.8d214a6e4c503eafbe9c.js",
    "revision": "0ac083b74df2e7c598fb9bc2f68081da"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/programa-formacion/index.addfc9d330dc19992000.js",
    "revision": "a8f649a46421c61202462e2364d8389d"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/programa-formacion/potencia-formacion.818d76bfa40e884111fd.js",
    "revision": "e79b1f91e9e26a75741fc691b23bd912"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/index.fcfdd0395468b10b7359.js",
    "revision": "5c4d0d6f3a80f01e61ce2c891a0bd350"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/ayudante-catedra/index.7409477c2d0f7e96bffa.js",
    "revision": "915c2be6f868dcc08a00e7c19aacb548"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/buenas-practicas/index.9c45279f5ffac6cd5d0e.js",
    "revision": "ccab3f47c1e927cff359af9bc3120815"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/buenas-practicas/index/_id.6a0a02bc46d6e5bf8320.js",
    "revision": "5fecdb8b2196d3cea5b3c9a4288e0c72"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/buenas-practicas/index/index.604a2a7715708156b69a.js",
    "revision": "780cbe51a38a7dd4d19796c330a13746"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/convocatorias/index.6ab6b399558db8e6e3a4.js",
    "revision": "6cee0dc16cb0464dafb9834a0f1c4456"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/proyecto-mentores/index.08dcbedda186bfc1b2e1.js",
    "revision": "45f34ae34019544d89a4fafd0353a699"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/proyectos-actuales/index.952a4be143e42747cdfe.js",
    "revision": "845454f01d233ed8b574875dbfb04f36"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/proyectos-innovacion/_id.bc85f982513d14c68139.js",
    "revision": "731db116689e324af4d2dadda568ca49"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/proyectos-innovacion/index.bab3129b35b5883a0853.js",
    "revision": "b5e1e288ed574351810be63cce42a1e7"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/observatorio-edutendencias/noticias/_id.d91f9f7605c95145c721.js",
    "revision": "28640b468712850dcac17e61c79a4104"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/observatorio-edutendencias/noticias/index.18fc9dfd6845f3c68fe2.js",
    "revision": "027653a98e7e8ba123e0b75bdd5e6d05"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/observatorio-edutendencias/tips-innovacion/index.ba51658bbfe6cb5dd892.js",
    "revision": "842a0ab45f3b2fc921738438080e7ebf"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/observatorio-edutendencias/tips-innovacion/tips.b2cf545f36f775e2ea85.js",
    "revision": "8f2fbbb8885978ede6ebf3c6eea7ea2a"
  },
  {
    "url": "/innovaciondocente/_nuxt/vendor.17c5925ab44fcea94bcc.js",
    "revision": "331252de2ae12bdfa346ef5c04f0fc94"
  }
])


workboxSW.router.registerRoute(new RegExp('/innovaciondocente/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/innovaciondocente/.*'), workboxSW.strategies.networkFirst({}), 'GET')

