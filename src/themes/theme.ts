import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3399ff",
      light: "#4dabff",
      dark: "#2979ff",
    },
    secondary: {
      main: "#00e676",
      light: "#33eb91",
      dark: "#00c853",
    },
    background: {
      default: "transparent",
      paper: "#0d2137",
    },
  },
  typography: {
    fontFamily: '"Roboto Mono", monospace',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "html, body, #root": {
          minHeight: "100vh",
          width: "100%",
          // Sem overflow: hidden para permitir rolagem
        },
        "body, .css-37z01r, .css-37z01c": {
          backgroundColor: "#061018 !important",
          backgroundAttachment: "fixed",
          position: "relative",
          // Sem overflow: hidden para permitir rolagem

          // Base gradiente para profundidade
          background: `radial-gradient(ellipse at center, rgba(13, 33, 55, 0.7) 0%, #061018 80%)`,

          // Cérebro em linhas finas via SVG - Versão mais realista
          "&::before": {
            content: '""',
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 800' width='1000' height='800'%3E%3Cstyle%3E.brain-line%7Bfill:none;stroke:rgba(51,153,255,0.08);stroke-width:1.5;%7D.detail-line%7Bfill:none;stroke:rgba(51,153,255,0.05);stroke-width:1;%7D.neuron%7Bfill:rgba(51,153,255,0.1);%7D.synapse%7Bfill:rgba(0,230,118,0.1);%7D.connection%7Bfill:none;stroke:rgba(0,230,118,0.05);stroke-width:1;%7D.stem%7Bfill:none;stroke:rgba(51,153,255,0.07);stroke-width:2;%7D%3C/style%3E%3C!-- Contorno principal do cérebro --%3E%3Cpath class='brain-line' d='M500,120 C350,120 230,170 190,250 C160,310 160,370 180,420 C150,450 130,490 130,540 C130,590 160,640 210,670 C170,720 160,760 170,800 C190,850 250,890 350,910 C450,930 550,930 650,910 C750,890 810,850 830,800 C840,760 830,720 790,670 C840,640 870,590 870,540 C870,490 850,450 820,420 C840,370 840,310 810,250 C770,170 650,120 500,120 Z' /%3E%3C!-- Tronco cerebral e cerebelo --%3E%3Cpath class='stem' d='M500,910 L500,950' /%3E%3Cpath class='stem' d='M500,950 C450,970 430,990 450,1010 C470,1030 530,1030 550,1010 C570,990 550,970 500,950' /%3E%3C!-- Medula --%3E%3Cpath class='stem' d='M500,1010 L500,1050' /%3E%3C!-- Fissura longitudinal (divisão entre hemisférios) --%3E%3Cpath class='brain-line' d='M500,120 C500,200 500,300 500,400 C500,500 500,600 495,700 C490,800 495,850 500,910' /%3E%3C!-- Lobo frontal - esquerdo --%3E%3Cpath class='brain-line' d='M260,180 C280,160 320,150 350,160 C370,180 380,210 370,240 C350,270 330,280 300,270 C270,260 250,220 260,180 Z' /%3E%3Cpath class='detail-line' d='M280,190 C290,180 310,175 330,180 C345,190 350,210 340,230 C325,245 305,250 290,240 C275,225 270,200 280,190 Z' /%3E%3C!-- Lobo frontal - direito --%3E%3Cpath class='brain-line' d='M740,180 C720,160 680,150 650,160 C630,180 620,210 630,240 C650,270 670,280 700,270 C730,260 750,220 740,180 Z' /%3E%3Cpath class='detail-line' d='M720,190 C710,180 690,175 670,180 C655,190 650,210 660,230 C675,245 695,250 710,240 C725,225 730,200 720,190 Z' /%3E%3C!-- Lobo parietal - esquerdo --%3E%3Cpath class='brain-line' d='M180,360 C200,330 230,320 260,330 C290,350 300,380 290,410 C270,440 240,450 210,430 C180,410 160,390 180,360 Z' /%3E%3Cpath class='detail-line' d='M200,370 C215,350 235,345 255,350 C275,365 280,385 270,405 C255,425 235,430 215,415 C195,400 185,385 200,370 Z' /%3E%3C!-- Lobo parietal - direito --%3E%3Cpath class='brain-line' d='M820,360 C800,330 770,320 740,330 C710,350 700,380 710,410 C730,440 760,450 790,430 C820,410 840,390 820,360 Z' /%3E%3Cpath class='detail-line' d='M800,370 C785,350 765,345 745,350 C725,365 720,385 730,405 C745,425 765,430 785,415 C805,400 815,385 800,370 Z' /%3E%3C!-- Lobo temporal - esquerdo --%3E%3Cpath class='brain-line' d='M150,520 C180,500 220,510 240,540 C250,570 240,610 210,630 C180,650 150,640 130,620 C110,590 120,540 150,520 Z' /%3E%3Cpath class='detail-line' d='M165,530 C185,520 210,525 225,545 C235,565 225,595 205,610 C185,625 160,615 145,595 C130,575 145,540 165,530 Z' /%3E%3C!-- Lobo temporal - direito --%3E%3Cpath class='brain-line' d='M850,520 C820,500 780,510 760,540 C750,570 760,610 790,630 C820,650 850,640 870,620 C890,590 880,540 850,520 Z' /%3E%3Cpath class='detail-line' d='M835,530 C815,520 790,525 775,545 C765,565 775,595 795,610 C815,625 840,615 855,595 C870,575 855,540 835,530 Z' /%3E%3C!-- Lobo occipital - esquerdo --%3E%3Cpath class='brain-line' d='M200,730 C230,710 270,720 290,750 C300,780 290,820 260,840 C230,860 190,850 170,820 C160,790 170,750 200,730 Z' /%3E%3Cpath class='detail-line' d='M215,740 C235,730 265,735 280,755 C290,775 280,805 260,820 C240,835 210,825 195,805 C180,785 195,750 215,740 Z' /%3E%3C!-- Lobo occipital - direito --%3E%3Cpath class='brain-line' d='M800,730 C770,710 730,720 710,750 C700,780 710,820 740,840 C770,860 810,850 830,820 C840,790 830,750 800,730 Z' /%3E%3Cpath class='detail-line' d='M785,740 C765,730 735,735 720,755 C710,775 720,805 740,820 C760,835 790,825 805,805 C820,785 805,750 785,740 Z' /%3E%3C!-- Giros e sulcos - mais detalhes anatômicos esquerdo --%3E%3Cpath class='detail-line' d='M350,160 C310,200 280,260 260,330 C250,400 260,450 290,500 C270,550 230,580 210,630 C200,690 220,750 260,780' /%3E%3Cpath class='detail-line' d='M290,270 C250,320 230,370 240,430 C260,480 250,540 210,580' /%3E%3Cpath class='detail-line' d='M290,500 C320,550 320,600 290,650 C270,700 250,740 260,780' /%3E%3C!-- Giros e sulcos - mais detalhes anatômicos direito --%3E%3Cpath class='detail-line' d='M650,160 C690,200 720,260 740,330 C750,400 740,450 710,500 C730,550 770,580 790,630 C800,690 780,750 740,780' /%3E%3Cpath class='detail-line' d='M710,270 C750,320 770,370 760,430 C740,480 750,540 790,580' /%3E%3Cpath class='detail-line' d='M710,500 C680,550 680,600 710,650 C730,700 750,740 740,780' /%3E%3C!-- Neurônios (representando várias áreas funcionais) --%3E%3Ccircle class='neuron' cx='320' cy='220' r='4'/%3E%3Ccircle class='neuron' cx='680' cy='220' r='4'/%3E%3Ccircle class='neuron' cx='240' cy='370' r='4'/%3E%3Ccircle class='neuron' cx='760' cy='370' r='4'/%3E%3Ccircle class='neuron' cx='190' cy='570' r='4'/%3E%3Ccircle class='neuron' cx='810' cy='570' r='4'/%3E%3Ccircle class='neuron' cx='250' cy='770' r='4'/%3E%3Ccircle class='neuron' cx='750' cy='770' r='4'/%3E%3Ccircle class='neuron' cx='280' cy='310' r='4'/%3E%3Ccircle class='neuron' cx='720' cy='310' r='4'/%3E%3Ccircle class='neuron' cx='220' cy='470' r='4'/%3E%3Ccircle class='neuron' cx='780' cy='470' r='4'/%3E%3Ccircle class='neuron' cx='230' cy='670' r='4'/%3E%3Ccircle class='neuron' cx='770' cy='670' r='4'/%3E%3Ccircle class='neuron' cx='350' cy='500' r='4'/%3E%3Ccircle class='neuron' cx='650' cy='500' r='4'/%3E%3Ccircle class='neuron' cx='500' cy='220' r='4'/%3E%3Ccircle class='neuron' cx='500' cy='350' r='4'/%3E%3Ccircle class='neuron' cx='500' cy='480' r='4'/%3E%3Ccircle class='neuron' cx='500' cy='610' r='4'/%3E%3Ccircle class='neuron' cx='500' cy='740' r='4'/%3E%3Ccircle class='neuron' cx='500' cy='870' r='4'/%3E%3C!-- Sinapses --%3E%3Ccircle class='synapse' cx='290' cy='190' r='2.5'/%3E%3Ccircle class='synapse' cx='710' cy='190' r='2.5'/%3E%3Ccircle class='synapse' cx='210' cy='340' r='2.5'/%3E%3Ccircle class='synapse' cx='790' cy='340' r='2.5'/%3E%3Ccircle class='synapse' cx='165' cy='530' r='2.5'/%3E%3Ccircle class='synapse' cx='835' cy='530' r='2.5'/%3E%3Ccircle class='synapse' cx='215' cy='740' r='2.5'/%3E%3Ccircle class='synapse' cx='785' cy='740' r='2.5'/%3E%3Ccircle class='synapse' cx='340' cy='230' r='2.5'/%3E%3Ccircle class='synapse' cx='660' cy='230' r='2.5'/%3E%3Ccircle class='synapse' cx='260' cy='380' r='2.5'/%3E%3Ccircle class='synapse' cx='740' cy='380' r='2.5'/%3E%3Ccircle class='synapse' cx='210' cy='590' r='2.5'/%3E%3Ccircle class='synapse' cx='790' cy='590' r='2.5'/%3E%3Ccircle class='synapse' cx='240' cy='790' r='2.5'/%3E%3Ccircle class='synapse' cx='760' cy='790' r='2.5'/%3E%3Ccircle class='synapse' cx='390' cy='500' r='2.5'/%3E%3Ccircle class='synapse' cx='610' cy='500' r='2.5'/%3E%3Ccircle class='synapse' cx='500' cy='180' r='2.5'/%3E%3Ccircle class='synapse' cx='500' cy='310' r='2.5'/%3E%3Ccircle class='synapse' cx='500' cy='440' r='2.5'/%3E%3Ccircle class='synapse' cx='500' cy='570' r='2.5'/%3E%3Ccircle class='synapse' cx='500' cy='700' r='2.5'/%3E%3Ccircle class='synapse' cx='500' cy='830' r='2.5'/%3E%3C!-- Conexões neurais intrahemisféricas --%3E%3Cpath class='connection' d='M320,220 C310,240 290,260 280,310' /%3E%3Cpath class='connection' d='M280,310 C260,330 250,350 240,370' /%3E%3Cpath class='connection' d='M240,370 C230,400 225,430 220,470' /%3E%3Cpath class='connection' d='M220,470 C210,500 200,530 190,570' /%3E%3Cpath class='connection' d='M190,570 C200,600 210,630 230,670' /%3E%3Cpath class='connection' d='M230,670 C240,700 245,730 250,770' /%3E%3Cpath class='connection' d='M680,220 C690,240 710,260 720,310' /%3E%3Cpath class='connection' d='M720,310 C740,330 750,350 760,370' /%3E%3Cpath class='connection' d='M760,370 C770,400 775,430 780,470' /%3E%3Cpath class='connection' d='M780,470 C790,500 800,530 810,570' /%3E%3Cpath class='connection' d='M810,570 C800,600 790,630 770,670' /%3E%3Cpath class='connection' d='M770,670 C760,700 755,730 750,770' /%3E%3C!-- Conexões neurais interhemisféricas (corpo caloso) --%3E%3Cpath class='connection' d='M320,220 C380,210 420,210 500,220 C580,210 620,210 680,220' /%3E%3Cpath class='connection' d='M280,310 C350,295 400,290 500,350 C600,290 650,295 720,310' /%3E%3Cpath class='connection' d='M240,370 C300,380 400,400 500,480 C600,400 700,380 760,370' /%3E%3Cpath class='connection' d='M220,470 C300,500 400,550 500,610 C600,550 700,500 780,470' /%3E%3Cpath class='connection' d='M230,670 C300,700 400,710 500,740 C600,710 700,700 770,670' /%3E%3Cpath class='connection' d='M250,770 C350,800 450,830 500,870 C550,830 650,800 750,770' /%3E%3C!-- Pontos de impulsos neurais menores --%3E%3Ccircle class='synapse' cx='310' cy='240' r='1.2'/%3E%3Ccircle class='synapse' cx='260' cy='330' r='1.2'/%3E%3Ccircle class='synapse' cx='230' cy='400' r='1.2'/%3E%3Ccircle class='synapse' cx='210' cy='500' r='1.2'/%3E%3Ccircle class='synapse' cx='200' cy='600' r='1.2'/%3E%3Ccircle class='synapse' cx='240' cy='700' r='1.2'/%3E%3Ccircle class='synapse' cx='690' cy='240' r='1.2'/%3E%3Ccircle class='synapse' cx='740' cy='330' r='1.2'/%3E%3Ccircle class='synapse' cx='770' cy='400' r='1.2'/%3E%3Ccircle class='synapse' cx='790' cy='500' r='1.2'/%3E%3Ccircle class='synapse' cx='800' cy='600' r='1.2'/%3E%3Ccircle class='synapse' cx='760' cy='700' r='1.2'/%3E%3Ccircle class='synapse' cx='380' cy='210' r='1.2'/%3E%3Ccircle class='synapse' cx='620' cy='210' r='1.2'/%3E%3Ccircle class='synapse' cx='350' cy='290' r='1.2'/%3E%3Ccircle class='synapse' cx='650' cy='290' r='1.2'/%3E%3Ccircle class='synapse' cx='400' cy='400' r='1.2'/%3E%3Ccircle class='synapse' cx='600' cy='400' r='1.2'/%3E%3Ccircle class='synapse' cx='400' cy='550' r='1.2'/%3E%3Ccircle class='synapse' cx='600' cy='550' r='1.2'/%3E%3Ccircle class='synapse' cx='400' cy='710' r='1.2'/%3E%3Ccircle class='synapse' cx='600' cy='710' r='1.2'/%3E%3Ccircle class='synapse' cx='450' cy='830' r='1.2'/%3E%3Ccircle class='synapse' cx='550' cy='830' r='1.2'/%3E%3C/svg%3E")`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            opacity: 0.6,
            mixBlendMode: "screen",
            pointerEvents: "none",
          },

          // Pontos para representar atividade neural
          "&::after": {
            content: '""',
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -2,
            backgroundImage: `
              radial-gradient(circle at center, rgba(51, 153, 255, 0.25) 0, rgba(51, 153, 255, 0) 2px),
              radial-gradient(circle at center, rgba(0, 230, 118, 0.2) 0, rgba(0, 230, 118, 0) 2px)
            `,
            backgroundSize: "40px 40px, 50px 50px",
            backgroundPosition: "0 0, 20px 20px",
            animation: "neuralPulse 8s ease-in-out infinite alternate",
            pointerEvents: "none",
            opacity: 0.5,
          },
        },

        // Animação para simular impulsos neurais
        "@keyframes neuralPulse": {
          "0%": {
            backgroundSize: "40px 40px, 50px 50px",
            opacity: 0.3,
          },
          "50%": {
            backgroundSize: "45px 45px, 55px 55px",
            opacity: 0.6,
          },
          "100%": {
            backgroundSize: "40px 40px, 50px 50px",
            opacity: 0.3,
          },
        },

        // Elementos de impulso neural animados
        ".neural-impulse": {
          position: "fixed",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          backgroundColor: "rgba(51, 153, 255, 0.5)",
          filter: "blur(2px)",
          zIndex: -1,
          opacity: 0,
          animation: "impulseMove 10s linear infinite",
          pointerEvents: "none",
        },

        // Animação para mover impulsos ao longo das conexões
        "@keyframes impulseMove": {
          "0%": {
            opacity: 0,
            transform: "translateX(0) translateY(0) scale(0.1)",
          },
          "10%": {
            opacity: 0.8,
            transform: "translateX(20px) translateY(-15px) scale(1)",
          },
          "20%": {
            opacity: 0.2,
            transform: "translateX(40px) translateY(-20px) scale(0.3)",
          },
          "30%": {
            opacity: 0.8,
            transform: "translateX(60px) translateY(-15px) scale(1)",
          },
          "40%": {
            opacity: 0.2,
            transform: "translateX(80px) translateY(-10px) scale(0.3)",
          },
          "50%": {
            opacity: 0.8,
            transform: "translateX(100px) translateY(-5px) scale(1)",
          },
          "60%": {
            opacity: 0.2,
            transform: "translateX(80px) translateY(0px) scale(0.3)",
          },
          "70%": {
            opacity: 0.8,
            transform: "translateX(60px) translateY(5px) scale(1)",
          },
          "80%": {
            opacity: 0.2,
            transform: "translateX(40px) translateY(10px) scale(0.3)",
          },
          "90%": {
            opacity: 0.8,
            transform: "translateX(20px) translateY(5px) scale(1)",
          },
          "100%": {
            opacity: 0,
            transform: "translateX(0) translateY(0) scale(0.1)",
          },
        },

        // Código binário flutuante para representar dados
        ".binary-data": {
          position: "fixed",
          color: "rgba(0, 230, 118, 0.05)",
          fontFamily: "monospace",
          fontSize: "12px",
          whiteSpace: "pre",
          lineHeight: 1.2,
          zIndex: -3,
          pointerEvents: "none",
          userSelect: "none",
        },
      },
    },

    // Manter os componentes originais
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          background: "rgba(13, 33, 55, 0.75)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(51, 153, 255, 0.08)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        },
      },
    },
  },
});
