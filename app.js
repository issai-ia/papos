var navToggle, navList, mapNodes, contentPanels, personalizationForm;
var usuarioActivo, precioProducto, stockDisponible;
function inicializarVariables() {
      // Asignación de valores a variables
      usuarioActivo = "ClienteSneakerVerse";
      precioProducto = 129.99;
      stockDisponible = 50;

// DOM Elements
 navToggle = document.querySelector('.nav-toggle');
      navList = document.querySelector('.nav-list');
      mapNodes = document.querySelectorAll('.node');
      contentPanels = document.querySelectorAll('.content-panel');
      personalizationForm = document.getElementById('personalization-form');
const budgetSlider = document.getElementById('budget');
const budgetOutput = document.querySelector('output[for="budget"]');
}
 function operacionesCadenas() {
      // Ejemplos de funciones de cadenas
      var textoMarca = "Nike Air Max";
      
      // Longitud de cadena
      var longitudTexto = textoMarca.length;
      console.log("Longitud del texto: " + longitudTexto);

      // Conversión de mayúsculas y minúsculas
      var textoMayusculas = textoMarca.toUpperCase();
      var textoMinusculas = textoMarca.toLowerCase();
      console.log("Mayúsculas: " + textoMayusculas);
      console.log("Minúsculas: " + textoMinusculas);

      // Caracteres específicos
      var primerCaracter = textoMarca.charAt(0);
      var subTexto = textoMarca.substring(0, 4);
      console.log("Primer carácter: " + primerCaracter);
      console.log("Subtexto: " + subTexto);

      // Concatenación de cadenas
      var descripcionMarca = textoMarca.concat(" - Edición Especial");
      console.log("Descripción completa: " + descripcionMarca);
  }

  // Funciones de manipulación de arreglos
  function operacionesArreglos() {
      // Declaración y manipulación de arreglos
      var marcasSneakers = ["Nike", "Adidas", "Puma"];
      
      // Longitud del arreglo
      console.log("Número de marcas: " + marcasSneakers.length);

      // Añadir elementos
      marcasSneakers.push("Reebok");
      marcasSneakers.unshift("Converse");
      console.log("Marcas después de añadir: " + marcasSneakers);

      // Eliminar elementos
      var ultimaMarca = marcasSneakers.pop();
      var primeraMarca = marcasSneakers.shift();
      console.log("Última marca eliminada: " + ultimaMarca);
      console.log("Primera marca eliminada: " + primeraMarca);

      // Operaciones adicionales
      var marcasOrdenadas = marcasSneakers.reverse();
      var marcasTexto = marcasSneakers.join(" - ");
      console.log("Marcas ordenadas: " + marcasOrdenadas);
      console.log("Marcas como texto: " + marcasTexto);
  }

  // Operaciones matemáticas y lógicas
  function calculosComplejos() {
      // Operadores matemáticos
      var precioBase = 100;
      var descuento = 0.2;
      var precioFinal = precioBase * (1 - descuento);

      // Operadores de incremento y decremento
      var contador = 0;
      contador++;  // Incremento
      contador--;  // Decremento

      // Operadores lógicos
      var esNuevoModelo = true;
      var precioAlto = 150;

      // Estructura de control: if-else
      if (esNuevoModelo && precioAlto > 100) {
          console.log("Producto premium de edición limitada");
      } else {
          console.log("Producto estándar");
      }

      // Comprobación de valor numérico
      var resultado = "Sneaker" * 2;
      if (isNaN(resultado)) {
          console.log("Operación no numérica detectada");
      }
  }

  // Estructura de control: for y for...in
  function iteracionesAvanzadas() {
      // Bucle for tradicional
      var tallas = [38, 39, 40, 41, 42];
      for (var i = 0; i < tallas.length; i++) {
          console.log("Talla disponible: " + tallas[i]);
      }

      // Bucle for...in para objetos
      var sneaker = {
          marca: "Nike",
          modelo: "Air Max",
          precio: 150,
          color: "Blanco"
      };

      for (var propiedad in sneaker) {
          console.log(propiedad + ": " + sneaker[propiedad]);
      }
  }

  // Función de escape para caracteres especiales
  function ejemploEscape() {
      // Uso de caracteres de escape
      var textoConComillas = "Sneaker \"Edición Especial\" con comillas";
      var textoConSaltoLinea = "Línea 1\nLínea 2";
      
      console.log(textoConComillas);
      console.log(textoConSaltoLinea);
  }
// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeInteractiveMap();
    initializePersonalizationForm();
    initializeSmoothScrolling();
    initializeProductButtons();
});

// Navigation functionality
function initializeNavigation() {
    if (navToggle && navList) {
        navToggle.addEventListener('click', toggleMobileMenu);
        
        // Close mobile menu when clicking on nav links
        const navLinks = navList.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }
}

function inicializarAplicacion() {
      // Inicialización de variables
      inicializarVariables();

      // Demostración de operaciones
      operacionesCadenas();
      operacionesArreglos();
      calculosComplejos();
      iteracionesAvanzadas();
      ejemploEscape();

      // Evento de carga del DOM
      document.addEventListener('DOMContentLoaded', function() {
          // Funciones de inicialización existentes
          inicializarNavegacion();
          inicializarMapaInteractivo();
          inicializarFormularioPersonalizacion();
          inicializarDesplazamientoSuave();
          inicializarBotonesProdcuto();
      });
  }
function toggleMobileMenu() {
    navList.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', navList.classList.contains('active'));
}

function closeMobileMenu() {
    navList.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
}

// Interactive Map functionality
function initializeInteractiveMap() {
    mapNodes.forEach(node => {
        node.addEventListener('click', handleNodeClick);
        node.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleNodeClick.call(this, e);
            }
        });
        
        // Make nodes focusable for keyboard navigation
        node.setAttribute('tabindex', '0');
        node.setAttribute('role', 'button');
        
        // Add aria-label for accessibility
        const category = node.dataset.category;
        if (category && category !== 'centro') {
            node.setAttribute('aria-label', `Explorar ${category}`);
        }
    });
}

function handleNodeClick(e) {
    const clickedNode = e.currentTarget;
    const category = clickedNode.dataset.category;
    
    // Don't handle clicks on the central node
    if (category === 'centro') return;
    
    // Remove active state from all nodes
    mapNodes.forEach(node => node.classList.remove('active'));
    
    // Hide all content panels
    contentPanels.forEach(panel => {
        panel.hidden = true;
        panel.setAttribute('aria-hidden', 'true');
    });
    
    // Add active state to clicked node
    clickedNode.classList.add('active');
    
    // Show corresponding content panel
    const targetPanel = document.getElementById(`panel-${category}`);
    if (targetPanel) {
        targetPanel.hidden = false;
        targetPanel.setAttribute('aria-hidden', 'false');
        
        // Smooth scroll to the panel
        setTimeout(() => {
            targetPanel.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 100);
        
        // Announce to screen readers
        announceToScreenReader(`Mostrando información sobre ${category}`);
    }
}

// Personalization Form functionality
function initializePersonalizationForm() {
    if (budgetSlider && budgetOutput) {
        // Update budget display
        budgetSlider.addEventListener('input', function() {
            budgetOutput.textContent = `$${this.value}`;
        });
    }
    
    if (personalizationForm) {
        personalizationForm.addEventListener('submit', handlePersonalizationSubmit);
        
        // Add real-time validation feedback
        const inputs = personalizationForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
    }
}

function handlePersonalizationSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(personalizationForm);
    const data = Object.fromEntries(formData.entries());
    
    // Get multiple checkbox values
    const activities = formData.getAll('activities');
    data.activities = activities;
    
    // Validate form
    if (!validateForm(data)) {
        announceToScreenReader('Por favor, completa todos los campos requeridos');
        return;
    }
    
    // Generate personalized recommendations
    const recommendations = generateRecommendations(data);
    displayRecommendations(recommendations);
    
    // Scroll to results
    const resultsSection = document.getElementById('personalization-results');
    if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    announceToScreenReader('Recomendaciones personalizadas generadas');
}

function validateForm(data) {
    let isValid = true;
    const errors = [];
    
    // Check required fields
    if (!data.name || data.name.trim() === '') {
        showFieldError('name', 'El nombre es requerido');
        isValid = false;
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        showFieldError('email', 'Email válido es requerido');
        isValid = false;
    }
    
    if (!data.age || data.age < 13 || data.age > 100) {
        showFieldError('age', 'Edad debe estar entre 13 y 100 años');
        isValid = false;
    }
    
    if (!data.style) {
        showFieldError('style', 'Selecciona un estilo');
        isValid = false;
    }
    
    if (!data['brand-preference']) {
        showFieldError('brand-preference', 'Selecciona una marca');
        isValid = false;
    }
    
    return isValid;
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    clearFieldError(field);
    
    switch (field.type) {
        case 'email':
            if (value && !isValidEmail(value)) {
                showFieldError(field.id, 'Email no válido');
            }
            break;
        case 'number':
            if (field.id === 'age' && value) {
                const age = parseInt(value);
                if (age < 13 || age > 100) {
                    showFieldError(field.id, 'Edad debe estar entre 13 y 100 años');
                }
            }
            break;
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    
    // Remove existing error
    clearFieldError(field);
    
    // Add error styling
    field.classList.add('error');
    field.setAttribute('aria-invalid', 'true');
    
    // Create error message
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.id = `${fieldId}-error`;
    
    // Associate error with field
    field.setAttribute('aria-describedby', errorElement.id);
    
    // Insert error message
    field.parentNode.appendChild(errorElement);
}

function clearFieldError(field) {
    if (typeof field === 'string') {
        field = document.getElementById(field);
    }
    if (!field) return;
    
    field.classList.remove('error');
    field.removeAttribute('aria-invalid');
    field.removeAttribute('aria-describedby');
    
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
}

function generateRecommendations(data) {
    const recommendations = {
        primary: [],
        secondary: [],
        message: ''
    };
    
    // Brand-based recommendations
    const brandRecommendations = {
        'nike': ['Air Jordan 1', 'Air Force 1', 'Dunk Low'],
        'adidas': ['Stan Smith', 'Superstar', 'Ultraboost'],
        'new-balance': ['990v5', '574', '997'],
        'puma': ['Suede Classic', 'RS-X', 'Future Rider']
    };
    
    // Style-based recommendations
    const styleRecommendations = {
        'sporty': ['Running shoes', 'Training sneakers', 'Performance basketball'],
        'casual': ['Lifestyle sneakers', 'Classic silhouettes', 'Versatile designs'],
        'luxury': ['Premium materials', 'Limited editions', 'Designer collaborations'],
        'street': ['Skate shoes', 'Hip-hop classics', 'Urban culture icons']
    };
    
    // Generate primary recommendations based on brand preference
    if (data['brand-preference'] !== 'no-preference' && brandRecommendations[data['brand-preference']]) {
        recommendations.primary = brandRecommendations[data['brand-preference']];
    }
    
    // Generate secondary recommendations based on style
    if (styleRecommendations[data.style]) {
        recommendations.secondary = styleRecommendations[data.style];
    }
    
    // Generate personalized message
    recommendations.message = `Hola ${data.name}, basado en tu preferencia por el estilo ${data.style} y presupuesto de $${data.budget}, aquí tienes nuestras recomendaciones:`;
    
    return recommendations;
}

function displayRecommendations(recommendations) {
    // Remove existing results
    const existingResults = document.getElementById('personalization-results');
    if (existingResults) {
        existingResults.remove();
    }
    
    // Create results section
    const resultsSection = document.createElement('section');
    resultsSection.id = 'personalization-results';
    resultsSection.className = 'personalization-results';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const card = document.createElement('div');
    card.className = 'card';
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card__body';
    
    // Add title
    const title = document.createElement('h3');
    title.textContent = 'Tus Recomendaciones Personalizadas';
    cardBody.appendChild(title);
    
    // Add message
    const message = document.createElement('p');
    message.textContent = recommendations.message;
    cardBody.appendChild(message);
    
    // Add primary recommendations
    if (recommendations.primary.length > 0) {
        const primaryTitle = document.createElement('h4');
        primaryTitle.textContent = 'Recomendaciones principales:';
        cardBody.appendChild(primaryTitle);
        
        const primaryList = document.createElement('ul');
        recommendations.primary.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            primaryList.appendChild(li);
        });
        cardBody.appendChild(primaryList);
    }
    
    // Add secondary recommendations
    if (recommendations.secondary.length > 0) {
        const secondaryTitle = document.createElement('h4');
        secondaryTitle.textContent = 'También podrían interesarte:';
        cardBody.appendChild(secondaryTitle);
        
        const secondaryList = document.createElement('ul');
        recommendations.secondary.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            secondaryList.appendChild(li);
        });
        cardBody.appendChild(secondaryList);
    }
    
    // Add call to action
    const ctaButton = document.createElement('button');
    ctaButton.className = 'btn btn--primary btn--full-width';
    ctaButton.textContent = 'Explorar Productos Recomendados';
    ctaButton.addEventListener('click', function() {
        document.getElementById('galeria').scrollIntoView({ behavior: 'smooth' });
    });
    cardBody.appendChild(ctaButton);
    
    // Assemble elements
    card.appendChild(cardBody);
    container.appendChild(card);
    resultsSection.appendChild(container);
    
    // Insert after personalization section
    const personalizationSection = document.getElementById('personalizacion');
    personalizationSection.parentNode.insertBefore(resultsSection, personalizationSection.nextSibling);
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                closeMobileMenu();
                
                // Update URL without jumping
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });
}

// Product buttons functionality
function initializeProductButtons() {
    const productButtons = document.querySelectorAll('.product-card .btn--primary');
    const comparisonButtons = document.querySelectorAll('.comparison-table .btn');
    
    productButtons.forEach(button => {
        button.addEventListener('click', handleAddToCart);
    });
    
    comparisonButtons.forEach(button => {
        button.addEventListener('click', handleViewDetails);
    });
}

function handleAddToCart(e) {
    const button = e.target;
    const productCard = button.closest('.product-card');
    const productName = productCard.querySelector('h3').textContent;
    
    // Simulate adding to cart
    button.textContent = 'Agregado!';
    button.disabled = true;
    button.classList.add('btn--success');
    
    // Show success status
    const statusElement = productCard.querySelector('.status');
    if (statusElement) {
        statusElement.textContent = 'En carrito';
        statusElement.className = 'status status--success';
    }
    
    announceToScreenReader(`${productName} agregado al carrito`);
    
    // Reset button after 3 seconds
    setTimeout(() => {
        button.textContent = 'Añadir al Carrito';
        button.disabled = false;
        button.classList.remove('btn--success');
    }, 3000);
}

function handleViewDetails(e) {
    const button = e.target;
    const row = button.closest('tr');
    const modelName = row.querySelector('th').textContent;
    
    // Simulate viewing details
    announceToScreenReader(`Viendo detalles de ${modelName}`);
    
    // Create and show modal or detailed view
    showProductModal(modelName, row);
}

function showProductModal(modelName, row) {
    // Remove existing modal
    const existingModal = document.getElementById('product-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal
    const modal = document.createElement('div');
    modal.id = 'product-modal';
    modal.className = 'modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'modal-title');
    modal.setAttribute('aria-modal', 'true');
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content card';
    
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    
    const modalTitle = document.createElement('h2');
    modalTitle.id = 'modal-title';
    modalTitle.textContent = modelName;
    
    const closeButton = document.createElement('button');
    closeButton.className = 'modal-close';
    closeButton.innerHTML = '&times;';
    closeButton.setAttribute('aria-label', 'Cerrar modal');
    
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
    
    // Extract data from table row
    const cells = row.querySelectorAll('td');
    const details = {
        'Material': cells[0]?.textContent || '',
        'Tecnología': cells[1]?.textContent || '',
        'Año': cells[2]?.textContent || '',
        'Precio': cells[3]?.textContent || ''
    };
    
    // Create details list
    const detailsList = document.createElement('dl');
    Object.entries(details).forEach(([key, value]) => {
        const dt = document.createElement('dt');
        dt.textContent = key + ':';
        const dd = document.createElement('dd');
        dd.textContent = value;
        detailsList.appendChild(dt);
        detailsList.appendChild(dd);
    });
    
    const addToCartButton = document.createElement('button');
    addToCartButton.className = 'btn btn--primary btn--full-width';
    addToCartButton.textContent = 'Añadir al Carrito';
    addToCartButton.addEventListener('click', function() {
        announceToScreenReader(`${modelName} agregado al carrito`);
        closeModal();
    });
    
    // Assemble modal
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);
    modalBody.appendChild(detailsList);
    modalBody.appendChild(addToCartButton);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modal.appendChild(modalContent);
    
    // Add to DOM
    document.body.appendChild(modal);
    
    // Event listeners
    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', handleModalKeydown);
    
    // Focus management
    closeButton.focus();
    
    function closeModal() {
        modal.remove();
        document.removeEventListener('keydown', handleModalKeydown);
        button.focus(); // Return focus to trigger button
    }
    
    function handleModalKeydown(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    }
}

// Utility function for screen reader announcements
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
        if (announcement.parentNode) {
            announcement.parentNode.removeChild(announcement);
        }
    }, 1000);
}

// Handle form field errors styling
const additionalStyles = `
    .form-control.error {
        border-color: var(--color-error);
        box-shadow: 0 0 0 3px rgba(var(--color-error-rgb), 0.1);
    }
    
    .field-error {
        color: var(--color-error);
        font-size: var(--font-size-sm);
        margin-top: var(--space-4);
    }
    
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: var(--space-20);
    }
    
    .modal-content {
        max-width: 500px;
        width: 100%;
        max-height: 80vh;
        overflow-y: auto;
    }
    
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--space-20);
        border-bottom: 1px solid var(--color-border);
    }
    
    .modal-close {
        background: none;
        border: none;
        font-size: var(--font-size-3xl);
        cursor: pointer;
        color: var(--color-text-secondary);
        padding: 0;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .modal-close:hover {
        color: var(--color-text);
    }
    
    .modal-body {
        padding: var(--space-20);
    }
    
    .modal-body dl {
        margin-bottom: var(--space-20);
    }
    
    .modal-body dt {
        font-weight: var(--font-weight-semibold);
        margin-bottom: var(--space-4);
    }
    
    .modal-body dd {
        margin-bottom: var(--space-12);
        padding-left: var(--space-16);
        color: var(--color-text-secondary);
    }
    
    .personalization-results {
        padding: var(--space-32) 0;
        background-color: var(--color-primary);
        color: var(--color-btn-primary-text);
    }
    
    .personalization-results .card {
        background-color: var(--color-surface);
    }
    
    .personalization-results h3 {
        color: var(--color-primary);
        margin-bottom: var(--space-16);
    }
    
    .personalization-results h4 {
        color: var(--color-primary);
        margin: var(--space-16) 0 var(--space-8) 0;
    }
    
    .personalization-results ul {
        margin-bottom: var(--space-16);
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);  
  inicializarAplicacion();