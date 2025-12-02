<script lang="ts">
  import { locale } from '$lib/stores/locale';
  import { goto } from '$app/navigation';
  import { t } from '$lib/i18n';
  import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
  
  // Reactive translation helper
  $: translate = (key: string) => t(key, $locale);
</script>

<div class="container-footer w-container" data-footer>
  <div class="w-row">
    <div class="footer-column w-clearfix w-col w-col-4">
      <button 
        class="footer-brand-button"
        on:click={() => goto("/")}
        type="button"
        aria-label="Go to homepage"
      >
        <img
          src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/596d33f36607b12cfdaf8ad2_LogoWhite.png"
          alt="Nolleh Logo"
          width="40"
          class="failory-logo-image"
        />
        <h3 class="footer-failory-name">Nolleh</h3>
        <p class="footer-description-failory">{translate('footer.description')}<br /></p>
      </button>
    </div>
    <div class="footer-column w-col w-col-8">
      <div class="w-row">
        <div class="w-col w-col-8">
          <div class="w-row">
            <div class="w-col w-col-7 w-col-small-6 w-col-tiny-7">
              <h3 class="footer-titles">{translate('footer.learn')}</h3>
              <p class="footer-links">
                <a href="/about"><span class="footer-link">{translate('footer.introduction')}<br /></span></a>
                <a href="/history"><span class="footer-link">{translate('footer.workingHistory')}<br /></span></a>
                <a href="/projects"><span class="footer-link">{translate('footer.participatedProjects')}<br /></span></a>
                <a href="/#sc-skill"><span class="footer-link">{translate('footer.skills')}</span></a>
                <span><br /></span>
                <strong><br /></strong>
              </p>
            </div>
            <div class="w-col w-col-5 w-col-small-6 w-col-tiny-5">
              <h3 class="footer-titles">{translate('footer.other')}</h3>
              <p class="footer-links">
                <a href="/#sc-personal"><span class="footer-link">{translate('footer.personalActivities')}<br /></span></a>
                <a href="/#sc-personal2"><span class="footer-link">{translate('footer.personalProducts')}<br /></span></a>
                <a href="/#sc-personal3"><span class="footer-link">{translate('footer.scraps')}<br /></span></a>
                <strong><br /></strong>
              </p>
            </div>
          </div>
        </div>
        <div class="column-center-mobile w-col w-col-4">
          <h3 class="footer-titles">{translate('footer.followMe')}</h3>
          <a
            href="https://www.linkedin.com/in/%EA%B2%BD%EB%AF%B8-%EA%B9%80-a9805a82"
            target="_blank"
            class="footer-social-network-icons w-inline-block"
            ><img
              src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dc0002f2b676eb4ba0869_LinkedIn%20Icon.svg"
              width="20"
              alt="LinkedIn Icon"
            /></a
          >
          <a
            href="https://github.com/nolleh"
            target="_blank"
            class="footer-social-network-icons w-inline-block"
            ><img src="https://logodix.com/logo/64439.png" width="20" alt="github" /></a
          >
          <a
            href="https://www.slideshare.net/ssuserd8d060"
            target="_blank"
            class="footer-social-network-icons w-inline-block"
            ><img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3_pG2o40dPSLTbgj_mGsxq0MEEJj9efu3mFTL_y0OAA&s"
              width="20"
              alt="slideshare"
            /></a
          >
          <p class="footer-description">
            {translate('footer.emailMe')} <a href="mailto: nolleh7707@gmail.com"
              ><strong class="link-email-footer">Gmail</strong></a
            ><br />
          </p>
          <div class="footer-language-switcher">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  /* body { */
  /*   background: #111; */
  /* } */
  /**/
  div.container-footer.w-container {
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
    padding-bottom: 40px;
    padding-top: 70px;
  }

  div.container-footer.w-container:after {
    clear: both;
    content: ' ';
    display: table;
    grid-column-end: 2;
    grid-column-start: 1;
    grid-row-end: 2;
    grid-row-start: 1;
  }

  div.container-footer.w-container:before {
    content: ' ';
    display: table;
    grid-column-end: 2;
    grid-column-start: 1;
    grid-row-end: 2;
    grid-row-start: 1;
  }

  div.w-row {
    box-sizing: border-box;
    margin-left: -10px;
    margin-right: -10px;
  }

  div.w-row:after {
    clear: both;
    content: ' ';
    display: table;
    grid-column-end: 2;
    grid-column-start: 1;
    grid-row-end: 2;
    grid-row-start: 1;
  }

  div.w-row:before {
    content: ' ';
    display: table;
    grid-column-end: 2;
    grid-column-start: 1;
    grid-row-end: 2;
    grid-row-start: 1;
  }

  div.footer-column.w-clearfix.w-col.w-col-4 {
    box-sizing: border-box;
    float: left;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    width: 33.3333%;
  }

  div.footer-column.w-clearfix.w-col.w-col-4:after {
    clear: both;
    content: ' ';
    display: table;
    grid-column-end: 2;
    grid-column-start: 1;
    grid-row-end: 2;
    grid-row-start: 1;
  }

  div.footer-column.w-clearfix.w-col.w-col-4:before {
    content: ' ';
    display: table;
    grid-column-end: 2;
    grid-column-start: 1;
    grid-row-end: 2;
    grid-row-start: 1;
  }

  button.footer-brand-button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    text-align: left;
    width: 100%;
    transition: opacity 0.2s ease;
  }

  button.footer-brand-button:hover {
    opacity: 0.9;
  }

  button.footer-brand-button:active {
    opacity: 0.8;
  }

  button.footer-brand-button:focus {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 4px;
    border-radius: 4px;
  }

  img.failory-logo-image {
    border-width: 0;
    box-sizing: border-box;
    display: inline-block;
    float: left;
    max-width: 100%;
    vertical-align: middle;
  }

  h3.footer-failory-name {
    box-sizing: border-box;
    color: #ffffff;
    display: block;
    font-family: Lato, sans-serif;
    font-size: 20px;
    font-weight: 900;
    line-height: 1.1em;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-top: 24px;
  }

  p.footer-description-failory {
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.8);
    display: block;
    font-family: Lato, sans-serif;
    font-size: 17px;
    font-weight: 300;
    letter-spacing: 0.5px;
    line-height: 1.5em;
    margin-bottom: 16px;
    margin-top: 15px;
  }

  br {
    box-sizing: border-box;
  }

  div.footer-column.w-col.w-col-8 {
    box-sizing: border-box;
    float: left;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    width: 66.6667%;
  }

  div.w-col.w-col-8 {
    box-sizing: border-box;
    float: left;
    min-height: 1px;
    padding-left: 0;
    padding-right: 0;
    position: relative;
    width: 66.6667%;
  }

  div.w-col.w-col-7.w-col-small-6.w-col-tiny-7 {
    box-sizing: border-box;
    float: left;
    min-height: 1px;
    padding-left: 0;
    padding-right: 0;
    position: relative;
    width: 58.3333%;
  }

  h3.footer-titles {
    box-sizing: border-box;
    color: #ffffff;
    display: block;
    font-family: Lato, sans-serif;
    font-size: 20px;
    font-weight: 900;
    line-height: 1.1em;
    margin-bottom: 0;
    margin-left: 0;
    margin-top: 24px;
  }

  p.footer-links {
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.8);
    display: block;
    font-family: Lato, sans-serif;
    font-size: 17px;
    font-weight: 300;
    letter-spacing: 0.5px;
    line-height: 1.8em;
    margin-bottom: 16px;
    margin-top: 2px;
  }

  a {
    background-color: transparent;
    box-sizing: border-box;
    color: #ffffff;
    font-family: Lato, sans-serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 1.2em;
    text-decoration: none;
  }

  a:active {
    outline: 0;
  }

  a:hover {
    outline: 0;
  }

  span.footer-link {
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 300;
  }

  span.footer-link:hover {
    color: #ffffff;
    font-weight: 400;
  }

  span {
    box-sizing: border-box;
  }

  strong {
    box-sizing: border-box;
    font-weight: 700;
  }

  div.w-col.w-col-5.w-col-small-6.w-col-tiny-5 {
    box-sizing: border-box;
    float: left;
    min-height: 1px;
    padding-left: 0;
    padding-right: 0;
    position: relative;
    width: 41.6667%;
  }

  div.column-center-mobile.w-col.w-col-4 {
    box-sizing: border-box;
    float: left;
    min-height: 1px;
    padding-left: 0;
    padding-right: 0;
    position: relative;
    width: 33.3333%;
  }

  a.footer-social-network-icons.w-inline-block {
    background-color: transparent;
    box-sizing: border-box;
    color: #ffffff;
    display: inline-block;
    font-family: Lato, sans-serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 1.2em;
    margin-right: 8px;
    margin-top: 10px;
    max-width: 100%;
    opacity: 0.8;
    text-decoration: none;
  }

  a.footer-social-network-icons.w-inline-block:active {
    outline: 0;
  }

  a.footer-social-network-icons.w-inline-block:hover {
    opacity: 1;
    outline: 0;
  }

  img {
    border-width: 0;
    box-sizing: border-box;
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
  }

  p.footer-description {
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.8);
    display: block;
    font-family: Lato, sans-serif;
    font-size: 17px;
    font-weight: 300;
    letter-spacing: 0.5px;
    line-height: 1.5em;
    margin-bottom: 16px;
    margin-top: 15px;
  }

  strong.link-email-footer {
    box-sizing: border-box;
    font-weight: 700;
  }

  .footer-language-switcher {
    margin-top: 15px;
  }

  /* project pages Footer style - seamless connection */
  :global(.footer-wrapper.project-page) [data-footer] {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  /* Mobile responsive styles */
  @media screen and (max-width: 768px) {
    div.container-footer.w-container {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-top: 2rem;
      padding-bottom: 2rem;
    }

    div.w-row {
      margin-left: 0;
      margin-right: 0;
      display: flex;
      flex-direction: column;
    }

    /* Brand column - full width at top */
    div.footer-column.w-clearfix.w-col.w-col-4 {
      float: none;
      width: 100% !important;
      padding-left: 0;
      padding-right: 0;
      margin-bottom: 2rem;
    }

    /* Main content column - full width */
    div.footer-column.w-col.w-col-8 {
      float: none;
      width: 100% !important;
      padding-left: 0;
      padding-right: 0;
    }

    /* Inner row for links - 2 column grid */
    div.footer-column.w-col.w-col-8 > div.w-row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 0;
    }

    /* Links container - 2 column grid for Introduction and Other */
    div.footer-column.w-col.w-col-8 > div.w-row > div.w-col.w-col-8 {
      float: none;
      width: 100% !important;
      padding-left: 0;
      padding-right: 0;
      margin-bottom: 1.5rem;
    }

    div.footer-column.w-col.w-col-8 > div.w-row > div.w-col.w-col-8 > div.w-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    /* Introduction and Other columns - side by side */
    div.w-col.w-col-7.w-col-small-6.w-col-tiny-7,
    div.w-col.w-col-5.w-col-small-6.w-col-tiny-5 {
      float: none;
      width: 100% !important;
      padding-left: 0;
      padding-right: 0;
    }

    /* Follow Me column - full width at bottom */
    div.column-center-mobile.w-col.w-col-4 {
      float: none;
      width: 100% !important;
      padding-left: 0;
      padding-right: 0;
      margin-top: 1rem;
    }

    /* Adjust logo and brand name */
    img.failory-logo-image {
      float: none;
      display: block;
      margin-bottom: 0.5rem;
    }

    h3.footer-failory-name {
      margin-left: 0;
      margin-top: 0;
      margin-bottom: 0.75rem;
    }

    p.footer-description-failory {
      margin-top: 0;
    }

    /* Adjust section titles */
    h3.footer-titles {
      margin-top: 0;
      margin-bottom: 0.75rem;
      font-size: 18px;
    }

    /* Adjust links */
    p.footer-links {
      margin-top: 0;
      margin-bottom: 0;
    }

    /* Social icons */
    a.footer-social-network-icons.w-inline-block {
      margin-right: 12px;
      margin-top: 0;
      margin-bottom: 0.5rem;
    }

    p.footer-description {
      margin-top: 0.75rem;
      margin-bottom: 1rem;
    }

    .footer-language-switcher {
      margin-top: 0.75rem;
    }
  }

  @media screen and (max-width: 480px) {
    div.container-footer.w-container {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    /* Very small screens - stack everything vertically */
    div.footer-column.w-col.w-col-8 > div.w-row > div.w-col.w-col-8 > div.w-row {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    div.column-center-mobile.w-col.w-col-4 {
      margin-top: 1.5rem;
    }

    h3.footer-titles {
      font-size: 16px;
      margin-top: 1rem;
    }

    h3.footer-titles:first-of-type {
      margin-top: 0;
    }

    p.footer-links,
    p.footer-description,
    p.footer-description-failory {
      font-size: 15px;
    }
  }
</style>
