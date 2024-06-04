export function Svg({
  src,
  style = undefined,
}: {
  src: React.ImgHTMLAttributes<HTMLImageElement>['src'];
  style?: React.HTMLAttributes<HTMLImageElement>['style'] | undefined;
}) {
  return <img src={src} color="inherit" style={style} />;
}

export function HealthDataIcon() {
  return (
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="32"
      viewBox="0 0 64 64"
    >
      <g>
        <g>
          <path
            d="M46.966,23.345c0-3.814-3.115-6.92-6.931-6.92s-6.933,3.105-6.933,6.92c0,3.435,2.496,6.267,5.769,6.813v7.267
        c0,5.664-4.597,10.261-10.261,10.261c-5.664,0-10.262-4.598-10.262-10.261L18.323,29.1c2.686-0.358,5.311-1.929,7.646-4.612
        c0.343-0.394,0.447-0.902,0.388-1.387c3.052-4.035,4.945-9.53,4.945-13.754c0-6.521-2.922-7.198-7.754-8.304l-0.007-0.012
        C23.244,0.433,22.644,0,21.917,0c-1.021,0-1.849,0.827-1.849,1.836c0,1.021,0.827,1.848,1.849,1.848
        c0.404,0,0.783-0.168,1.084-0.407l0.043,0.016c4.691,1.077,5.957,1.369,5.957,6.054c0,3.715-1.758,8.69-4.445,12.282
        c-0.445,0.026-0.885,0.222-1.214,0.588c-1.373,1.589-3.567,3.491-6.159,3.491c-2.59,0-4.782-1.884-6.155-3.469
        c-0.33-0.366-0.769-0.562-1.211-0.587c-2.694-3.605-4.456-8.586-4.456-12.306c0-4.688,1.245-4.979,5.965-6.056l0.016-0.015
        c0.324,0.239,0.677,0.408,1.107,0.408c1.021,0,1.848-0.828,1.848-1.848C14.296,0.827,13.47,0,12.448,0
        c-0.729,0-1.328,0.433-1.646,1.029L10.798,1.03C5.961,2.146,3.034,2.811,3.034,9.347c0,4.228,1.9,9.743,4.979,13.777
        c-0.059,0.485,0.046,0.994,0.389,1.387c2.333,2.665,4.933,4.23,7.616,4.589l0.003,8.324C16.022,44.359,21.676,50,28.61,50
        c6.934,0,12.564-5.641,12.564-12.576v-7.267C44.446,29.611,46.966,26.779,46.966,23.345z M40.035,27.975
        c-2.543,0-4.63-2.074-4.63-4.628c0-2.544,2.087-4.617,4.63-4.617s4.606,2.073,4.606,4.617
        C44.642,25.9,42.578,27.975,40.035,27.975z"
          />
          <path
            d="M40.035,19.891c-1.91,0-3.466,1.545-3.466,3.455c0,1.921,1.556,3.464,3.466,3.464c1.909,0,3.466-1.543,3.466-3.464
        C43.501,21.436,41.944,19.891,40.035,19.891z"
          />
        </g>
      </g>
    </svg>
  );
}

export function HomeIcon() {
  return (
    <svg
      width="64"
      height="32"
      viewBox="0 0 64 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 15.8084C25 14.4506 25 13.7717 25.2745 13.175C25.5489 12.5783 26.0644 12.1365 27.0953 11.2528L28.0953 10.3957C29.9586 8.79856 30.8902 8 32 8C33.1098 8 34.0414 8.79856 35.9047 10.3957L36.9047 11.2528C37.9356 12.1365 38.4511 12.5783 38.7255 13.175C39 13.7717 39 14.4506 39 15.8084V20.0488C39 21.9344 39 22.8772 38.4142 23.463C37.8284 24.0488 36.8856 24.0488 35 24.0488H29C27.1144 24.0488 26.1716 24.0488 25.5858 23.463C25 22.8772 25 21.9344 25 20.0488V15.8084Z"
        stroke="currentColor"
        stroke-width="1.5"
      />
      <path
        d="M34.5 24V19C34.5 18.4477 34.0523 18 33.5 18H30.5C29.9477 18 29.5 18.4477 29.5 19V24"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function SprintIcon() {
  return (
    <svg
      width="64"
      height="32"
      viewBox="0 0 64 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.7584 22.2201C23.7584 22.6119 24.0145 22.868 24.4062 22.868H39.4958C39.9026 22.868 40.2416 22.5516 40.2416 22.1297C40.2416 21.7078 39.9026 21.3914 39.4958 21.3914H25.4459C25.2877 21.3914 25.2349 21.3387 25.2349 21.1805V17.0823L28.4291 15.229C28.6853 15.4701 29.0243 15.6208 29.4085 15.6208C29.7324 15.6208 30.0413 15.5078 30.2824 15.3194L31.6987 16.5248C31.6459 16.6755 31.6158 16.8412 31.6158 17.0069C31.6158 17.8055 32.2561 18.4458 33.0471 18.4458C33.8382 18.4458 34.486 17.8055 34.486 17.0069C34.486 16.9467 34.4785 16.8789 34.471 16.8186L37.9213 14.7544C38.1473 14.9126 38.4261 15.003 38.7199 15.003C39.5109 15.003 40.1588 14.3552 40.1588 13.5641C40.1588 12.7731 39.5109 12.1252 38.7199 12.1252C37.9288 12.1252 37.281 12.7731 37.281 13.5641C37.281 13.6621 37.296 13.76 37.3111 13.8504L33.9286 15.8769C33.6875 15.6886 33.3786 15.5756 33.0471 15.5756C32.8136 15.5756 32.5876 15.6283 32.3842 15.7338L30.8248 14.4079C30.8323 14.3326 30.8398 14.2572 30.8398 14.1819C30.8398 13.3909 30.1995 12.743 29.4085 12.743C28.6099 12.743 27.9696 13.3909 27.9696 14.1819C27.9696 14.2045 27.9696 14.2271 27.9696 14.2497L25.2349 15.8317V9.33786C25.2349 8.92351 24.9185 8.59204 24.4966 8.59204C24.0748 8.59204 23.7584 8.92351 23.7584 9.33786V22.2201Z"
        fill="currentColor"
      />
    </svg>
  );
}
export function BackArrow() {
  return (
    <svg
      width="25"
      height="21"
      viewBox="0 0 25 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 10.7649C0 11.1611 0.171685 11.5573 0.475436 11.8478L9.19176 20.5509C9.50872 20.8547 9.85209 21 10.2351 21C11.0671 21 11.6746 20.4057 11.6746 19.6001C11.6746 19.1775 11.5161 18.8209 11.2388 18.5567L8.2673 15.5457L4.4374 12.0459L7.51453 12.2308H23.5209C24.3925 12.2308 25 11.6233 25 10.7649C25 9.89325 24.3925 9.28575 23.5209 9.28575H7.51453L4.45061 9.47064L8.2673 5.97091L11.2388 2.95981C11.5161 2.69568 11.6746 2.33911 11.6746 1.9165C11.6746 1.1109 11.0671 0.516602 10.2351 0.516602C9.85209 0.516602 9.49551 0.661874 9.15214 0.992037L0.475436 9.66874C0.171685 9.95928 0 10.3555 0 10.7649Z"
        fill="#005883"
      />
    </svg>
  );
}

export function Settings() {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4104 29H15.8804C16.6903 29 17.2977 28.5141 17.4731 27.7177L18.148 24.8698C18.6069 24.7078 19.0389 24.5323 19.4438 24.3434L21.9408 25.8821C22.6022 26.3005 23.3985 26.233 23.9519 25.6796L25.6931 23.9384C26.2465 23.385 26.3275 22.5617 25.8821 21.8868L24.3569 19.4168C24.5458 19.0119 24.7213 18.5799 24.8563 18.1615L27.7312 17.4866C28.5276 17.3112 29 16.7038 29 15.8939V13.4644C29 12.668 28.5276 12.0472 27.7312 11.8717L24.8833 11.1833C24.7348 10.7109 24.5458 10.2925 24.3839 9.92805L25.9091 7.40402C26.341 6.71565 26.287 5.94629 25.7066 5.37939L23.9519 3.63822C23.385 3.12531 22.6697 3.03083 21.9813 3.40876L19.4438 4.97447C19.0524 4.7855 18.6204 4.61004 18.1615 4.44807L17.4731 1.55961C17.2977 0.763253 16.6903 0.277344 15.8804 0.277344H13.4104C12.5871 0.277344 11.9797 0.763253 11.8042 1.55961L11.1293 4.43457C10.6704 4.58304 10.225 4.75851 9.82007 4.96097L7.29604 3.40876C6.60767 3.03083 5.9058 3.11182 5.3254 3.63822L3.57073 5.37939C2.99034 5.94629 2.93635 6.71565 3.36827 7.40402L4.89349 9.92805C4.73151 10.2925 4.55605 10.7109 4.39408 11.1833L1.54611 11.8717C0.749756 12.0472 0.277344 12.668 0.277344 13.4644V15.8939C0.277344 16.7038 0.749756 17.3112 1.54611 17.4866L4.42107 18.1615C4.55605 18.5799 4.73151 19.0119 4.92048 19.4168L3.39526 21.8868C2.94985 22.5617 3.03083 23.385 3.59773 23.9384L5.3254 25.6796C5.8788 26.233 6.67515 26.3005 7.35003 25.8821L9.83357 24.3434C10.2385 24.5323 10.6704 24.7078 11.1293 24.8698L11.8042 27.7177C11.9797 28.5141 12.5871 29 13.4104 29ZM14.6387 19.3628C12.0472 19.3628 9.92805 17.2302 9.92805 14.6252C9.92805 12.0472 12.0472 9.92805 14.6387 9.92805C17.2437 9.92805 19.3628 12.0472 19.3628 14.6252C19.3628 17.2302 17.2437 19.3628 14.6387 19.3628Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ClosedBook() {
  return (
    <svg
      width="22"
      height="25"
      viewBox="0 0 22 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.60488 24.7421H20.2114C20.8471 24.7421 21.339 24.2838 21.339 23.6915C21.339 23.1886 20.9671 22.8198 20.5112 22.6186C19.0358 22.004 18.7479 20.1041 20.2473 18.7741C20.8591 18.2712 21.327 17.7124 21.327 16.5837V4.21201C21.327 1.79803 19.9954 0.535156 17.4163 0.535156H4.62888C2.06179 0.535156 0.718262 1.78685 0.718262 4.21201V21.0987C0.718262 23.4904 2.06179 24.7421 4.60488 24.7421ZM17.2004 2.75915C18.364 2.75915 18.9398 3.32912 18.9398 4.3573V16.2372C18.9398 16.7848 18.6039 17.0866 18.0041 17.0866H6.22431V2.75915H17.2004ZM3.10542 17.4777V4.3573C3.10542 3.4297 3.57325 2.88209 4.52091 2.7815V17.0978C3.98111 17.1425 3.51327 17.2766 3.10542 17.4777ZM4.92877 22.641C3.64522 22.641 2.97346 21.9593 2.97346 20.9087C2.97346 19.8917 3.74119 19.1877 5.01274 19.1877H16.9845C17.1164 19.1877 17.2484 19.1765 17.3684 19.1541C16.7686 20.3388 16.8405 21.624 17.4883 22.641H4.92877Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Scale() {
  return (
    <svg
      width="30"
      height="32"
      viewBox="0 0 30 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9772 13.2582H18.7662C19.4001 13.2582 19.9892 12.9225 20.3245 12.3701L22.1199 9.41186C22.1306 9.39426 22.1294 9.37228 22.1158 9.35691C21.9564 9.17642 20.9427 8.06536 19.3606 7.14768M14.9772 13.2582H11.2441C10.6048 13.2582 10.0118 12.9172 9.6774 12.3578C9.00345 11.2305 7.92892 9.43861 7.87397 9.38222C7.82666 9.33367 8.99679 8.02011 10.7082 7.03796M14.9772 13.2582L17.2033 9.59449M14.9772 5.88338C16.6766 5.88338 18.1775 6.46147 19.3606 7.14768M14.9772 5.88338V6.96728M14.9772 5.88338C13.3109 5.88339 11.904 6.35169 10.7082 7.03796M19.3606 7.14768V8.02759M10.7082 7.03796V8.02759M5.31475 30.6946H24.6852C27.0682 30.6946 29 28.7114 29 26.2649V6.40178C29 3.95531 27.0682 1.97205 24.6852 1.97205H5.31475C2.93178 1.97205 1 3.9553 1 6.40178V26.2649C1 28.7114 2.93178 30.6946 5.31475 30.6946Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}

export function Steps() {
  return (
    <svg
      width="30"
      height="32"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M4 18h5.5v1.25a2.75 2.75 0 1 1-5.5 0V18zM8 6.12c2 0 3 2.88 3 4.88 0 1-.5 2-1 3.5L9.5 16H4c0-1-.5-2.5-.5-5S5.498 6.12 8 6.12zm12.054 7.978l-.217 1.231a2.75 2.75 0 0 1-5.417-.955l.218-1.23 5.416.954zM18.178 1.705c2.464.434 4.018 3.124 3.584 5.586-.434 2.463-1.187 3.853-1.36 4.838l-5.417-.955-.232-1.564c-.232-1.564-.55-2.636-.377-3.62.347-1.97 1.832-4.632 3.802-4.285z" />
      </g>
    </svg>
  );
}

export function Pulse() {
  return (
    <svg
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.19229 12.2262L11.3152 19.8568C11.6396 20.1616 11.8018 20.3139 11.9998 20.3139C12.1979 20.3139 12.3601 20.1616 12.6845 19.8568L20.8074 12.2262C23.0896 10.0823 23.3667 6.55433 21.4473 4.08038L21.0864 3.61519C18.7902 0.655638 14.1811 1.15198 12.5676 4.53255C12.3397 5.01008 11.66 5.01008 11.4321 4.53255C9.8186 1.15198 5.20952 0.655634 2.91331 3.61519L2.55239 4.08037C0.632943 6.55433 0.910089 10.0823 3.19229 12.2262Z"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="2"
      />
    </svg>
  );
}
