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
