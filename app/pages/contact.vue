<script setup lang="ts">
useSeoMeta({
  title: 'Demander un devis | PPI Plâtrerie Peinture',
  description: 'Contactez PPI Plâtrerie Peinture à Genève au 078 326 28 25 ou envoyez votre demande de devis via WhatsApp.',
})
useMotion()

const WHATSAPP = '41783262825'
const form = ref<HTMLFormElement | null>(null)
const status = ref('')

const submit = () => {
  if (!form.value || !form.value.reportValidity()) return
  const data = new FormData(form.value)
  const message = [
    'Bonjour PPI, je souhaite demander un devis.',
    '',
    `Nom : ${data.get('name')}`,
    `Téléphone : ${data.get('phone')}`,
    `E-mail : ${data.get('email') || 'Non renseigné'}`,
    `Ville du chantier : ${data.get('city') || 'Non renseignée'}`,
    `Prestation : ${data.get('service')}`,
    '',
    'Description du projet :',
    data.get('message'),
  ].join('\n')
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  status.value = 'WhatsApp s’ouvre avec votre demande préremplie. Vérifiez le message puis envoyez-le.'
}
</script>

<template>
  <div>
    <PageHero
      kicker="Contact · Genève"
      lead="Quelques informations suffisent pour commencer à échanger sur vos travaux."
      :img="{ src: '/img/hero-sejour.jpg', alt: 'Séjour avec niche lumineuse et parquet en chevrons', width: 1024, height: 682, pos: '75% 55%' }"
    >
      <template #title>Parlons de <em>votre projet.</em></template>
    </PageHero>

    <section class="section wrap contact">
      <div>
        <p class="label" data-reveal>Restons en contact</p>
        <h2 class="title" style="margin-block: 14px 20px" data-reveal data-delay="0.05">Un projet de plâtrerie ou de peinture ?</h2>
        <p class="muted" style="margin-bottom: 32px" data-reveal data-delay="0.1">
          Appelez-nous ou envoyez votre demande via le formulaire. Nous pourrons échanger sur la nature de vos travaux et les prochaines étapes.
        </p>
        <div data-reveal data-delay="0.15">
          <div class="contact__method">
            <span class="label">Téléphone</span>
            <a href="tel:+41783262825">078 326 28 25</a>
          </div>
          <div class="contact__method">
            <span class="label">Zone d'intervention</span>
            <strong>Genève et environs · Suisse</strong>
          </div>
          <div class="contact__method">
            <span class="label">E-mail</span>
            <strong class="muted">Adresse à définir</strong>
          </div>
        </div>
      </div>

      <form ref="form" class="form" novalidate data-reveal data-delay="0.1" @submit.prevent="submit">
        <h2 class="title">Votre demande de devis</h2>
        <p class="form__note">Les champs marqués d’un * sont obligatoires.</p>
        <div class="form__row">
          <label>Nom et prénom *
            <input name="name" autocomplete="name" required placeholder="Votre nom" />
          </label>
          <label>Téléphone *
            <input name="phone" type="tel" autocomplete="tel" required placeholder="Votre numéro" />
          </label>
        </div>
        <label>Adresse e-mail
          <input name="email" type="email" autocomplete="email" placeholder="vous@exemple.ch" />
        </label>
        <label>Ville du chantier
          <input name="city" placeholder="Ex. Genève" />
        </label>
        <label>Prestation souhaitée *
          <select name="service" required>
            <option value="">Sélectionner une prestation</option>
            <option>Plâtrerie</option>
            <option>Peinture intérieure</option>
            <option>Faux plafonds</option>
            <option>Enduits et ratissage</option>
            <option>Plusieurs prestations</option>
            <option>Autre demande</option>
          </select>
        </label>
        <label>Décrivez votre projet *
          <textarea name="message" rows="5" required placeholder="Décrivez brièvement les travaux souhaités…" />
        </label>
        <label class="consent">
          <input type="checkbox" required />
          <span>J’accepte que les informations saisies soient utilisées pour répondre à ma demande.</span>
        </label>
        <button class="button" type="submit">Envoyer via WhatsApp ↗</button>
        <p class="form__note">
          Le formulaire prépare un message WhatsApp adressé au 078 326 28 25. Aucun message n’est envoyé sans votre validation dans WhatsApp.
        </p>
        <p class="form__status" role="status">{{ status }}</p>
      </form>
    </section>
  </div>
</template>
