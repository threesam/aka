<script>
  export let data;
  const { settings, press } = data.data;

  import Container from "$lib/components/Container.svelte";
</script>

<Container>
  <section>
    <h1>Press</h1>
    <ul>
      {#each press as item}
        <li><a href={item.link}>{item.title}</a></li>
      {/each}
    </ul>
  </section>
</Container>

<!-- <span>Press</span>
        <iframe
          src="https://www.youtube.com/embed/L9TYGhHEK28"
          width="560"
          height="315"
          frameborder="0"
          allowfullscreen />
      <h3>
        On
        <em>The Jimmy Dore Show</em>
      </h3>
        <iframe
          src="https://www.youtube.com/embed/l2niWG-d-JM"
          width="560"
          height="315"
          frameborder="0"
          allowfullscreen />
      <h3>
        On
        <em>Breakthrough News</em>
        with Eugene Puryear (
        <em>
          My segment begins ca. 43:00)
          <br />
        </em>
      </h3>
        <iframe
          src="https://www.youtube.com/embed/79Igdd1XOiY?start=2581"
          width="560"
          height="315"
          frameborder="0"
          allowfullscreen />
      <h3>
        On
        <em>Economic Update</em>
        with Richard Wolff
      </h3>
      <p>
        <iframe
          src="https://www.youtube.com/embed/hrdObKBYvnM?start=890"
          width="560"
          height="315"
          frameborder="0"
          allowfullscreen />
      </p>
      <h3>
        On Revolutionary Road Radio
        <em>(My segment begins ca. 17:24)</em>
      </h3>
        <a
          href="http://www.internetradiopros.com/revolutionary/?name=2020-06-22_zrevolutionary062220.mp3">
          <img
            class="lazyload alignnone wp-image-4308 size-medium"
            src="https://www.artkillingapathy.com/wp-content/uploads/2020/06/1654273_565568003539727_1021474250_n-300x225.jpg"
            data-orig-src="https://www.artkillingapathy.com/wp-content/uploads/2020/06/1654273_565568003539727_1021474250_n-300x225.jpg"
            alt=""
            width="300"
            height="225"
            srcset="data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27300%27%20height%3D%27225%27%20viewBox%3D%270%200%20300%20225%27%3E%3Crect%20width%3D%27300%27%20height%3D%273225%27%20fill-opacity%3D%220%22%2F%3E%3C%2Fsvg%3E"
            data-srcset="https://www.artkillingapathy.com/wp-content/uploads/2020/06/1654273_565568003539727_1021474250_n-200x150.jpg
            200w,
            https://www.artkillingapathy.com/wp-content/uploads/2020/06/1654273_565568003539727_1021474250_n-300x225.jpg
            300w,
            https://www.artkillingapathy.com/wp-content/uploads/2020/06/1654273_565568003539727_1021474250_n-400x300.jpg
            400w,
            https://www.artkillingapathy.com/wp-content/uploads/2020/06/1654273_565568003539727_1021474250_n-500x375.jpg
            500w,
            https://www.artkillingapathy.com/wp-content/uploads/2020/06/1654273_565568003539727_1021474250_n-600x450.jpg
            600w,
            https://www.artkillingapathy.com/wp-content/uploads/2020/06/1654273_565568003539727_1021474250_n-700x525.jpg
            700w,
            https://www.artkillingapathy.com/wp-content/uploads/2020/06/1654273_565568003539727_1021474250_n-768x576.jpg
            768w,
            https://www.artkillingapathy.com/wp-content/uploads/2020/06/1654273_565568003539727_1021474250_n-800x600.jpg
            800w,
            https://www.artkillingapathy.com/wp-content/uploads/2020/06/1654273_565568003539727_1021474250_n.jpg
            960w"
            data-sizes="auto"
            data-orig-sizes="(max-width: 300px) 100vw, 300px" />
        </a>
      <h3>
        On
        <em>Redacted Tonight</em>
        with Lee Camp
      </h3>
        <iframe
          src="https://www.youtube.com/embed/9NjhCtFBSk4"
          width="560"
          height="315"
          frameborder="0"
          allowfullscreen />
      <h3>
        On
        <em>Project Censored Radio</em>
        with Mickey Huff
        <em>(My segment begins ca. 27:45)</em>
      </h3>
        <a
          href="https://www.projectcensored.org/robin-andersen-and-eleanor-goldfield/"
          target="_blank"
          rel="noopener noreferrer">
          <img
            class="lazyload alignleft wp-image-3129"
            src="data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27555%27%20height%3D%27134%27%20viewBox%3D%270%200%20555%20134%27%3E%3Crect%20width%3D%27555%27%20height%3D%273134%27%20fill-opacity%3D%220%22%2F%3E%3C%2Fsvg%3E"
            data-orig-src="https://www.artkillingapathy.com/wp-content/uploads/2017/12/project-censored.gif"
            alt=""
            width="555"
            height="134" />
        </a>
      <h3>
        On Loud &amp; Clear with Brian Becker&#8217;s segment &#8220;Women &amp;
        Society&#8221;
        <em>(My segment begins ca. 1:28:00)</em>
      </h3>
      <p>
        <a
          class="spreaker-player"
          href="https://www.spreaker.com/user/radiosputnik/syrian-government-kurds-forge-new-allian_1"
          data-resource="episode_id=19524259"
          data-theme="light"
          data-autoplay="false"
          data-playlist="false"
          data-cover="https://d3wo5wojvuv7l.cloudfront.net/images.spreaker.com/original/a59b15ee9c65c3b2c6f944b30f3d12a1.jpg"
          data-width="100%"
          data-height="400px">
          Listen to &#8220;Syrian Government &amp; Kurds Forge New Alliance as
          Turkey Invades&#8221; on Spreaker.
        </a>
        <script async src="https://widget.spreaker.com/widgets.js">

        </script>
      </p>
      <h3>
        On Economic Update with Richard Wolff discussing art and activism in
        today&#8217;s political landscape
      </h3>
      <p>
        <iframe
          src="https://www.youtube.com/embed/ciDfOyMrIOE?start=905"
          width="560"
          height="315"
          frameborder="0"
          allowfullscreen />
      </p>
      <h3>
        On
        <em>Project Censored Radio</em>
        with Mickey Huff: art, activism &amp; censored stories
      </h3>
      <h3>
        <a
          href="http://projectcensored.org/podcast/art-activism-eleanor-goldfield/"
          target="_blank"
          rel="noopener noreferrer">
          <img
            class="lazyload alignleft wp-image-3129"
            src="data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27555%27%20height%3D%27134%27%20viewBox%3D%270%200%20555%20134%27%3E%3Crect%20width%3D%27555%27%20height%3D%273134%27%20fill-opacity%3D%220%22%2F%3E%3C%2Fsvg%3E"
            data-orig-src="https://www.artkillingapathy.com/wp-content/uploads/2017/12/project-censored.gif"
            alt=""
            width="555"
            height="134" />
        </a>
      </h3>
      <h3>
        On Lee Camp&#8217;s
        <em>Redacted Tonight</em>
        talking &#8220;Paradigm Lost,&#8221; activism &amp; art.
      </h3>
        <iframe
          src="https://www.youtube.com/embed/3At0gECPF-8"
          width="560"
          height="315"
          frameborder="0"
          allowfullscreen />

      <h3>
        Me v. A Republican on Basic Human Rights
        <em>(The Big Picture)</em>
      </h3>
        <iframe
          src="https://www.youtube.com/embed/c05oee-_H6o"
          width="560"
          height="315"
          frameborder="0"
          allowfullscreen />
      <h3>
        The FBI&#8217;s Attack on Activists, Violence &amp; The Path Ahead. (
        <em>Watching the Hawks</em>
        RT America)
      </h3>
        <iframe
          src="https://www.youtube.com/embed/8hKSTRFRrV8"
          width="560"
          height="315"
          frameborder="0"
          allowfullscreen />
      <h3>
        Interviewed by Daniel Falcone for
        <a
          href="http://www.truth-out.org/speakout/item/39292-notes-on-the-2017-women-s-march-an-interview-with-eleanor-goldfield">
          Truthout
        </a>
      </h3>
        <a
          href="http://www.truth-out.org/speakout/item/39292-notes-on-the-2017-women-s-march-an-interview-with-eleanor-goldfield">
          <img
            class="lazyload alignnone wp-image-2578 size-full"
            src="http://www.artkillingapathy.com/wp-content/uploads/2014/05/truth-out-banner.jpg"
            data-orig-src="http://www.artkillingapathy.com/wp-content/uploads/2014/05/truth-out-banner.jpg"
            width="551"
            height="297"
            srcset="data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27551%27%20height%3D%27297%27%20viewBox%3D%270%200%20551%20297%27%3E%3Crect%20width%3D%27551%27%20height%3D%273297%27%20fill-opacity%3D%220%22%2F%3E%3C%2Fsvg%3E"
            data-srcset="https://www.artkillingapathy.com/wp-content/uploads/2014/05/truth-out-banner-300x162.jpg
            300w,
            https://www.artkillingapathy.com/wp-content/uploads/2014/05/truth-out-banner-500x270.jpg
            500w,
            https://www.artkillingapathy.com/wp-content/uploads/2014/05/truth-out-banner.jpg
            551w"
            data-sizes="auto"
            data-orig-sizes="(max-width: 551px) 100vw, 551px" />
        </a>
      <h3>
        On Thom Hartmann&#8217;s
        <em>The Big Picture</em>
      </h3>
        <iframe
          src="https://www.youtube.com/embed/DprAGKlbd6A"
          width="560"
          height="315"
          frameborder="0"
          allowfullscreen />
      <h3>
        On RT America&#8217;s
        <em>Watching the Hawks</em>
      </h3>
      <h3>
        (Includes footage from live acoustic show in Los Angeles &#8211; Oliver
        Stone in 2nd half)
      </h3>
        <iframe
          src="https://www.youtube.com/embed/GeO1guqeBG4"
          width="560"
          height="315"
          frameborder="0"
          allowfullscreen />
      <h3>
        On RT America&#8217;s
        <em>Watching the Hawks</em>
      </h3>
      <p>
        <iframe
          src="https://www.youtube.com/embed/6I4yBoduHfo"
          width="560"
          height="315"
          frameborder="0"
          allowfullscreen />
      </p>
      <h3>
        On KPFK&#8217;s
        <em>Moxie Poetic</em>
        with Sydni Phelps
      </h3>
                <iframe
                  width="1100"
                  height="400"
                  scrolling="no"
                  frameborder="no"
                  src="https://w.soundcloud.com/player/?visual=true&#038;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F242959975&#038;show_artwork=true&#038;maxwidth=1100&#038;maxheight=1000&#038;dnt=1" />
              <h3>
                On Lee Camp&#8217;s show
                <em>Redacted Tonight</em>
              </h3>
                <iframe
                  src="https://www.youtube.com/embed/f8PUQ3zRVkc"
                  width="560"
                  height="315"
                  frameborder="0"
                  allowfullscreen />
              <h3>
                Eleanor&#8217;s image from the #LA2Ferguson protests goes viral
                on several news sites.
              </h3>
              <p>
                Famed AP photographer Nick Ut (best known for his &#8220;Napalm
                Girl&#8221; image during Vietnam) snapped an image of Eleanor at
                LAPD HQ on November 25th, 2014 during the LA solidarity protests
                against the Ferguson decision to not indict Darren Wilson in the
                shooting of Mike Brown. The image went viral, shared on
                <a
                  href="https://twitter.com/FoxNews/status/537502904018800641/photo/1">
                  Fox News
                </a>
                ,
                <a
                  href="https://time.com/3607572/national-ferguson-protests-new-york-oakland-washington-atlanta/">
                  TIME magazine
                </a>
                , Google news and several international news outlets.
              </p>
              <p>
                Her first hand account of the actions was also shared by
                <a
                  href="http://www.laprogressive.com/la-ferguson-protests/?utm_source=LA%20Progressive%20Newsletter&amp;utm_campaign=e515192bec-LAP_News_17April12&amp;utm_medium=email&amp;utm_term=0_9f184a8aad-e515192bec-286705649">
                  LA Progressive
                </a>
                .
              </p>
                <img
                  class="lazyload alignnone size-full wp-image-640"
                  src="http://www.artkillingapathy.com/wp-content/uploads/pic-from-LAPD-HQ-by-AP-Nick-Ut.jpg"
                  data-orig-src="http://www.artkillingapathy.com/wp-content/uploads/pic-from-LAPD-HQ-by-AP-Nick-Ut.jpg"
                  alt="LAPD HQ by Nick Ut"
                  width="800"
                  height="533"
                  srcset="data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27800%27%20height%3D%27533%27%20viewBox%3D%270%200%20800%20533%27%3E%3Crect%20width%3D%27800%27%20height%3D%273533%27%20fill-opacity%3D%220%22%2F%3E%3C%2Fsvg%3E"
                  data-srcset="https://www.artkillingapathy.com/wp-content/uploads/pic-from-LAPD-HQ-by-AP-Nick-Ut-300x199.jpg
                  300w,
                  https://www.artkillingapathy.com/wp-content/uploads/pic-from-LAPD-HQ-by-AP-Nick-Ut-500x333.jpg
                  500w,
                  https://www.artkillingapathy.com/wp-content/uploads/pic-from-LAPD-HQ-by-AP-Nick-Ut-700x466.jpg
                  700w,
                  https://www.artkillingapathy.com/wp-content/uploads/pic-from-LAPD-HQ-by-AP-Nick-Ut.jpg
                  800w"
                  data-sizes="auto"
                  data-orig-sizes="(max-width: 800px) 100vw, 800px" />
              <h3>
                Eleanor on Abby Martin&#8217;s &#8220;Breaking the Set&#8221;
                discussing overturning Citizens United (SJR19)
              </h3>
                <iframe
                  width="1100"
                  height="619"
                  src="https://www.youtube.com/embed/Nt8KqG-Z2h8?start=480&#038;feature=oembed"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope;
                  picture-in-picture"
                  allowfullscreen />
              <h3>
                Eleanor on Dennis Trainor Jr.&#8217;s &#8220;
                <em>Acronym TV&#8221;</em>
              </h3>
                <iframe
                  src="//www.youtube.com/embed/AksJuVAs2mc"
                  width="560"
                  height="315"
                  frameborder="0"
                  allowfullscreen />
              <h3>
                Eleanor Interviewed on Abby Martin&#8217;s
                <em>Breaking the Set</em>
              </h3>
                <iframe
                  src="//www.youtube.com/embed/tnuD4S1j5BU?rel=0"
                  width="853"
                  height="480"
                  frameborder="0"
                  allowfullscreen />
              <h3>SOMA magazine</h3>
              <p>
                <a
                  href="http://www.artkillingapathy.com/wp-content/uploads/2492cf3e011cbaea-SOMA_159-1.jpeg">
                  <img
                    class="lazyload alignleft size-medium wp-image-180"
                    src="http://www.artkillingapathy.com/wp-content/uploads/2492cf3e011cbaea-SOMA_159-1-200x300.jpeg"
                    data-orig-src="http://www.artkillingapathy.com/wp-content/uploads/2492cf3e011cbaea-SOMA_159-1-200x300.jpeg"
                    alt="2492cf3e011cbaea-SOMA_159-1"
                    width="200"
                    height="300"
                    srcset="data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27200%27%20height%3D%27300%27%20viewBox%3D%270%200%20200%20300%27%3E%3Crect%20width%3D%27200%27%20height%3D%273300%27%20fill-opacity%3D%220%22%2F%3E%3C%2Fsvg%3E"
                    data-srcset="https://www.artkillingapathy.com/wp-content/uploads/2492cf3e011cbaea-SOMA_159-1-200x300.jpeg
                    200w,
                    https://www.artkillingapathy.com/wp-content/uploads/2492cf3e011cbaea-SOMA_159-1-500x749.jpeg
                    500w,
                    https://www.artkillingapathy.com/wp-content/uploads/2492cf3e011cbaea-SOMA_159-1-683x1024.jpeg
                    683w,
                    https://www.artkillingapathy.com/wp-content/uploads/2492cf3e011cbaea-SOMA_159-1-700x1049.jpeg
                    700w,
                    https://www.artkillingapathy.com/wp-content/uploads/2492cf3e011cbaea-SOMA_159-1.jpeg
                    1068w"
                    data-sizes="auto"
                    data-orig-sizes="(max-width: 200px) 100vw, 200px" />
                </a>
                <a
                  href="http://www.artkillingapathy.com/wp-content/uploads/b171f56f6c003fad-SOMA_006.jpeg">
                  <img
                    class="lazyload alignleft size-medium wp-image-181"
                    src="http://www.artkillingapathy.com/wp-content/uploads/b171f56f6c003fad-SOMA_006-233x300.jpeg"
                    data-orig-src="http://www.artkillingapathy.com/wp-content/uploads/b171f56f6c003fad-SOMA_006-233x300.jpeg"
                    alt="b171f56f6c003fad-SOMA_006"
                    width="233"
                    height="300"
                    data-srcset="https://www.artkillingapathy.com/wp-content/uploads/b171f56f6c003fad-SOMA_006-233x300.jpeg
                    233w,
                    https://www.artkillingapathy.com/wp-content/uploads/b171f56f6c003fad-SOMA_006-500x642.jpeg
                    500w,
                    https://www.artkillingapathy.com/wp-content/uploads/b171f56f6c003fad-SOMA_006-700x899.jpeg
                    700w,
                    https://www.artkillingapathy.com/wp-content/uploads/b171f56f6c003fad-SOMA_006-797x1024.jpeg
                    797w,
                    https://www.artkillingapathy.com/wp-content/uploads/b171f56f6c003fad-SOMA_006.jpeg
                    1246w"
                    data-sizes="auto"
                    data-orig-sizes="(max-width: 233px) 100vw, 233px" />
                </a>
              </p>
              <h3>
                Eleanor Goldfield Featured in Italian Magazine GIOIA for MLK,
                Jr. Anniversary
              </h3>
                <a
                  title="Eleanor Goldfield Featured in Italian Magazine GIOIA
                  for MLK, Jr. Anniversary"
                  href="http://www.artkillingapathy.com/wp-content/uploads/I_HAVE_A_DREAM_GIOIA.jpg"
                  rel="prettyPhoto">
                  <img
                    class="lazyload"
                    src="http://www.artkillingapathy.com/wp-content/uploads/I_HAVE_A_DREAM_GIOIA-221x300.jpg"
                    alt="Eleanor Goldfield Featured in Italian Magazine GIOIA
                    for MLK, Jr. Anniversary" />
                </a>
                <a
                  title="Eleanor Goldfield Featured in Martin Luther King
                  Anniversary"
                  href="http://www.artkillingapathy.com/wp-content/uploads/I_HAVE_A_DREAM_GIOIA-2.jpg"
                  rel="prettyPhoto">
                  <img
                    class="lazyload"
                    src="http://www.artkillingapathy.com/wp-content/uploads/I_HAVE_A_DREAM_GIOIA-2-221x300.jpg"
                    alt="Eleanor Goldfield Featured in Martin Luther King
                    Anniversary" />
                </a> -->
<style>
  section {
    padding: 0 var(--containerPadding);
    max-width: 40rem;
    margin: 0 auto;
  }
</style>
