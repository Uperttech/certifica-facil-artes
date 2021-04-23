const artes = [
    { 
        name: "descontos_exclusivos", 
        title: "Descontos Exclusivos", 
        svgString: ({ cliente, genero }) => 
            `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800" height="800" viewBox="0 0 800 800" id="art_svg"><defs><linearGradient id="linear-gradient" y1="-0.039" x2="1.018" y2="1.112" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#2196f3"/><stop offset="1" stop-color="#82b1ff"/></linearGradient><linearGradient id="linear-gradient-2" x1="0.858" y1="0.883" x2="0.135" y2="-0.041" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><clipPath id="clip-empresa"><rect width="800" height="800"/></clipPath></defs><g id="empresa" clip-path="url(#clip-empresa)"><rect width="800" height="800" fill="#fff"/><g id="bg"><rect id="bg-2" data-name="bg" width="803" height="800" transform="translate(-3)" fill="url(#linear-gradient)"/><path id="uperttech-logo" d="M618.189,697.763A48.966,48.966,0,0,1,569.224,648.8V503.864a48.967,48.967,0,0,0-14.337-34.625l-14.2-14.2A48.966,48.966,0,0,0,506.059,440.7H452.936a48.967,48.967,0,0,1-48.964-48.97v-48.97a48.965,48.965,0,0,1,48.961-48.963H501.9a48.967,48.967,0,0,1,48.972,48.968v53.122a48.971,48.971,0,0,0,14.337,34.625l14.2,14.2a48.97,48.97,0,0,0,34.63,14.342H818.222a48.957,48.957,0,0,0,34.625-14.338l32.562-32.556a48.976,48.976,0,0,0,14.34-34.631V232.591a48.966,48.966,0,0,1,48.965-48.967h195.864a48.967,48.967,0,0,1,48.967,48.968V373.371a48.966,48.966,0,0,1-48.965,48.963H944.551a48.983,48.983,0,0,0-34.627,14.337l-32.561,32.563a48.972,48.972,0,0,0-14.341,34.628V648.8a48.963,48.963,0,0,1-48.964,48.967ZM985.446,661.04h0a48.967,48.967,0,0,1-48.972-48.972V526.379a48.964,48.964,0,0,1,48.965-48.967h85.7a48.963,48.963,0,0,1,48.967,48.964v85.691a48.967,48.967,0,0,1-48.972,48.972Zm-936.48-146.9A48.967,48.967,0,0,1,0,465.168V324.39a48.966,48.966,0,0,1,48.965-48.963H248.993A48.984,48.984,0,0,0,283.62,261.09l32.561-32.563A48.969,48.969,0,0,0,330.521,193.9V48.966A48.963,48.963,0,0,1,379.486,0H575.354A48.965,48.965,0,0,1,624.32,48.965V193.9a48.969,48.969,0,0,0,14.337,34.625l14.205,14.205,0,0a48.97,48.97,0,0,0,34.629,14.341h53.121a48.967,48.967,0,0,1,48.964,48.97v48.97a48.965,48.965,0,0,1-48.961,48.963H691.646A48.966,48.966,0,0,1,642.668,355V301.878a48.973,48.973,0,0,0-14.338-34.625l-14.2-14.2a48.968,48.968,0,0,0-34.63-14.341H375.321A48.956,48.956,0,0,0,340.7,253.052l-32.558,32.56A48.969,48.969,0,0,0,293.8,320.243V465.17a48.967,48.967,0,0,1-48.966,48.967Zm73.442-293.785a48.963,48.963,0,0,1-48.967-48.965V85.7a48.967,48.967,0,0,1,48.972-48.972H208.1A48.965,48.965,0,0,1,257.07,85.689v85.7A48.964,48.964,0,0,1,208.1,220.351Z" transform="translate(131.228 256)" opacity="0.21" fill="url(#linear-gradient-2)"/></g><g id="header"><text id="texto" transform="translate(75 191)" fill="#fff" font-size="41" font-family="Montserrat-SemiBold, Montserrat" font-weight="600"><tspan x="0" y="0">Certificados Digitais</tspan><tspan font-size="36" font-family="Montserrat-Light, Montserrat" font-weight="300"><tspan x="0" y="45">Descontos exclusivos para</tspan><tspan x="0" y="89">clientes</tspan></tspan></text><text id="do_da" data-name="do/da" transform="translate(221 245)" fill="#fff" font-size="36" font-family="Montserrat-Light, Montserrat" font-weight="300"><tspan x="0" y="35">${genero}</tspan></text><text id="empresa-2" data-name="empresa" transform="translate(276 245)" fill="#fff" font-size="36" font-family="Montserrat-Medium, Montserrat" font-weight="500"><tspan x="0" y="35">${cliente}</tspan></text><path id="uperttech-tipo" d="M-740.525-1148.095a.54.54,0,0,1-.153-.458v-7.391h-13v7.391a.54.54,0,0,1-.152.458.54.54,0,0,1-.459.153h-3q-.64,0-.639-.611v-18.227q0-.612.639-.611h3a.537.537,0,0,1,.458.153.537.537,0,0,1,.153.458v7.224h13v-7.224a.543.543,0,0,1,.153-.458.539.539,0,0,1,.459-.153h3q.638,0,.639.611v18.227q0,.611-.639.611h-3a.55.55,0,0,1-.077.005A.539.539,0,0,1-740.525-1148.095Zm-20.991.153h-12.531a14.222,14.222,0,0,1-3.584-.389,5.484,5.484,0,0,1-2.4-1.265,5.11,5.11,0,0,1-1.361-2.278,11.722,11.722,0,0,1-.43-3.4v-4.779a11.564,11.564,0,0,1,.43-3.389,5.107,5.107,0,0,1,1.361-2.264,5.586,5.586,0,0,1,2.4-1.279,13.813,13.813,0,0,1,3.584-.4h12.531a.542.542,0,0,1,.459.152.54.54,0,0,1,.153.459v2.723q0,.638-.611.639h-12.364a7.46,7.46,0,0,0-1.793.18,2.325,2.325,0,0,0-1.125.611,2.488,2.488,0,0,0-.6,1.154,7.7,7.7,0,0,0-.18,1.833v3.947a7.921,7.921,0,0,0,.18,1.848,2.5,2.5,0,0,0,.6,1.166,2.316,2.316,0,0,0,1.125.61,7.358,7.358,0,0,0,1.793.181h12.363a.543.543,0,0,1,.459.153.544.544,0,0,1,.153.458v2.723a.543.543,0,0,1-.153.458.54.54,0,0,1-.382.159A.544.544,0,0,1-761.516-1147.942Zm-55.6,0h-3.029a.542.542,0,0,1-.459-.152.546.546,0,0,1-.153-.459v-14.865h-8.724a.566.566,0,0,1-.48-.16.567.567,0,0,1-.159-.48v-2.722q0-.61.639-.611h21.7q.639,0,.638.611v2.723a.565.565,0,0,1-.159.479.565.565,0,0,1-.48.16H-816.5v14.865a.537.537,0,0,1-.153.458.539.539,0,0,1-.381.159A.544.544,0,0,1-817.112-1147.942Zm-24.255,0H-844.4a.542.542,0,0,1-.459-.152.546.546,0,0,1-.153-.459v-14.865h-8.724a.566.566,0,0,1-.48-.16.567.567,0,0,1-.159-.48v-2.722q0-.61.639-.611h21.7q.639,0,.638.611v2.723a.565.565,0,0,1-.159.479.565.565,0,0,1-.48.16h-8.723v14.865a.543.543,0,0,1-.153.458.539.539,0,0,1-.381.159A.544.544,0,0,1-841.367-1147.942Zm-81.074,0h-3q-.638,0-.639-.611v-18a.737.737,0,0,1,.209-.625.734.734,0,0,1,.625-.208h14.922q3.193,0,4.584,1.444a5.935,5.935,0,0,1,1.39,4.279v2.057a5.945,5.945,0,0,1-1.39,4.279q-1.389,1.445-4.584,1.444h-11.5v5.335a.54.54,0,0,1-.152.458.544.544,0,0,1-.383.158A.552.552,0,0,1-922.441-1147.942Zm.611-15.281v5.667h10.642a2.691,2.691,0,0,0,2-.611,2.607,2.607,0,0,0,.583-1.861v-1.056a2.611,2.611,0,0,0-.583-1.862,2.692,2.692,0,0,0-2-.611h-10.28C-921.71-1163.557-921.83-1163.445-921.83-1163.223Zm47.483,15.28h-3q-.64,0-.638-.61v-18a.734.734,0,0,1,.208-.625.737.737,0,0,1,.625-.209h14.922q3.193,0,4.584,1.444a5.936,5.936,0,0,1,1.39,4.28v1.583a6.491,6.491,0,0,1-.972,3.779,4.644,4.644,0,0,1-3.169,1.777l4.751,5.891a.438.438,0,0,1,.084.417q-.057.278-.445.278h-3.585a1.05,1.05,0,0,1-.5-.084.97.97,0,0,1-.278-.276l-4.389-5.781h-8.974v5.53a.544.544,0,0,1-.153.458.541.541,0,0,1-.381.158A.528.528,0,0,1-874.346-1147.943Zm.61-15.308v5.779h10.642a2.69,2.69,0,0,0,2-.611,2.61,2.61,0,0,0,.583-1.862v-1.166a2.611,2.611,0,0,0-.583-1.862,2.69,2.69,0,0,0-2-.611h-10.281Q-873.736-1163.585-873.736-1163.251Zm72.489,14.921a5.477,5.477,0,0,1-2.4-1.265,5.1,5.1,0,0,1-1.361-2.278,11.72,11.72,0,0,1-.43-3.4v-4.78a11.562,11.562,0,0,1,.43-3.389,5.1,5.1,0,0,1,1.361-2.264,5.591,5.591,0,0,1,2.4-1.279,13.778,13.778,0,0,1,3.585-.4h12.225q.639,0,.639.611v2.641q0,.61-.639.611H-797.58a7.4,7.4,0,0,0-1.792.181,2.416,2.416,0,0,0-1.139.611,2.332,2.332,0,0,0-.6,1.166,8.347,8.347,0,0,0-.167,1.82v.276h15.7a.538.538,0,0,1,.458.153.544.544,0,0,1,.153.458v2.2a.543.543,0,0,1-.153.458.538.538,0,0,1-.458.153h-15.7v.473a8.345,8.345,0,0,0,.167,1.82,2.331,2.331,0,0,0,.6,1.167,2.413,2.413,0,0,0,1.139.611,7.41,7.41,0,0,0,1.792.181h12.142q.639,0,.639.611v2.641q0,.612-.639.611h-12.225l-.274,0A14.228,14.228,0,0,1-801.247-1148.33Zm-96.383,0a5.477,5.477,0,0,1-2.4-1.265,5.111,5.111,0,0,1-1.362-2.278,11.688,11.688,0,0,1-.429-3.4v-4.78a11.535,11.535,0,0,1,.429-3.389,5.108,5.108,0,0,1,1.362-2.264,5.605,5.605,0,0,1,2.4-1.279,13.783,13.783,0,0,1,3.585-.4h12.225q.639,0,.639.611v2.641q0,.61-.639.611h-12.141a7.4,7.4,0,0,0-1.793.181,2.416,2.416,0,0,0-1.139.611,2.332,2.332,0,0,0-.6,1.166,8.4,8.4,0,0,0-.167,1.82v.276h15.7a.538.538,0,0,1,.458.153.544.544,0,0,1,.153.458v2.2a.543.543,0,0,1-.153.459.54.54,0,0,1-.458.152h-15.7v.473a8.4,8.4,0,0,0,.167,1.82,2.339,2.339,0,0,0,.6,1.167,2.417,2.417,0,0,0,1.139.611,7.412,7.412,0,0,0,1.793.181h12.141q.639,0,.639.611v2.641q0,.612-.639.611h-12.225l-.274,0A14.228,14.228,0,0,1-897.63-1148.33Zm-51.457,0a5.48,5.48,0,0,1-2.4-1.265,5.1,5.1,0,0,1-1.362-2.278,11.69,11.69,0,0,1-.429-3.4v-11.5q0-.612.639-.611h3a.538.538,0,0,1,.458.153.537.537,0,0,1,.153.458v11.087a7.92,7.92,0,0,0,.181,1.848,2.5,2.5,0,0,0,.6,1.166,2.325,2.325,0,0,0,1.125.611,7.41,7.41,0,0,0,1.792.182h7.7a7.409,7.409,0,0,0,1.792-.181,2.328,2.328,0,0,0,1.126-.611,2.4,2.4,0,0,0,.583-1.166,8.545,8.545,0,0,0,.167-1.848v-11.088a.537.537,0,0,1,.153-.458.54.54,0,0,1,.459-.153h3.028a.537.537,0,0,1,.458.153.537.537,0,0,1,.153.458v11.5a12.07,12.07,0,0,1-.416,3.4,5.015,5.015,0,0,1-1.348,2.278,5.488,5.488,0,0,1-2.417,1.265,14.37,14.37,0,0,1-3.6.389h-8l-.274,0A14.228,14.228,0,0,1-949.087-1148.331Z" transform="translate(1027.842 1226.271)" fill="#fff"/></g><g id="produtos" transform="translate(-110.42 -116.858)"><g id="A1" transform="translate(355.553 452.196)"><g id="Grupo_2" data-name="Grupo 2" transform="translate(0)"><path id="Caminho_2" data-name="Caminho 2" d="M21.058,0H127.193a21.058,21.058,0,0,1,21.058,21.058V127.193a21.058,21.058,0,0,1-21.058,21.058H21.058A21.058,21.058,0,0,1,0,127.193V21.058A21.058,21.058,0,0,1,21.058,0Z" transform="translate(0.506)" fill="#72bbf5"/><path id="Retângulo_4" data-name="Retângulo 4" d="M0,0H148.917a0,0,0,0,1,0,0V25.375a17,17,0,0,1-17,17H17a17,17,0,0,1-17-17V0A0,0,0,0,1,0,0Z" transform="translate(0 105.604)" fill="#fff"/></g><g id="Grupo_1" data-name="Grupo 1" transform="translate(18.161 117.711)"><text id="A_partir_de" data-name="A partir de" transform="translate(0 11.421)" fill="rgba(125,125,125,0.73)" font-size="9" font-family="Montserrat-Light, Montserrat" font-weight="300"><tspan x="0" y="0">A partir de</tspan></text><text id="R_160_00" data-name="R$160,00" transform="translate(55.693 13)" fill="#7d7d7d" font-size="13" font-family="Montserrat-Regular, Montserrat"><tspan x="0" y="0">R$160,00</tspan></text></g><g id="Grupo_4" data-name="Grupo 4" transform="translate(42.375 12.38)"><text id="A1-2" data-name="A1" transform="translate(0 57)" fill="#fff" font-size="59" font-family="Montserrat-SemiBold, Montserrat" font-weight="600"><tspan x="0" y="0">A1</tspan></text><text id="E-CPF" transform="translate(15.739 76.589)" fill="rgba(255,255,255,0.72)" font-size="10" font-family="Montserrat-Light, Montserrat" font-weight="300"><tspan x="0" y="0">E-CPF</tspan></text></g></g><g id="A1-3" data-name="A1" transform="translate(531.106 452.196)"><g id="Grupo_2-2" data-name="Grupo 2" transform="translate(0)"><path id="Caminho_3" data-name="Caminho 3" d="M21.058,0H127.193a21.058,21.058,0,0,1,21.058,21.058V127.193a21.058,21.058,0,0,1-21.058,21.058H21.058A21.058,21.058,0,0,1,0,127.193V21.058A21.058,21.058,0,0,1,21.058,0Z" fill="#72bbf5"/><path id="Retângulo_4-2" data-name="Retângulo 4" d="M0,0H148.917a0,0,0,0,1,0,0V25.375a17,17,0,0,1-17,17H17a17,17,0,0,1-17-17V0A0,0,0,0,1,0,0Z" transform="translate(0 105.604)" fill="#fff"/></g><g id="Grupo_4-2" data-name="Grupo 4" transform="translate(41.164 12.38)"><text id="A1-4" data-name="A1" transform="translate(0 57)" fill="#fff" font-size="59" font-family="Montserrat-SemiBold, Montserrat" font-weight="600"><tspan x="0" y="0">A1</tspan></text><text id="E-CNPJ" transform="translate(12.107 76.589)" fill="rgba(255,255,255,0.72)" font-size="10" font-family="Montserrat-Light, Montserrat" font-weight="300"><tspan x="0" y="0">E-CNPJ</tspan></text></g><g id="Grupo_6" data-name="Grupo 6" transform="translate(18.161 117.711)"><text id="A_partir_de-2" data-name="A partir de" transform="translate(0 11.421)" fill="rgba(125,125,125,0.73)" font-size="9" font-family="Montserrat-Light, Montserrat" font-weight="300"><tspan x="0" y="0">A partir de</tspan></text><text id="R_235_00" data-name="R$235,00" transform="translate(55.693 13)" fill="#7d7d7d" font-size="13" font-family="Montserrat-Regular, Montserrat"><tspan x="0" y="0">R$235,00</tspan></text></g></g><g id="A3" transform="translate(180 625.139)"><g id="Grupo_2-3" data-name="Grupo 2" transform="translate(0)"><path id="Caminho_9" data-name="Caminho 9" d="M21.058,0H127.193a21.058,21.058,0,0,1,21.058,21.058V127.193a21.058,21.058,0,0,1-21.058,21.058H21.058A21.058,21.058,0,0,1,0,127.193V21.058A21.058,21.058,0,0,1,21.058,0Z" transform="translate(0.666 -0.272)" fill="#498fdd" opacity="0.76"/><path id="Retângulo_4-3" data-name="Retângulo 4" d="M0,0H148.917a0,0,0,0,1,0,0V25.375a17,17,0,0,1-17,17H17a17,17,0,0,1-17-17V0A0,0,0,0,1,0,0Z" transform="translate(0 105.604)" fill="#fff"/></g><g id="Grupo_4-3" data-name="Grupo 4" transform="translate(35.111 12.38)"><text id="A3-2" data-name="A3" transform="translate(0 58)" fill="#fff" font-size="60" font-family="Montserrat-SemiBold, Montserrat" font-weight="600"><tspan x="0" y="0">A3</tspan></text><g id="Grupo_8" data-name="Grupo 8" transform="translate(10.896 66.589)"><text id="E-CPF-2" data-name="E-CPF" transform="translate(0 9)" fill="rgba(255,255,255,0.72)" font-size="9" font-family="Montserrat-Light, Montserrat" font-weight="300"><tspan x="0" y="0">E-CPF</tspan></text><text id="Token" transform="translate(35.111 9)" fill="rgba(255,255,255,0.72)" font-size="9" font-family="Montserrat-Light, Montserrat" font-weight="300"><tspan x="0" y="0">Token</tspan></text></g></g><g id="Grupo_6-2" data-name="Grupo 6" transform="translate(18.161 117.711)"><text id="A_partir_de-3" data-name="A partir de" transform="translate(0 11.421)" fill="rgba(125,125,125,0.73)" font-size="9" font-family="Montserrat-Light, Montserrat" font-weight="300"><tspan x="0" y="0">A partir de</tspan></text><text id="R_355_00" data-name="R$355,00" transform="translate(55.693 13)" fill="#7d7d7d" font-size="13" font-family="Montserrat-Regular, Montserrat"><tspan x="0" y="0">R$355,00</tspan></text></g></g><g id="A3-3" data-name="A3" transform="translate(355.553 625.139)"><g id="Grupo_2-4" data-name="Grupo 2" transform="translate(0)"><path id="Caminho_8" data-name="Caminho 8" d="M21.058,0H127.193a21.058,21.058,0,0,1,21.058,21.058V127.193a21.058,21.058,0,0,1-21.058,21.058H21.058A21.058,21.058,0,0,1,0,127.193V21.058A21.058,21.058,0,0,1,21.058,0Z" transform="translate(0.666 -0.272)" fill="#498fdd" opacity="0.76"/><path id="Retângulo_4-4" data-name="Retângulo 4" d="M0,0H148.917a0,0,0,0,1,0,0V25.375a17,17,0,0,1-17,17H17a17,17,0,0,1-17-17V0A0,0,0,0,1,0,0Z" transform="translate(0 105.604)" fill="#fff"/></g><g id="Grupo_4-4" data-name="Grupo 4" transform="translate(35.111 12.38)"><text id="A3-4" data-name="A3" transform="translate(0 58)" fill="#fff" font-size="60" font-family="Montserrat-SemiBold, Montserrat" font-weight="600"><tspan x="0" y="0">A3</tspan></text><g id="Grupo_8-2" data-name="Grupo 8" transform="translate(0 67.8)"><text id="E-CPF-3" data-name="E-CPF" transform="translate(0 9)" fill="rgba(255,255,255,0.72)" font-size="9" font-family="Montserrat-Light, Montserrat" font-weight="300"><tspan x="0" y="0">E-CPF</tspan></text><text id="SmartCard" transform="translate(36.321 9)" fill="rgba(255,255,255,0.72)" font-size="9" font-family="Montserrat-Light, Montserrat" font-weight="300"><tspan x="0" y="0">SmartCard</tspan></text></g></g><g id="Grupo_6-3" data-name="Grupo 6" transform="translate(18.161 117.711)"><text id="A_partir_de-4" data-name="A partir de" transform="translate(0 11.421)" fill="rgba(125,125,125,0.73)" font-size="9" font-family="Montserrat-Light, Montserrat" font-weight="300"><tspan x="0" y="0">A partir de</tspan></text><text id="R_225_00" data-name="R$225,00" transform="translate(55.693 13)" fill="#7d7d7d" font-size="13" font-family="Montserrat-Regular, Montserrat"><tspan x="0" y="0">R$225,00</tspan></text></g></g><g id="BirdID" transform="translate(706.66 452.196)"><g id="Grupo_2-5" data-name="Grupo 2" transform="translate(0)"><path id="Caminho_4" data-name="Caminho 4" d="M21.058,0H127.193a21.058,21.058,0,0,1,21.058,21.058V127.193a21.058,21.058,0,0,1-21.058,21.058H21.058A21.058,21.058,0,0,1,0,127.193V21.058A21.058,21.058,0,0,1,21.058,0Z" transform="translate(0.666)" fill="#6bb0d7"/><path id="Retângulo_4-5" data-name="Retângulo 4" d="M0,0H148.917a0,0,0,0,1,0,0V25.375a17,17,0,0,1-17,17H17a17,17,0,0,1-17-17V0A0,0,0,0,1,0,0Z" transform="translate(0 105.604)" fill="#fff"/></g><g id="Grupo_4-5" data-name="Grupo 4" transform="translate(22.094 29.994)"><text id="BirdID-2" data-name="BirdID" transform="translate(0 31)" fill="#fff" font-size="32" font-family="Montserrat-SemiBold, Montserrat" font-weight="600"><tspan x="0" y="0">BirdID</tspan></text><g id="Grupo_8-3" data-name="Grupo 8" transform="translate(17.859 49.185)"><text id="E-CPF-4" data-name="E-CPF" transform="translate(0 9)" fill="rgba(255,255,255,0.72)" font-size="9" font-family="Montserrat-Light, Montserrat" font-weight="300"><tspan x="0" y="0">E-CPF</tspan></text><text id="Nuvem" transform="translate(36.321 9)" fill="rgba(255,255,255,0.72)" font-size="9" font-family="Montserrat-Light, Montserrat" font-weight="300"><tspan x="0" y="0">Nuvem</tspan></text></g></g><g id="Grupo_6-4" data-name="Grupo 6" transform="translate(18.161 117.711)"><text id="A_partir_de-5" data-name="A partir de" transform="translate(0 11.421)" fill="rgba(125,125,125,0.73)" font-size="9" font-family="Montserrat-Light, Montserrat" font-weight="300"><tspan x="0" y="0">A partir de</tspan></text><text id="R_49_90" data-name="R$49,90" transform="translate(55.693 13)" fill="#7d7d7d" font-size="13" font-family="Montserrat-Regular, Montserrat"><tspan x="0" y="0">R$49,90</tspan></text></g></g><g id="A3-5" data-name="A3" transform="translate(531.107 625.139)"><g id="Grupo_2-6" data-name="Grupo 2" transform="translate(0)"><path id="Caminho_7" data-name="Caminho 7" d="M21.058,0H127.193a21.058,21.058,0,0,1,21.058,21.058V127.193a21.058,21.058,0,0,1-21.058,21.058H21.058A21.058,21.058,0,0,1,0,127.193V21.058A21.058,21.058,0,0,1,21.058,0Z" transform="translate(0 -0.272)" fill="#498fdd" opacity="0.76"/><path id="Retângulo_4-6" data-name="Retângulo 4" d="M0,0H148.917a0,0,0,0,1,0,0V25.375a17,17,0,0,1-17,17H17a17,17,0,0,1-17-17V0A0,0,0,0,1,0,0Z" transform="translate(0 105.604)" fill="#fff"/></g><g id="Grupo_4-6" data-name="Grupo 4" transform="translate(31.478 12.38)"><text id="A3-6" data-name="A3" transform="translate(3.632 58)" fill="#fff" font-size="60" font-family="Montserrat-SemiBold, Montserrat" font-weight="600"><tspan x="0" y="0">A3</tspan></text><g id="Grupo_8-4" data-name="Grupo 8" transform="translate(0 67.8)"><text id="E-CNPJ-2" data-name="E-CNPJ" transform="translate(0 9)" fill="rgba(255,255,255,0.72)" font-size="9" font-family="Montserrat-Light, Montserrat" font-weight="300"><tspan x="0" y="0">E-CNPJ</tspan></text><text id="SmartCard-2" data-name="SmartCard" transform="translate(43.586 9)" fill="rgba(255,255,255,0.72)" font-size="9" font-family="Montserrat-Light, Montserrat" font-weight="300"><tspan x="0" y="0">SmartCard</tspan></text></g></g><g id="Grupo_6-5" data-name="Grupo 6" transform="translate(18.161 117.711)"><text id="A_partir_de-6" data-name="A partir de" transform="translate(0 11.421)" fill="rgba(125,125,125,0.73)" font-size="9" font-family="Montserrat-Light, Montserrat" font-weight="300"><tspan x="0" y="0">A partir de</tspan></text><text id="R_300_00" data-name="R$300,00" transform="translate(55.693 12)" fill="#7d7d7d" font-size="12" font-family="Montserrat-Regular, Montserrat"><tspan x="0" y="0">R$300,00</tspan></text></g></g><g id="A3-7" data-name="A3" transform="translate(706.66 625.139)"><g id="Grupo_2-7" data-name="Grupo 2" transform="translate(0)"><path id="Caminho_6" data-name="Caminho 6" d="M21.058,0H127.193a21.058,21.058,0,0,1,21.058,21.058V127.193a21.058,21.058,0,0,1-21.058,21.058H21.058A21.058,21.058,0,0,1,0,127.193V21.058A21.058,21.058,0,0,1,21.058,0Z" transform="translate(0 -0.272)" fill="#498fdd" opacity="0.76"/><path id="Retângulo_4-7" data-name="Retângulo 4" d="M0,0H148.917a0,0,0,0,1,0,0V25.375a17,17,0,0,1-17,17H17a17,17,0,0,1-17-17V0A0,0,0,0,1,0,0Z" transform="translate(0 105.604)" fill="#fff"/></g><g id="Grupo_4-7" data-name="Grupo 4" transform="translate(35.111 12.38)"><text id="A3-8" data-name="A3" transform="translate(0 58)" fill="#fff" font-size="60" font-family="Montserrat-SemiBold, Montserrat" font-weight="600"><tspan x="0" y="0">A3</tspan></text><g id="Grupo_8-5" data-name="Grupo 8" transform="translate(2.421 67.8)"><text id="E-CNPJ-3" data-name="E-CNPJ" transform="translate(0 9)" fill="rgba(255,255,255,0.72)" font-size="9" font-family="Montserrat-Light, Montserrat" font-weight="300"><tspan x="0" y="0">E-CNPJ</tspan></text><text id="Token-2" data-name="Token" transform="translate(43.586 9)" fill="rgba(255,255,255,0.72)" font-size="9" font-family="Montserrat-Light, Montserrat" font-weight="300"><tspan x="0" y="0">Token</tspan></text></g></g><g id="Grupo_6-6" data-name="Grupo 6" transform="translate(18.161 117.711)"><text id="A_partir_de-7" data-name="A partir de" transform="translate(0 11.421)" fill="rgba(125,125,125,0.73)" font-size="9" font-family="Montserrat-Light, Montserrat" font-weight="300"><tspan x="0" y="0">A partir de</tspan></text><text id="R_430_00" data-name="R$430,00" transform="translate(55.693 12)" fill="#7d7d7d" font-size="12" font-family="Montserrat-Regular, Montserrat"><tspan x="0" y="0">R$430,00</tspan></text></g></g><g id="A3-9" data-name="A3" transform="translate(180 433.108)"><g id="Grupo_2-8" data-name="Grupo 2" transform="translate(0 19.087)"><path id="Caminho_5" data-name="Caminho 5" d="M21.058,0H127.193a21.058,21.058,0,0,1,21.058,21.058V127.193a21.058,21.058,0,0,1-21.058,21.058H21.058A21.058,21.058,0,0,1,0,127.193V21.058A21.058,21.058,0,0,1,21.058,0Z" transform="translate(0.333)" fill="#498fdd" opacity="0.76"/><path id="Retângulo_4-8" data-name="Retângulo 4" d="M0,0H148.917a0,0,0,0,1,0,0V25.375a17,17,0,0,1-17,17H17a17,17,0,0,1-17-17V0A0,0,0,0,1,0,0Z" transform="translate(0 105.604)" fill="#fff"/></g><g id="Grupo_4-8" data-name="Grupo 4" transform="translate(42.249 31.467)"><g id="Grupo_8-6" data-name="Grupo 8" transform="translate(0 0)"><text id="E-CPF-5" data-name="E-CPF" transform="translate(18.155 76.8)" fill="rgba(255,255,255,0.72)" font-size="9" font-family="Montserrat-Light, Montserrat" font-weight="300"><tspan x="0" y="0">E-CPF</tspan></text><text id="A3-10" data-name="A3" transform="translate(-7.345 57)" fill="#fff" font-size="59" font-family="Montserrat-SemiBold, Montserrat" font-weight="600"><tspan x="0" y="0">A3</tspan></text></g></g><g id="Grupo_6-7" data-name="Grupo 6" transform="translate(18.161 136.799)"><text id="A_partir_de-8" data-name="A partir de" transform="translate(0 11.421)" fill="rgba(125,125,125,0.73)" font-size="9" font-family="Montserrat-Light, Montserrat" font-weight="300"><tspan x="0" y="0">A partir de</tspan></text><text id="R_120_00" data-name="R$120,00" transform="translate(55.693 13)" fill="#7d7d7d" font-size="13" font-family="Montserrat-Regular, Montserrat"><tspan x="0" y="0">R$120,00</tspan></text></g><g id="Grupo_16" data-name="Grupo 16" transform="translate(111.484 0)"><circle id="Elipse_1" data-name="Elipse 1" cx="27.608" cy="27.608" r="27.608" fill="#ff5d5d"/><text id="CRM_CRC_OAB" data-name="CRMCRCOAB" transform="translate(16.361 18.18)" fill="#fff" font-size="10" font-family="Montserrat-Medium, Montserrat" font-weight="500"><tspan x="0" y="0">CRM</tspan><tspan x="0" y="13">CRC</tspan><tspan x="0" y="26">OAB</tspan></text></g></g></g><g id="contato" transform="translate(0 -13)"><text id="Adquira_já_certifica_uperttech.com_67_3015-1779" data-name="Adquira jácertifica@uperttech.com(67) 3015-1779" transform="translate(70 724)" fill="#fff" font-size="16" font-family="Montserrat-Regular, Montserrat"><tspan x="0" y="0">Adquira já</tspan><tspan font-family="Montserrat-SemiBold, Montserrat" font-weight="600"><tspan x="0" y="19">certifica@uperttech.com</tspan><tspan x="0" y="38">(67) 3015-1779</tspan></tspan></text><text id="Precisa_de_ajuda_para_escolher_Acesse_certifica.uperttech.com" data-name="Precisa de ajuda para escolher?Acesse certifica.uperttech.com" transform="translate(441 731)" fill="#fff" font-size="19" font-family="Montserrat-Regular, Montserrat"><tspan x="0" y="0">Precisa de ajuda para escolher?</tspan><tspan font-family="Montserrat-SemiBold, Montserrat" font-weight="600"><tspan x="0" y="23">Acesse certifica.uperttech.com</tspan></tspan></text></g></g></svg>` 
    }    
]

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const clienteElement = document.getElementById("cliente")
const generoElement = document.getElementById("genero")
const arteElement = document.getElementById("arte")

artes.forEach(a => {
    const el = document.createElement('option')
    el.value = a.name
    el.innerHTML = a.title 
    arteElement.appendChild(el)
})

function generate() {
    const cliente = clienteElement.value
    const genero = generoElement.value === "f" ? "da" : "do"
    const arteName = arteElement.value
    const arte = artes.find((a) => a.name === arteName)

    const arteSvgString = arte.svgString({ cliente, genero })

    canvg.Canvg.fromString(ctx, arteSvgString).start()

    const fileName = cliente
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]|\s/g, "")
    const filePath = canvas.toDataURL("image/png")
    downloadFile(fileName, filePath)
}

function downloadFile(name, path){
    const link = document.createElement('a')
    link.href = path
    link.download = name
    link.click()
}