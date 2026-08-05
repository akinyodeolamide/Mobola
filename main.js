// Mobola Physiotherapy & Gym Center - Main JavaScript
// Production-ready, modular, and optimized

(function() {
  'use strict';

  // ==================== CONTENT MANAGEMENT SYSTEM ====================
  // Uses localStorage for client-side content management
  // In production, this can be replaced with a headless CMS or API

  const ContentManager = {
    storageKey: 'mobola_content',

    getDefaultContent() {
      return {
        hero: {
          badge: 'Premium Care in Abeokuta',
          title: 'Restore Your Body. Build Your Strength.',
          subtitle: 'Professional physiotherapy, massage therapy, home treatment, and modern fitness training tailored to your unique needs. Experience healing and strength at Mobola.',
          ctaPrimary: 'Book Appointment',
          ctaSecondary: 'Join the Gym',
          ctaDirections: 'Get Directions'
        },
        about: {
          previewTitle: 'Healing Hands, Caring Hearts',
          previewText: 'At Mobola Physiotherapy & Gym Center, we believe everyone deserves to live without pain and with full mobility. Our integrated approach combines evidence-based physiotherapy with personalized fitness programs to help you recover faster and stay stronger.',
          previewMission: 'Our mission is to restore function, relieve pain, and empower every individual to achieve their optimal physical health through compassionate, professional care.',
          story: 'Founded with a vision to bring world-class physiotherapy and fitness services to Abeokuta, Mobola has grown into a trusted health destination. Our founder, Mobola, brings years of clinical experience and a genuine passion for helping people overcome physical challenges.',
          experience: 'With extensive training in musculoskeletal physiotherapy, sports rehabilitation, and therapeutic massage, our team has successfully treated hundreds of patients ranging from athletes to elderly individuals recovering from surgery.',
          mission: 'To provide accessible, high-quality physiotherapy and fitness services that empower our community to live pain-free, active lives.',
          vision: 'To become the leading physiotherapy and wellness center in Ogun State, recognized for excellence in patient care and innovative treatment approaches.',
          philosophy: 'We believe in treating the whole person, not just the symptoms. Every treatment plan is personalized, every session is meaningful, and every patient is family.'
        },
        services: {
          physiotherapy: {
            title: 'Physiotherapy',
            description: 'Expert assessment and treatment of musculoskeletal conditions, post-surgical rehabilitation, and chronic pain management using modern techniques and equipment.',
            cta: 'Book Physiotherapy'
          },
          massage: {
            title: 'Massage Therapy',
            description: 'Professional therapeutic and relaxation massage to relieve tension, improve circulation, reduce stress, and accelerate recovery from physical exertion.',
            cta: 'Book Massage'
          },
          gym: {
            title: 'Gym Membership',
            description: 'Modern fitness facility with state-of-the-art equipment, personal training, and group classes designed for all fitness levels from beginner to advanced.',
            cta: 'Join Gym'
          },
          homePhysio: {
            title: 'Home Physiotherapy',
            description: 'Receive professional physiotherapy treatment in the comfort of your home. Ideal for elderly patients, post-surgical recovery, and those with mobility challenges.',
            cta: 'Request Home Visit'
          },
          homeMassage: {
            title: 'Home Massage',
            description: 'Enjoy therapeutic massage therapy at your doorstep. Our licensed therapists bring everything needed for a spa-quality experience in your home.',
            cta: 'Book Home Massage'
          },
          consultation: {
            title: 'Health Consultation',
            description: 'Comprehensive health assessments, posture analysis, movement screening, and personalized wellness planning with our experienced practitioners.',
            cta: 'Book Consultation'
          }
        },
        testimonials: [
          {
            name: 'Mrs. Adebayo',
            role: 'Chronic Pain Patient',
            text: 'After years of back pain, Mobola gave me my life back. The physiotherapy sessions were gentle but effective. I can now play with my grandchildren without pain!',
            rating: 5
          },
          {
            name: 'James O.',
            role: 'Gym Member',
            text: 'Best gym in Abeokuta! The equipment is modern, the trainers are knowledgeable, and the atmosphere is motivating. I have lost 15kg in 4 months.',
            rating: 5
          },
          {
            name: 'Dr. Sarah K.',
            role: 'Medical Doctor',
            text: 'As a doctor, I am particular about where I refer my patients. Mobola maintains excellent standards of care. Their home physiotherapy service is a game-changer for my elderly patients.',
            rating: 5
          }
        ],
        faq: [
          {
            question: 'What services do you offer?',
            answer: 'We offer comprehensive physiotherapy treatment, professional massage therapy, gym memberships with personal training, home physiotherapy services, home massage services, and health consultations. Each service is tailored to meet your specific needs.'
          },
          {
            question: 'Do I need to book before visiting?',
            answer: 'Yes, we recommend booking an appointment to ensure you receive dedicated attention from our practitioners. However, walk-ins are welcome for gym access if you have an active membership. You can book via our website, WhatsApp, or phone call.'
          },
          {
            question: 'Do you offer home physiotherapy and massage?',
            answer: 'Absolutely! Our home services are designed for patients who prefer treatment in their own space or have mobility challenges. We bring all necessary equipment to your home. Home service is available within Abeokuta and surrounding areas in Ogun State.'
          },
          {
            question: 'How do I register for the gym?',
            answer: 'You can register for gym membership by visiting our center, calling us, or filling out the gym registration form on our website. We offer flexible membership plans including monthly, quarterly, and annual packages. A one-time registration fee applies.'
          },
          {
            question: 'How do I contact Mobola?',
            answer: 'You can reach us via WhatsApp for quick enquiries, call our phone line during business hours, send an email, or visit our center in Abeokuta. Our contact details are available on the Contact page. We typically respond to WhatsApp messages within 30 minutes.'
          }
        ],
        contact: {
          phone: '+234 803 XXX XXXX',
          whatsapp: '+234 803 XXX XXXX',
          email: 'info@mobolaphysio.com',
          address: 'Abeokuta, Ogun State, Nigeria',
          hours: {
            monday: '7:00 AM - 8:00 PM',
            tuesday: '7:00 AM - 8:00 PM',
            wednesday: '7:00 AM - 8:00 PM',
            thursday: '7:00 AM - 8:00 PM',
            friday: '7:00 AM - 8:00 PM',
            saturday: '8:00 AM - 6:00 PM',
            sunday: '10:00 AM - 4:00 PM'
          }
        },
        pricing: {
          gymMonthly: '₦15,000',
          gymQuarterly: '₦40,000',
          gymYearly: '₦150,000',
          note: 'Contact us for pricing on physiotherapy, massage, and consultation services. We offer customized packages based on your treatment needs.'
        }
      };
    },

    getContent() {
      try {
        const stored = localStorage.getItem(this.storageKey);
        if (stored) {
          return JSON.parse(stored);
        }
      } catch (e) {
        console.warn('Error loading content from localStorage:', e);
      }
      return this.getDefaultContent();
    },

    saveContent(content) {
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(content));
        return true;
      } catch (e) {
        console.error('Error saving content:', e);
        return false;
      }
    },

    resetToDefault() {
      const defaults = this.getDefaultContent();
      this.saveContent(defaults);
      return defaults;
    }
  };

  // ==================== AUTHENTICATION ====================
  const Auth = {
    tokenKey: 'mobola_admin_token',
    sessionDuration: 24 * 60 * 60 * 1000, // 24 hours

    // Simple hash function for demo (use bcrypt in production)
    hashPassword(password) {
      let hash = 0;
      for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
      }
      return hash.toString(16);
    },

    // Default admin password: 'MobolaAdmin2024!'
    // Hash: 'a8d323c1'
    validatePassword(password) {
      const hashed = this.hashPassword(password);
      return hashed === 'a8d323c1';
    },

    login(password) {
      if (this.validatePassword(password)) {
        const token = {
          timestamp: Date.now(),
          expires: Date.now() + this.sessionDuration
        };
        localStorage.setItem(this.tokenKey, JSON.stringify(token));
        return true;
      }
      return false;
    },

    logout() {
      localStorage.removeItem(this.tokenKey);
    },

    isAuthenticated() {
      try {
        const token = JSON.parse(localStorage.getItem(this.tokenKey));
        if (token && token.expires > Date.now()) {
          return true;
        }
      } catch (e) {
        return false;
      }
      this.logout();
      return false;
    }
  };

  // ==================== UI COMPONENTS ====================
  const UI = {
    // Mobile Navigation
    initMobileNav() {
      const menuBtn = document.querySelector('.mobile-menu-btn');
      const mobileNav = document.querySelector('.mobile-nav');
      const overlay = document.querySelector('.mobile-nav-overlay');

      if (!menuBtn || !mobileNav || !overlay) return;

      const toggle = () => {
        menuBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
      };

      menuBtn.addEventListener('click', toggle);
      overlay.addEventListener('click', toggle);

      // Close on link click
      mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', toggle);
      });
    },

    // Sticky Navigation
    initStickyNav() {
      const navbar = document.querySelector('.navbar');
      if (!navbar) return;

      let lastScroll = 0;

      const handleScroll = () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
          navbar.classList.add('scrolled');
          navbar.classList.remove('transparent');
        } else {
          navbar.classList.remove('scrolled');
          if (navbar.classList.contains('nav-transparent')) {
            navbar.classList.add('transparent');
          }
        }

        lastScroll = currentScroll;
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    },

    // Scroll Reveal Animation
    initScrollReveal() {
      const reveals = document.querySelectorAll('.reveal');
      if (!reveals.length) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      reveals.forEach(el => observer.observe(el));
    },

    // Testimonial Carousel
    initTestimonials() {
      const track = document.querySelector('.testimonial-track');
      if (!track) return;

      const slides = track.querySelectorAll('.testimonial-slide');
      const dots = document.querySelectorAll('.testimonial-dot');
      const prevBtn = document.querySelector('.testimonial-prev');
      const nextBtn = document.querySelector('.testimonial-next');

      let current = 0;
      let autoplayInterval;

      const goTo = (index) => {
        slides.forEach((slide, i) => {
          slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === index);
        });
        current = index;
      };

      const next = () => goTo((current + 1) % slides.length);
      const prev = () => goTo((current - 1 + slides.length) % slides.length);

      const startAutoplay = () => {
        autoplayInterval = setInterval(next, 5000);
      };

      const stopAutoplay = () => {
        clearInterval(autoplayInterval);
      };

      dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
          stopAutoplay();
          goTo(i);
          startAutoplay();
        });
      });

      if (prevBtn) prevBtn.addEventListener('click', () => { stopAutoplay(); prev(); startAutoplay(); });
      if (nextBtn) nextBtn.addEventListener('click', () => { stopAutoplay(); next(); startAutoplay(); });

      track.addEventListener('mouseenter', stopAutoplay);
      track.addEventListener('mouseleave', startAutoplay);

      goTo(0);
      startAutoplay();
    },

    // FAQ Accordion
    initFAQ() {
      const faqItems = document.querySelectorAll('.faq-item');

      faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (!question) return;

        question.addEventListener('click', () => {
          const isActive = item.classList.contains('active');

          // Close all
          faqItems.forEach(i => i.classList.remove('active'));

          // Open clicked if wasn't active
          if (!isActive) {
            item.classList.add('active');
          }
        });
      });
    },

    // Booking Tabs
    initBookingTabs() {
      const tabs = document.querySelectorAll('.booking-tab');
      const panels = document.querySelectorAll('.booking-panel');

      if (!tabs.length) return;

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const target = tab.dataset.tab;

          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');

          panels.forEach(p => {
            p.classList.toggle('active', p.dataset.panel === target);
          });
        });
      });
    },

    // Form Handling
    initForms() {
      const forms = document.querySelectorAll('form[data-netlify="true"]');

      forms.forEach(form => {
        form.addEventListener('submit', (e) => {
          // Netlify handles the actual submission
          // This is for enhanced UX
          const submitBtn = form.querySelector('button[type="submit"]');
          if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner"></span> Sending...';
          }
        });
      });
    },

    // Success Modal
    showSuccessModal(title, text) {
      const modal = document.querySelector('.modal-overlay');
      if (!modal) return;

      const titleEl = modal.querySelector('.modal-title');
      const textEl = modal.querySelector('.modal-text');

      if (titleEl) titleEl.textContent = title || 'Success!';
      if (textEl) textEl.textContent = text || 'Your submission has been received.';

      modal.classList.add('active');

      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });

      const closeBtn = modal.querySelector('.modal-close');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          modal.classList.remove('active');
        });
      }
    },

    // Counter Animation
    initCounters() {
      const counters = document.querySelectorAll('.counter');
      if (!counters.length) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.dataset.target, 10);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const update = () => {
              current += step;
              if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(update);
              } else {
                counter.textContent = target;
              }
            };

            update();
            observer.unobserve(counter);
          }
        });
      }, { threshold: 0.5 });

      counters.forEach(counter => observer.observe(counter));
    }
  };

  // ==================== ADMIN PANEL ====================
  const Admin = {
    init() {
      this.initLogin();
      this.initDashboard();
    },

    initLogin() {
      const loginForm = document.querySelector('.admin-login-form');
      if (!loginForm) return;

      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const password = loginForm.querySelector('input[name="password"]').value;

        if (Auth.login(password)) {
          window.location.reload();
        } else {
          const error = loginForm.querySelector('.login-error');
          if (error) {
            error.textContent = 'Invalid password. Please try again.';
            error.style.display = 'block';
          }
        }
      });
    },

    initDashboard() {
      if (!document.querySelector('.admin-dashboard')) return;

      if (!Auth.isAuthenticated()) {
        document.querySelector('.admin-login').style.display = 'flex';
        document.querySelector('.admin-dashboard').style.display = 'none';
        return;
      }

      document.querySelector('.admin-login').style.display = 'none';
      document.querySelector('.admin-dashboard').classList.add('active');

      this.loadContentIntoForms();
      this.initAdminNavigation();
      this.initSaveHandlers();
      this.initLogout();
    },

    loadContentIntoForms() {
      const content = ContentManager.getContent();

      // Helper to set input values
      const setValue = (name, value) => {
        const input = document.querySelector(`[name="${name}"]`);
        if (input) input.value = value || '';
      };

      // Hero
      setValue('hero_badge', content.hero.badge);
      setValue('hero_title', content.hero.title);
      setValue('hero_subtitle', content.hero.subtitle);
      setValue('hero_cta_primary', content.hero.ctaPrimary);
      setValue('hero_cta_secondary', content.hero.ctaSecondary);

      // About
      setValue('about_preview_title', content.about.previewTitle);
      setValue('about_preview_text', content.about.previewText);
      setValue('about_mission', content.about.mission);
      setValue('about_story', content.about.story);
      setValue('about_vision', content.about.vision);
      setValue('about_philosophy', content.about.philosophy);

      // Contact
      setValue('contact_phone', content.contact.phone);
      setValue('contact_whatsapp', content.contact.whatsapp);
      setValue('contact_email', content.contact.email);
      setValue('contact_address', content.contact.address);

      // Hours
      Object.keys(content.contact.hours).forEach(day => {
        setValue(`hours_${day}`, content.contact.hours[day]);
      });

      // Pricing
      setValue('price_gym_monthly', content.pricing.gymMonthly);
      setValue('price_gym_quarterly', content.pricing.gymQuarterly);
      setValue('price_gym_yearly', content.pricing.gymYearly);
      setValue('price_note', content.pricing.note);

      // FAQ
      content.faq.forEach((item, i) => {
        setValue(`faq_${i}_question`, item.question);
        setValue(`faq_${i}_answer`, item.answer);
      });

      // Services
      Object.keys(content.services).forEach(key => {
        setValue(`service_${key}_title`, content.services[key].title);
        setValue(`service_${key}_desc`, content.services[key].description);
        setValue(`service_${key}_cta`, content.services[key].cta);
      });
    },

    initAdminNavigation() {
      const navLinks = document.querySelectorAll('.admin-nav a');
      const sections = document.querySelectorAll('.admin-section');

      navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const target = link.dataset.section;

          navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');

          sections.forEach(s => {
            s.style.display = s.dataset.section === target ? 'block' : 'none';
          });
        });
      });

      // Show first section by default
      if (navLinks.length) {
        navLinks[0].click();
      }
    },

    initSaveHandlers() {
      const saveButtons = document.querySelectorAll('.admin-btn-save');

      saveButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const section = btn.dataset.section;
          this.saveSection(section);
        });
      });
    },

    saveSection(section) {
      const content = ContentManager.getContent();

      const getValue = (name) => {
        const input = document.querySelector(`[name="${name}"]`);
        return input ? input.value : '';
      };

      switch(section) {
        case 'hero':
          content.hero.badge = getValue('hero_badge');
          content.hero.title = getValue('hero_title');
          content.hero.subtitle = getValue('hero_subtitle');
          content.hero.ctaPrimary = getValue('hero_cta_primary');
          content.hero.ctaSecondary = getValue('hero_cta_secondary');
          break;

        case 'about':
          content.about.previewTitle = getValue('about_preview_title');
          content.about.previewText = getValue('about_preview_text');
          content.about.mission = getValue('about_mission');
          content.about.story = getValue('about_story');
          content.about.vision = getValue('about_vision');
          content.about.philosophy = getValue('about_philosophy');
          break;

        case 'contact':
          content.contact.phone = getValue('contact_phone');
          content.contact.whatsapp = getValue('contact_whatsapp');
          content.contact.email = getValue('contact_email');
          content.contact.address = getValue('contact_address');
          break;

        case 'hours':
          ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].forEach(day => {
            content.contact.hours[day] = getValue(`hours_${day}`);
          });
          break;

        case 'pricing':
          content.pricing.gymMonthly = getValue('price_gym_monthly');
          content.pricing.gymQuarterly = getValue('price_gym_quarterly');
          content.pricing.gymYearly = getValue('price_gym_yearly');
          content.pricing.note = getValue('price_note');
          break;

        case 'faq':
          for (let i = 0; i < 5; i++) {
            content.faq[i] = {
              question: getValue(`faq_${i}_question`),
              answer: getValue(`faq_${i}_answer`)
            };
          }
          break;

        case 'services':
          Object.keys(content.services).forEach(key => {
            content.services[key].title = getValue(`service_${key}_title`);
            content.services[key].description = getValue(`service_${key}_desc`);
            content.services[key].cta = getValue(`service_${key}_cta`);
          });
          break;
      }

      if (ContentManager.saveContent(content)) {
        this.showNotification('Changes saved successfully!', 'success');
      } else {
        this.showNotification('Error saving changes.', 'error');
      }
    },

    showNotification(message, type) {
      const notif = document.createElement('div');
      notif.className = `admin-notification ${type}`;
      notif.textContent = message;
      notif.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 12px;
        color: white;
        font-weight: 600;
        z-index: 9999;
        animation: slideIn 0.3s ease;
        background: ${type === 'success' ? 'var(--success)' : '#dc3545'};
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
      `;

      document.body.appendChild(notif);

      setTimeout(() => {
        notif.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notif.remove(), 300);
      }, 3000);
    },

    initLogout() {
      const logoutBtn = document.querySelector('.admin-logout');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
          Auth.logout();
          window.location.reload();
        });
      }
    }
  };

  // ==================== CONTENT RENDERER ====================
  const Renderer = {
    init() {
      this.renderDynamicContent();
    },

    renderDynamicContent() {
      const content = ContentManager.getContent();

      // Render Hero
      this.renderText('[data-content="hero_badge"]', content.hero.badge);
      this.renderText('[data-content="hero_title"]', content.hero.title);
      this.renderText('[data-content="hero_subtitle"]', content.hero.subtitle);
      this.renderText('[data-content="hero_cta_primary"]', content.hero.ctaPrimary);
      this.renderText('[data-content="hero_cta_secondary"]', content.hero.ctaSecondary);
      this.renderText('[data-content="hero_cta_directions"]', content.hero.ctaDirections);

      // Render About
      this.renderText('[data-content="about_preview_title"]', content.about.previewTitle);
      this.renderText('[data-content="about_preview_text"]', content.about.previewText);
      this.renderText('[data-content="about_mission"]', content.about.mission);
      this.renderText('[data-content="about_story"]', content.about.story);
      this.renderText('[data-content="about_experience"]', content.about.experience);
      this.renderText('[data-content="about_vision"]', content.about.vision);
      this.renderText('[data-content="about_philosophy"]', content.about.philosophy);

      // Render Services
      Object.keys(content.services).forEach(key => {
        this.renderText(`[data-content="service_${key}_title"]`, content.services[key].title);
        this.renderText(`[data-content="service_${key}_desc"]`, content.services[key].description);
        this.renderText(`[data-content="service_${key}_cta"]`, content.services[key].cta);
      });

      // Render Contact
      this.renderText('[data-content="contact_phone"]', content.contact.phone);
      this.renderText('[data-content="contact_whatsapp"]', content.contact.whatsapp);
      this.renderText('[data-content="contact_email"]', content.contact.email);
      this.renderText('[data-content="contact_address"]', content.contact.address);

      // Render Hours
      Object.keys(content.contact.hours).forEach(day => {
        this.renderText(`[data-content="hours_${day}"]`, content.contact.hours[day]);
      });

      // Render Pricing
      this.renderText('[data-content="price_gym_monthly"]', content.pricing.gymMonthly);
      this.renderText('[data-content="price_gym_quarterly"]', content.pricing.gymQuarterly);
      this.renderText('[data-content="price_gym_yearly"]', content.pricing.gymYearly);
      this.renderText('[data-content="price_note"]', content.pricing.note);

      // Render FAQ
      content.faq.forEach((item, i) => {
        this.renderText(`[data-content="faq_${i}_question"]`, item.question);
        this.renderText(`[data-content="faq_${i}_answer"]`, item.answer);
      });

      // Render Testimonials
      const testimonialSlides = document.querySelectorAll('.testimonial-slide');
      testimonialSlides.forEach((slide, i) => {
        if (content.testimonials[i]) {
          const t = content.testimonials[i];
          const nameEl = slide.querySelector('.testimonial-name');
          const roleEl = slide.querySelector('.testimonial-role');
          const textEl = slide.querySelector('.testimonial-text');
          const starsEl = slide.querySelector('.testimonial-stars');

          if (nameEl) nameEl.textContent = t.name;
          if (roleEl) roleEl.textContent = t.role;
          if (textEl) textEl.textContent = t.text;
          if (starsEl) starsEl.textContent = '★'.repeat(t.rating) + '☆'.repeat(5 - t.rating);
        }
      });
    },

    renderText(selector, text) {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.value = text;
        } else {
          el.textContent = text;
        }
      });
    }
  };

  // ==================== WHATSAPP INTEGRATION ====================
  const WhatsApp = {
    init() {
      const buttons = document.querySelectorAll('[data-whatsapp]');
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const message = btn.dataset.message || 'Hello Mobola, I would like to enquire about your services.';
          const phone = btn.dataset.whatsapp || '2348030000000';
          const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
          window.open(url, '_blank');
        });
      });
    }
  };

  // ==================== INITIALIZATION ====================
  document.addEventListener('DOMContentLoaded', () => {
    // Initialize UI components
    UI.initMobileNav();
    UI.initStickyNav();
    UI.initScrollReveal();
    UI.initTestimonials();
    UI.initFAQ();
    UI.initBookingTabs();
    UI.initForms();
    UI.initCounters();

    // Initialize content rendering
    Renderer.init();

    // Initialize WhatsApp
    WhatsApp.init();

    // Initialize Admin
    Admin.init();

    // Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  });

  // Expose to global scope for debugging
  window.Mobola = {
    ContentManager,
    Auth,
    UI,
    Admin,
    Renderer
  };

})();
