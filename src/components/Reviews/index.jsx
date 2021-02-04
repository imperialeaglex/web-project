import React from 'react';
import Slider from 'react-slick';
import { Review } from 'components/Review';
import img1 from 'assets/reviews/review1.png';
import img2 from 'assets/reviews/review2.png';
import img3 from 'assets/reviews/review3.jpg';
import img4 from 'assets/reviews/review4.png';
import img5 from 'assets/reviews/review5.png';
import img6 from 'assets/reviews/review6.png';
import img7 from 'assets/reviews/review7.png';
import img8 from 'assets/reviews/review8.jpg';

export const Reviews = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8]

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const contents = [
    'Долгие поиски единственного и неповторимого мастера на многострадальный сайт www.cielparfum.com, который был собран крайне некомпетентным программистом и раз в месяц стабильно грозил погибнуть, привели меня на сайт и, в итоге, к ребятам из Drupal-coder. И вот уже практически полгода как не проходит и дня, чтобы я не поудивлялась и не порадовалась своему везению! Починили все, что не работало - от поиска до отображения меню. Провели редизайн - не отходя от желаемого, но со своими существенными и качественными дополнениями. Осуществили ряд проектов - конкурсы, тесты и тд. А уж мелких починок и доработок - не счесть! И главное - все качественно и быстро (не взирая на не самый "быстрый" тариф). Есть вопросы - замечательный Алексей всегда подскажет, поддержит, отремонтирует и/или просто сделает с нуля. Есть задумка для реализации - замечательный Сергей обсудит и предложит идеальный вариант. Есть проблема - замечательные Надежда и Роман починят, поправят, сделают! Ребята доказали, что эта CMS - мощная и грамотная система управления. Надеюсь, что наше сотрудничество затянется надолго! Спасибо!!!',
    'Сергей — профессиональный, высококвалифицированый программист с огромным опытом в ИТ. Я долгое время общался с топ-фрилансерами (вся первая двадцатка) на веблансере и могу сказать, что С СЕРГЕЕМ ОНИ И РЯДОМ НЕ ВАЛЯЛИСЬ. Работаем с Сергеем до сих пор. С ним приятно работать, я доволен.&nbsp;',
    'Выражаю глубочайшую благодарность команде специалистов компании "Инитлаб" и лично Дмитрию Купянскому и Алексею Синице. Сайт был первоклассно перевёрстан из старой табличной модели в новую на базе Drupal с дополнительной функциональностью. Всё было сделано с высочайшим качеством и точно в сроки. Всем кому хочется без нервов и лишних вопросов разработать сайт рекомендую обращаться именно к этой команде профессионалов.',
    'Моя электронная газета www.nashagazeta.ch существует в Швейцарии уже 10 лет. За это время мы сменили 7 специалистов по техподдержке, и только сейчас, в последние несколько месяцев, с начала сотрудничества с Алексеем Синицей и его командой, я впервые почувствовала, что у меня есть надежный технический тыл. Без громких слов и обещаний, ребята просто спокойно и качественно делают работу, быстро реагируют, находят решения, предлагают конкретные варианты улучшения функционирования сайта и сами их оперативно осуществляют. Сотрудничество с ними – одно удовольствие!',
    'Наша компания Estee Design занимается дизайном интерьеров. Сайт сверстан на Drupal. Искали программистов под выполнение ряда небольших изменений и корректировок по сайту. Пообщавшись с Алексеем Синицей, приняли решение о начале работ с компанией Initlab/drupal-coder. Сотрудничеством довольны на 100%. Четкая и понятная система коммуникации, достаточно оперативное решение по задачам. Дали рекомендации по улучшению програмной части сайта, исправили ряд скрытых ошибок. Никогда не пишу отзывы (нет времени), но в данном случае, по просьбе Алексея, не могу не рекомендовать Initlab другим людям - действительно компания профессионалов. ',
    'Наша компания за несколько лет сменила несколько команд программистов и специалистов техподдержки, и почти отчаялась найти на российском рынке адекватное профессиональное предложение по разумной цене. Пока мы не начали работать с командой "Инитлаб", воплощающей в себе все наши представления о нормальной системе взаимодействия в сочетании с профессиональным неравнодушием. Впервые в моей деловой практике я чувствую надежно прикрытыми важнейшие задачи в жизни электронного СМИ, при том, что мои коллеги работают за сотни километров от нас и мы никогда не встречались лично.',
    'За довольно продолжительный срок (2014 - 2016 годы) весьма плотной работы (интернет-магазин на безумно замороченном Drupal 6: устраняли косяки разработчиков, ускоряли сайт, сделали множество новых функций и т.п.) - только самые добрые эмоции от работы с командой Initlab / Drupal-coder: всегда можно рассчитывать на быструю и толковую помощь, поддержку, совет. Даже сейчас, не смотря на то, что мы почти год не работали на постоянной основе (банально закончились задачи), случайно возникшая проблема с сайтом была решена мгновенно! В общем, только самые искренние благодарности и рекомендации! Спасибо! )',
    'Хотел поблагодарить за работу над нашими сайтами. За 4 месяца работы привели сайт в порядок, а самое главное получили инструмент, с помощью мы теперь можем быстро и красиво выставлять контент для образования и работы с предприятиями http://lpcma.tsu.ru/ru/post/reference_material Ну и многому научись благодаря работе с вами. Мы очень рады, что удалось найти настолько компетентных ребят ) '
  ];

  const descriptions = [
    <p>
      С уважением, Наталья Сушкова руководитель Отдела веб-проектов Группы компаний «Си Эль
      парфюм»
      <a href="http://www.cielparfum.com/" tabIndex="0" className="mapp">http://www.cielparfum.com/</a>
    </p>,
    <p>Сергей Чепурко, руководитель проекта
      <a href="http://www.personal-writer.com/" className="mapp">www.personal-writer.com</a>
      &nbsp;/&nbsp;
      <a href="http://www.writers-united.org/" className="mapp">www.writers-united.org</a>
    </p>,
    <p>Леонид Александрович Ледовский</p>,
    <p>Надежда Сикорская, Женева, Швейцария</p>,
    <p>
      Кузин Вадим, руководитель строительного направления Дизайн-бюро интерьеров Estee
      <a href="http://www.cielparfum.com/" tabIndex="0" className="mapp">estee-design.ru</a>
    </p>,
    <p>
      Константин Бельский, зам. генерального директора портала
      <a href="http://www.cielparfum.com/" tabIndex="0" className="mapp">Serebro.Ag</a>
    </p>,
    <p>С уважением, Владислав,
      <a href="http://www.cielparfum.com/" tabIndex="0" className="mapp">Кабельщик.ру</a>
    </p>,
    <p>Дмитрий Новиков,
      <a href="http://www.cielparfum.com/" tabIndex="0" className="mapp">lpcma.tsu.ruу</a>
    </p>
  ]

  const reviewsJSX = contents.map((content, i) => (
    <Review content={content} description={descriptions[i]} className="slick">
      <img src={images[i]} alt="#" width="100" height="50"/>
    </Review>
  ));

  return (
    <div className="otzyvi container">
      <h2 className="block-title"> Отзывы </h2>
      <div className="form-group">
        <div className="container">
          <div className="view-content">
            <Slider {...settings}>
              {[...reviewsJSX]}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};