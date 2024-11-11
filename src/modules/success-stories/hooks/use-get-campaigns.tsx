import { Brand, Campaign } from "@/modules/success-stories/models/campaign";
import Image from "next/image";
import { FormattedMessage, useIntl } from "react-intl";

const vixBrand: Brand = {
  name: "Vix",
  logo: (
    <Image
      src={require("public/assets/images/brands/vix-logo.png")}
      alt="Logo de Vix"
    />
  ),
};

const ipsyBrand: Brand = {
  name: "Ipsy",
  logo: (
    <Image
      src={require("public/assets/images/brands/ipsy-logo.png")}
      alt="Logo de Ipsy"
    />
  ),
};

const telcelBrand: Brand = {
  name: "Telcel",
  logo: (
    <Image
      src={require("public/assets/images/brands/telcel-logo.png")}
      alt="Logo de Telcel"
    />
  ),
};

const boldBrand: Brand = {
  name: "Bold",
  logo: (
    <Image
      src={require("public/assets/images/brands/bold-logo.png")}
      alt="Logo de Bold"
    />
  ),
};
const felixBrand: Brand = {
  name: "Felix",
  logo: (
    <Image
      src={require("public/assets/images/brands/felix-logo.png")}
      alt="Logo de Felix"
    />
  ),
};

const br = <br />;

export function useGetCampaigns(): Campaign[] {
  const { formatMessage } = useIntl();

  return [
    {
      name: "La Casa de los Famosos Mexico 2023",
      slug: "la-casa-de-los-famosos-mexico-2023",
      summary: formatMessage({
        defaultMessage:
          "Cómo FAMOSOS ADS catapultó a VIX a la vanguardia de la escena Streaming en México",
        id: "QK084X",
      }),
      socialNetworks: ["instagram", "tiktok"],
      bannersUrls: {
        wide: "/assets/images/success-stories/la-casa-de-los-famosos-mexico-2023/banner-wide.png",
        square:
          "/assets/images/success-stories/la-casa-de-los-famosos-mexico-2023/banner-square.png",
      },
      brand: vixBrand,
      challenge: (
        <FormattedMessage
          defaultMessage='El objetivo principal fue elevar el conocimiento de la marca VIX en las plataformas de redes sociales, posicionándola como el destino de visita obligada para ver "La Casa de los Famosos México" 24 horas al día, 7 días a la semana en tiempo real. Este enfoque estratégico tuvo como objetivo asegurar que VIX se convirtiera en sinónimo de los últimos temas de actualidad en México, captando la atención de la audiencia y manteniéndola comprometida con la cobertura continua en vivo de la plataforma.'
          id="SAwUEd"
        />
      ),
      solution: (
        <FormattedMessage
          defaultMessage='Para lanzar "La Casa de los Famosos México" en VIX, la plataforma de streaming de habla hispana más grande, FAMOSOS ADS orquestó una campaña de influencers diseñada específicamente para la audiencia mexicana. El objetivo de la campaña era lograr un alcance de 5 millones a través de contenido atractivo de personas influyentes mexicanas populares en Instagram y TikTok. Nuestro enfoque combinó publicaciones con temas de programas con tácticas de participación orgánica. Seleccionamos los mejores talentos de las redes sociales con seguidores leales para crear contenido que resonara profundamente con las conversaciones en curso y los temas de actualidad. El contenido, caracterizado por llamados a la acción claros pero orgánicos, lo hizo indistinguible como publicidad, fomentando una conexión natural entre el contenido de los influencers y las ofertas de VIX. Esta campaña se distinguió por su alcance orgánico, sin amplificación paga, y logró una rápida viralidad en su duración de un mes.'
          id="jzMGir"
        />
      ),
      cover: {
        image:
          "/assets/images/success-stories/la-casa-de-los-famosos-mexico-2023/cover-image.png",
      },
      contents: [
        {
          type: "instagram",
          id: "Cvx1SUMptN9",
        },
        {
          type: "instagram",
          id: "CvQSxQ7AzH_",
        },
        {
          type: "tiktok",
          id: "7261039854002212101",
        },
        {
          type: "tiktok",
          id: "7258740115655183622",
        },
      ],
      results: {
        description: (
          <FormattedMessage
            defaultMessage="Nuestra campaña de influencers dirigida para VIX superó todas las expectativas, generando la asombrosa cifra de 18 millones de visitas, un 377 % por encima de nuestro objetivo inicial de 5 millones. Este logro monumental estuvo marcado por éxitos virales notables: la publicación de Kimberly Loaiza obtuvo 1 millón de visitas; El video de Tammy Parra alcanzó 9.5 millones de reproducciones; El contenido de Chinguamiga atrajo 5,6 millones de visitas; y la contribución de GUS Y TERE sumó otros 2,3 millones de visitas. En conjunto, estos influencers no solo amplificaron la visibilidad de VIX sino que también demostraron el profundo impacto de la campaña en la participación de la audiencia en todo México. Con una tasa de participación promedio que asciende al 9.8% y picos que alcanzan ENG individuales de hasta el 12.28%, esta campaña posicionó exitosamente a VIX como la plataforma líder para contenido de realidad en vivo en México, mostrando la experiencia de FAMOSOS ADS en aprovechar el alcance orgánico y el contenido viral para dominar el panorama digital."
            id="xS8Kac"
          />
        ),
        views: 18090825,
        likes: 1614412,
        comments: 4636,
        shares: 10720,
        saves: 99586,
        averageEngagementRate: 0.0956,
      },
      testimonials: (
        <Image
          src={require("public/assets/images/success-stories/la-casa-de-los-famosos-mexico-2023/testimonials.png")}
          alt={formatMessage({
            defaultMessage: "Testimonios",
            id: "l+ib5R",
          })}
        />
      ),
    },
    {
      name: "La Casa de los Famosos Colombia 2024",
      slug: "la-casa-de-los-famosos-colombia-2024",
      summary: formatMessage({
        defaultMessage:
          "Cómo FAMOSOS ADS convirtió a VIX en el centro de atención de Colombia con una innovadora campaña de reality show",
        id: "d6J63/",
      }),
      socialNetworks: ["instagram", "tiktok"],
      bannersUrls: {
        wide: "/assets/images/success-stories/la-casa-de-los-famosos-colombia-2024/banner-wide.png",
        square:
          "/assets/images/success-stories/la-casa-de-los-famosos-colombia-2024/banner-square.png",
      },
      brand: vixBrand,
      challenge: (
        <FormattedMessage
          defaultMessage='El objetivo principal fue amplificar el conocimiento de marca de VIX en las plataformas de redes sociales, posicionándola como el destino esencial para ver "La Casa de los Famosos Colombia" en tiempo real, las 24 horas del día, los 7 días de la semana. Nuestra estrategia se centró en garantizar que VIX fuera reconocido como la plataforma de referencia para los temas más comentados en Colombia, capturando así toda la atención de la audiencia y manteniéndola constantemente comprometida.'
          id="PORH9D"
        />
      ),
      solution: (
        <FormattedMessage
          defaultMessage='Para lanzar "La Casa de los Famosos Colombia" en VIX, la plataforma líder de streaming en español, FAMOSOS ADS lanzó una campaña dirigida a influencers en el mercado colombiano para aumentar las descargas de la aplicación y la interacción de los espectadores. Nuestro objetivo era llegar a 2,5 millones de personas utilizando contenido de los principales influencers colombianos en Instagram y TikTok, utilizando estrategias de interacción orgánica entrelazadas con publicaciones con temas relacionados con el programa. Nuestros influencers elegidos, que cuentan con un gran número de seguidores y una alta lealtad de la audiencia, crearon contenido que resonó con las conversaciones en curso y las tendencias actuales. El contenido fue diseñado con llamadas a la acción claras, pero naturalmente integradas, lo que lo hizo indistinguible de un material promocional. La campaña enfatizó el crecimiento orgánico sin anuncios pagos y se destacó por su rápida viralidad durante un período de un mes.'
          id="unXZfK"
        />
      ),
      cover: {
        image:
          "/assets/images/success-stories/la-casa-de-los-famosos-colombia-2024/cover-image.png",
      },
      contents: [
        {
          type: "tiktok",
          id: "7348606245277945094",
        },
        {
          type: "tiktok",
          id: "7347856832557337861",
        },
        {
          type: "tiktok",
          id: "7348245500828732677",
        },
        {
          type: "tiktok",
          id: "7348151278419201285",
        },
      ],
      results: {
        description: (
          <FormattedMessage
            defaultMessage="Nuestra campaña impulsada por influencers para VIX superó ampliamente los objetivos iniciales, generando una asombrosa cantidad de 20 millones de impresiones, un aumento del 801% sobre nuestra meta de 2,5 millones de vistas. Este éxito explosivo estuvo marcado por importantes hits virales: {br} {br} el video de Deiby alcanzó 6,1 millones de vistas. {br} El video de Katy Cardona logró 11 millones de vistas. {br} En general, la campaña involucró a 5 influencers que en conjunto produjeron 11 publicaciones, lo que resultó en una impresionante tasa de participación de los espectadores del 9,72%. Las publicaciones cubiertas por influencers alcanzaron una audiencia combinada de 42 millones en Instagram y TikTok. Las publicaciones de alto engagement, cinco en total, presentaron tasas de engagement superiores al 10%, siendo la más alta del 13,58%. {br} {br} Esta campaña estratégica no solo solidificó la posición de VIX como una plataforma líder para contenido de realidad en vivo en Colombia, sino que también mostró la capacidad de FAMOSOS ADS para generar un compromiso orgánico significativo y contenido viral, estableciendo firmemente a VIX como líder en el panorama del entretenimiento digital."
            id="x8RpIo"
            values={{ br }}
          />
        ),
        views: 20_027_547,
        likes: 1_884_008,
        comments: 5_358,
        shares: 49_461,
        saves: 8_282,
        averageEngagementRate: 0.0972,
      },
      testimonials: (
        <Image
          src={require("public/assets/images/success-stories/la-casa-de-los-famosos-colombia-2024/testimonials.png")}
          alt={formatMessage({
            defaultMessage: "Testimonios",
            id: "l+ib5R",
          })}
        />
      ),
    },
    {
      name: "One Brand",
      slug: "vix-one-brand",
      summary: formatMessage({
        defaultMessage:
          "Cómo FAMOSOS ADS unificó una identidad de marca en tan solo un mes",
        id: "HVKXKC",
      }),
      socialNetworks: ["instagram", "tiktok"],
      bannersUrls: {
        wide: "/assets/images/success-stories/vix-one-brand/banner-wide.png",
        square:
          "/assets/images/success-stories/vix-one-brand/banner-square.png",
      },
      brand: vixBrand,
      challenge: (
        <FormattedMessage
          defaultMessage="ViX, el servicio de streaming en español más grande del mundo, ofrece una amplia gama de contenido que incluye películas, series, contenido de terceros, deportes, telenovelas y noticias. El desafío era comunicar de manera efectiva el modelo de suscripción de dos niveles de ViX (gratuito y premium) y enfatizar sus ofertas únicas: {br} {br} Contenido en español completamente gratuito con películas y series exclusivas, {br} Partidos de fútbol en vivo sin costo adicional con el plan premium, {br} Los últimos episodios de sus telenovelas favoritas, {br} Visualización sin publicidad, ViX Originals, cobertura deportiva, funciones de actualización y navegación mejorada en el nivel premium."
          id="hrsm/g"
          values={{ br }}
        />
      ),
      solution: (
        <FormattedMessage
          defaultMessage="Para reforzar la presencia de marca de ViX y la participación de los usuarios, iniciamos una campaña de influencers dirigida al mercado mexicano para impulsar las descargas de la aplicación y aumentar la participación en el programa. Nuestra estrategia implicó colaborar con los principales influencers de las redes sociales de México que tienen una gran repercusión en sus audiencias. Estos influencers crearon contenido que no solo era muy atractivo, sino que también se integraba a la perfección con las conversaciones en curso y los temas de tendencia, lo que hacía que las llamadas a la acción se sintieran naturales y no demasiado promocionales. Este contenido se distribuyó orgánicamente en Instagram y TikTok, lo que garantizaba la autenticidad sin amplificaciones pagas. La campaña duró solo un mes, durante el cual el contenido alcanzó una rápida viralidad."
          id="tSnO7o"
        />
      ),
      cover: {
        image: "/assets/images/success-stories/vix-one-brand/cover-image.png",
        video:
          "https://drive.google.com/file/d/1tAnTAq9zzodcksNqqeODYYPPP8Uy7NuI/preview",
      },
      contents: [
        {
          type: "instagram",
          id: "CvFwHc1pb9A",
        },
        {
          type: "tiktok",
          id: "7261052288972623109",
        },
        {
          type: "tiktok",
          id: "7256591590054055174",
        },
        {
          type: "tiktok",
          id: "7255757011801951493",
        },
      ],
      results: {
        description: (
          <FormattedMessage
            defaultMessage="Nuestra campaña VIX ONE BRAND superó significativamente nuestras expectativas iniciales, logrando unas impresionantes 18,090,825 vistas, lo que representa un 361.82% más que nuestro objetivo inicial de 5 millones de vistas. Este tremendo éxito fue impulsado por el contenido atractivo creado por 5 influyentes influencers mexicanos en 9 publicaciones, lo que demuestra el poder del alcance orgánico y los mensajes resonantes. Dos publicaciones, en particular, se volvieron súper virales: la publicación de ROBE GRILL alcanzó 7,100,000 vistas y la publicación de Tammy Parra logró 7,600,000 vistas. Además, el contenido de Mercedes Roa y Doris Jocelyn también tuvo un rendimiento excepcional, cada una superó el millón de impresiones. {br} {br} Las tasas de participación fueron sobresalientes, con una tasa promedio en todo el contenido de 9.56%. Tres videos lograron tasas de participación de dos dígitos, y el más alto alcanzó el 12.26%. Esto indica no solo una alta audiencia, sino también una profunda interacción de los espectadores y la aprobación del contenido presentado. {br} {br} Esta campaña unificó de manera efectiva la identidad de marca de VIX en tan solo un mes, tuvo un gran impacto en la audiencia e impulsó sustancialmente tanto la visibilidad como la participación de los servicios de streaming de VIX en el mercado mexicano. Los resultados no solo reflejan el alcance de la campaña, sino también su capacidad para conectar significativamente con los espectadores, lo que refuerza a VIX como un actor importante en el contenido de streaming en español."
            id="9mKGBm"
            values={{ br }}
          />
        ),
        views: 18_090_825,
        likes: 1_614_412,
        comments: 4_636,
        shares: 10_720,
        saves: 99_586,
        averageEngagementRate: 0.0956,
      },
      testimonials: (
        <Image
          src={require("public/assets/images/success-stories/vix-one-brand/testimonials.png")}
          alt={formatMessage({
            defaultMessage: "Testimonios",
            id: "l+ib5R",
          })}
        />
      ),
    },
    {
      name: "IPSY Mexico",
      slug: "ipsy-mexico",
      summary:
        "How FAMOSOS ADS and IPSY Achieved Over 37 Million Views in Six Months",
      socialNetworks: ["instagram", "tiktok"],
      bannersUrls: {
        wide: "/assets/images/success-stories/ipsy-mexico/banner-wide.png",
        square: "/assets/images/success-stories/ipsy-mexico/banner-square.png",
      },
      brand: ipsyBrand,
      challenge: (
        <FormattedMessage
          defaultMessage="IPSY México, que ofrece un servicio de suscripción de productos de belleza personalizados, buscaba aumentar significativamente el reconocimiento de la marca en las redes sociales. Cada mes, los suscriptores reciben una Glam Bag con cinco productos de belleza de marcas reconocidas, adaptados a sus preferencias. El desafío era hacer que IPSY fuera conocido como el servicio de referencia para descubrir nuevas marcas y productos de belleza, ofreciendo importantes descuentos y brindando una experiencia de belleza única. Nuestro objetivo era difundir este mensaje en las redes sociales, convirtiendo a IPSY en un nombre familiar entre los entusiastas de la belleza y el maquillaje mexicanos."
          id="jEDw/r"
        />
      ),
      solution: (
        <FormattedMessage
          defaultMessage="FAMOSOS ADS colaboró ​​con IPSY para lanzar seis campañas en seis meses, aprovechando una combinación de micro, medianos, macro influencers y celebridades para autenticar la experiencia IPSY a los nuevos usuarios en México. Seleccionamos influencers, desde creadores de estilo de vida hasta maquilladores profesionales, para generar confianza y cercanía con la marca. El contenido fue elaborado para resonar con las conversaciones en curso y los temas de tendencia, con llamadas a la acción claras pero orgánicas que incentivaron las descargas y suscripciones a IPSY MX. Todo el contenido fue orgánico, sin amplificaciones pagadas, lo que aseguró un compromiso genuino y un rápido crecimiento viral en Instagram y TikTok."
          id="hro5d3"
        />
      ),
      cover: {
        image: "/assets/images/success-stories/ipsy-mexico/cover-image.png",
      },
      contents: [
        {
          type: "tiktok",
          id: "7276934847443062021",
        },
        {
          type: "tiktok",
          id: "7294411213101026566",
        },
        {
          type: "tiktok",
          id: "7323686766874086661",
        },
        {
          type: "tiktok",
          id: "7301800026546654469",
        },
      ],
      results: {
        description: (
          <>
            <FormattedMessage
              defaultMessage='Nuestra campaña con IPSY México superó todas las expectativas, superando espectacularmente nuestra meta inicial. A lo largo de seis meses, trabajamos con 31 influencers que produjeron un total de 84 publicaciones. Este lanzamiento estratégico de contenido generó un total sorprendente de más de 33.8 millones de vistas. Los esfuerzos dieron sus frutos particularmente en el contenido viral, con 11 videos que superaron la marca de 1 millón de impresiones. {br} {br} Durante los primeros tres meses, colaboramos con 17 influencers que contribuyeron a más de 16.4 millones de vistas a través de 53 publicaciones, cinco de las cuales superaron el millón de impresiones cada una. La segunda fase de la campaña, durante los siguientes dos meses, involucró a 14 influencers que crearon 31 publicaciones, seis de las cuales individualmente superaron el millón de vistas, acumulando más de 21 millones de vistas. Las contribuciones notables vinieron de influencers como Melissa Navarro y Anahí Ríos, quienes impulsaron significativamente la visibilidad y el engagement de la campaña. {br} {br} El engagement fue excepcionalmente alto en todos los ámbitos, y nuestro contenido logró una tasa de engagement promedio de 4.62%. Las publicaciones atractivas y de alta calidad generaron aumentos significativos en los "me gusta", los comentarios, las publicaciones compartidas y los guardados, y las publicaciones individuales de influencers como Fer Jalil y Vale de la Cuesta generaron millones de vistas, lo que resalta la profunda resonancia de la campaña con el público objetivo. {br} {br} Nuestro objetivo inicial era lograr entre 2,5 y 3 millones de vistas por mes. Sin embargo, superamos significativamente el objetivo, con una tasa promedio de superación del 220,01 %, y en un mes, alcanzamos sorprendentemente el 472 % de nuestro objetivo. Las publicaciones de la campaña no solo cautivaron a las audiencias, sino que también mantuvieron altos niveles de participación, con 9 videos que mostraron tasas de participación de dos dígitos, la más alta con un pico de 21,44 %. {br} {br} Esta asociación entre FAMOSOS ADS e IPSY transformó efectivamente a IPSY en un competidor importante en el mercado de suscripciones de belleza de México, lo que demuestra el poder incomparable de la participación orgánica de los influencers para amplificar el conocimiento de la marca y el crecimiento de los suscriptores.'
              id="MA5msb"
              values={{ br }}
            />
          </>
        ),
        views: 37_394_243,
        likes: 2_616_766,
        comments: 14_830,
        shares: 95_813,
        saves: 22_854,
        averageEngagementRate: 0.043,
      },
      testimonials: (
        <Image
          src={require("public/assets/images/success-stories/ipsy-mexico/testimonials.png")}
          alt={formatMessage({
            defaultMessage: "Testimonios",
            id: "l+ib5R",
          })}
        />
      ),
    },
    {
      name: "TELCEL Torneo Gaming Puebla",
      slug: "telcel-torneo-gaming-puebla",
      summary: formatMessage({
        defaultMessage:
          "Cómo FAMOSOS ADS elevó un evento de juegos local a nuevas alturas con talento selecto",
        id: "qcJvUy",
      }),
      socialNetworks: ["instagram", "tiktok"],
      bannersUrls: {
        wide: "/assets/images/success-stories/telcel-torneo-gaming-puebla/banner-wide.png",
        square:
          "/assets/images/success-stories/telcel-torneo-gaming-puebla/banner-square.png",
      },
      brand: telcelBrand,
      challenge: (
        <FormattedMessage
          defaultMessage="El “TORNEO TELCEL GAMING” tuvo como objetivo atraer a la comunidad gamer local de Puebla a un evento de fin de semana, que se llevó a cabo del 26 al 28 de abril, con una meta de impresiones de 516,129 visualizaciones. El evento buscó unir a diversas comunidades gamer en una gran competencia amateur, impulsando aún más los eSports en México."
          id="HSHAYV"
        />
      ),
      solution: (
        <FormattedMessage
          defaultMessage="FAMOSOS ADS aprovechó a un influyente talento local en el mundo del gaming para promocionar TELCEL y el TORNEO DE GAMING. Este influyente clave estuvo presente en el evento, alentando activamente a su audiencia a participar a través de una publicación de anuncio inicial seguida de tres publicaciones posteriores. El contenido de la campaña, compartido en Instagram y TikTok, incluyó claros llamados a la acción que alentaban las descargas y la asistencia al evento. El contenido también se amplificó a través de anuncios Meta y TikTok para garantizar un mayor alcance y participación."
          id="d23BPC"
        />
      ),
      cover: {
        image:
          "/assets/images/success-stories/telcel-torneo-gaming-puebla/cover-image.png",
      },
      contents: [],
      results: {
        description: (
          <FormattedMessage
            defaultMessage="La campaña superó con éxito sus objetivos de audiencia, logrando más de 593.000 visualizaciones, lo que representa un cumplimiento del 115% del objetivo. La publicación inicial en Instagram por sí sola obtuvo más de 500.000 visualizaciones, una combinación de alcance orgánico y publicidad dirigida. Las historias de Instagram lograron una tasa de participación promedio del 3%, con contenido interactivo que tuvo una buena repercusión en la audiencia durante las fechas del evento. La tercera historia publicada se destacó, alcanzando una tasa de participación de más del 5%. {br} {br} Las publicaciones comunicaron de manera efectiva toda la información relevante del evento: criterios de participación, diversos premios, actividades, ganadores y los beneficios de utilizar TELCEL. Los comentarios de la audiencia destacaron un gran interés en aprender más sobre el evento, apreciar dichas recomendaciones y preguntar sobre futuros eventos de juegos en la ciudad. {br} {br} La presencia del influencer fue notablemente impactante, mejorando la experiencia del evento para los asistentes. Las métricas de costos también resaltaron la eficiencia de la campaña, con un costo por vista (CPV) de $0.31 MXN ($0.017 USD) y un costo por cada mil impresiones (CPM) de $310 MXN ($17 USD). {br} {br} Este enfoque estratégico no solo cumplió con los objetivos establecidos, sino que también consolidó la reputación de TELCEL como promotor de los eSports locales, demostrando la capacidad de FAMOSOS ADS para aprovechar eficazmente el poder de los influencers y la publicidad dirigida para aumentar la participación en los eventos y la visibilidad de la marca."
            id="WMjSn8"
            values={{ br }}
          />
        ),
        views: 593_815,
        likes: 1_121,
        comments: 28,
        shares: 0,
        saves: 20,
        averageEngagementRate: 0.002,
      },
      testimonials: (
        <Image
          src={require("public/assets/images/success-stories/telcel-torneo-gaming-puebla/testimonials.png")}
          alt={formatMessage({
            defaultMessage: "Testimonios",
            id: "l+ib5R",
          })}
        />
      ),
    },
    {
      name: "Bold Plus",
      slug: "bold-plus",
      summary: formatMessage({
        defaultMessage:
          "Cómo FAMOSOS ADS logró un éxito de entradas agotadas para BOLD PLUS con una sola publicación",
        id: "AqB4JJ",
      }),
      socialNetworks: ["instagram", "tiktok"],
      bannersUrls: {
        wide: "/assets/images/success-stories/bold-plus/banner-wide.png",
        square: "/assets/images/success-stories/bold-plus/banner-square.png",
      },
      brand: boldBrand,
      challenge: (
        <FormattedMessage
          defaultMessage="El reto era elevar el nuevo datáfono BOLD PLUS, enfatizando sus atributos rápidos, versátiles y únicos. Dirigido a los emprendedores en Colombia, que se consideran héroes de sus emprendimientos, BOLD necesitaba resonar con su rutina diaria y sus aspiraciones comerciales. El objetivo de comunicación era ponernos metafóricamente en el lugar de los emprendedores, mostrando cómo BOLD PLUS puede mejorar la eficiencia de sus negocios."
          id="X4Zr7z"
        />
      ),
      solution: (
        <FormattedMessage
          defaultMessage="Seleccionamos a tres talentos influyentes de diferentes sectores (restaurantes, moda y negocios de productos) para demostrar los beneficios reales de usar BOLD PLUS. Cada influencer se sumergió en un entorno empresarial: {br} {br} Bogotá Eats visitó un puesto de tacos en Bogotá para mostrar cómo BOLD PLUS facilita transacciones rápidas en entornos de ritmo acelerado. {br} Alejandra Tamayo apoyó un emprendimiento de moda en Medellín, centrándose en cómo el datáfono mejora el servicio al cliente en un salón elegante. {br} Isabella Atehortúa interactuó con una florista, destacando la facilidad de las transacciones de pago durante las horas pico de trabajo. {br} Los influencers compartieron sus experiencias a través de publicaciones en Instagram y Tiktok, brindando una mirada genuina de cómo BOLD PLUS se integra perfectamente en varios entornos comerciales. Todos los esfuerzos promocionales fueron orgánicos, sin amplificación paga."
          id="c6/pxg"
          values={{ br }}
        />
      ),
      cover: {
        image: "/assets/images/success-stories/bold-plus/cover-image.png",
      },
      contents: [
        { type: "instagram", id: "CwyenhYxvj7" },
        { type: "instagram", id: "CxF1lN4r-X5" },
        { type: "tiktok", id: "7229105012473941253" },
      ],
      results: {
        description: (
          <FormattedMessage
            defaultMessage="El impacto de nuestra campaña fue inmediato y profundo. Con la primera publicación de Bogotá Eats, la respuesta de la audiencia fue abrumadora, lo que llevó a una venta total de todo el stock de BOLD PLUS en tan solo la primera semana. Esta increíble demanda logró 612.209 visualizaciones, lo que representa el 122,44 % de nuestro objetivo de visualización inicial. La participación fue excepcionalmente alta en todas las métricas, y culminó en una tasa de participación general del 7,03 %. Cada publicación de la campaña, en particular aquellas con narrativas personales y demostraciones de uso en la vida real, conectaron profundamente con nuestra audiencia, y algunas publicaciones lograron tasas de participación de hasta el 10 %. {br} {br} Este éxito fue un testimonio del mensaje resonante de que BOLD PLUS es una herramienta esencial para los emprendedores, que se alinea perfectamente con sus necesidades y expectativas. La efectividad de la campaña fue tal que llevó a una pausa inesperada de cinco meses para reabastecer, con una continuación planificada para el resto del año para satisfacer la alta demanda continua. Esta campaña no solo cumplió sino que superó ampliamente nuestros objetivos, resaltando la profunda preparación del mercado para un producto como BOLD PLUS y consolidando su estatus como un activo indispensable para los dueños de negocios en toda Colombia."
            id="j4V8Zp"
            values={{ br }}
          />
        ),
        views: 612_209,
        likes: 35_567,
        comments: 324,
        shares: 3_049,
        saves: 4_114,
        averageEngagementRate: 0.0703,
      },
      testimonials: (
        <Image
          src={require("public/assets/images/success-stories/bold-plus/testimonials.png")}
          alt={formatMessage({
            defaultMessage: "Testimonios",
            id: "l+ib5R",
          })}
        />
      ),
    },
    {
      name: "Félix Pago always on",
      slug: "felix-pago-always-on",
      summary: formatMessage({
        defaultMessage:
          "Cómo Félix logró reducir su costo de adquisición de clientes en un 10 % trabajando con Famosos Ads",
        id: "t/9Q3o",
      }),
      socialNetworks: ["instagram", "tiktok"],
      bannersUrls: {
        wide: "/assets/images/success-stories/felix-pago-always-on/banner-wide.png",
        square:
          "/assets/images/success-stories/felix-pago-always-on/banner-square.png",
      },
      brand: felixBrand,
      challenge: (
        <FormattedMessage
          defaultMessage="El objetivo principal de la campaña fue generar tráfico al sitio web de Félix Pago a través de influencers que representen al público objetivo de la plataforma, que son los hispanos en Estados Unidos, todo con el objetivo de generar conciencia y atraer a más usuarios a utilizar la plataforma. En términos de costos, esto representó una reducción en el costo de adquisición de clientes."
          id="sVu4/y"
        />
      ),
      solution: (
        <FormattedMessage
          defaultMessage="Para lograr el éxito de esta campaña, trabajamos durante varios meses con diferentes perfiles que llegaran a nuestro público objetivo y analizamos cuáles de esos perfiles generaban más confianza e influencia en sus audiencias. Comunicamos la marca a través de perfiles de plomeros, electricistas, influencers de estilo de vida, policías, panaderos y muchos otros, hasta que encontramos a un influencer mexicano residente en Estados Unidos que trabajaba como policía en el estado de Nevada. Su audiencia confió plenamente en él y la recomendación de un servicio que los conectaba de manera rápida y segura con sus familias en México fue un éxito total."
          id="cQLCTH"
        />
      ),
      cover: {
        image:
          "/assets/images/success-stories/felix-pago-always-on/cover-image.png",
        video:
          "https://drive.google.com/file/d/1_loG9UjWpnnCJ9fxtW-lW9_YYj813O_g/preview",
      },
      contents: [
        { type: "tiktok", id: "7296551362970553642" },
        { type: "tiktok", id: "7304744099813297454" },
        { type: "tiktok", id: "7315461828530769194" },
      ],
      results: {
        description: (
          <FormattedMessage
            defaultMessage="Durante 1 mes, publicamos 3 contenidos en la cuenta de TikTok del policía influencer y con la ayuda de una pequeña inversión en publicidad, logramos alcanzar 9,6 millones de visualizaciones. La interacción en los comentarios fue un factor clave para resolver dudas de la comunidad y enriquecer la marca para futuras estrategias. Gracias a estos contenidos, también recibimos testimonios de personas que ya utilizaban el servicio de Felix Pago, generando más confianza en las nuevas audiencias y llevándolas a probar el servicio."
            id="4CATs7"
          />
        ),
        views: 9_690_100,
        likes: 214_300,
        comments: 3_954,
        shares: 6_789,
        saves: 3_121,
        averageEngagementRate: 0.0235,
      },
      testimonials: (
        <Image
          src={require("public/assets/images/success-stories/felix-pago-always-on/testimonials.png")}
          alt={formatMessage({
            defaultMessage: "Testimonios",
            id: "l+ib5R",
          })}
        />
      ),
    },
  ];
}
