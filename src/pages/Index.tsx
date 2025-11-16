import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-tsu-primary">ТГУ</div>
            <span className="text-sm text-tsu-text-secondary">ДПО</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('programs')} className="text-tsu-text hover:text-tsu-primary transition-colors">Программы</button>
            <button onClick={() => scrollToSection('business')} className="text-tsu-text hover:text-tsu-primary transition-colors">Бизнесу</button>
            <button onClick={() => scrollToSection('government')} className="text-tsu-text hover:text-tsu-primary transition-colors">Государству</button>
            <button onClick={() => scrollToSection('contact')} className="text-tsu-text hover:text-tsu-primary transition-colors">Контакты</button>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6 tsu-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-white origin-left rotate-[30deg]"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-white origin-left rotate-[150deg]"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-white origin-left rotate-[270deg]"></div>
          </div>
        </div>
        
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            ДПО ТГУ. Обучение для роста: <br />карьеры, бизнеса, страны.
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
            Создаем образовательные системы для лидеров новой цифровой эпохи.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-tsu-primary hover:bg-white/90 font-semibold" onClick={() => scrollToSection('programs')}>
              Выбрать программу
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-tsu-primary font-semibold" onClick={() => scrollToSection('business')}>
              Для бизнеса
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-tsu-primary font-semibold" onClick={() => scrollToSection('government')}>
              Для государства
            </Button>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-tsu-text">Наши решения</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-tsu-light group">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-tsu-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">🧑‍💻</span>
                </div>
                <CardTitle className="text-2xl text-tsu-primary">Для карьеры</CardTitle>
                <CardDescription className="text-base">
                  Персональная траектория развития от ведущего университета
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-tsu-primary mt-1 flex-shrink-0" size={20} />
                    <span>600+ программ обучения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-tsu-primary mt-1 flex-shrink-0" size={20} />
                    <span>ИИ-подбор траектории</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-tsu-primary mt-1 flex-shrink-0" size={20} />
                    <span>Проекты с партнерами</span>
                  </li>
                </ul>
                <Button className="w-full bg-tsu-primary hover:bg-tsu-secondary" onClick={() => scrollToSection('contact')}>
                  Построить мою траекторию
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-tsu-light group">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-tsu-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">🏢</span>
                </div>
                <CardTitle className="text-2xl text-tsu-primary">Для бизнеса</CardTitle>
                <CardDescription className="text-base">
                  Кадровый суверенитет и цифровая трансформация
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-tsu-secondary mt-1 flex-shrink-0" size={20} />
                    <span>Аудит процессов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-tsu-secondary mt-1 flex-shrink-0" size={20} />
                    <span>Внедрение решений</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-tsu-secondary mt-1 flex-shrink-0" size={20} />
                    <span>Корпоративное обучение</span>
                  </li>
                </ul>
                <Button className="w-full bg-tsu-secondary hover:bg-tsu-primary" onClick={() => scrollToSection('contact')}>
                  Получить решение
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-tsu-light group">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-tsu-light/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">🏛️</span>
                </div>
                <CardTitle className="text-2xl text-tsu-primary">Для страны</CardTitle>
                <CardDescription className="text-base">
                  Технологическое лидерство через подготовку кадров
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-tsu-light mt-1 flex-shrink-0" size={20} />
                    <span>150+ вузов партнёров</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-tsu-light mt-1 flex-shrink-0" size={20} />
                    <span>Федеральные стандарты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-tsu-light mt-1 flex-shrink-0" size={20} />
                    <span>Масштабируемые решения</span>
                  </li>
                </ul>
                <Button className="w-full bg-tsu-light hover:bg-tsu-secondary" onClick={() => scrollToSection('contact')}>
                  Стать партнером
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-tsu-bg-light">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-tsu-text">
            Создаем системы, а не просто курсы
          </h2>
          <p className="text-center text-tsu-text-secondary text-lg mb-16 max-w-3xl mx-auto">
            Наш подход объединяет науку, технологии и практику для создания целостных образовательных экосистем
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🧠</span>
                <span className="text-3xl">⚙️</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-tsu-primary">Academic AI</h3>
              <p className="text-tsu-text-secondary leading-relaxed">
                Научный ИИ для глубины. Алгоритмы на исследованиях ТГУ анализируют когнитивные профили и оценивают реальные навыки.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🧩</span>
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-tsu-secondary">EdDev</h3>
              <p className="text-tsu-text-secondary leading-relaxed">
                Разработка образовательных систем. Проектируем и внедряем целостные среды развития вместо разрозненных курсов.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🔗</span>
                <span className="text-3xl">🏗️</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-tsu-light">Интегратор</h3>
              <p className="text-tsu-text-secondary leading-relaxed">
                Синтез науки, бизнеса и государства. Объединяем разнородные элементы в работающие экосистемы с измеримым результатом.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-tsu-text">
            Наши экосистемы работают
          </h2>

          <Tabs defaultValue="case1" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="case1">Data Science</TabsTrigger>
              <TabsTrigger value="case2">Корпоративное</TabsTrigger>
              <TabsTrigger value="case3">Федеральное</TabsTrigger>
            </TabsList>
            
            <TabsContent value="case1" className="animate-fade-in">
              <Card className="max-w-4xl mx-auto border-2">
                <CardHeader>
                  <CardTitle className="text-3xl text-tsu-primary">Траектория Data Science</CardTitle>
                  <CardDescription className="text-lg">От личного курса до федерального масштаба</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-tsu-primary text-white flex items-center justify-center font-bold flex-shrink-0">B2C</div>
                    <div className="flex-1">
                      <div className="h-0.5 bg-tsu-primary"></div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-tsu-secondary text-white flex items-center justify-center font-bold flex-shrink-0">B2B</div>
                    <div className="flex-1">
                      <div className="h-0.5 bg-tsu-secondary"></div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-tsu-light text-white flex items-center justify-center font-bold flex-shrink-0">B2G</div>
                  </div>
                  <p className="text-tsu-text leading-relaxed text-lg">
                    Выпускник курса по Data Science → разработка проекта для "Росэлектроники" → создание алгоритма для федеральной программы цифровизации
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 pt-4">
                    <div className="bg-tsu-bg-light p-4 rounded-lg">
                      <div className="text-3xl font-bold text-tsu-primary mb-1">600+</div>
                      <div className="text-sm text-tsu-text-secondary">Выпускников</div>
                    </div>
                    <div className="bg-tsu-bg-light p-4 rounded-lg">
                      <div className="text-3xl font-bold text-tsu-secondary mb-1">35%</div>
                      <div className="text-sm text-tsu-text-secondary">Рост зарплаты</div>
                    </div>
                    <div className="bg-tsu-bg-light p-4 rounded-lg">
                      <div className="text-3xl font-bold text-tsu-light mb-1">150+</div>
                      <div className="text-sm text-tsu-text-secondary">Компаний-партнёров</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="case2" className="animate-fade-in">
              <Card className="max-w-4xl mx-auto border-2">
                <CardHeader>
                  <CardTitle className="text-3xl text-tsu-secondary">Корпоративное обучение: Полюс</CardTitle>
                  <CardDescription className="text-lg">Системные симуляторы для реальных задач</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-tsu-text leading-relaxed text-lg">
                    Разработка системы симуляторов с ИИ-оценщиком для анализа действий персонала в реальных производственных условиях. Интеграция с корпоративными процессами.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 pt-4">
                    <div className="bg-tsu-bg-light p-4 rounded-lg">
                      <div className="text-3xl font-bold text-tsu-secondary mb-1">25%</div>
                      <div className="text-sm text-tsu-text-secondary">Рост эффективности</div>
                    </div>
                    <div className="bg-tsu-bg-light p-4 rounded-lg">
                      <div className="text-3xl font-bold text-tsu-secondary mb-1">3000+</div>
                      <div className="text-sm text-tsu-text-secondary">Обученных сотрудников</div>
                    </div>
                    <div className="bg-tsu-bg-light p-4 rounded-lg">
                      <div className="text-3xl font-bold text-tsu-secondary mb-1">12 мес</div>
                      <div className="text-sm text-tsu-text-secondary">Цикл внедрения</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="case3" className="animate-fade-in">
              <Card className="max-w-4xl mx-auto border-2">
                <CardHeader>
                  <CardTitle className="text-3xl text-tsu-light">Федеральный оператор: Код будущего</CardTitle>
                  <CardDescription className="text-lg">Единое качество на всю страну</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-tsu-text leading-relaxed text-lg">
                    Система обеспечения единого качества образования по программированию от Калининграда до Владивостока через 150+ вузов-партнёров.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 pt-4">
                    <div className="bg-tsu-bg-light p-4 rounded-lg">
                      <div className="text-3xl font-bold text-tsu-light mb-1">150+</div>
                      <div className="text-sm text-tsu-text-secondary">Вузов-партнёров</div>
                    </div>
                    <div className="bg-tsu-bg-light p-4 rounded-lg">
                      <div className="text-3xl font-bold text-tsu-light mb-1">50K+</div>
                      <div className="text-sm text-tsu-text-secondary">Слушателей</div>
                    </div>
                    <div className="bg-tsu-bg-light p-4 rounded-lg">
                      <div className="text-3xl font-bold text-tsu-light mb-1">85%</div>
                      <div className="text-sm text-tsu-text-secondary">Завершаемость</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 tsu-gradient text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Начните строить свою образовательную экосистему
          </h2>
          <p className="text-center text-white/90 text-lg mb-16 max-w-2xl mx-auto">
            Выберите направление и заполните форму — мы свяжемся с вами в течение 24 часов
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Для карьеры</CardTitle>
                <CardDescription>Персональная траектория развития</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваша текущая должность" className="border-2" />
                <Textarea placeholder="Цель развития" className="border-2 min-h-24" />
                <Button className="w-full bg-tsu-primary hover:bg-tsu-secondary text-white">
                  Подобрать траекторию
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Для бизнеса</CardTitle>
                <CardDescription>Кадровые решения для компании</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Название компании" className="border-2" />
                <Textarea placeholder="Ключевая задача" className="border-2 min-h-24" />
                <Button className="w-full bg-tsu-secondary hover:bg-tsu-primary text-white">
                  Заказать аудит
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Для государства</CardTitle>
                <CardDescription>Масштабные образовательные проекты</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Организация" className="border-2" />
                <Textarea placeholder="Проект/направление" className="border-2 min-h-24" />
                <Button className="w-full bg-tsu-light hover:bg-tsu-secondary text-white">
                  Обсудить партнерство
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-tsu-text text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">ТГУ ДПО</div>
              <p className="text-white/70 text-sm">
                Томский государственный университет. Дополнительное профессиональное образование.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Программы</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Для карьеры</li>
                <li>Для бизнеса</li>
                <li>Для государства</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">О нас</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Методология</li>
                <li>Кейсы</li>
                <li>Партнёры</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>+7 (3822) XXX-XXX</li>
                <li>info@dpo.tsu.ru</li>
                <li>г. Томск, пр. Ленина, 36</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            © 2024 Томский государственный университет. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
