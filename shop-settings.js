/* Master Shop Settings runtime - shared by all Billing pages. */
(function(){
  const KEY='billingShopId';
  function shopId(){
    let id=localStorage.getItem(KEY);
    if(!id){ id='shop_'+Math.random().toString(36).slice(2,10); localStorage.setItem(KEY,id); }
    return id;
  }
  const defaults={shopName:'My Shop',ownerName:'',logoUrl:'',qrUrl:'',branch:'',address:'',city:'',state:'',country:'',pin:'',phone:'',whatsapp:'',email:'',website:'',gstNo:'',upiId:'',footer:'THANK YOU FOR PURCHASE',returnPolicy:'',invoiceFooter:'',showLogo:true,showQR:true,showGST:true,showAddress:true,qrText:'Scan QR & Shop Online'};
  let settings={...defaults};
  function ref(){ return window.firebase&&firebase.database ? firebase.database().ref('shopSettings/'+shopId()) : null; }
  function apply(){
    document.title=(settings.shopName||'My Shop')+' - Billing';
    const reps=[
      ['B.D.Bajar',settings.shopName],['B.D. Bajar',settings.shopName],['BDBajar',settings.shopName],
      ['Suda, Pokhara, Dhangadi, Kathamandu jhalari',settings.branch||settings.address],
      ['Suda, Pokhara, Dhangadi, Kathmandu',settings.branch||settings.address],
      ['9812710161/9514499662',settings.phone],['joshibasu12345@gmail.com',settings.email],
      ['joshibash12345@gmail.com',settings.email],['1234567890',settings.gstNo]
    ];
    if(document.body){
      const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),nodes=[];
      while(walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(n=>{ let t=n.nodeValue; reps.forEach(([a,b])=>{if(b&&t.includes(a)) t=t.split(a).join(b)}); if(t!==n.nodeValue)n.nodeValue=t; });
    }
    document.querySelectorAll('img').forEach(img=>{
      if(/BDBajar|file-000000004ff8720a84a2883a63ef6b6e\.png/i.test(img.src)&&settings.logoUrl) img.src=settings.logoUrl;
      if(/BDBajar-QR-Code/i.test(img.src)&&settings.qrUrl) img.src=settings.qrUrl;
    });
    document.querySelectorAll('[data-shop-field]').forEach(el=>{
      const key=el.getAttribute('data-shop-field'); if(key in settings) el.textContent=settings[key]||'';
    });
    document.querySelectorAll('.shop-footer,.invoice-footer,.footer').forEach(el=>{ if(settings.footer) el.textContent=settings.footer; });
    document.querySelectorAll('[data-shop-logo]').forEach(el=>{el.style.display=settings.showLogo?'':'none'; if(settings.logoUrl)el.src=settings.logoUrl;});
    document.querySelectorAll('[data-shop-qr]').forEach(el=>{el.style.display=settings.showQR?'':'none'; if(settings.qrUrl)el.src=settings.qrUrl;});
  }
  async function load(){
    try{
      const r=ref();
      if(r) r.on('value',s=>{settings={...defaults,...(s.val()||{})};window.shopSettings=settings;apply();});
      else {const l=localStorage.getItem('billingShopSettings'); if(l)settings={...settings,...JSON.parse(l)}; apply();}
    }catch(e){apply();}
  }
  window.ShopSettings={get:()=>({...settings}),save:async data=>{settings={...settings,...data};const r=ref();if(r)await r.set(settings);else localStorage.setItem('billingShopSettings',JSON.stringify(settings));apply();return settings;},shopId};
  document.addEventListener('DOMContentLoaded',()=>{load(); new MutationObserver(()=>apply()).observe(document.body,{childList:true,subtree:true});});
})();
