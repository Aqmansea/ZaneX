import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Github } from 'lucide-react';
import projectWebDev from '@/assets/project-web-dev.webp';
import projectMobileApp from '@/assets/project-mobile-app.webp';
import projectBranding from '@/assets/project-branding.webp';

const PortfolioSection = () => {
  const [filter, setFilter] = useState('all');
  const assetBase = (import.meta.env.BASE_URL || '').replace(/\/?$/, '/');
  const buildPublicUrl = (path: string) => `${assetBase}${path.replace(/^\/+/, '')}`;

  const projects = [
    {
      id: 1,
      title: 'Learning.com - Bootstrap 學習平台',
      description: '基於 Bootstrap 5 構建的現代化學習平台，整合漂亮的介面設計、響應式佈局、並包含登入表單、課程卡片等功能。',
      image: projectWebDev,
      category: 'web',
      technologies: ['Bootstrap 5', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      liveUrl: buildPublicUrl('projects/bootstrap/alex.html'),
      githubUrl: 'https://github.com/Aqmansea/Aqmansea.github.io/tree/main/Bootstrap',
      results: {
        responsive: 'RWD 完整支援',
        features: '包含登入、課程、帳戶',
        design: '現代化設計'
      }
    },
    {
      id: 2,
      title: '成績計算網站',
      description: '一個互動式的成績計算工具，支援成績輸入、排序功能，提供學生快速計算成績。展示基礎的 JavaScript 互動和表單處理。',
      image: projectMobileApp,
      category: 'web',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Font Awesome', 'Responsive'],
      liveUrl: buildPublicUrl('projects/grade/index.html'),
      githubUrl: 'https://github.com/Aqmansea/Aqmansea.github.io/tree/main/Grade',
      results: {
        functionality: '排序、計算、統計',
        responsive: 'RWD 優化',
        interactive: '完整互動效果'
      }
    },
    {
      id: 3,
      title: '小遊戲集合 (Snake, Ball, Guess)',
      description: '使用 JavaScript 開發的三款經典小遊戲：貪吃蛇、彈跳球、猜數字。演示基礎的遊戲邏輯、事件處理、狀態管理。',
      image: projectBranding,
      category: 'web',
      technologies: ['JavaScript', 'HTML5', 'Canvas', 'Game Logic', 'Event Handling'],
      liveUrl: buildPublicUrl('projects/snake/index.html'),
      githubUrl: 'https://github.com/Aqmansea/Aqmansea.github.io/tree/main/snake',
      results: {
        games: '3 款完整遊戲',
        learning: '演示基礎邏輯',
        interactive: '完整互動體驗'
      }
    },
    {
      id: 4,
      title: 'Canvas �?球�??�戲',
      description: '�c�L Canvas ��z�@???�J�}�`�A�ھپ�q�l�W�X�B��ơB�J�D�Ƨ@�򪺿�۳B��',
      image: buildPublicUrl('projects/ball/ball.png'),
      category: 'web',
      technologies: ['JavaScript', 'HTML5', 'Canvas'],
      liveUrl: buildPublicUrl('projects/ball/index.html'),
      githubUrl: '#',
      results: {
        interactive: '�u���W�n',
        physics: '?��D��G',
        learning: '�{���լd'
      }
    },
    {
      id: 5,
      title: '�өƦr�??�戲',
      description: '�x�ěz�Ʀr�֦��Ɛ귽�A�H���ܥN��P�G�����o�쪺�I�ծʹ��G���k�T�_�C',
      image: buildPublicUrl('projects/guess/guess.png'),
      category: 'web',
      technologies: ['JavaScript', 'HTML5', 'DOM'],
      liveUrl: buildPublicUrl('projects/guess/index.html'),
      githubUrl: '#',
      results: {
        logic: '��ߪ��Q',
        feedback: '�򥻷|�i',
        usability: '�@�ڮ�'
      }
    },
    {
      id: 6,
      title: 'Web Run Code（jQuery）',
      description: '�H jQuery �[�\���}�X�եΨ��A�H�����@�P�b�D�c�֦��W���}�l HTML/CSS/JS �{��',
      image: buildPublicUrl('projects/web-run-code/Web run.png'),
      category: 'web',
      technologies: ['jQuery', 'HTML5', 'CSS3'],
      liveUrl: buildPublicUrl('projects/web-run-code/index.html'),
      githubUrl: '#',
      results: {
        utility: '�t�~�~��',
        integration: '�s�Ҿ�Ͳ',
        speed: '�פ�Q��'
      }
    },
  ];

  const categories = [
    { id: 'all', label: '全部項目' },
    { id: 'web', label: '網頁開發' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            我的 <span className="text-accent-gradient">作品</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            以下為前端互動與開發練習，展示 HTML5、CSS3、JavaScript、Bootstrap 等技術的應用。
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? 'accent' : 'minimal'}
                onClick={() => setFilter(category.id)}
                className="transition-spring"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-1 gap-12">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden shadow-card hover:shadow-elegant transition-smooth animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row">
                
                {/* Project Image */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 lg:h-full object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-smooth" />
                </div>

                {/* Project Details */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col h-full">
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-4 bg-gradient-accent text-accent-foreground">
                      網頁開發
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-4">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">使用技術：</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3">主要特性：</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {Object.entries(project.results).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-muted rounded-lg">
                          <div className="font-semibold text-accent">{value}</div>
                          <div className="text-sm text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-auto">
                    <Button variant="accent" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Eye className="h-4 w-4 mr-2" />
                        查看演示
                      </a>
                    </Button>
                    <Button variant="minimal" className="flex-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        查看代碼
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            有興趣與我合作開發您的下一個項目嗎？
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            開始對話
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
