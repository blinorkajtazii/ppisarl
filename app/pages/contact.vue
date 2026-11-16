<script setup lang="ts">
const { copy } = useLanguage()

useSeoMeta({
  title: computed(() => `${copy.value.common.quote} | PPI Plâtrerie Peinture`),
  description: computed(() => copy.value.contact.lead),
})
useMotion()

const WHATSAPP = '41783262825'
const form = ref<HTMLFormElement | null>(null)
const submitted = ref(false)

const submit = () => {
  if (!form.value || !form.value.reportValidity()) return
  const data = new FormData(form.value)
  const c = copy.value.contact
  const message = [
    c.whatsappMessage,
    '',
    `${c.fieldName} : ${data.get('name')}`,
    `${c.fieldPhone} : ${data.get('phone')}`,
    `${c.fieldEmail} : ${data.get('email') || c.notProvided}`,
    `${c.fieldCity} : ${data.get('city') || c.notProvidedF}`,
    `${c.fieldService} : ${data.get('service')}`,
    '',
    `${c.projectDescription} :`,
    data.get('message'),
  ].join('\n')
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  submitted.value = true
}
</script>

<template>
  <div>
    <PageHero
      :kicker="copy.contact.kicker"
      :lead="copy.contact.lead"
      :img="{ src: '/img/hero-sejour.jpg', alt: copy.contact.image, width: 1024, height: 682, pos: '75% 55%' }"
    >
      <template #title>{{ copy.contact.title }} <em>{{ copy.contact.titleEmphasis }}</em></template>
    </PageHero>

    <section class="section wrap contact">
      <div>
        <p class="label" data-reveal>{{ copy.contact.stayInTouch }}</p>
        <h2 class="title" style="margin-block: 14px 20px" data-reveal data-delay="0.05">{{ copy.contact.heading }}</h2>
        <p class="muted" style="margin-bottom: 32px" data-reveal data-delay="0.1">
          {{ copy.contact.intro }}
        </p>
        <div data-reveal data-delay="0.15">
          <div class="contact__method">
            <span class="label">{{ copy.common.phone }}</span>
            <a href="tel:+41783262825">078 326 28 25</a>
          </div>
          <div class="contact__method">
            <span class="label">{{ copy.contact.serviceArea }}</span>
            <strong>{{ copy.common.location }} · {{ copy.home.location.split(' · ')[1] }}</strong>
          </div>
          <div class="contact__method">
            <span class="label">{{ copy.common.email }}</span>
            <strong class="muted">{{ copy.contact.emailAddress }}</strong>
          </div>
        </div>
      </div>

      <form ref="form" class="form" novalidate data-reveal data-delay="0.1" @submit.prevent="submit">
        <h2 class="title">{{ copy.contact.quoteTitle }}</h2>
        <p class="form__note">{{ copy.contact.requiredNote }}</p>
        <div class="form__row">
          <label>{{ copy.contact.name }} *
            <input name="name" autocomplete="name" required :placeholder="copy.contact.yourName" />
          </label>
          <label>{{ copy.common.phone }} *
            <input name="phone" type="tel" autocomplete="tel" required :placeholder="copy.contact.yourPhone" />
          </label>
        </div>
        <label>{{ copy.contact.emailAddressLabel }}
          <input name="email" type="email" autocomplete="email" placeholder="you@example.com" />
        </label>
        <label>{{ copy.contact.workCity }}
          <input name="city" :placeholder="copy.contact.exampleCity" />
        </label>
        <label>{{ copy.contact.requestedService }} *
          <select name="service" required>
            <option value="">{{ copy.contact.selectService }}</option>
            <option v-for="service in copy.contact.serviceOptions" :key="service">{{ service }}</option>
          </select>
        </label>
        <label>{{ copy.contact.describeProject }} *
          <textarea name="message" rows="5" required :placeholder="copy.contact.projectPlaceholder" />
        </label>
        <label class="consent">
          <input type="checkbox" required />
          <span>{{ copy.contact.consent }}</span>
        </label>
        <button class="button" type="submit">{{ copy.contact.send }}</button>
        <p class="form__note">
          {{ copy.contact.whatsappNote }}
        </p>
        <p class="form__status" role="status">{{ submitted ? copy.contact.submitted : '' }}</p>
      </form>
    </section>
  </div>
</template>
