import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function Cuidados() {
  const [dicaCuidado, setDicaCuidado] = useState(
    "Toque em algum dos ícones para ler mais sobre os meios de prevenção! :)"
  );

  function DicaMascara() {
    setDicaCuidado(
      "A covid-19, doença causada pelo coronavírus SARS-Cov-2, é transmitida principalmente por meio do contato com pequenas gotículas que contêm o vírus e são expelidas por pessoas infectadas. Elas entram em contato com as nossas vias aéreas, e novo coronavírus pode começar a se multiplicar no nosso corpo. Portanto, o uso de máscaras é importante como medida de proteção tanto para você mesmo quanto para as pessoas a seu redor. As máscaras funcionam como uma barreira física para a liberação dessas gotículas no ar quando há tosse, espirros e até mesmo durante conversas. Seu uso é importante principalmente em locais em que não é possível manter uma distância mínima de segurança               FONTE: https://coronavirus.saude.mg.gov.br"
    );
  }

  function DicaMaoNoRosto() {
    setDicaCuidado(
      "A transmissão da Covid-19 de uma pessoa a outra se dá a partir de gotículas expelidas pelo nariz ou boca. Dessa forma, uma mão contaminada por uma superfície pode levar o vírus às mucosas do olho, nariz e boca e vice-versa, caso a pessoa contaminada passe, a partir do toque em sua boca ou nariz, o vírus para a mão e, depois, para outras superfícies.                 FONTE: https://oglobo.globo.com"
    );
  }

  function AlcoolEmGel() {
    setDicaCuidado(
      "Lavar as mãos é uma das medidas mais eficazes para evitar qualquer tipo de transmissão de doenças. A grande maioria de pessoas reconhece a importância desse hábito, porém não sabem praticá-lo corretamente. O tempo ideal de lavagem é de 10 a 15 segundos, em água corrente e sabonete líquido para limpeza de áreas escondidas, como entre os dedos e sob as unhas.  Os punhos, antebraços e parte de cima das mãos também devem ser esfregados. Vale lembrar que o uso do álcool em gel com concentração de álcool a 70% é uma boa indicação para a limpeza das mãos. Desde a epidemia da gripe H1N1, sua aplicação para a higienização das mãos tem se tornado mais frequente. Essa é uma medida positiva, que reduz as possibilidades de infecção por contato com vírus e bactérias               FONTE: https://www.rededorsaoluiz.com.br"
    );
  }

  function Distanciamento() {
    setDicaCuidado(
      "O distanciamento social é uma das medidas mais importantes e eficazes para reduzir o avanço da pandemia da covid-19. A doença é causada pelo vírus SARS-CoV-2, mais conhecido como o novo coronavírus. A transmissão ocorre de pessoa para pessoa, pelo ar ou por contato pessoal com secreções contaminadas, como: gotículas de saliva, espirro, tosse, catarro, contato pessoal próximo, como toque ou aperto de mão, contato com objetos ou superfícies contaminadas, seguido de contato com a boca, nariz ou olhos.               FONTE: https://coronavirus.saude.mg.gov.br"
    );
  }

  function ApertoDeMao() {
    setDicaCuidado(
      "Assim como manter as mãos bem higienizadas, seja lavando com água e sabão ou passando álcool gel, evitar contato mais próximo com as pessoas é uma das principais maneiras para evitar a propagação do vírus. Então, quando alguém está prestes a estender a mão para você, pense bem em como se livrar dessa possível cilada.                 FONTE: https://tribunapr.uol.com.br"
    );
  }

  function Aglomeracao() {
    setDicaCuidado(
      "O distanciamento social abrange diversos tipos de medidas para reduzir a circulação de pessoas em espaços coletivos públicos (ruas e praças) ou privados (shoppings, shows etc.). Dentre as medidas de distanciamento social, podemos citar a necessidade de evitar aglomerações e, assim, podem ser determinados: a paralisação de atividades não essenciais, como fechamento do comércio, com a exceção de serviços essenciais, como supermercados e farmácias; o cancelamento ou adiamento de eventos, como festivais; a paralisação das atividades escolares presenciais; e a adoção do sistema de trabalho remoto. Assim, evita-se a aglomeração, situação muito propícia para a transmissão do vírus.                   FONTE: https://coronavirus.saude.mg.gov.br/blog/108-distanciamento-social"
    );
  }

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      {/* Topo da página, azul */}
      <View style={style.Topo}>
        {/* Botão de voltar */}
        <TouchableOpacity>
          <Image
            style={style.BackButton}
            source={require("../../assets/ButtonBack.png")}
          />
        </TouchableOpacity>

        {/* Texto: Cuidados Covid-19 */}
        <View style={style.FundoCuidados}>
          <Text style={style.TextoCuidado}>Cuidados</Text>
        </View>
        <Text style={style.TextoSub}>Covid-19</Text>
      </View>

      <View>
        {/* Imagem Idosos */}
        <Image
          style={style.ImagemTopo}
          source={require("../../assets/PessoaIdosaECovid.png")}
        />
      </View>

      {/* TEXTO INFORMATIVO */}

      <View style={{ position: "relative", bottom: 220, alignItems: "center" }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Text style={style.TextoInformativo}>{dicaCuidado}</Text>
        </View>

        {/* BOTOES DE DICAS */}
        <View style={style.Dicas}>
          <TouchableOpacity style={style.BotaoDica} onPress={DicaMascara}>
            {/* Dica 1 - mascara */}
            <Image
              style={style.ImgDica}
              source={require("../../assets/mask.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity style={style.BotaoDica} onPress={DicaMaoNoRosto}>
            {/* Dica 2 - Nao toque no rosto */}
            <Image
              style={style.ImgDica}
              source={require("../../assets/DontTouchYourFace.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity style={style.BotaoDica} onPress={AlcoolEmGel}>
            {/* Dica 3 - Use alcool em gel */}
            <Image
              style={style.ImgDica}
              source={require("../../assets/UseAlcool.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={style.Dicas}>
          <TouchableOpacity style={style.BotaoDica} onPress={Distanciamento}>
            {/* Dica 4 - Distanciamento */}
            <Image
              style={style.ImgDica}
              source={require("../../assets/SocialDistancing.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity style={style.BotaoDica} onPress={ApertoDeMao}>
            {/* Dica 5 - Evite apertos de mao */}
            <Image
              style={style.ImgDica}
              source={require("../../assets/NoHandShake.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity style={style.BotaoDica} onPress={Aglomeracao}>
            {/* Dica 6 - Evite aglomerações */}
            <Image
              style={style.ImgDica}
              source={require("../../assets/Crowding.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  Cuidado: {
    backgroundColor: "red",
  },
  Topo: {
    backgroundColor: "#0078B7",
    width: "100%",
    height: 200,
    justifyContent: "center",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  BackButton: {
    width: 50,
    height: 50,
    position: "relative",
    top: 18,
    left: 5,
  },
  TextoCuidado: {
    fontSize: 35,
    fontFamily: "serif",
    color: "white",
  },
  FundoCuidados: {
    backgroundColor: "#009AED",
    borderRadius: 25,
    marginLeft: 10,
    width: 180,
    alignItems: "center",
    position: "relative",
    top: 20,
  },
  TextoSub: {
    fontSize: 15,
    fontFamily: "serif",
    color: "white",
    marginLeft: 30,
    position: "relative",
    top: 20,
  },
  ImagemTopo: {
    width: 250,
    height: 250,
    resizeMode: "stretch",
    position: "relative",
    left: "25%",
    bottom: 147,
  },
  BotaoDica: {
    backgroundColor: "#009AED",
    width: 90,
    height: 90,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginTop: 10,
  },
  Dicas: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  TextoInformativo: {
    textAlign: "justify",
    flexWrap: "wrap",
    width: "80%",
    marginBottom: 20,
    color: "#444",
    fontFamily: "serif",
    width: 290,
  },
  ImgDica: {
    width: 70,
    height: 70,
  },
});
