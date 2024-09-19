import { ISVG } from "../interfaces/interfaces";

const h= 20;
const w= 20;


export const svgIcons: { [key in ISVG["type"]]: JSX.Element } = {
  js: (
    <svg
      width={w}
      height={h}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="28" height="28" fill="#FFCA28" />
      <path
        d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z"
        fill="#3E3E3E"
      />
      <path
        d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z"
        fill="#3E3E3E"
      />
    </svg>
  ),
  ts: (
    <svg
      width={w}
      height={h}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="28" height="28" rx="1.312" fill="#3178c6" />
      <path
        d="M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759ZM9.09,23.68H13.088v-8.492H5.95V16.72h3.035Z"
        fill="#fff"
      />
    </svg>
  ),
  tsx: (
    <svg
      width={w}
      height={h}
      viewBox="0 -14 256 256"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <g>
        <path
          d="M210.483381,73.8236374 C207.827698,72.9095503 205.075867,72.0446761 202.24247,71.2267368 C202.708172,69.3261098 203.135596,67.4500894 203.515631,65.6059664 C209.753843,35.3248922 205.675082,10.9302478 191.747328,2.89849283 C178.392359,-4.80289661 156.551327,3.22703567 134.492936,22.4237776 C132.371761,24.2697233 130.244662,26.2241201 128.118477,28.2723861 C126.701777,26.917204 125.287358,25.6075897 123.876584,24.3549348 C100.758745,3.82852863 77.5866802,-4.82157937 63.6725966,3.23341515 C50.3303869,10.9571328 46.3792156,33.8904224 51.9945178,62.5880206 C52.5367729,65.3599011 53.1706189,68.1905639 53.8873982,71.068617 C50.6078941,71.9995641 47.4418534,72.9920277 44.4125156,74.0478303 C17.3093297,83.497195 0,98.3066828 0,113.667995 C0,129.533287 18.5815786,145.446423 46.8116526,155.095373 C49.0394553,155.856809 51.3511025,156.576778 53.7333796,157.260293 C52.9600965,160.37302 52.2875179,163.423318 51.7229345,166.398431 C46.3687351,194.597975 50.5500231,216.989464 63.8566899,224.664425 C77.6012619,232.590464 100.66852,224.443422 123.130185,204.809231 C124.905501,203.257196 126.687196,201.611293 128.472081,199.886102 C130.785552,202.113904 133.095375,204.222319 135.392897,206.199955 C157.14963,224.922338 178.637969,232.482469 191.932332,224.786092 C205.663234,216.837268 210.125675,192.78347 204.332202,163.5181 C203.88974,161.283006 203.374826,158.99961 202.796573,156.675661 C204.416503,156.196743 206.006814,155.702335 207.557482,155.188332 C236.905331,145.46465 256,129.745175 256,113.667995 C256,98.2510906 238.132466,83.3418093 210.483381,73.8236374 L210.483381,73.8236374 Z M204.118035,144.807565 C202.718197,145.270987 201.281904,145.718918 199.818271,146.153177 C196.578411,135.896354 192.205739,124.989735 186.854729,113.72131 C191.961041,102.721277 196.164656,91.9540963 199.313837,81.7638014 C201.93261,82.5215915 204.474374,83.3208483 206.923636,84.1643056 C230.613348,92.3195488 245.063763,104.377206 245.063763,113.667995 C245.063763,123.564379 229.457753,136.411268 204.118035,144.807565 L204.118035,144.807565 Z M193.603754,165.642007 C196.165567,178.582766 196.531475,190.282717 194.834536,199.429057 C193.309843,207.64764 190.243595,213.12715 186.452366,215.321689 C178.384612,219.991462 161.131788,213.921395 142.525146,197.909832 C140.392124,196.074366 138.243609,194.114502 136.088259,192.040261 C143.301619,184.151133 150.510878,174.979732 157.54698,164.793993 C169.922699,163.695814 181.614905,161.900447 192.218042,159.449363 C192.740247,161.555956 193.204126,163.621993 193.603754,165.642007 L193.603754,165.642007 Z M87.2761866,214.514686 C79.3938934,217.298414 73.1160375,217.378157 69.3211631,215.189998 C61.2461189,210.532528 57.8891498,192.554265 62.4682434,168.438039 C62.9927272,165.676183 63.6170041,162.839142 64.3365173,159.939216 C74.8234575,162.258154 86.4299951,163.926841 98.8353334,164.932519 C105.918826,174.899534 113.336329,184.06091 120.811247,192.08264 C119.178102,193.65928 117.551336,195.16028 115.933685,196.574699 C106.001303,205.256705 96.0479605,211.41654 87.2761866,214.514686 L87.2761866,214.514686 Z M50.3486141,144.746959 C37.8658105,140.48046 27.5570398,134.935332 20.4908634,128.884403 C14.1414664,123.446815 10.9357817,118.048415 10.9357817,113.667995 C10.9357817,104.34622 24.8334611,92.4562517 48.0123604,84.3748281 C50.8247961,83.3942121 53.7689223,82.4701001 56.8242337,81.6020363 C60.0276398,92.0224477 64.229889,102.917218 69.3011135,113.93411 C64.1642716,125.11459 59.9023288,136.182975 56.6674809,146.725506 C54.489347,146.099407 52.3791089,145.440499 50.3486141,144.746959 L50.3486141,144.746959 Z M62.7270678,60.4878073 C57.9160346,35.9004118 61.1112387,17.3525532 69.1516515,12.6982729 C77.7160924,7.74005624 96.6544653,14.8094222 116.614922,32.5329619 C117.890816,33.6657739 119.171723,34.8514442 120.456275,36.0781256 C113.018267,44.0647686 105.66866,53.1573386 98.6480514,63.0655695 C86.6081646,64.1815215 75.0831931,65.9741531 64.4868907,68.3746571 C63.8206914,65.6948233 63.2305903,63.0619242 62.7270678,60.4878073 L62.7270678,60.4878073 Z M173.153901,87.7550367 C170.620796,83.3796304 168.020249,79.1076627 165.369124,74.9523483 C173.537126,75.9849113 181.362914,77.3555864 188.712066,79.0329319 C186.505679,86.1041206 183.755673,93.4974728 180.518546,101.076741 C178.196419,96.6680702 175.740322,92.2229454 173.153901,87.7550367 L173.153901,87.7550367 Z M128.122121,43.8938899 C133.166461,49.3588189 138.218091,55.4603279 143.186789,62.0803968 C138.179814,61.8439007 133.110868,61.720868 128.000001,61.720868 C122.937434,61.720868 117.905854,61.8411667 112.929865,62.0735617 C117.903575,55.515009 122.99895,49.4217021 128.122121,43.8938899 L128.122121,43.8938899 Z M82.8018984,87.830679 C80.2715265,92.2183886 77.8609975,96.6393627 75.5753239,101.068539 C72.3906004,93.5156998 69.6661103,86.0886276 67.440586,78.9171899 C74.7446255,77.2826781 82.5335049,75.9461789 90.6495601,74.9332099 C87.9610684,79.1268011 85.3391054,83.4302106 82.8018984,87.8297677 L82.8018984,87.830679 L82.8018984,87.830679 Z M90.8833221,153.182899 C82.4979621,152.247395 74.5919739,150.979704 67.289757,149.390303 C69.5508242,142.09082 72.3354636,134.505173 75.5876271,126.789657 C77.8792246,131.215644 80.2993228,135.638441 82.8451877,140.03572 L82.8456433,140.03572 C85.4388987,144.515476 88.1255676,148.90364 90.8833221,153.182899 L90.8833221,153.182899 Z M128.424691,184.213105 C123.24137,178.620587 118.071264,172.434323 113.021912,165.780078 C117.923624,165.972373 122.921029,166.0708 128.000001,166.0708 C133.217953,166.0708 138.376211,165.953235 143.45336,165.727219 C138.468257,172.501308 133.434855,178.697141 128.424691,184.213105 L128.424691,184.213105 Z M180.622896,126.396409 C184.044571,134.195313 186.929004,141.741317 189.219234,148.9164 C181.796719,150.609693 173.782736,151.973534 165.339049,152.986959 C167.996555,148.775595 170.619884,144.430263 173.197646,139.960532 C175.805484,135.438399 178.28163,130.90943 180.622896,126.396409 L180.622896,126.396409 Z M163.724586,134.496971 C159.722835,141.435557 155.614455,148.059271 151.443648,154.311611 C143.847063,154.854776 135.998946,155.134562 128.000001,155.134562 C120.033408,155.134562 112.284171,154.887129 104.822013,154.402745 C100.48306,148.068386 96.285368,141.425078 92.3091341,134.556664 L92.3100455,134.556664 C88.3442923,127.706935 84.6943232,120.799333 81.3870228,113.930466 C84.6934118,107.045648 88.3338117,100.130301 92.276781,93.292874 L92.2758697,93.294241 C96.2293193,86.4385872 100.390102,79.8276317 104.688954,73.5329157 C112.302398,72.9573964 120.109505,72.6571055 127.999545,72.6571055 L128.000001,72.6571055 C135.925583,72.6571055 143.742714,72.9596746 151.353879,73.5402067 C155.587114,79.7888993 159.719645,86.3784378 163.688588,93.2350031 C167.702644,100.168578 171.389978,107.037901 174.724618,113.77508 C171.400003,120.627999 167.720871,127.566587 163.724586,134.496971 L163.724586,134.496971 Z M186.284677,12.3729198 C194.857321,17.3165548 198.191049,37.2542268 192.804953,63.3986692 C192.461372,65.0669011 192.074504,66.7661189 191.654369,68.4881206 C181.03346,66.0374921 169.500286,64.2138746 157.425315,63.0810626 C150.391035,53.0639249 143.101577,43.9572289 135.784778,36.073113 C137.751934,34.1806885 139.716356,32.3762092 141.672575,30.673346 C160.572216,14.2257007 178.236518,7.73185406 186.284677,12.3729198 L186.284677,12.3729198 Z M128.000001,90.8080696 C140.624975,90.8080696 150.859926,101.042565 150.859926,113.667995 C150.859926,126.292969 140.624975,136.527922 128.000001,136.527922 C115.375026,136.527922 105.140075,126.292969 105.140075,113.667995 C105.140075,101.042565 115.375026,90.8080696 128.000001,90.8080696 L128.000001,90.8080696 Z"
          fill="#00D8FF"
        ></path>
      </g>
    </svg>
  ),

  tailwind: (
    <svg
      width={w}
      height={h}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>file_type_tailwind</title>
      <path
        d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
        style={{ fill: "#44a8b3" }}
      />
    </svg>
  ),
  public: (
    <svg
      width={w}
      height={h}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>folder_type_public</title>
      <path
        d="M27.5,5.5H18.2L16.1,9.7H4.4V26.5H29.6V5.5Zm0,4.2H19.3l1.1-2.1h7.1Z"
        style={{ fill: "#00a23c" }}
      />
      <path
        d="M22.6,16.3a3.787,3.787,0,0,1,1.8,2.8,3.048,3.048,0,1,0-1.8-2.8Zm-2,6.3a3.1,3.1,0,1,0-3.1-3.1h0A3.116,3.116,0,0,0,20.6,22.6Zm1.3.2H19.3a3.9,3.9,0,0,0-3.9,3.9V30h0l.2.1A16.106,16.106,0,0,0,21,31a9.638,9.638,0,0,0,4.7-.9l.2-.1h0V26.8A4.148,4.148,0,0,0,21.9,22.8ZM27,19.6H24.4a3.225,3.225,0,0,1-1.2,2.6,4.621,4.621,0,0,1,3.3,4.5v1a9.782,9.782,0,0,0,4.1-.9l.2-.1h0V23.5A3.82,3.82,0,0,0,27,19.6Zm-11.8-.2a3.022,3.022,0,0,0,1.6-.5,3.71,3.71,0,0,1,1.4-2.4v-.2a3.1,3.1,0,0,0-6.2,0,3.272,3.272,0,0,0,3.2,3.1Zm2.7,2.9a4.2,4.2,0,0,1-1.2-2.6H13.8a3.9,3.9,0,0,0-3.9,3.9v3.2h0l.2.1a16.28,16.28,0,0,0,4.4.8v-1a4.81,4.81,0,0,1,3.4-4.4Z"
        style={{ fill: "#aaffa2" }}
      />
    </svg>
  ),
  public_opened:(
    <svg
      width={w}
      height={h} 
      viewBox="0 0 32 32" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>folder_type_public_opened</title>
      <path d="M27.4,5.5H18.2L16.1,9.7H4.3V26.5H29.5V5.5Zm0,18.7H6.6V11.8H27.4Zm0-14.5H19.2l1-2.1h7.1V9.7Z" style={{fill:"#33b563"}}/>
      <polygon points="25.7 13.7 0.5 13.7 4.3 26.5 29.5 26.5 25.7 13.7" style={{fill:"#33b563"}}/>
      <path d="M22.573,16.294a3.816,3.816,0,0,1,1.776,2.835,3.079,3.079,0,1,0-1.776-2.835ZM20.555,22.6a3.08,3.08,0,1,0-3.08-3.08h0A3.08,3.08,0,0,0,20.555,22.6Zm1.306.21H19.248A3.948,3.948,0,0,0,15.3,26.753v3.2l.008.05.22.069a17.95,17.95,0,0,0,5.362.865,11.007,11.007,0,0,0,4.682-.879l.206-.1H25.8v-3.2A3.947,3.947,0,0,0,21.861,22.81Zm5.1-3.179h-2.6a3.8,3.8,0,0,1-1.171,2.644,4.686,4.686,0,0,1,3.347,4.484v.985a10.612,10.612,0,0,0,4.133-.868l.206-.1H30.9v-3.2a3.948,3.948,0,0,0-3.943-3.946Zm-11.806-.21a3.059,3.059,0,0,0,1.638-.475,3.812,3.812,0,0,1,1.433-2.431c0-.058.009-.115.009-.173a3.08,3.08,0,1,0-3.081,3.079h0Zm2.766,2.853a3.8,3.8,0,0,1-1.171-2.629c-.1-.007-.191-.015-.289-.015H13.843A3.948,3.948,0,0,0,9.9,23.573v3.2l.008.049.22.069a18.489,18.489,0,0,0,4.441.835v-.965a4.687,4.687,0,0,1,3.348-4.487Z" style={{fill:"#aaffa2"}}/>
    </svg>
  ),
  node_modules: (
    <svg       
      width={w}
      height={h} 
      viewBox="0 0 32 32" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>folder_type_node</title><path d="M27.5,5.5H18.2L16.1,9.7H4.4V26.5H29.6V5.5Zm0,4.2H19.3l1.1-2.1h7.1Z" style={{fill:"#8ebf55"}}/>
      <path d="M21.688,31a1.613,1.613,0,0,1-.807-.216l-2.57-1.52c-.383-.215-.2-.291-.07-.335A5.121,5.121,0,0,0,19.4,28.4a.2.2,0,0,1,.191.015l1.974,1.172a.255.255,0,0,0,.239,0l7.7-4.442a.242.242,0,0,0,.118-.208V16.056a.248.248,0,0,0-.119-.212l-7.692-4.438a.243.243,0,0,0-.238,0L13.88,15.845a.247.247,0,0,0-.122.211v8.881a.236.236,0,0,0,.121.206l2.108,1.218c1.144.572,1.845-.1,1.845-.778V16.814a.221.221,0,0,1,.223-.222h.976a.222.222,0,0,1,.222.222v8.769a2.132,2.132,0,0,1-2.278,2.4A3.292,3.292,0,0,1,15.2,27.5l-2.018-1.162a1.625,1.625,0,0,1-.807-1.4V16.056a1.621,1.621,0,0,1,.807-1.4l7.7-4.447a1.685,1.685,0,0,1,1.617,0l7.7,4.447a1.624,1.624,0,0,1,.808,1.4v8.881a1.628,1.628,0,0,1-.808,1.4l-7.7,4.443A1.614,1.614,0,0,1,21.688,31Z" style={{fill:"#fff"}}/>
      <path d="M20.231,21.965a.221.221,0,0,1,.222-.222h1a.223.223,0,0,1,.221.188c.15,1.013.6,1.524,2.634,1.524,1.621,0,2.311-.367,2.311-1.227,0-.5-.2-.864-2.715-1.111-2.106-.208-3.408-.674-3.408-2.358,0-1.553,1.309-2.479,3.5-2.479,2.466,0,3.685.856,3.84,2.691a.222.222,0,0,1-.221.242h-1a.222.222,0,0,1-.216-.174c-.239-1.066-.823-1.407-2.4-1.407-1.77,0-1.975.617-1.975,1.079,0,.56.243.723,2.632,1.039,2.365.313,3.488.755,3.488,2.418s-1.4,2.637-3.836,2.637C20.936,24.807,20.231,23.262,20.231,21.965Z" style={{fill:"#fff"}}/>
    </svg>
  ),
  node_modules_opened: (
    <svg       
      width={w}
      height={h} 
      viewBox="0 0 32 32" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>folder_type_light_node_opened</title>
      <path d="M27.4,5.5H18.2L16.1,9.7H4.3V26.5H29.5V5.5Zm0,18.7H6.6V11.8H27.4Zm0-14.5H19.2l1-2.1h7.1V9.7Z" style={{fill:"#b1db7b"}}/>
      <polygon points="25.7 13.7 0.5 13.7 4.3 26.5 29.5 26.5 25.7 13.7" style={{fill:"#b1db7b"}}/><path d="M20.5,10A10.5,10.5,0,1,1,10,20.5,10.5,10.5,0,0,1,20.5,10Z" style={{fill:"#83cd29;fill-rule:evenodd"}}/>
      <path d="M20.5,31a1.613,1.613,0,0,1-.807-.216l-2.57-1.52c-.383-.215-.2-.291-.07-.335a5.121,5.121,0,0,0,1.162-.528.2.2,0,0,1,.191.015l1.974,1.172a.255.255,0,0,0,.239,0l7.7-4.442a.242.242,0,0,0,.118-.208V16.056a.248.248,0,0,0-.119-.212l-7.692-4.438a.243.243,0,0,0-.238,0L12.69,15.845a.247.247,0,0,0-.122.211v8.881a.236.236,0,0,0,.121.206L14.8,26.361c1.144.572,1.845-.1,1.845-.778V16.814a.221.221,0,0,1,.223-.222h.976a.222.222,0,0,1,.222.222v8.769a2.132,2.132,0,0,1-2.278,2.4,3.292,3.292,0,0,1-1.773-.482L12,26.341a1.625,1.625,0,0,1-.807-1.4V16.056a1.621,1.621,0,0,1,.807-1.4l7.7-4.447a1.685,1.685,0,0,1,1.617,0L29,14.653a1.624,1.624,0,0,1,.808,1.4v8.881a1.628,1.628,0,0,1-.808,1.4l-7.7,4.443A1.614,1.614,0,0,1,20.5,31Zm2.616-6.193c2.438,0,3.836-.96,3.836-2.637s-1.124-2.1-3.488-2.418c-2.39-.316-2.632-.479-2.632-1.039,0-.462.205-1.079,1.975-1.079,1.581,0,2.164.341,2.4,1.407a.222.222,0,0,0,.216.174h1a.222.222,0,0,0,.221-.242c-.154-1.836-1.374-2.691-3.84-2.691-2.194,0-3.5.926-3.5,2.479,0,1.684,1.3,2.15,3.408,2.358,2.519.247,2.715.615,2.715,1.111,0,.86-.69,1.227-2.311,1.227-2.036,0-2.485-.511-2.634-1.524a.223.223,0,0,0-.221-.188h-1a.221.221,0,0,0-.222.222C19.041,23.262,19.746,24.807,23.114,24.807Z" style={{fill:"#fff"}}/>
    </svg>
  ),
  src: (
    <svg      
      width={w}
      height={h} 
      viewBox="0 0 32 32" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>folder_type_src</title><path d="M27.5,5.5H18.2L16.1,9.7H4.4V26.5H29.6V5.5Zm0,4.2H19.3l1.1-2.1h7.1Z" style={{fill:"#14622a"}}/>
      <path d="M19.146,30.989a.9.9,0,0,1-.207-.025,1.041,1.041,0,0,1-.726-1.213L20.922,15.32a1.037,1.037,0,0,1,.444-.683.894.894,0,0,1,.7-.122,1.043,1.043,0,0,1,.727,1.213L20.077,30.16a1.033,1.033,0,0,1-.442.681A.9.9,0,0,1,19.146,30.989Z" style={{fill:"#06cc14"}}/><path d="M24.578,28.944l-.068,0a.931.931,0,0,1-.668-.377,1.1,1.1,0,0,1,.1-1.419L28.6,22.595l-4.638-4.239a1.1,1.1,0,0,1-.141-1.416.937.937,0,0,1,.661-.4.9.9,0,0,1,.709.237l5.47,5a1.1,1.1,0,0,1,.144,1.416,1.061,1.061,0,0,1-.142.163L25.216,28.68A.916.916,0,0,1,24.578,28.944Z" style={{fill:"#06cc14"}}/>
      <path d="M16.423,28.947a.914.914,0,0,1-.639-.267l-5.452-5.327A.9.9,0,0,1,10.2,23.2a1.094,1.094,0,0,1,.141-1.414l5.471-5a.881.881,0,0,1,.7-.238.941.941,0,0,1,.665.4,1.1,1.1,0,0,1-.14,1.417L12.4,22.6l4.659,4.551a1.093,1.093,0,0,1,.1,1.419.927.927,0,0,1-.669.377Z" style={{fill:"#06cc14"}}/>
    </svg>
  ),
  src_opened: (
    <svg     
      width={w}
      height={h} 
      viewBox="0 0 32 32" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>folder_type_src_opened</title>
      <path d="M27.4,5.5H18.2L16.1,9.7H4.3V26.5H29.5V5.5Zm0,18.7H6.6V11.8H27.4Zm0-14.5H19.2l1-2.1h7.1V9.7Z" style={{fill:"#2a8243"}}/><polygon points="25.7 13.7 0.5 13.7 4.3 26.5 29.5 26.5 25.7 13.7" style={{fill:"#2a8243"}}/><path d="M19.146,30.989a.9.9,0,0,1-.207-.025,1.041,1.041,0,0,1-.726-1.213L20.922,15.32a1.037,1.037,0,0,1,.444-.683.894.894,0,0,1,.7-.122,1.043,1.043,0,0,1,.727,1.213L20.077,30.16a1.033,1.033,0,0,1-.442.681A.9.9,0,0,1,19.146,30.989Z" style={{fill:"#06cc14"}}/>
      <path d="M24.578,28.944l-.068,0a.931.931,0,0,1-.668-.377,1.1,1.1,0,0,1,.1-1.419L28.6,22.595l-4.638-4.239a1.1,1.1,0,0,1-.141-1.416.937.937,0,0,1,.661-.4.9.9,0,0,1,.709.237l5.47,5a1.1,1.1,0,0,1,.144,1.416,1.061,1.061,0,0,1-.142.163L25.216,28.68A.916.916,0,0,1,24.578,28.944Z" style={{fill:"#06cc14"}}/><path d="M16.423,28.947a.914.914,0,0,1-.639-.267l-5.452-5.327A.9.9,0,0,1,10.2,23.2a1.094,1.094,0,0,1,.141-1.414l5.471-5a.881.881,0,0,1,.7-.238.941.941,0,0,1,.665.4,1.1,1.1,0,0,1-.14,1.417L12.4,22.6l4.659,4.551a1.093,1.093,0,0,1,.1,1.419.927.927,0,0,1-.669.377Z" style={{fill:"#06cc14"}}/>
    </svg>
  ),
  components: (
    <svg 
      width={w} 
      height={h} 
      viewBox="0 0 32 32" 
      id="Layer_1" 
      data-name="Layer 1" 
      xmlns="http://www.w3.org/2000/svg"
      >
      <title>folder_type_component</title>
      <path d="M27.5,5.5H18.2L16.1,9.7H4.4V26.5H29.6V5.5Zm0,4.2H19.3l1.1-2.1h7.1Z" style={{fill:"#c09553"}}/>
      <path d="M31,17.672h0v-.009l-2.43-1.941a1.075,1.075,0,0,1-.085-.149,2.146,2.146,0,0,0-.642-.732,3.167,3.167,0,0,0-.973-.476l-1.12-.894c-.8-.637-1.6-1.279-2.4-1.914-.057-.041-.078-.122-.113-.186a2.146,2.146,0,0,0-.642-.732A3.533,3.533,0,0,0,20.618,10H20.4a3.542,3.542,0,0,0-1.984.629,2.178,2.178,0,0,0-.639.711c-.033.059-.056.126-.093.182a1.189,1.189,0,0,1-.134.112l-2.3,1.833-1.122.9a3.186,3.186,0,0,0-.959.468,2.178,2.178,0,0,0-.639.711c-.03.053-.053.113-.084.165L10,17.662v.007h0l5.251,4.193v.009h0L20.5,26.064l5.249-4.19v-.012Zm-2.692,1.006a2.619,2.619,0,0,1-.913.726,3.733,3.733,0,0,1-1.644.365,3.668,3.668,0,0,1-1.587-.335,2.464,2.464,0,0,1-1.118-.975,1.6,1.6,0,0,1-.215-.836c0-.364-.01-.729.007-1.092.037.089.044.192.081.282a2.1,2.1,0,0,0,.833,1.021,3.657,3.657,0,0,0,2,.575,3.707,3.707,0,0,0,1.96-.549,2.329,2.329,0,0,0,.7-.7,1.75,1.75,0,0,0,.239-.641,1.36,1.36,0,0,1,.011.273c0,.3,0,.607,0,.911A1.666,1.666,0,0,1,28.308,18.678ZM17.589,12.329c.037.089.044.192.081.282a2.1,2.1,0,0,0,.833,1.021,3.657,3.657,0,0,0,2,.575,3.707,3.707,0,0,0,1.96-.549,2.329,2.329,0,0,0,.7-.7,1.75,1.75,0,0,0,.239-.641,1.36,1.36,0,0,1,.011.273c0,.3,0,.607,0,.911a1.666,1.666,0,0,1-.357.979,2.619,2.619,0,0,1-.913.726,3.733,3.733,0,0,1-1.644.365,3.668,3.668,0,0,1-1.587-.335,2.464,2.464,0,0,1-1.118-.975,1.6,1.6,0,0,1-.215-.836C17.586,13.057,17.571,12.692,17.589,12.329Zm-2.338,7.44a3.668,3.668,0,0,1-1.587-.335,2.464,2.464,0,0,1-1.118-.975,1.6,1.6,0,0,1-.215-.836c0-.364-.01-.729.007-1.092.037.089.044.192.081.282a2.1,2.1,0,0,0,.833,1.021,3.657,3.657,0,0,0,2,.575,3.707,3.707,0,0,0,1.96-.549,2.329,2.329,0,0,0,.7-.7,1.75,1.75,0,0,0,.239-.641,1.36,1.36,0,0,1,.011.273c0,.3,0,.607,0,.911a1.666,1.666,0,0,1-.357.979,2.619,2.619,0,0,1-.913.726A3.733,3.733,0,0,1,15.251,19.769Zm7.807,3.111a2.619,2.619,0,0,1-.913.726,3.733,3.733,0,0,1-1.644.365,3.668,3.668,0,0,1-1.587-.335,2.464,2.464,0,0,1-1.118-.975,1.6,1.6,0,0,1-.215-.836c0-.364-.01-.729.007-1.092.037.089.044.192.081.282a2.1,2.1,0,0,0,.833,1.021,3.657,3.657,0,0,0,2,.575,3.707,3.707,0,0,0,1.96-.549,2.329,2.329,0,0,0,.7-.7,1.75,1.75,0,0,0,.239-.641,1.36,1.36,0,0,1,.011.273c0,.3,0,.607,0,.911A1.666,1.666,0,0,1,23.058,22.88Z" style={{fill:"#f1c40f"}}/>
      <path d="M22.145,15.2a2.619,2.619,0,0,0,.913-.726,1.666,1.666,0,0,0,.357-.979c0-.3,0-.607,0-.911a1.36,1.36,0,0,0-.011-.273,1.75,1.75,0,0,1-.239.641,2.329,2.329,0,0,1-.7.7,3.707,3.707,0,0,1-1.96.549c0,.453,0,.907,0,1.36A3.733,3.733,0,0,0,22.145,15.2Z" style={{fill:"#f39c12"}}/>
      <path d="M16.895,19.4a2.619,2.619,0,0,0,.913-.726,1.666,1.666,0,0,0,.357-.979c0-.3,0-.607,0-.911a1.36,1.36,0,0,0-.011-.273,1.75,1.75,0,0,1-.239.641,2.329,2.329,0,0,1-.7.7,3.707,3.707,0,0,1-1.96.549c0,.453,0,.907,0,1.36A3.733,3.733,0,0,0,16.895,19.4Z" style={{fill:"#f39c12"}}/>
      <path d="M28.654,16.515a1.75,1.75,0,0,1-.239.641,2.329,2.329,0,0,1-.7.7,3.707,3.707,0,0,1-1.96.549c0,.453,0,.907,0,1.36a3.733,3.733,0,0,0,1.644-.365,2.619,2.619,0,0,0,.913-.726,1.666,1.666,0,0,0,.357-.979c0-.3,0-.607,0-.911A1.36,1.36,0,0,0,28.654,16.515Z" style={{fill:"#f39c12"}}/>
      <path d="M23.4,20.717a1.75,1.75,0,0,1-.239.641,2.329,2.329,0,0,1-.7.7,3.707,3.707,0,0,1-1.96.549c0,.453,0,.907,0,1.36a3.733,3.733,0,0,0,1.644-.365,2.619,2.619,0,0,0,.913-.726,1.666,1.666,0,0,0,.357-.979c0-.3,0-.607,0-.911A1.36,1.36,0,0,0,23.4,20.717Z" style={{fill:"#f39c12"}}/>
      <polygon points="20.501 26.064 20.5 31 31 22.605 31 17.673 20.501 26.064" style={{fill:"#f39c12"}}/>
      <path d="M18.914,15.231a3.668,3.668,0,0,0,1.587.335c0-.453,0-.907,0-1.36a3.657,3.657,0,0,1-2-.575,2.1,2.1,0,0,1-.833-1.021c-.037-.09-.044-.193-.081-.282-.017.363,0,.728-.007,1.092a1.6,1.6,0,0,0,.215.836A2.464,2.464,0,0,0,18.914,15.231Z" style={{fill:"#e67e22"}}/>
      <path d="M13.252,17.834a2.1,2.1,0,0,1-.833-1.021c-.037-.09-.044-.193-.081-.282-.017.363,0,.728-.007,1.092a1.6,1.6,0,0,0,.215.836,2.464,2.464,0,0,0,1.118.975,3.668,3.668,0,0,0,1.587.335c0-.453,0-.907,0-1.36A3.657,3.657,0,0,1,13.252,17.834Z" style={{fill:"#e67e22"}}/>
      <path d="M23.752,17.834a2.1,2.1,0,0,1-.833-1.021c-.037-.09-.044-.193-.081-.282-.017.363,0,.728-.007,1.092a1.6,1.6,0,0,0,.215.836,2.464,2.464,0,0,0,1.118.975,3.668,3.668,0,0,0,1.587.335c0-.453,0-.907,0-1.36A3.657,3.657,0,0,1,23.752,17.834Z" style={{fill:"#e67e22"}}/>
      <path d="M18.5,22.036a2.1,2.1,0,0,1-.833-1.021c-.037-.09-.044-.193-.081-.282-.017.363,0,.728-.007,1.092a1.6,1.6,0,0,0,.215.836,2.464,2.464,0,0,0,1.118.975,3.668,3.668,0,0,0,1.587.335c0-.453,0-.907,0-1.36A3.657,3.657,0,0,1,18.5,22.036Z" style={{fill:"#e67e22"}}/>
    </svg>
  ),
  components_opened: (
    <svg width={w} height={h} viewBox="0 0 32 32" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><title>folder_type_component_opened</title><path d="M27.4,5.5H18.2L16.1,9.7H4.3V26.5H29.5V5.5Zm0,18.7H6.6V11.8H27.4Zm0-14.5H19.2l1-2.1h7.1V9.7Z" style={{fill:"#dcb67a"}}/><polygon points="25.7 13.7 0.5 13.7 4.3 26.5 29.5 26.5 25.7 13.7" style={{fill:"#dcb67a"}}/><path d="M31,17.672h0v-.009l-2.43-1.941a1.075,1.075,0,0,1-.085-.149,2.146,2.146,0,0,0-.642-.732,3.167,3.167,0,0,0-.973-.476l-1.12-.894c-.8-.637-1.6-1.279-2.4-1.914-.057-.041-.078-.122-.113-.186a2.146,2.146,0,0,0-.642-.732A3.533,3.533,0,0,0,20.618,10H20.4a3.542,3.542,0,0,0-1.984.629,2.178,2.178,0,0,0-.639.711c-.033.059-.056.126-.093.182a1.189,1.189,0,0,1-.134.112l-2.3,1.833-1.122.9a3.186,3.186,0,0,0-.959.468,2.178,2.178,0,0,0-.639.711c-.03.053-.053.113-.084.165L10,17.662v.007h0l5.251,4.193v.009h0L20.5,26.064l5.249-4.19v-.012Zm-2.692,1.006a2.619,2.619,0,0,1-.913.726,3.733,3.733,0,0,1-1.644.365,3.668,3.668,0,0,1-1.587-.335,2.464,2.464,0,0,1-1.118-.975,1.6,1.6,0,0,1-.215-.836c0-.364-.01-.729.007-1.092.037.089.044.192.081.282a2.1,2.1,0,0,0,.833,1.021,3.657,3.657,0,0,0,2,.575,3.707,3.707,0,0,0,1.96-.549,2.329,2.329,0,0,0,.7-.7,1.75,1.75,0,0,0,.239-.641,1.36,1.36,0,0,1,.011.273c0,.3,0,.607,0,.911A1.666,1.666,0,0,1,28.308,18.678ZM17.589,12.329c.037.089.044.192.081.282a2.1,2.1,0,0,0,.833,1.021,3.657,3.657,0,0,0,2,.575,3.707,3.707,0,0,0,1.96-.549,2.329,2.329,0,0,0,.7-.7,1.75,1.75,0,0,0,.239-.641,1.36,1.36,0,0,1,.011.273c0,.3,0,.607,0,.911a1.666,1.666,0,0,1-.357.979,2.619,2.619,0,0,1-.913.726,3.733,3.733,0,0,1-1.644.365,3.668,3.668,0,0,1-1.587-.335,2.464,2.464,0,0,1-1.118-.975,1.6,1.6,0,0,1-.215-.836C17.586,13.057,17.571,12.692,17.589,12.329Zm-2.338,7.44a3.668,3.668,0,0,1-1.587-.335,2.464,2.464,0,0,1-1.118-.975,1.6,1.6,0,0,1-.215-.836c0-.364-.01-.729.007-1.092.037.089.044.192.081.282a2.1,2.1,0,0,0,.833,1.021,3.657,3.657,0,0,0,2,.575,3.707,3.707,0,0,0,1.96-.549,2.329,2.329,0,0,0,.7-.7,1.75,1.75,0,0,0,.239-.641,1.36,1.36,0,0,1,.011.273c0,.3,0,.607,0,.911a1.666,1.666,0,0,1-.357.979,2.619,2.619,0,0,1-.913.726A3.733,3.733,0,0,1,15.251,19.769Zm7.807,3.111a2.619,2.619,0,0,1-.913.726,3.733,3.733,0,0,1-1.644.365,3.668,3.668,0,0,1-1.587-.335,2.464,2.464,0,0,1-1.118-.975,1.6,1.6,0,0,1-.215-.836c0-.364-.01-.729.007-1.092.037.089.044.192.081.282a2.1,2.1,0,0,0,.833,1.021,3.657,3.657,0,0,0,2,.575,3.707,3.707,0,0,0,1.96-.549,2.329,2.329,0,0,0,.7-.7,1.75,1.75,0,0,0,.239-.641,1.36,1.36,0,0,1,.011.273c0,.3,0,.607,0,.911A1.666,1.666,0,0,1,23.058,22.88Z" style={{fill:"#f1c40f"}}/><path d="M22.145,15.2a2.619,2.619,0,0,0,.913-.726,1.666,1.666,0,0,0,.357-.979c0-.3,0-.607,0-.911a1.36,1.36,0,0,0-.011-.273,1.75,1.75,0,0,1-.239.641,2.329,2.329,0,0,1-.7.7,3.707,3.707,0,0,1-1.96.549c0,.453,0,.907,0,1.36A3.733,3.733,0,0,0,22.145,15.2Z" style={{fill:"#f39c12"}}/><path d="M16.895,19.4a2.619,2.619,0,0,0,.913-.726,1.666,1.666,0,0,0,.357-.979c0-.3,0-.607,0-.911a1.36,1.36,0,0,0-.011-.273,1.75,1.75,0,0,1-.239.641,2.329,2.329,0,0,1-.7.7,3.707,3.707,0,0,1-1.96.549c0,.453,0,.907,0,1.36A3.733,3.733,0,0,0,16.895,19.4Z" style={{fill:"#f39c12"}}/><path d="M28.654,16.515a1.75,1.75,0,0,1-.239.641,2.329,2.329,0,0,1-.7.7,3.707,3.707,0,0,1-1.96.549c0,.453,0,.907,0,1.36a3.733,3.733,0,0,0,1.644-.365,2.619,2.619,0,0,0,.913-.726,1.666,1.666,0,0,0,.357-.979c0-.3,0-.607,0-.911A1.36,1.36,0,0,0,28.654,16.515Z" style={{fill:"#f39c12"}}/><path d="M23.4,20.717a1.75,1.75,0,0,1-.239.641,2.329,2.329,0,0,1-.7.7,3.707,3.707,0,0,1-1.96.549c0,.453,0,.907,0,1.36a3.733,3.733,0,0,0,1.644-.365,2.619,2.619,0,0,0,.913-.726,1.666,1.666,0,0,0,.357-.979c0-.3,0-.607,0-.911A1.36,1.36,0,0,0,23.4,20.717Z" style={{fill:"#f39c12"}}/><polygon points="20.501 26.064 20.5 31 31 22.605 31 17.673 20.501 26.064" style={{fill:"#f39c12"}}/><path d="M18.914,15.231a3.668,3.668,0,0,0,1.587.335c0-.453,0-.907,0-1.36a3.657,3.657,0,0,1-2-.575,2.1,2.1,0,0,1-.833-1.021c-.037-.09-.044-.193-.081-.282-.017.363,0,.728-.007,1.092a1.6,1.6,0,0,0,.215.836A2.464,2.464,0,0,0,18.914,15.231Z" style={{fill:"#e67e22"}}/><path d="M13.252,17.834a2.1,2.1,0,0,1-.833-1.021c-.037-.09-.044-.193-.081-.282-.017.363,0,.728-.007,1.092a1.6,1.6,0,0,0,.215.836,2.464,2.464,0,0,0,1.118.975,3.668,3.668,0,0,0,1.587.335c0-.453,0-.907,0-1.36A3.657,3.657,0,0,1,13.252,17.834Z" style={{fill:"#e67e22"}}/><path d="M23.752,17.834a2.1,2.1,0,0,1-.833-1.021c-.037-.09-.044-.193-.081-.282-.017.363,0,.728-.007,1.092a1.6,1.6,0,0,0,.215.836,2.464,2.464,0,0,0,1.118.975,3.668,3.668,0,0,0,1.587.335c0-.453,0-.907,0-1.36A3.657,3.657,0,0,1,23.752,17.834Z" style={{fill:"#e67e22"}}/><path d="M18.5,22.036a2.1,2.1,0,0,1-.833-1.021c-.037-.09-.044-.193-.081-.282-.017.363,0,.728-.007,1.092a1.6,1.6,0,0,0,.215.836,2.464,2.464,0,0,0,1.118.975,3.668,3.668,0,0,0,1.587.335c0-.453,0-.907,0-1.36A3.657,3.657,0,0,1,18.5,22.036Z" style={{fill:"#e67e22"}}/><path d="M15.25,21.871h0v-.009L10,17.669v4.937c1.75,1.4,5.25,4.192,5.25,4.192v.01C17,28.21,20.5,31,20.5,31V26.064Z" style={{fill:"#e67e22"}}/></svg>
  ),
  html: (
    <svg width={w} height={h} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"/>
      <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"/>
      <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"/>
    </svg>
  ),
  md: (
    <svg width={w} height={h} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <title>file_type_markdown</title>
      <rect x="2.5" y="7.955" width="27" height="16.091" style={{fill:"none",stroke:"#755838"}}/>
      <polygon points="5.909 20.636 5.909 11.364 8.636 11.364 11.364 14.773 14.091 11.364 16.818 11.364 16.818 20.636 14.091 20.636 14.091 15.318 11.364 18.727 8.636 15.318 8.636 20.636 5.909 20.636" style={{fill:"#755838"}}/>
      <polygon points="22.955 20.636 18.864 16.136 21.591 16.136 21.591 11.364 24.318 11.364 24.318 16.136 27.045 16.136 22.955 20.636" style={{fill:"#755838"}}/>
    </svg>
  ),
  json: (
    <svg width={w} height={h} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_json</title><path d="M4.014,14.976a2.51,2.51,0,0,0,1.567-.518A2.377,2.377,0,0,0,6.386,13.1,15.261,15.261,0,0,0,6.6,10.156q.012-2.085.075-2.747a5.236,5.236,0,0,1,.418-1.686,3.025,3.025,0,0,1,.755-1.018A3.046,3.046,0,0,1,9,4.125,6.762,6.762,0,0,1,10.544,4h.7V5.96h-.387a2.338,2.338,0,0,0-1.723.468A3.4,3.4,0,0,0,8.709,8.52a36.054,36.054,0,0,1-.137,4.133,4.734,4.734,0,0,1-.768,2.06A4.567,4.567,0,0,1,6.1,16a3.809,3.809,0,0,1,1.992,1.754,8.861,8.861,0,0,1,.618,3.865q0,2.435.05,2.9A1.755,1.755,0,0,0,9.264,25.7a2.639,2.639,0,0,0,1.592.337h.387V28h-.7a5.655,5.655,0,0,1-1.773-.2,2.97,2.97,0,0,1-1.324-.93,3.353,3.353,0,0,1-.681-1.63A24.175,24.175,0,0,1,6.6,22.006,16.469,16.469,0,0,0,6.386,18.9a2.408,2.408,0,0,0-.805-1.361,2.489,2.489,0,0,0-1.567-.524Z" style={{fill:"#f5de19"}}/><path d="M27.986,17.011a2.489,2.489,0,0,0-1.567.524,2.408,2.408,0,0,0-.805,1.361,16.469,16.469,0,0,0-.212,3.109,24.175,24.175,0,0,1-.169,3.234,3.353,3.353,0,0,1-.681,1.63,2.97,2.97,0,0,1-1.324.93,5.655,5.655,0,0,1-1.773.2h-.7V26.04h.387a2.639,2.639,0,0,0,1.592-.337,1.755,1.755,0,0,0,.506-1.186q.05-.462.05-2.9a8.861,8.861,0,0,1,.618-3.865A3.809,3.809,0,0,1,25.9,16a4.567,4.567,0,0,1-1.7-1.286,4.734,4.734,0,0,1-.768-2.06,36.054,36.054,0,0,1-.137-4.133,3.4,3.4,0,0,0-.425-2.092,2.338,2.338,0,0,0-1.723-.468h-.387V4h.7A6.762,6.762,0,0,1,23,4.125a3.046,3.046,0,0,1,1.149.581,3.025,3.025,0,0,1,.755,1.018,5.236,5.236,0,0,1,.418,1.686q.062.662.075,2.747a15.261,15.261,0,0,0,.212,2.947,2.377,2.377,0,0,0,.805,1.355,2.51,2.51,0,0,0,1.567.518Z" style={{fill:"#f5de19"}}/></svg>
  ),
  css: (
    <svg  width={w} height={h} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"/>
      <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"/>
      <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"/>
    </svg>
  ),
  VSCodeClone: (
    <svg width={w} height={h} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <title>folder_type_vscode</title><path d="M27.5,5.5H18.2L16.1,9.7H4.4V26.5H29.6V5.5Zm0,4.2H19.3l1.1-2.1h7.1Z" style={{fill:"#5594bf"}}/>
      <path d="M30.257,12.333l-4.324-2.082a1.308,1.308,0,0,0-1.492.253L10.285,23.411a.875.875,0,0,0-.057,1.236.766.766,0,0,0,.057.057l1.157,1.052a.873.873,0,0,0,1.116.049L29.607,12.873A.868.868,0,0,1,31,13.565v-.05A1.311,1.311,0,0,0,30.257,12.333Z" style={{fill:"#0065a9"}}/>
      <path d="M30.257,28.788,25.933,30.87a1.308,1.308,0,0,1-1.492-.253L10.285,17.71a.875.875,0,0,1-.057-1.236.766.766,0,0,1,.057-.057l1.157-1.052a.873.873,0,0,1,1.116-.049L29.607,28.248A.868.868,0,0,0,31,27.556v.05A1.311,1.311,0,0,1,30.257,28.788Z" style={{fill:"#007acc"}}/>
      <path d="M25.933,30.871a1.308,1.308,0,0,1-1.491-.254.768.768,0,0,0,1.311-.543V11.047a.768.768,0,0,0-1.311-.543,1.306,1.306,0,0,1,1.491-.254l4.324,2.079A1.314,1.314,0,0,1,31,13.512v14.1a1.314,1.314,0,0,1-.743,1.183Z" style={{fill:"#1f9cf0"}}/>
    </svg>
  ),
  VSCodeClone_opened: (
    <svg width={w} height={h} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <title>folder_type_vscode_opened</title>
      <path d="M27.4,5.5H18.2L16.1,9.7H4.3v4H.5L4.3,26.5H29.5V5.5ZM20.2,7.6h7.1V9.7H19.2Zm5.5,6.1H6.6V11.8H27.4v7.626Z" style={{fill:"#7bb4db"}}/>
      <path d="M30.257,12.333l-4.324-2.082a1.308,1.308,0,0,0-1.492.253L10.285,23.411a.875.875,0,0,0-.057,1.236.766.766,0,0,0,.057.057l1.157,1.052a.873.873,0,0,0,1.116.049L29.607,12.873A.868.868,0,0,1,31,13.565v-.05A1.311,1.311,0,0,0,30.257,12.333Z" style={{fill:"#0065a9"}}/>
      <path d="M30.257,28.788,25.933,30.87a1.308,1.308,0,0,1-1.492-.253L10.285,17.71a.875.875,0,0,1-.057-1.236.766.766,0,0,1,.057-.057l1.157-1.052a.873.873,0,0,1,1.116-.049L29.607,28.248A.868.868,0,0,0,31,27.556v.05A1.311,1.311,0,0,1,30.257,28.788Z" style={{fill:"#007acc"}}/>
      <path d="M25.933,30.871a1.308,1.308,0,0,1-1.491-.254.768.768,0,0,0,1.311-.543V11.047a.768.768,0,0,0-1.311-.543,1.306,1.306,0,0,1,1.491-.254l4.324,2.079A1.314,1.314,0,0,1,31,13.512v14.1a1.314,1.314,0,0,1-.743,1.183Z" style={{fill:"#1f9cf0"}}/>
    </svg>
  ),
  unknown_folder: (
    // <svg width={w} height={h} viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg">
    //   <path d="M242.3 743.4h603.4c27.8 0 50.3-22.5 50.3-50.3V192H192v501.1c0 27.8 22.5 50.3 50.3 50.3z" fill="#FFEA00" />
    //   <path d="M178.3 807.4h603.4c27.8 0 50.3-22.5 50.3-50.3V256H128v501.1c0 27.8 22.5 50.3 50.3 50.3z" fill="#FFFF8D" />
    //   <path d="M960 515v384c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64V383.8c0-35.3 28.7-64 64-64h344.1c24.5 0 46.8 13.9 57.5 35.9l46.5 95.3H896c35.3 0 64 28.7 64 64z" fill="#3D5AFE" /><path d="M704 512c0-20.7-1.4-41.1-4.1-61H576.1l-46.5-95.3c-10.7-22-33.1-35.9-57.5-35.9H128c-35.3 0-64 28.7-64 64V899c0 6.7 1 13.2 3 19.3C124.4 945 188.5 960 256 960c247.4 0 448-200.6 448-448z" fill="#536DFE" />
    // </svg>
    <svg width={w} height={h} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <title>default_folder</title>
      <path d="M27.5,5.5H18.2L16.1,9.7H4.4V26.5H29.6V5.5Zm0,4.2H19.3l1.1-2.1h7.1Z" style={{fill:"#c09553"}}/>
    </svg>
  ),
  unknown_folder_opened: (
    <svg width={w} height={h} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <title>default_folder_opened</title>
      <path d="M27.4,5.5H18.2L16.1,9.7H4.3V26.5H29.5V5.5Zm0,18.7H6.6V11.8H27.4Zm0-14.5H19.2l1-2.1h7.1V9.7Z" style={{fill:"#dcb67a"}}/>
      <polygon points="25.7 13.7 0.5 13.7 4.3 26.5 29.5 26.5 25.7 13.7" style={{fill:"#dcb67a"}}/>
    </svg>
  ),
  unknown_file: (
    <svg width={w} height={h} viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M576 102.4H268.8c-14.08 0-25.6 11.52-25.6 25.6v742.4c0 14.08 11.52 25.6 25.6 25.6h512c14.08 0 25.6-11.52 25.6-25.6V332.8L576 102.4z" fill="#00B2AE" />
      <path d="M780.8 908.8H268.8c-21.76 0-38.4-16.64-38.4-38.4V128c0-21.76 16.64-38.4 38.4-38.4h312.32L819.2 327.68V870.4c0 21.76-16.64 38.4-38.4 38.4zM268.8 115.2c-7.68 0-12.8 5.12-12.8 12.8v742.4c0 7.68 5.12 12.8 12.8 12.8h512c7.68 0 12.8-5.12 12.8-12.8V337.92L570.88 115.2H268.8z" fill="#231C1C" /><path d="M576 307.2c0 14.08 11.52 25.6 25.6 25.6h204.8L576 102.4v204.8z" fill="#008181" />
      <path d="M806.4 345.6H601.6c-21.76 0-38.4-16.64-38.4-38.4V102.4c0-5.12 2.56-10.24 7.68-11.52 5.12-2.56 10.24-1.28 14.08 2.56l230.4 230.4c3.84 3.84 5.12 8.96 2.56 14.08-1.28 5.12-6.4 7.68-11.52 7.68zM588.8 133.12V307.2c0 7.68 5.12 12.8 12.8 12.8h174.08L588.8 133.12zM332.8 435.2h371.2v25.6H332.8zM332.8 524.8h371.2v25.6H332.8z" fill="#231C1C" /><path d="M332.8 614.4h371.2v25.6H332.8z" fill="#231C1C" />
      <path d="M332.8 716.8h371.2v25.6H332.8z" fill="#231C1C" />
    </svg>
  ),
};
