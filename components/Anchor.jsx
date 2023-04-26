import { useRouter } from "next/router";

export default function Anchor({ children, href, className, id, toggle }) {
  const router = useRouter();

  function handleClick(e) {
    if (toggle === true) {
      document.querySelector(".burgerMenu").classList.toggle("active");
      document.querySelector(".navMenu").classList.toggle("hideMenu");
    }
    e.preventDefault();
    router.push(href);
  }

  return (
    <a id={id} className={className} href={href} onClick={handleClick}>
      {children}
    </a>
  );
}
