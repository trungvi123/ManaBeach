<template>
  <div class="messageModal" @click="closeModal" :class="{active: getMessageModal.show}">
    <div
      class="messageModal__content" 
      :class="{ success: getMessageModal.type === 'success', error: getMessageModal.type === 'error' }"
    >
    <!--  -->
      <div class="messageModal__content__title">
        <h3>{{getMessageModal.heading}}</h3>
      </div>
      <div class="messageModal__content__message">
        <p>{{getMessageModal.content}}</p>
      </div>
      <div class="messageModal__content__close" @click="closeModal">x</div>
    </div>
  </div>

</template>

<script>

import { mapMutations, mapGetters } from 'vueX';

export default {

computed:{
    ...mapGetters(['getMessageModal'])
},
methods:{
    ...mapMutations(['setMessageModal']),
    closeModal(){
        this.setMessageModal({
            ...this.getMessageModal,
            show:false
        })
    },
}

};
</script>

<style>
.messageModal {
  position: fixed;
  z-index: 105;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(#000000, 0.4);
  opacity: 0;
  visibility: hidden;
}
.messageModal.active {
  opacity: 1;
  visibility: visible;
}

.messageModal__content {
  margin: auto;
  padding: 2rem;
  background-color: var(--primary-backgr-color);
  width: 30%;
  position: relative;
  transform: translateY(-250px);
  transition: transform 0.3s ease;
  opacity: 0;
  border-radius:10px;
}
.messageModal__content.success {
  border: 3px solid rgb(37, 155, 37);
}
.messageModal__content__title__icon {
  color: rgb(37, 155, 37);
}
.messageModal__content.error {
  border: 3px solid crimson;
}
.messageModal__content__title__icon {
  color: crimson;
}
.messageModal__content__title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.messageModal__content__title__icon {
  font-size: 1.5rem;
  margin-right: 10px;
}

.messageModal__content__title h3 {
  font-size: 1.5rem;
}

.messageModal__content__message {
  font-size: 1.25rem;
  text-align: center;
}

.messageModal__content__close {
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  cursor: pointer;
  right: -10px;
  top: 0;
  height: 25px;
  width: 60px;
  /* color: $txt-main-color; */
  font-size: 2rem;
}
.messageModal.active .messageModal__content {
  opacity: 1;
  transform: translateY(0);
}
</style>
