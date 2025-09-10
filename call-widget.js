(function () {
  const numbers = {
    financial: '{FINANCIAL_NUMBER}',
    healthcare: '{HEALTHCARE_NUMBER}',
    retail: '{RETAIL_NUMBER}'
  };

  const style = document.createElement('style');
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

    .call-widget-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #51e4d4;
      color: #ffffff;
      border: none;
      border-radius: 24px;
      padding: 12px 20px;
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
      display: flex;
      align-items: center;
      gap: 8px;
      z-index: 9999;
    }

    .call-widget-popup {
      position: fixed;
      bottom: 70px;
      right: 20px;
      background: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      font-family: 'Open Sans', sans-serif;
      display: none;
      flex-direction: column;
      min-width: 200px;
      z-index: 9999;
    }

    .call-widget-popup a {
      padding: 10px 16px;
      text-decoration: none;
      color: #333;
      border-bottom: 1px solid #fac748;
    }

    .call-widget-popup a:last-child {
      border-bottom: none;
    }

    .call-widget-popup a:hover {
      background: #51e4d4;
      color: #ffffff;
    }
  `;
  document.head.appendChild(style);

  const button = document.createElement('button');
  button.className = 'call-widget-button';
  button.innerHTML = '\ud83d\udcde Call LinkLive\'s Voice IVA';

  const popup = document.createElement('div');
  popup.className = 'call-widget-popup';

  [
    { label: 'Financial', number: numbers.financial },
    { label: 'Healthcare', number: numbers.healthcare },
    { label: 'Retail', number: numbers.retail }
  ].forEach(opt => {
    const link = document.createElement('a');
    link.href = `tel:${opt.number}`;
    link.textContent = opt.label;
    popup.appendChild(link);
  });

  button.addEventListener('click', () => {
    popup.style.display = popup.style.display === 'flex' ? 'none' : 'flex';
  });

  document.body.appendChild(button);
  document.body.appendChild(popup);
})();
