import * as React from "react";

function Logo(props) {
  return (
    <svg viewBox="0 0 256 224" width="1em" height="1em" {...props}>
      <path d="M101.408 89.061c8.566 1.95 14.84 6.19 19.081 14.55-5.642.74-10.162 1.52-14.836-1.68-6.19-4.24-13.42-3.445-18.959 1.235-5.038 4.258-6.708 11.378-4.15 17.692 2.613 6.452 8.85 10.292 15.816 9.86a13.536 13.536 0 007.388-2.747c4.378-3.332 9.013-2.244 13.43-1.899.78 1.263.568 2.056.136 2.794-4.898 8.38-16.096 13.82-26.13 12.194-11.073-1.795-18.344-8.408-21.42-19.123-2.992-10.42.162-19.402 7.909-26.715 5.97-5.636 13.323-7.174 21.735-6.16zM176.919 95.042c9.366 9.412 11.73 20.183 6.954 30.694-4.575 10.071-14.417 16.005-25.716 15.506-9.031-.4-18.663-7.018-21.024-14.951 4.783-.586 9.178-1.567 13.676 1.56 6.307 4.382 13.922 3.793 19.42-.918 5.072-4.345 6.742-11.935 4.002-18.182-2.847-6.492-9.25-10.067-16.618-9.393-2.238.205-4.387.86-5.989 2.246-4.355 3.77-9.195 2.73-15.221 2.19 3.175-6.844 7.833-10.835 14.061-13.15 9.48-3.523 18.274-2.37 26.455 4.398z" />
      <path d="M175.444 88.427c.65 2.159-.385 2.452-1.728 1.916-2.643-1.057-4.873-2.587-6.738-4.924-20.23-25.35-56.786-25.367-77.01-.045-2.198 2.752-4.807 4.374-8.223 5.08.703-9.922 18.749-24.475 34.638-28.12 23.29-5.344 46.802 4.948 59.06 26.093zM120.25 162.77c19.163 2.785 34.454-3.486 46.512-17.832 2.34-2.784 4.87-4.751 8.541-5.409-2.168 13.52-25.246 28.752-44.244 29.624-24.751 1.135-46.041-16.404-49.565-29.471 3.604.318 6.2 2.045 8.32 4.777 7.68 9.889 17.712 15.95 30.437 18.31zM122.005 109.716l24.41.003c3.665 0 6.845.856 6.814 5.328-.03 4.515-3.303 5.196-6.927 5.194-11.955-.007-23.91-.033-35.865.01-3.753.012-6.981-1.057-6.922-5.292.058-4.178 3.288-5.303 7.032-5.247 3.652.056 7.306.007 11.458.004zM97.46 187.131c-2.998 2.515-2.998 2.515-5.99-3.86-1.752.484-2.765 4.058-5.183 1.797-2.05-1.916-.081-3.717.769-5.337 1.347-2.567 2.126-5.574 4.71-7.371 3.048 1.171 2.316 4.412 3.929 6.194.854.19 1.149-.507 1.509-1.02 1.013-1.445 2.2-2.03 3.76-.832 1.402 1.077.886 2.327.226 3.552-1.182 2.195-2.377 4.383-3.73 6.877zM193.987 96.247c.453-1.791.908-3.202 1.434-4.834-1.473-1.206-4.894.417-4.795-2.854.082-2.69 2.69-2.603 4.401-3.27 2.681-1.043 5.3-2.675 8.308-2.095 1.39 2.817-1.446 4.548-1.093 6.911.878 1.16 2.226.107 3.219.602 1.341.668 2.023 1.764 1.26 3.24-1.141 2.207-10.499 4.137-12.734 2.3zM107.388 46.421c-2.068-6.104-.633-9.794 4.008-11.161 4.075-1.201 8.088 1.204 9.126 5.47.877 3.6-.607 6.322-3.622 7.96-3.46 1.878-6.746 1.306-9.512-2.269m8.073-5.255c-1.212-1.719-2.643-2.21-3.894-.215-.779 1.24-.454 2.804 1.012 3.37 2.196.848 3.029-.458 2.882-3.155zM93.902 40.962c3.936-.678 3.842 2.742 5 4.599 1.272 2.036 2.824 4.123 2.796 6.816-2.483 2.045-4.75-.429-7.262-.177-1.079.858.174 1.638.374 2.425.351 1.374-.116 2.227-1.28 2.87-1.309.722-2.27.181-2.951-.899-2.095-3.32-4.143-6.671-5.147-10.43 2.769-2.2 5.086.414 7.51-.162.39-1.604-1.566-3.572.96-5.042zM205.787 135.114c1.795 1.403 1.406 2.484-.009 3.333-1.402.842-2.885 1.55-4.283 2.29.148 1.533 1.446 1.427 2.19 1.952 1.166.823 1.402 1.762.788 2.996-.614 1.234-1.651 1.734-2.885 1.246-3.505-1.387-7.404-1.839-10.59-4.209.417-3.273 3.848-2.981 5.338-4.958.088-1.038-.942-1.09-1.585-1.445-1.432-.79-1.749-1.861-1.109-3.334.721-1.66 2.048-1.535 3.359-1.094 2.837.956 5.636 2.021 8.786 3.223zM109.93 194.486c-3.351-2.368-4.62-5.182-3.404-8.828.914-2.74 2.759-4.514 5.686-4.897 3.047-.398 5.573.605 7.315 3.2 1.913 2.846 1.519 5.718-.378 8.34-2.252 3.112-5.37 3.58-9.22 2.185m5.3-8.122c-2.004-1.74-3.305-.965-3.938 1.262-.347 1.22.243 2.523 1.494 2.722 2.566.41 3.038-1.254 2.444-3.984zM195.801 161.667c-2.993 3.855-6.46 4.772-10.268 2.335-2.832-1.813-4.405-4.495-3.162-8.102 1.395-4.046 5.156-6.08 9.042-4.856 4.475 1.41 6.108 5.07 4.388 10.623m-6.165-1.141c2.381-.71 2.696-2.288 1.44-4.122-.88-1.287-2.353-1.352-3.388-.172-1.723 1.964-.495 3.237 1.948 4.294zM190.511 79.34c-7.079-.419-10.634-5.342-7.845-10.384 1.683-3.044 4.336-4.64 7.835-4.015 3.26.582 5.293 2.74 5.763 6.036.607 4.247-1.335 6.995-5.753 8.363m1.102-6.875c-.129-2.478-1.404-3.286-3.584-2.187-1.249.63-2.15 1.886-1.051 3.23 1.529 1.869 3.114 1.368 4.635-1.043zM157.925 52.971c1.148-3.18 1.965-6.32 3.753-8.744 1.859-2.518 4.862-1.978 7.128-.18 1.99 1.578 3.68 3.627 1.047 6.199-.336.329-.805.78-.795 1.166.072 2.999-.842 5.341-4.136 5.769-3.147.408-5.417-1.106-6.997-4.21zM160.92 182.934c-3.304-2.165-4.189-4.745-1.651-7.638 2.363-2.694 5.184-3.392 8.197-.695.03 2.128-1.524 2.418-3.052 3.127 3.412-.187 7.061-.254 7.096 4.218.025 3.187-2.345 4.868-5.501 5.434-3.538.635-4.646-1.262-5.089-4.446zM70.018 59.464c3.476-5.931 5.822-6.765 10.144-3.932-.147 2.136-1.827 2.456-3.423 2.99-1.345.452-2.366 1.36-2.025 2.97.221 1.04 1.02 1.733 2.05 1.972 1.599.37 2.473-.448 2.957-1.92.553-1.681 1.009-4.191 3.428-2.933 2.023 1.052 1.617 3.544.746 5.4-1.585 3.377-4.4 5.113-8.107 4.319-4.413-.947-6.21-4.064-5.77-8.866zM76.059 176.117c-4.043-.974-6.157-3.323-6.276-7.086-.098-3.087 1.507-5.33 4.278-6.737 2.703-1.373 5.266-.916 7.417.953 2.548 2.214 3.807 4.915 1.806 8.184-2.114.462-2.963-.713-3.407-2.235-.449-1.538-.934-2.94-2.903-2.703-1.29.155-2.184 1.064-2.343 2.27-.306 2.317 1.546 2.574 3.186 2.954 1.188.276 2.167.812 2.467 2.248-.5 1.992-2.129 2.16-4.225 2.152zM63.58 160.412c-4.896 2.066-4.606-2.61-6.104-4.585-1.537-2.026.629-3.19 2.166-4.179 1.677-1.08 3.455-2.016 5.056-3.195 2.591-1.91 4.556-1.636 5.964 1.354.791 1.68 3.46 3.78 1.351 5.073-2.286 1.402-4.86 4.732-8.399 1.982.057 1.114.112 2.21-.034 3.55zM68.347 75.926c1.104-1.528 2.175-2.498 3.803-1.152 1.446 1.195.44 2.353-.143 3.51-2.716 5.384-3.33 5.564-8.506 2.427-.99-.6-2.02-1.15-2.936-1.846-1.697-1.289-4.836-2.064-2.739-5.138 1.253-1.837 2.01-5.89 4.808-4.277 1.877 1.082 6.922 1.583 4.91 6.366-.038.092.097.335.209.389.1.049.28-.065.594-.279zM139.574 183.179c-.933 4.871-2.822 9.044-4.997 14.218-4.503-4.242-5.932-9.24-8.475-13.827 4.557-2.94 5.13 1.628 7.13 3.1 2.351-.969 1.596-6.886 6.342-3.491zM135.193 36.649c1.151-1.975 2.482-3.513 4.49-2.125 1.634 1.13.365 2.78-.342 3.987-1.877 3.207-2.976 6.953-6.506 9.845-3.138-4.467-4.242-9.303-5.707-14.047 4.962-2.235 4.794 2.396 6.61 4.493.575-.843.932-1.367 1.455-2.153zM59.098 134.296c1.089-3.361 2.624-3.582 4.263-.819.834 1.405 1.267 3.06 1.795 4.63.41 1.225 1.163 2.574-.177 3.668-1.27 1.036-2.444.601-3.5-.494-1.167-1.212-2.43-.343-3.713-.198-2.318.262-5.571 3.61-6.756-.274-1.16-3.805 3.55-2.77 5.48-4.126.916-.643 2.234-.736 2.608-2.387zM50.243 91.404c.702-2.092 1.128-3.887 1.9-5.52.837-1.77 3.066-1.942 3.465-.468 1.007 3.72 4.13 3.827 6.713 4.973 1.359.604 3.05 1.034 2.287 3.083-.657 1.767-2.148 1.841-3.724 1.388-2.784-.801-5.295-2.11-8.454-.197-1.925 1.166-2.706-.928-2.187-3.26zM176.631 164.366c2.178 2.94 2.636 6.843 6.8 7.701.957.197 1.6 1.379 1.034 2.412-.892 1.63-2.4 2.725-4.087 3.432-1.097.46-2.094-.256-2.325-1.248-.787-3.375-3.041-5.076-5.968-6.688-2.553-1.406-.621-4.184 4.546-5.61zM150.719 36.274c4.11 1.062 5.775 2.573 2.427 6.132-1.215 1.292-1.555 3.273-1.147 5.188.287 1.349.487 2.907-1.192 3.319-2.018.495-4.022-.25-5.505-1.597-1.253-1.14-.392-2.414.597-3.446 1.718-1.793 2.41-3.934 2.046-6.388-.284-1.915-.011-3.375 2.774-3.208zM152.268 181.554c-.68 2.92-.28 5.253 1.644 7.216 1.012 1.033 1.777 2.29.524 3.45-1.356 1.255-3.22 1.9-5.051 1.617-1.716-.264-1.653-1.774-1.41-3.178.39-2.258-.177-4.322-1.617-6.054-1.294-1.555-2.483-3.259-.025-4.418 1.937-.914 4.658-3.067 5.935 1.367zM184.074 55.53c-1.906 3.84-5.753 5.757-7.471 9.903-.885 2.135-3.606-.873-5.005-2.268-1.355-1.351-.834-2.986.906-3.531 2.08-.651 3.494-1.922 4.534-3.646 2.918-4.833 2.88-4.856 7.036-.459zM52.726 103.294c1.831-1.782 2.818-.835 2.702.771-.57 7.873-.26 15.75.102 23.6-3.343.65-3.361-1.644-3.468-3.264-.459-6.924-.922-13.867.664-21.107zM201.518 126.366c.817-8.233.353-16.134 0-24.286 3.253.282 3.425 2.368 3.467 3.977.153 5.96.204 11.933-.09 17.883-.058 1.18.683 5.313-3.377 2.426z" />
    </svg>
  );
}

const MemoLogo = React.memo(Logo);
export default MemoLogo;