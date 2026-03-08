<template>
  <div class="my-content">
    <div class="aside">
      <div class="my-profile">
        <p>
          <img src="/b_6fa08aa483c9aba18b09ddf8263bfec6.jpg" alt="蘧堂"/>
        </p>
        <div class="profile-info">
          <h3>蘧堂</h3>
          <p>请输入文本</p>
          <div class="profile-location">
            <span class="vpi-location"></span>
            <p>this is location</p>
          </div>
        </div>
      </div>
    </div>

    <div class="about-content">
      <slot/> 
    </div>
  </div>
</template>

<style scoped>
.my-content {
  padding-top: 0%;
  display: flex;
  gap: 24px;
  align-items: flex-start;
  justify-content: flex-start;

  flex-grow: 1;
  flex-shrink: 0;
  width: 100%;
  margin: 0 auto;

  flex-wrap: wrap;
}

.aside {
  display: block;
  position: sticky;
  top: calc(var(--vp-nav-height) + 2rem);
  width: 270px;
  text-align: center;
}

.my-profile {
  padding: 24px 20px;
  margin-bottom: 24px;
  background-color: var(--vp-c-bg);
  border-radius: 8px;
  box-shadow: var(--vp-shadow-1);
  transition: var(--vp-t-color);
  transition-property: background-color, color, box-shadow;
}

.my-profile:hover {
  box-shadow: var(--vp-shadow-2);
}

.my-profile img {
  width: 60%;
  margin: auto;

  object-fit: cover;
}

.my-profile h3 {
  margin-top: 1.5rem;
  font-size: 18px;
  font-weight: 600;
}

.my-profile h3,
.my-profile p {
  color: var(--vp-c-text-1);
  transition: color var(--vp-t-color);
}

.my-profile .circle img {
  overflow: hidden;
  border-radius: 50%;
}

.profile-location,
.profile-organization {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  font-size: 14px;
  color: var(--vp-c-text-3);
  transition: color var(--vp-t-color);
}

.profile-location p,
.profile-organization p {
  margin: 0 4px;
}

.profile-location + .profile-organization {
  margin-top: 0;
}

.profile-social {
  padding-top: 12px;
  margin-top: 12px;
  border-top: 1px solid var(--vp-c-divider);
  transition: border var(--vp-t-color);
}

.profile-social :deep(.vp-social-link) {
  width: 32px;
  height: 32px;
}

.profile-social :deep(.vp-social-link:hover) {
  color: var(--vp-c-brand-1);
}

.profile-info {
  text-align: center;
}

.about-content {
  align-items: flex-start;
  flex-grow: 1;
}

@media (min-width: 1440px) {
    .my-content {
        max-width: 1104px;
    }
}

@media (max-width: 768px) {
    .my-content {
        flex-direction: column-reverse;
        align-items: center;
        padding: 0 16px;
        width: 100%;
    }

    .aside {
        width: 100%;
        position: static;
        align-items: center;
        margin-top: 16px;
    }

    .about-content {
        width: 100%;
    }
}
</style>
