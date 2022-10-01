<template>
  <div id="accordion">
    <div class="card">
      <div class="card__header">
        <a
          class="card__link collapsed"
          data-toggle="collapse"
          href="#collapseOne"
        >
          <BIconChevronDown class="card__icon"></BIconChevronDown>
          <span class="card__title">Mô tả</span>
        </a>
      </div>
      <div id="collapseOne" class="collapse" data-parent="#accordion">
        <div class="card-body">
          <p><strong>Căn phòng chất lượng với tầm nhìn ra biển </strong></p>
          <p>
            Luxury Double Room Suite có kích thước nữ hoàng hoặc giường đôi
            thoải mái, khu vực tiếp khách, bàn làm việc và phòng tắm riêng biệt
            với vòi hoa sen nhảy đi bộ hoặc bồn tắm và vòi sen cùng nghệ thuật
            hiện đại và màu sắc trung tính.
          </p>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card__header">
        <a
          class="card__link collapsed"
          data-toggle="collapse"
          href="#collapseTwo"
        >
          <BIconChevronDown class="card__icon"></BIconChevronDown>
          <span class="card__title">Thông tin bổ sung</span>
        </a>
      </div>
      <div id="collapseTwo" class="collapse" data-parent="#accordion">
        <div class="card-body">
          <p><strong>Căn phòng chất lượng với tầm nhìn ra biển </strong></p>
          Luxury Double Room Suite có kích thước nữ hoàng hoặc giường đôi thoải
          mái, khu vực tiếp khách, bàn làm việc và phòng tắm riêng biệt với vòi
          hoa sen nhảy đi bộ hoặc bồn tắm và vòi sen cùng nghệ thuật hiện đại và
          màu sắc trung tính.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BIconChevronDown } from "bootstrap-icons-vue";
export default {
  components: {
    BIconChevronDown,
  },
};
</script>

<style>
.card {
  border-left: none !important;
  border-right: none !important;
  border-bottom: none !important;
}

.card__link {
  color: var(--secondary-text-color);
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
}

.card__link:not(.collapsed) {
  background-color: var(--third-backgr-color);
  color: var(--primary-text-color) !important;
}

.card__link:not(.collapsed) .card__title {
  font-weight: 600;
}

.card__link:not(.collapsed) .card__icon {
  transform: rotate(180deg);
}

.card__link:hover {
  color: var(--five-text-color);
}

.card__icon {
  margin-right: 5px;
  font-size: 1.2rem;
  transition: transform 0.5s ease;
}

.card__title {
  font-size: 1.2rem;
}
</style>
