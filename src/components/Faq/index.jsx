// Core
import React from 'react';

export const Faq = () => {
  return (
    <section id="block-faq" className="dc-section faq-block block">
      <h2 className="block-title-2">FAQ</h2>
      <div className="field field--name-body">
        <div>
          <div className="container">
            <div aria-multiselectable="true" className="panel-group panel-faq" id="accordion">
              <div className="panel panel-default panel_close" itemProp="mainEntity">
                <div className="panel-heading">
                  <h4 className="panel-title" itemProp="name"><a className="panel-btn" aria-controls="collapse2"
                                                             aria-expanded="false" data-parent="#accordion"
                                                             data-toggle="collapse" href="#collapse2" role="button">Кто
                    непосредственно занимается поддержкой? </a></h4>
                </div>
                <div className="panel-collapse collapse" id="collapse2" role="tabpanel"
                     itemProp="acceptedAnswer">
                  <div className="panelText" itemProp="text">Сайты поддерживают штатные сотрудники ООО «Инитлаб», г.
                    Краснодар, прошедшие специальное
                    обучение и имеющие опыт работы с Друпал от 4 до 15 лет: 8 web-разработчиков, 2 специалиста по
                    SEO, 4 системных администратора.
                  </div>
                </div>
              </div>
              <div className="panel panel-default panel_close" itemProp="mainEntity">
                <div className="panel-heading" id="heading3" role="tab">
                  <h4 className="panel-title" itemProp="name"><a className="panel-btn" aria-controls="collapse3"
                                                             aria-expanded="false" data-parent="#accordion"
                                                             data-toggle="collapse" href="#collapse3" role="button">Как
                    организована работа поддержки? </a></h4>
                </div>
                <div aria-labelledby="heading3" className="panel-collapse collapse" id="collapse3" role="tabpanel"
                     itemProp="acceptedAnswer">
                  <div className="panelText" itemProp="text">Клиент выбирает один из тарифов и делает предоплату. Все заявки
                    на работы по сайту
                    заводятся в нашу систему Service desk. В течение времени реакции по тарифу закрепленный за проектом
                    специалист
                    приступает к выполнению заявки, фиксирует время, потраченное на выполнение заявки и закрывает заявку
                    по
                    окончанию работы. Клиент может посмотреть все заявки в работе и отработанные часы
                    в своем кабинете через веб-интерфейс.
                  </div>
                </div>
              </div>
              <div className="panel panel-default panel_close" itemProp="mainEntity">
                <div className="panel-heading" id="heading4" role="tab">
                  <h4 className="panel-title" itemProp="name"><a className="panel-btn" aria-controls="collapse4"
                                                             aria-expanded="false" data-toggle="collapse"
                                                             href="#collapse4" role="button">Что происходит, когда
                    отработаны все предоплаченные часы за месяц? </a></h4>
                </div>
                <div aria-labelledby="heading4" className="panel-collapse collapse" id="collapse4" role="tabpanel"
                     itemProp="acceptedAnswer">
                  <div className="panelText" itemProp="text">Мы уведомляем Клиента, о том, что последующие заявки в этом
                    месяце будут выполняться с
                    доплатой согласно тарифу либо будут перенесены по срокам на следующий месяц. В конце месяца, в
                    котором были заявки с доплатой, клиентам отправляется счет на доплату по факту выполненных работ
                    сверх предоплаты тарифного плана.
                  </div>
                </div>
              </div>

              <div className="panel panel-default panel_close" itemProp="mainEntity">
                <div className="panel-heading" id="heading5" role="tab">
                  <h4 className="panel-title" itemProp="name"><a className="panel-btn" aria-controls="collapse5"
                                                             aria-expanded="false" data-parent="#accordion"
                                                             data-toggle="collapse" href="#collapse5" role="button">Что
                    происходит, когда не отработаны все предоплаченные часы за месяц? </a></h4>
                </div>

                <div aria-labelledby="heading5" className="panel-collapse collapse" id="collapse5" role="tabpanel"
                     itemProp="acceptedAnswer">
                  <div className="panelText" itemProp="text">Предоплата не переносится на следующий месяц и деньги не
                    возвращаются. Для продолжения
                    поддержки сайта необходимо оплатить предоплату согласно выбранному тарифу за следующий месяц.
                  </div>
                </div>
              </div>

              <div className="panel panel-default panel_close" itemProp="mainEntity">
                <div className="panel-heading" id="heading6" role="tab">
                  <h4 className="panel-title" itemProp="name"><a className="panel-btn" aria-controls="collapse6"
                                                             aria-expanded="false" data-parent="#accordion"
                                                             data-toggle="collapse" href="#collapse6" role="button">Как
                    происходит оценка и согласование планируемого времени на выполнение
                    заявок? </a></h4>
                </div>

                <div aria-labelledby="heading6" className="panel-collapse collapse" id="collapse6" role="tabpanel"
                     itemProp="acceptedAnswer">
                  <div className="panelText" itemProp="text">Заявки, выполнение которых укладывается в оставшееся
                    предоплаченное время, по умолчанию
                    не оцениваются и время не согласовывается, мы стараемся сэкономить время и быстро выполнить работу.
                    Если видим,
                    что задача не укладывается в предоплаченное время, то делаем примерную оценку по времени и
                    согласовываем оценку
                    трудоемкости с Клиентом. Клиент может явно попросить предварительно оценить работу по времени и
                    согласовать
                    трудоемкость, направив заявку с припиской в теме письма «Оценить работу». В этом случае время на
                    оценку также
                    оплачивается согласно тарифу поддержки. Если время фактического выполнения превышает заранее
                    согласованное, то
                    уточняем оценку, договариваемся о возможной доплате и переносе сроков по задаче. На наше усмотрение
                    большие
                    задачи, трудоемкость которых мы можем заранее оценить, например, разработка отдельных модулей или
                    самостоятельных разделов сайта по подробному техническому заданию, могут быть вынесены из поддержки
                    в отдельный
                    проект на договорных условиях.
                  </div>
                </div>
              </div>

              <div className="panel panel-default panel_close" itemProp="mainEntity">
                <div className="panel-heading" id="heading7" role="tab">
                  <h4 className="panel-title" itemProp="name"><a className="panel-btn" aria-controls="collapse7"
                                                             aria-expanded="false" data-parent="#accordion"
                                                             data-toggle="collapse" href="#collapse7" role="button">Сколько
                    программистов выделяется на проект? </a></h4>
                </div>

                <div aria-labelledby="heading7" className="panel-collapse collapse" id="collapse7" role="tabpanel"
                     itemProp="acceptedAnswer">
                  <div className="panelText" itemProp="text">1-2 человека. За каждым проектом закрепляется один
                    ответственный специалист, через
                    которого проходят все заявки. Все заявки становятся в очередь к ответственному в порядке их
                    поступления в
                    Helpdesk. Возможно привлечение дополнительных штатных специалистов в поддержку проекта в случаях,
                    когда:
                    <ul>
                      <li>объем заявок стабильно большой и ответственный не успевает выполнять задачи;</li>
                      <li>ответственный не может начать работу по заявке в срок (заболел, ушел в отпуск);</li>
                      <li>специфика задачи такова, что кто-то в команде сделает эту работу существенно быстрее.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="panel panel-default panel_close" itemProp="mainEntity">
                <div className="panel-heading" id="heading8" role="tab">
                  <h4 className="panel-title" itemProp="name"><a className="panel-btn" aria-controls="collapse8"
                                                             aria-expanded="false" data-parent="#accordion"
                                                             data-toggle="collapse" href="#collapse8" role="button">Как
                    подать заявку на внесение изменений на сайте? </a></h4>
                </div>

                <div aria-labelledby="heading8" className="panel-collapse collapse" id="collapse8" role="tabpanel"
                     itemProp="acceptedAnswer">
                  <div className="panelText" itemProp="text">Для подачи заявки на внесение изменений на сайте необходимо
                    написать письмо на email
                    поддержки с указанием в теме письма домена сайта и подробным описанием вносимых изменений.
                  </div>
                </div>
              </div>

              <div className="panel panel-default panel_close" itemProp="mainEntity">
                <div className="panel-heading" id="heading10" role="tab">
                  <h4 className="panel-title" itemProp="name"><a className="panel-btn" aria-controls="collapse10"
                                                             aria-expanded="false" data-parent="#accordion"
                                                             data-toggle="collapse" href="#collapse10" role="button">Как
                    подать заявку на добавление пользователя, изменение настроек веб-сервера
                    и других задач по администрированию? </a></h4>
                </div>

                <div aria-labelledby="heading10" className="panel-collapse collapse" id="collapse10" role="tabpanel"
                     itemProp="acceptedAnswer">
                  <div className="panelText" itemProp="text">Для любых задач по администрированию необходимо написать письмо
                    на email поддержки с
                    указанием домена сайта и описанием задачи.
                  </div>
                </div>
              </div>

              <div className="panel panel-default panel_close" itemProp="mainEntity">
                <div className="panel-heading" id="heading11" role="tab">
                  <h4 className="panel-title" itemProp="name"><a className="panel-btn" aria-controls="collapse11"
                                                             aria-expanded="false" data-parent="#accordion"
                                                             data-toggle="collapse" href="#collapse11" role="button">В
                    течение какого времени начинается работа по заявке? </a></h4>
                </div>

                <div aria-labelledby="heading11" className="panel-collapse collapse" id="collapse11" role="tabpanel"
                     itemProp="acceptedAnswer">
                  <div className="panelText" itemProp="text">Время реакции зависит типа заявки и от выбранного тарифного
                    плана. Время реакции на сбои,
                    обнаруживаемые системой мониторинга, от 2-х часов в рабочее время. Время реакции на заявки по
                    доработке сайта
                    от 24-х часов в рабочее время. Время реакции может быть более гибко определено в SLA.
                  </div>
                </div>
              </div>

              <div className="panel panel-default panel_close" itemProp="mainEntity">
                <div className="panel-heading" id="heading13" role="tab">
                  <h4 className="panel-title" itemProp="name"><a className="panel-btn" aria-controls="collapse13"
                                                             aria-expanded="false" data-parent="#accordion"
                                                             data-toggle="collapse" href="#collapse13" role="button">В
                    какое время работает поддержка? </a></h4>
                </div>

                <div aria-labelledby="heading13" className="panel-collapse collapse" id="collapse13" role="tabpanel"
                     itemProp="acceptedAnswer">
                  <div className="panelText" itemProp="text">Время работы поддержки с 10 до 18 часов (MSK, GMT+3) в рабочие
                    дни. Мы также можем выполнять работы сверхурочно по договоренности с оплатой по двойной ставке часа.
                  </div>
                </div>
              </div>

              <div className="panel panel-default panel_close" itemProp="mainEntity">
                <div className="panel-heading" id="heading14" role="tab">
                  <h4 className="panel-title" itemProp="name"><a className="panel-btn" aria-controls="collapse14"
                                                             aria-expanded="false" data-parent="#accordion"
                                                             data-toggle="collapse" href="#collapse14" role="button">Подходят
                    ли услуги поддержки, если необходимо произвести обновление ядра
                    Drupal или модулей? </a></h4>
                </div>

                <div aria-labelledby="heading14" className="panel-collapse collapse" id="collapse14" role="tabpanel"
                     itemProp="acceptedAnswer">
                  <div className="panelText" itemProp="text">Обновление безопасности в рамках одной ветки Drupal делается в
                    режиме поддержки на всех
                    тарифных планах. Обновление, связанное с переходом на следующую ветку Drupal, например апгрейд с 6.х
                    на 7.х,
                    лучше делать в рамках отдельного проекта, стоимость и сроки которого мы можем предложить после
                    проведения
                    аудита апгрейда. Аудит апгрейда включает в себя анализ путей миграции и трудоемкости обновления для
                    всех
                    модулей, блоков кода, Views, тем оформления, стоит от 6500 рублей и, как правило, занимает 1-3 дня,
                    в
                    зависимости от размера сайта.
                  </div>
                </div>
              </div>

              <div className="panel panel-default panel_close" itemProp="mainEntity">
                <div className="panel-heading" id="heading15" role="tab">
                  <h4 className="panel-title" itemProp="name"><a className="panel-btn" aria-controls="collapse15"
                                                             aria-expanded="false" data-parent="#accordion"
                                                             data-toggle="collapse" href="#collapse15" role="button">Можно
                    ли пообщаться со специалистом голосом или в мессенджере? </a></h4>
                </div>
                <div aria-labelledby="heading15" className="panel-collapse collapse" id="collapse15" role="tabpanel">
                  <div className="panelText" itemProp="text">Для этого нужно написать заявку на
                    консультацию на email поддержки и сообщить удобное время и контактные данные.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};