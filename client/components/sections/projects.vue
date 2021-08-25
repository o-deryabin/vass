<template>
  <section class="section section--projects" id="projects">
    <v-container>
      <h2 class="sub-title animate__animated animate__fadeInUp">
        Проекты студии
      </h2>
      <v-divider class="section__divider"></v-divider>

      <v-row
        v-for="(item, index) in projects"
        :key="index"
        class="section__content"
        :class="[item.class, { 'mt-md-16': index === 0 }]"
      >
        <v-col md="4" class="d-flex flex-column justify-center section__left">
          <h4 class="section__title">{{ item.title }}</h4>
          <div class="section__separator">
            <p class="section__text">{{ item.text }}</p>
            <h5 class="section__title--second">{{ item.task.title }}</h5>
            <p class="section__text">{{ item.task.text }}</p>
            <h5 class="section__title--second">{{ item.solution.title }}</h5>
            <ul class="section__text mb-4">
              <li
                v-for="(text, textIndex) in item.solution.text"
                :key="textIndex"
              >
                {{ text }}
              </li>
            </ul>
            <h5 class="section__title--second">{{ item.result.title }}</h5>
            <p class="section__text">{{ item.result.text }}</p>
          </div>
          <a
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
            class="section__btn"
            >Посмотреть<br />
            проект <ProjectsSvg
          /></a>
        </v-col>
        <v-col md="8" class="section__right d-flex align-center"
          ><img :src="'/img/projects' + item.img" class="section__image"
        /></v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import ProjectsSvg from "../svg/projects.vue";
export default {
  components: { ProjectsSvg },
  data: () => ({
    projects: [
      {
        title: "AsiaThaiSpa",
        text: "Первый в Казахстане SPA-бутик тайского и балийского массажа.",
        link: "https://asiathaispa.kz",
        img: "/AsiaThaiSpa.webp",
        class: "first",
        task: {
          title: "Задача",
          text: "Создать сайт под ключ и вывести его в топ!",
        },
        solution: {
          title: "Решение",
          text: [
            "Разработали сайт с уникальным дизайном.",
            "Настроили контекстную рекламу.",
            "Провели ряд мероприятий по СЕО оптимизации.",
          ],
        },
        result: {
          title: "Результат",
          text: "Сайт находится в топ 3. Каждый месяц более 3000 новых пользователей.",
        },
      },
      {
        title: "Metalset",
        text: "Является стратегическим партнером ведущих металлургических заводов Казахстана и России.",
        link: "https://www.metalset.kz",
        img: "/Metalset.webp",
        class: "second",
        task: {
          title: "Задача",
          text: "Разработать интернет магазин под ключ с большим каталогом товаров.",
        },
        solution: {
          title: "Решение",
          text: [
            "Разработали интернет магазин с понятным дизайном.",
            "Добавили около 300 000 товаров.",
          ],
        },
        result: {
          title: "Результат",
          text: "Понятный и простой в использовании для клиентов интернет магазин. И довольный заказчик.",
        },
      },
      {
        title: "Greenfax",
        text: "Творческая мастерская. Здесь вы можете заказать деревянные изделия и собирать их всей семьей.",
        link: "https://greenfax.kz",
        img: "/Greenfax.webp",
        class: "third text-black img-padding",
        task: {
          title: "Задача",
          text: "Создать интернет магазин с оплатой и доставкой",
        },
        solution: {
          title: "Решение",
          text: [
            "Разработали логотип.",
            "Разработали интернет магазин под ключ.",
            "Настроили СЕО оптимизацию.",
            "Настроили онлайн оплату.",
            "Подключили доставку разных курьерских служб.",
          ],
        },
        result: {
          title: "Результат",
          text: "Интернет магазин с красивым дизайном с онлайн оплатой и доставкой.",
        },
      },
      {
        title: "Cауда-24",
        text: "Интернет-магазин с максимально низкими ценами. Девиз компании: сделать покупку товаров в интернет-магазине приятным и выгодным процессом для вас.",
        link: "https://www.sauda24.kz/",
        img: "/Cауда-24.webp",
        class: "fourth",
        task: {
          title: "Задача",
          text: "Разработать интернет магазин с большим каталогом товаров.",
        },
        solution: {
          title: "Решение",
          text: [
            "Разработали интернет магазин.",
            "Добавили более 100 000 товаров. ",
            "Полностью оптимизировали по СЕО.",
            "Подключили интеграции с One Box и Каспи магазином.",
          ],
        },
        result: {
          title: "Результат",
          text: "Интернет магазин с большим каталогом и высокой посещаемостью.",
        },
      },
      {
        title: "Sfera-Plast",
        text: "ТОО «Сфера пласт» – это качественное производство и продажа гофрированных труб по всему Казахстану.",
        link: "https://sfera-plast.kz/",
        img: "/Sfera-Plast.webp",
        class: "fifth text-black img-padding",
        task: {
          title: "Задача",
          text: "Создать сайт под ключ и вывести его в топ!",
        },
        solution: {
          title: "Решение",
          text: [
            "Разработали сайт логичный и доступный.",
            "Настроили контекстную рекламу.",
          ],
        },
        result: {
          title: "Результат",
          text: "Сайт имеет посещаемость порядка 1000 новых пользователей. Несмотря на узкую специализацию.",
        },
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
$colors: (
  "first": "#705E55",
  "second": "#529BC3",
  "third": "#F7F3EE",
  "fourth": "#D95041",
  "fifth": "#FFFFFF",
);

@mixin set-colors($class, $color) {
  .section__content.#{$class} {
    .section {
      &__right {
        background-color: #{$color};
      }
      &__left,
      &__right {
        @media (max-width: 960px) {
          background-color: #{$color};
        }
      }
    }
  }
}

@each $class, $color in $colors {
  @include set-colors($class, $color);
}

.section--projects {
  .section__right {
    @media (min-width: 960px) {
      margin-left: 12px;
      flex: 0 0 calc(65.666667% - 12px);
      max-width: calc(65.666667% - 12px);
    }
  }
}

.section {
  &__separator {
    margin-top: 18px;
    margin-bottom: 20px;
    @media (min-width: 960px) {
      margin-top: 30px;
      margin-bottom: 50px;
    }
  }
  &__content {
    @media (max-width: 960px) {
      flex-direction: column-reverse;

      &.img-padding .section__image {
        padding: 40px 0;
      }

      &:not(.text-black) .section__title,
      &:not(.text-black) .section__title--second,
      &:not(.text-black) .section__text,
      &:not(.text-black) .section__btn {
        color: #fff;
      }

      &:not(.text-black) .section__btn {
        border-color: #fff;
        svg {
          fill: #fff;
        }
      }
    }
  }
  &__left {
    padding-bottom: 40px;
    @media (min-width: 960px) {
      padding: 120px 30px 120px 0;
    }
  }

  &__right {
    @media (min-width: 960px) {
      margin-left: 12px;
      flex: 0 0 calc(65.666667% - 12px);
      max-width: calc(65.666667% - 12px);
    }
  }

  &__title {
    font-family: Inter;
    line-height: 130%;
    letter-spacing: 0.07em;
    color: $c-grey;
    font-size: 18px;
    font-weight: 400;
    @media (min-width: 960px) {
      font-weight: 600;
      font-size: 24px;
    }
    &--second {
      font-weight: 600;
    }
  }
  &__text,
  &__title--second {
    font-family: Inter;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: 0.07em;
    color: $c-grey;
    @media (min-width: 960px) {
      font-size: 16px;
      font-weight: 400;
    }
  }
  &__image {
    max-width: 100%;
    @media (min-width: 960px) {
      padding: 0 90px;
    }
  }
  &__btn {
    font-size: 13px;
    line-height: 120%;
    color: #000000;
    border: 1px solid #aeaeae;
    padding: 14px 25px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    max-width: 186px;
    transition: 0.3s;
    background: transparent;
    text-transform: uppercase;
    &:hover {
      color: #fff;
      background: #000000;
      svg {
        fill: #fff;
      }
    }
    svg {
      transition: 0.3s;
      fill: #707070;
    }
  }
}
</style>