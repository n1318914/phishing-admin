<template>
  <div
    class="w-full max-w-[400px] h-[200px] rounded-xl bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-800 p-5 shadow-2xl relative overflow-hidden"
  >
    <!-- Subtle gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>

    <!-- Card content -->
    <div class="relative z-10 h-full flex flex-col justify-between text-white">
      <!-- Top section -->
      <div class="flex justify-between items-start">
        <!-- Bank info -->
        <div class="text-left">
          <div class="text-sm font-base mb-0.5">
            {{ cardBank }}
          </div>
          <div class="text-xs opacity-70">
            {{ cardCountry }}
          </div>
        </div>

        <!-- Card type -->
        <div class="text-right">
          <div class="text-xl font-bold tracking-wide">
            {{ cardBrand }}
          </div>
        </div>
      </div>

      <!-- Card number -->
      <div class="text-xl font-mono tracking-[0.2em]">{{ cardNo }}</div>

      <!-- Bottom section -->
      <div class="flex justify-between items-end">
        <div class="flex gap-6">
          <div>
            <div class="text-[9px] opacity-70 mb-0.5">VALID THRU</div>
            <div class="text-sm font-semibold">{{ expiryDate }}</div>
          </div>
          <div>
            <div class="text-[9px] opacity-70 mb-0.5">CVV</div>
            <div class="text-sm font-semibold">{{ cardCvv }}</div>
          </div>
        </div>

        <!-- Type and Level -->
        <div class="flex gap-4 text-right">
          <div>
            <div class="text-[9px] opacity-70 mb-0.5">TYPE</div>
            <div class="text-sm font-semibold">{{ cardType }}</div>
          </div>
          <div>
            <div class="text-[9px] opacity-70 mb-0.5">LEVEL</div>
            <div class="text-sm font-semibold">{{ cardLevel }}</div>
          </div>
        </div>
      </div>

      <!-- Cardholder name -->
      <div class="text-sm font-semibold tracking-wider uppercase">
        {{ cardHolder }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    cardNo?: string;
    cardHolder?: string;
    expiryDate?: string;
    cardCvv?: string;
    cardBank?: string;
    cardCountry?: string;
    cardBrand?: string;
    cardType?: string;
    cardLevel?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    cardNo: '3778 8033 7398 325',
    cardHolder: 'Anna Gonzalez',
    expiryDate: '7/2024',
    cardCvv: '543',
    cardBank: 'Bank Of Nova Scotia',
    cardCountry: 'Canada',
    cardBrand: 'visa',
    cardType: 'Credit',
    cardLevel: 'Gold',
  });
</script>

<style scoped>
  /* 如果你的项目没有使用 Tailwind CSS，可以在这里添加样式 */
</style>
