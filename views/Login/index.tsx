"use client";
import React from "react";
import { Button, Card } from "sdk-hyper-ui";
import { Icon } from "@/components/Icon";
import { motion } from "framer-motion";

interface LoginViewProps {
  onLogin: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="bg-white w-20 h-20 rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-6">
            <div className="bg-black w-10 h-10 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xl">N</span>
            </div>
          </div>
          <h1 className="text-3xl font-black text-gray-900">Token Calculator</h1>
          <p className="text-gray-500 font-medium mt-2">Đăng nhập để quản lý API và hạn mức của bạn.</p>
        </div>

        <Card className="!p-8 !rounded-3xl border-none shadow-2xl bg-white/80 backdrop-blur-xl">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-sm font-bold text-gray-700">Mật khẩu</label>
                <button className="text-xs font-bold text-gray-400 hover:text-gray-900 transition-colors">
                  Quên mật khẩu?
                </button>
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all font-medium"
                />
              </div>
            </div>

            <Button
              className="w-full !py-4 !rounded-2xl font-black text-lg shadow-lg shadow-black/10 hover:scale-[1.02] active:scale-[0.98] transition-all"
              onClick={onLogin}
            >
              Đăng nhập
            </Button>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-400 font-bold">Hoặc tiếp tục với</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                type="secondary"
                className="w-full !min-h-0 !py-3.5 !rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all"
              >
                <div className="flex items-center justify-center gap-2">
                  <Icon name="ne-ic-google" />
                  <span className="font-bold text-sm">Google</span>
                </div>
              </Button>
              <Button
                type="secondary"
                className="w-full !min-h-0 !py-3.5 !rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all"
              >
                <div className="flex items-center justify-center gap-2">
                  <Icon name="ne-ic-github" />
                  <span className="font-bold text-sm">GitHub</span>
                </div>
              </Button>
            </div>
          </div>
        </Card>

        <p className="text-center mt-8 text-sm text-gray-500 font-medium">
          Chưa có tài khoản?{" "}
          <button className="text-gray-900 font-bold hover:underline">Đăng ký ngay</button>
        </p>
      </motion.div>

      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px]"></div>
        <div className="absolute top-[60%] -right-[10%] w-[50%] h-[50%] bg-purple-100/50 rounded-full blur-[120px]"></div>
      </div>
    </div>
  );
};

export default LoginView;
